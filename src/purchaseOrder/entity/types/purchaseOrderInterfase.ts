import { CartId } from './../../../cart/entity/types/cartInterface';
import { UserIdType } from './../../../users/entity/types/User';
import { Product, ProductIdType } from './../../../products/entity/types/productInterface';
import { Types } from 'mongoose';

export interface PurchaseOrder {
  id: PurchaseOrderId;
  lines: PurchaseOrderLine[];
  createdAt: Date;
  updatedAt: Date;
  owner: UserIdType;
}

export type PurchaseOrderId = {
  id: Types.ObjectId;
}

export type CreatePurchaseOrder = {
  cartId: CartId ;
  owner: string;
}

export type PurchaseOrderLine = {
  productId: ProductIdType;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}
