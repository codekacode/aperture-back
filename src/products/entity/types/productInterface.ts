import { PurchaseOrderId } from './../../../purchaseOrder/entity/types/purchaseOrderInterfase';
import { Types } from 'mongoose';

export interface Product {
  id: ProductIdType;
  name: string;
  price: number;
  description: string;
  status: boolean;
  createdAt: Date;
  editedAt: Date | null;
}

export type ProductIdType = {
  _id: Types.ObjectId;
};

export type CreateProduct = Omit<Product, 'id' | 'createdAt' | 'editedAt' | 'status'>;

export type EditProduct = Omit<Product, 'id' | 'createdAt' | 'editedAt'>;
