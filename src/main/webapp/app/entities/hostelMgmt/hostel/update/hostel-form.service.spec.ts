import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../hostel.test-samples';

import { HostelFormService } from './hostel-form.service';

describe('Hostel Form Service', () => {
  let service: HostelFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelFormService);
  });

  describe('Service methods', () => {
    describe('createHostelFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createHostelFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            address: expect.any(Object),
            capacity: expect.any(Object),
            noOfRooms: expect.any(Object),
            floors: expect.any(Object),
          }),
        );
      });

      it('passing IHostel should create a new form with FormGroup', () => {
        const formGroup = service.createHostelFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            address: expect.any(Object),
            capacity: expect.any(Object),
            noOfRooms: expect.any(Object),
            floors: expect.any(Object),
          }),
        );
      });
    });

    describe('getHostel', () => {
      it('should return NewHostel for default Hostel initial value', () => {
        const formGroup = service.createHostelFormGroup(sampleWithNewData);

        const hostel = service.getHostel(formGroup) as any;

        expect(hostel).toMatchObject(sampleWithNewData);
      });

      it('should return NewHostel for empty Hostel initial value', () => {
        const formGroup = service.createHostelFormGroup();

        const hostel = service.getHostel(formGroup) as any;

        expect(hostel).toMatchObject({});
      });

      it('should return IHostel', () => {
        const formGroup = service.createHostelFormGroup(sampleWithRequiredData);

        const hostel = service.getHostel(formGroup) as any;

        expect(hostel).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IHostel should not enable id FormControl', () => {
        const formGroup = service.createHostelFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewHostel should disable id FormControl', () => {
        const formGroup = service.createHostelFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
