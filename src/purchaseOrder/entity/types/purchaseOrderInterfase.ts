import { UserIdType } from './../../../users/entity/types/User';
import { Product } from './../../../products/entity/types/productInterface';
import { Types } from 'mongoose';

export interface PurchaseOrder {
  id: PurchaseOrderId;
  orderNumber: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
  owner: UserIdType;
}

export type PurchaseOrderId = {
  id: Types.ObjectId;
}

export type CreatePurchaseOrder = {
  orderNumber: string;
  owner: string;
}
