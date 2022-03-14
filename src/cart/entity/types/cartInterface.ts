import { ProductIdType } from './../../../products/entity/types/productInterface';
import { Types } from 'mongoose';

export interface Cart {
  id: CartId;
  createdAt: Date;
  lines: Line[];
}

export type CartId = {
  id: Types.ObjectId;
}

export type Line = {
  codProduct: ProductIdType,
  quantity: number
}

export type CreateCard = Omit<Cart , 'id' | 'createdAt' >

export type AddLine = {
  codProduct: ProductIdType,
  quantity: number,
  cartId: CartId
}
