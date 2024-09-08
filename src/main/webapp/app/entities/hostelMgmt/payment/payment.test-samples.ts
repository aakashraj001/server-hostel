import dayjs from 'dayjs/esm';

import { IPayment, NewPayment } from './payment.model';

export const sampleWithRequiredData: IPayment = {
  id: 25636,
};

export const sampleWithPartialData: IPayment = {
  id: 5428,
  uuid: '6f733fc5-df61-49a5-9ef2-5d60df78e0d4',
  status: 'INACTIVE',
};

export const sampleWithFullData: IPayment = {
  id: 6427,
  uuid: 'dde86b08-5700-4b74-8041-7d814b883f93',
  mode: 'NEFT',
  date: dayjs('2024-09-07'),
  value: 11557,
  status: 'ACTIVE',
};

export const sampleWithNewData: NewPayment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
