import { v4 as uuidv4 } from 'uuid';

export interface ICart {
  id: string;
  items: ICartItem[];
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  description: string;
  quantity: number;
}

export class Cart implements ICart {
  id = uuidv4();
  items: ICartItem[] = [];
}

export interface ICartTotals {
  itemsInCart: number;
  shipping: number;
  subtotal: number;
  total: number;
}
