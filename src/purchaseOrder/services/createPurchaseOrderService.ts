import { PurchaseOrderModel } from './../entity/model/purchaseOrderModel';
import { CreatePurchaseOrder } from './../entity/types/purchaseOrderInterfase';


export const createPurchaseOrderService = async (
  purchaseOrderRequest: CreatePurchaseOrder
) => {
  try {
    const order = new PurchaseOrderModel(purchaseOrderRequest)
    return await order.save();
  } catch (error: any) {
    throw new Error(`Error creating a new purchase order ${error.message}`);
  }
};
