import { IRoom, NewRoom } from './room.model';

export const sampleWithRequiredData: IRoom = {
  id: 29169,
};

export const sampleWithPartialData: IRoom = {
  id: 23415,
  type: 'AC',
  beds: 32039,
  floor: 29102,
};

export const sampleWithFullData: IRoom = {
  id: 7650,
  roomNo: 'towards midst',
  type: 'AC',
  cost: 13057.25,
  beds: 26812,
  floor: 12351,
};

export const sampleWithNewData: NewRoom = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
