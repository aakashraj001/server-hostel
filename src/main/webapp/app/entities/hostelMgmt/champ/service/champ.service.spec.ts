import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IChamp } from '../champ.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../champ.test-samples';

import { ChampService } from './champ.service';

const requireRestSample: IChamp = {
  ...sampleWithRequiredData,
};

describe('Champ Service', () => {
  let service: ChampService;
  let httpMock: HttpTestingController;
  let expectedResult: IChamp | IChamp[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(ChampService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a Champ', () => {
      const champ = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(champ).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Champ', () => {
      const champ = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(champ).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Champ', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Champ', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Champ', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addChampToCollectionIfMissing', () => {
      it('should add a Champ to an empty array', () => {
        const champ: IChamp = sampleWithRequiredData;
        expectedResult = service.addChampToCollectionIfMissing([], champ);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(champ);
      });

      it('should not add a Champ to an array that contains it', () => {
        const champ: IChamp = sampleWithRequiredData;
        const champCollection: IChamp[] = [
          {
            ...champ,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addChampToCollectionIfMissing(champCollection, champ);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Champ to an array that doesn't contain it", () => {
        const champ: IChamp = sampleWithRequiredData;
        const champCollection: IChamp[] = [sampleWithPartialData];
        expectedResult = service.addChampToCollectionIfMissing(champCollection, champ);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(champ);
      });

      it('should add only unique Champ to an array', () => {
        const champArray: IChamp[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const champCollection: IChamp[] = [sampleWithRequiredData];
        expectedResult = service.addChampToCollectionIfMissing(champCollection, ...champArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const champ: IChamp = sampleWithRequiredData;
        const champ2: IChamp = sampleWithPartialData;
        expectedResult = service.addChampToCollectionIfMissing([], champ, champ2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(champ);
        expect(expectedResult).toContain(champ2);
      });

      it('should accept null and undefined values', () => {
        const champ: IChamp = sampleWithRequiredData;
        expectedResult = service.addChampToCollectionIfMissing([], null, champ, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(champ);
      });

      it('should return initial array if no Champ is added', () => {
        const champCollection: IChamp[] = [sampleWithRequiredData];
        expectedResult = service.addChampToCollectionIfMissing(champCollection, undefined, null);
        expect(expectedResult).toEqual(champCollection);
      });
    });

    describe('compareChamp', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareChamp(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareChamp(entity1, entity2);
        const compareResult2 = service.compareChamp(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareChamp(entity1, entity2);
        const compareResult2 = service.compareChamp(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareChamp(entity1, entity2);
        const compareResult2 = service.compareChamp(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
