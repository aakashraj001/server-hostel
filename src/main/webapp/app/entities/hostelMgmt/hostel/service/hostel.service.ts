import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IHostel, NewHostel } from '../hostel.model';

export type PartialUpdateHostel = Partial<IHostel> & Pick<IHostel, 'id'>;

export type EntityResponseType = HttpResponse<IHostel>;
export type EntityArrayResponseType = HttpResponse<IHostel[]>;

@Injectable({ providedIn: 'root' })
export class HostelService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/hostels', 'hostelmgmt');

  create(hostel: NewHostel): Observable<EntityResponseType> {
    return this.http.post<IHostel>(this.resourceUrl, hostel, { observe: 'response' });
  }

  update(hostel: IHostel): Observable<EntityResponseType> {
    return this.http.put<IHostel>(`${this.resourceUrl}/${this.getHostelIdentifier(hostel)}`, hostel, { observe: 'response' });
  }

  partialUpdate(hostel: PartialUpdateHostel): Observable<EntityResponseType> {
    return this.http.patch<IHostel>(`${this.resourceUrl}/${this.getHostelIdentifier(hostel)}`, hostel, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IHostel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IHostel[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getHostelIdentifier(hostel: Pick<IHostel, 'id'>): number {
    return hostel.id;
  }

  compareHostel(o1: Pick<IHostel, 'id'> | null, o2: Pick<IHostel, 'id'> | null): boolean {
    return o1 && o2 ? this.getHostelIdentifier(o1) === this.getHostelIdentifier(o2) : o1 === o2;
  }

  addHostelToCollectionIfMissing<Type extends Pick<IHostel, 'id'>>(
    hostelCollection: Type[],
    ...hostelsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const hostels: Type[] = hostelsToCheck.filter(isPresent);
    if (hostels.length > 0) {
      const hostelCollectionIdentifiers = hostelCollection.map(hostelItem => this.getHostelIdentifier(hostelItem));
      const hostelsToAdd = hostels.filter(hostelItem => {
        const hostelIdentifier = this.getHostelIdentifier(hostelItem);
        if (hostelCollectionIdentifiers.includes(hostelIdentifier)) {
          return false;
        }
        hostelCollectionIdentifiers.push(hostelIdentifier);
        return true;
      });
      return [...hostelsToAdd, ...hostelCollection];
    }
    return hostelCollection;
  }
}
