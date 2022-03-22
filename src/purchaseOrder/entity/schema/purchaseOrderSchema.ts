import { Product } from './../../../products/entity/types/productInterface';
import { ProductModel } from './../../../products/entity/models/productModel';
import { PurchaseOrder, PurchaseOrderLine } from './../types/purchaseOrderInterfase';
import { Schema } from 'mongoose';

export const PurchaseOrderLineSchema = new Schema<PurchaseOrderLine>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity:{
    type: Number,
  },
  unitPrice:{
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
})

export const PurchaseOrderSchema = new Schema<PurchaseOrder>({
  lines: [PurchaseOrderLineSchema],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'An user is required to create a purchase order']
  }
});

