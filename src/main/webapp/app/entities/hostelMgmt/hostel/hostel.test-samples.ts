import { IHostel, NewHostel } from './hostel.model';

export const sampleWithRequiredData: IHostel = {
  id: 18257,
};

export const sampleWithPartialData: IHostel = {
  id: 2608,
  noOfRooms: 1231,
};

export const sampleWithFullData: IHostel = {
  id: 27849,
  name: 'likewise',
  address: '../fake-data/blob/hipster.txt',
  capacity: 8306,
  noOfRooms: 11262,
  floors: 3077,
};

export const sampleWithNewData: NewHostel = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
