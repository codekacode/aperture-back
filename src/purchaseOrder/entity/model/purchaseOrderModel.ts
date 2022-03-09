import { PurchaseOrderSchema } from './../schema/purchaseOrderSchema';
import { PurchaseOrder } from './../types/purchaseOrderInterfase';
import { model } from 'mongoose';

export const PurchaseOrderModel = model<PurchaseOrder>('PurchaseOrder', PurchaseOrderSchema)
