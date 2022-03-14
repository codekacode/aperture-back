import { ProductModel } from './../../../products/entity/models/productModel';
import { PurchaseOrder } from './../types/purchaseOrderInterfase';
import { Schema } from 'mongoose';

export const PurchaseOrderSchema = new Schema<PurchaseOrder>({
  orderNumber: {
    type: String,
    required:[true, 'purchase order is required - PurchaseOrderSchema']
  },
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

PurchaseOrderSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'purchaseOrder'
})


PurchaseOrderSchema.pre('deleteOne', async function (next) {
  const purchaseOrder = this.getFilter('purchaseOrder');
  await ProductModel.deleteMany({purchaseOrder: purchaseOrder.id});
  next();
})

PurchaseOrderSchema.set('toJSON', { virtuals: true });
PurchaseOrderSchema.set('toObject', { virtuals: true });
