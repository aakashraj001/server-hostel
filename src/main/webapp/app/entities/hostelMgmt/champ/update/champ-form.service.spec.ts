import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../champ.test-samples';

import { ChampFormService } from './champ-form.service';

describe('Champ Form Service', () => {
  let service: ChampFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampFormService);
  });

  describe('Service methods', () => {
    describe('createChampFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createChampFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            login: expect.any(Object),
            password: expect.any(Object),
            type: expect.any(Object),
            status: expect.any(Object),
            address: expect.any(Object),
            mobileNo: expect.any(Object),
            room: expect.any(Object),
            parent: expect.any(Object),
          }),
        );
      });

      it('passing IChamp should create a new form with FormGroup', () => {
        const formGroup = service.createChampFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            login: expect.any(Object),
            password: expect.any(Object),
            type: expect.any(Object),
            status: expect.any(Object),
            address: expect.any(Object),
            mobileNo: expect.any(Object),
            room: expect.any(Object),
            parent: expect.any(Object),
          }),
        );
      });
    });

    describe('getChamp', () => {
      it('should return NewChamp for default Champ initial value', () => {
        const formGroup = service.createChampFormGroup(sampleWithNewData);

        const champ = service.getChamp(formGroup) as any;

        expect(champ).toMatchObject(sampleWithNewData);
      });

      it('should return NewChamp for empty Champ initial value', () => {
        const formGroup = service.createChampFormGroup();

        const champ = service.getChamp(formGroup) as any;

        expect(champ).toMatchObject({});
      });

      it('should return IChamp', () => {
        const formGroup = service.createChampFormGroup(sampleWithRequiredData);

        const champ = service.getChamp(formGroup) as any;

        expect(champ).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IChamp should not enable id FormControl', () => {
        const formGroup = service.createChampFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewChamp should disable id FormControl', () => {
        const formGroup = service.createChampFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
