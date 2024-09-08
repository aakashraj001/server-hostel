export interface IHostel {
  id: number;
  name?: string | null;
  address?: string | null;
  capacity?: number | null;
  noOfRooms?: number | null;
  floors?: number | null;
}

export type NewHostel = Omit<IHostel, 'id'> & { id: null };
