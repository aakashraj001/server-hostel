// types.ts

export interface Furniture {
  [key: string]: number;
}

export interface Hostel {
  id: number;
  name: string;
  occupancy: number;
  totalBeds: number;
  totalRooms: number;
  occupiedRooms: number;
  floors: number;
  students: number;
  inHostel: number;
  outsideHostel: number;
  furniture: Furniture;
}
