import { PurchaseOrder } from './../entity/types/purchaseOrderInterfase';
import { deleteOneResourceById } from '../../shared/factory/deleteOneResourceById';
import { PurchaseOrderModel } from './../entity/model/purchaseOrderModel';

export const deletePurchaseOrderService = async (
  orderId: string,
  userId: string
): Promise<boolean> => {
  try {
    const exist = new PurchaseOrderModel({owner: userId});
    if (!exist) throw new Error('the user cannot delete this purchase order')
    const result = await deleteOneResourceById(PurchaseOrderModel)(orderId)
    return result && result?.deletedCount > 0 ? true : false;
  } catch (erro: any) {
    throw new Error
  }

}
