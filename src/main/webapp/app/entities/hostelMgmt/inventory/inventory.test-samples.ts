import { IInventory, NewInventory } from './inventory.model';

export const sampleWithRequiredData: IInventory = {
  id: 14851,
};

export const sampleWithPartialData: IInventory = {
  id: 17758,
  name: 'pish',
};

export const sampleWithFullData: IInventory = {
  id: 12646,
  name: 'baritone scarcely',
  quantity: 4716,
};

export const sampleWithNewData: NewInventory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
