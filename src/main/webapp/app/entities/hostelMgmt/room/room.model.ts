import { RoomType } from 'app/entities/enumerations/room-type.model';

export interface IRoom {
  id: number;
  roomNo?: string | null;
  type?: keyof typeof RoomType | null;
  cost?: number | null;
  beds?: number | null;
  floor?: number | null;
}

export type NewRoom = Omit<IRoom, 'id'> & { id: null };
