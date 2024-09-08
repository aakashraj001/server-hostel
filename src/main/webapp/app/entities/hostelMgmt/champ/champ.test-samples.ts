import { IChamp, NewChamp } from './champ.model';

export const sampleWithRequiredData: IChamp = {
  id: 17274,
};

export const sampleWithPartialData: IChamp = {
  id: 10003,
  login: 'keenly',
  password: 'juicy',
  type: 'MANAGER',
  mobileNo: 13346,
};

export const sampleWithFullData: IChamp = {
  id: 2333,
  name: 'following ugh',
  login: 'medical',
  password: 'vocalize',
  type: 'STUDENT',
  status: 'BL',
  address: '../fake-data/blob/hipster.txt',
  mobileNo: 18267,
};

export const sampleWithNewData: NewChamp = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
