export interface Room {
  hostelName: string;
  floor: string;
  room: string;
  sharingTypes: string;
  totalRooms: number;
  rentPerTenant: string;
  tenants: number;
  furniture: number;
  charts: dountChartProp;
  Furniture: Furniture;
}

export interface RoomsProps {
  rooms: Room[];
}

export interface chartType {
  color: string;
  width: string;
}
export interface donutchatType {
  heading: string;
  amount: string;
  color: string;
}
export interface FurnitureType {
  item: string;
  count: number;
}
export interface Furniture {
  values: FurnitureType[];
}
export interface dountChartProp {
  values: donutchatType[];
}
export interface chartProps {
  props: chartType[];
}
