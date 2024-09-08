import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IHostel } from '../hostel.model';
import { HostelService } from '../service/hostel.service';

const hostelResolve = (route: ActivatedRouteSnapshot): Observable<null | IHostel> => {
  const id = route.params['id'];
  if (id) {
    return inject(HostelService)
      .find(id)
      .pipe(
        mergeMap((hostel: HttpResponse<IHostel>) => {
          if (hostel.body) {
            return of(hostel.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default hostelResolve;
