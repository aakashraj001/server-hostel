import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IChamp, NewChamp } from '../champ.model';

export type PartialUpdateChamp = Partial<IChamp> & Pick<IChamp, 'id'>;

export type EntityResponseType = HttpResponse<IChamp>;
export type EntityArrayResponseType = HttpResponse<IChamp[]>;

@Injectable({ providedIn: 'root' })
export class ChampService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/champs', 'hostelmgmt');

  create(champ: NewChamp): Observable<EntityResponseType> {
    return this.http.post<IChamp>(this.resourceUrl, champ, { observe: 'response' });
  }

  update(champ: IChamp): Observable<EntityResponseType> {
    return this.http.put<IChamp>(`${this.resourceUrl}/${this.getChampIdentifier(champ)}`, champ, { observe: 'response' });
  }

  partialUpdate(champ: PartialUpdateChamp): Observable<EntityResponseType> {
    return this.http.patch<IChamp>(`${this.resourceUrl}/${this.getChampIdentifier(champ)}`, champ, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IChamp>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IChamp[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getChampIdentifier(champ: Pick<IChamp, 'id'>): number {
    return champ.id;
  }

  compareChamp(o1: Pick<IChamp, 'id'> | null, o2: Pick<IChamp, 'id'> | null): boolean {
    return o1 && o2 ? this.getChampIdentifier(o1) === this.getChampIdentifier(o2) : o1 === o2;
  }

  addChampToCollectionIfMissing<Type extends Pick<IChamp, 'id'>>(
    champCollection: Type[],
    ...champsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const champs: Type[] = champsToCheck.filter(isPresent);
    if (champs.length > 0) {
      const champCollectionIdentifiers = champCollection.map(champItem => this.getChampIdentifier(champItem));
      const champsToAdd = champs.filter(champItem => {
        const champIdentifier = this.getChampIdentifier(champItem);
        if (champCollectionIdentifiers.includes(champIdentifier)) {
          return false;
        }
        champCollectionIdentifiers.push(champIdentifier);
        return true;
      });
      return [...champsToAdd, ...champCollection];
    }
    return champCollection;
  }
}
