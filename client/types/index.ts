export interface ShirtItem {
  id: number;
  name: string;
  color: string;
  size: number;
}

export interface PantItem {
  id: number;
  name: string;
  color: string;
  width: number;
  height: number;
}

export type ItemType = ShirtItem | PantItem;

export type ListType = Array<ItemType>;
