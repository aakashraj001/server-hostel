import { IRoom } from 'app/entities/hostelMgmt/room/room.model';
import { UserType } from 'app/entities/enumerations/user-type.model';
import { Status } from 'app/entities/enumerations/status.model';

export interface IChamp {
  id: number;
  name?: string | null;
  login?: string | null;
  password?: string | null;
  type?: keyof typeof UserType | null;
  status?: keyof typeof Status | null;
  address?: string | null;
  mobileNo?: number | null;
  room?: IRoom | null;
  parent?: IChamp | null;
}

export type NewChamp = Omit<IChamp, 'id'> & { id: null };
