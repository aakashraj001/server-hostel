export interface IInventory {
  id: number;
  name?: string | null;
  quantity?: number | null;
}

export type NewInventory = Omit<IInventory, 'id'> & { id: null };
