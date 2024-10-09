export interface Hostel {
  hostelName: string;
  address: string;
  totalRooms: number;
  occupiedRooms: number;
  floors: number;
  students: number;
  inHostel: number;
  expectedCollection: number;
  collectedAmount: number;
  remainingAmount: number;
  overdueAmount: number;
  furniture: Record<string, number>;
}
