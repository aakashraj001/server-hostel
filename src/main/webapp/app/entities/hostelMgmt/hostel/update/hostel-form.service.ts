import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IHostel, NewHostel } from '../hostel.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IHostel for edit and NewHostelFormGroupInput for create.
 */
type HostelFormGroupInput = IHostel | PartialWithRequiredKeyOf<NewHostel>;

type HostelFormDefaults = Pick<NewHostel, 'id'>;

type HostelFormGroupContent = {
  id: FormControl<IHostel['id'] | NewHostel['id']>;
  name: FormControl<IHostel['name']>;
  address: FormControl<IHostel['address']>;
  capacity: FormControl<IHostel['capacity']>;
  noOfRooms: FormControl<IHostel['noOfRooms']>;
  floors: FormControl<IHostel['floors']>;
};

export type HostelFormGroup = FormGroup<HostelFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class HostelFormService {
  createHostelFormGroup(hostel: HostelFormGroupInput = { id: null }): HostelFormGroup {
    const hostelRawValue = {
      ...this.getFormDefaults(),
      ...hostel,
    };
    return new FormGroup<HostelFormGroupContent>({
      id: new FormControl(
        { value: hostelRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      name: new FormControl(hostelRawValue.name),
      address: new FormControl(hostelRawValue.address),
      capacity: new FormControl(hostelRawValue.capacity),
      noOfRooms: new FormControl(hostelRawValue.noOfRooms),
      floors: new FormControl(hostelRawValue.floors),
    });
  }

  getHostel(form: HostelFormGroup): IHostel | NewHostel {
    return form.getRawValue() as IHostel | NewHostel;
  }

  resetForm(form: HostelFormGroup, hostel: HostelFormGroupInput): void {
    const hostelRawValue = { ...this.getFormDefaults(), ...hostel };
    form.reset(
      {
        ...hostelRawValue,
        id: { value: hostelRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): HostelFormDefaults {
    return {
      id: null,
    };
  }
}
