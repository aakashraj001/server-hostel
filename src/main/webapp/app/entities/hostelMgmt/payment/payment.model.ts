import dayjs from 'dayjs/esm';
import { IChamp } from 'app/entities/hostelMgmt/champ/champ.model';
import { PaymentMode } from 'app/entities/enumerations/payment-mode.model';
import { Status } from 'app/entities/enumerations/status.model';

export interface IPayment {
  id: number;
  uuid?: string | null;
  mode?: keyof typeof PaymentMode | null;
  date?: dayjs.Dayjs | null;
  value?: number | null;
  status?: keyof typeof Status | null;
  champ?: IChamp | null;
}

export type NewPayment = Omit<IPayment, 'id'> & { id: null };
