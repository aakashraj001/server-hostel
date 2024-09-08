import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IChamp, NewChamp } from '../champ.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IChamp for edit and NewChampFormGroupInput for create.
 */
type ChampFormGroupInput = IChamp | PartialWithRequiredKeyOf<NewChamp>;

type ChampFormDefaults = Pick<NewChamp, 'id'>;

type ChampFormGroupContent = {
  id: FormControl<IChamp['id'] | NewChamp['id']>;
  name: FormControl<IChamp['name']>;
  login: FormControl<IChamp['login']>;
  password: FormControl<IChamp['password']>;
  type: FormControl<IChamp['type']>;
  status: FormControl<IChamp['status']>;
  address: FormControl<IChamp['address']>;
  mobileNo: FormControl<IChamp['mobileNo']>;
  room: FormControl<IChamp['room']>;
  parent: FormControl<IChamp['parent']>;
};

export type ChampFormGroup = FormGroup<ChampFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ChampFormService {
  createChampFormGroup(champ: ChampFormGroupInput = { id: null }): ChampFormGroup {
    const champRawValue = {
      ...this.getFormDefaults(),
      ...champ,
    };
    return new FormGroup<ChampFormGroupContent>({
      id: new FormControl(
        { value: champRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      name: new FormControl(champRawValue.name),
      login: new FormControl(champRawValue.login),
      password: new FormControl(champRawValue.password),
      type: new FormControl(champRawValue.type),
      status: new FormControl(champRawValue.status),
      address: new FormControl(champRawValue.address),
      mobileNo: new FormControl(champRawValue.mobileNo),
      room: new FormControl(champRawValue.room),
      parent: new FormControl(champRawValue.parent),
    });
  }

  getChamp(form: ChampFormGroup): IChamp | NewChamp {
    return form.getRawValue() as IChamp | NewChamp;
  }

  resetForm(form: ChampFormGroup, champ: ChampFormGroupInput): void {
    const champRawValue = { ...this.getFormDefaults(), ...champ };
    form.reset(
      {
        ...champRawValue,
        id: { value: champRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): ChampFormDefaults {
    return {
      id: null,
    };
  }
}
