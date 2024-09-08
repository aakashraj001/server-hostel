import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IChamp } from '../champ.model';
import { ChampService } from '../service/champ.service';

const champResolve = (route: ActivatedRouteSnapshot): Observable<null | IChamp> => {
  const id = route.params['id'];
  if (id) {
    return inject(ChampService)
      .find(id)
      .pipe(
        mergeMap((champ: HttpResponse<IChamp>) => {
          if (champ.body) {
            return of(champ.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default champResolve;
