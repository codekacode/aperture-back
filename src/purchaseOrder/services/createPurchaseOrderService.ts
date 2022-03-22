import { CartModel } from './../../cart/entity/model/cartModel';
import { PurchaseOrderModel } from './../entity/model/purchaseOrderModel';
import { CreatePurchaseOrder, PurchaseOrderLine } from './../entity/types/purchaseOrderInterfase';


export const createPurchaseOrderService = async (
  purchaseOrderRequest: CreatePurchaseOrder
) => {
  try {
    const cart = await CartModel.findById(purchaseOrderRequest.cartId)
    await cart!.populate({path: 'lines.codProduct', model: 'Product'})
    const order = {
      lines: new Array<PurchaseOrderLine>(),
      owner: purchaseOrderRequest.owner
    }
    cart!.lines.map((line: any) => {
      const item = {
        productId: line.codProduct._id,
        quantity: line.quantity,
        unitPrice: line.codProduct.price,
        totalAmount: (line.quantity * line.codProduct.price)
      }
      order.lines.push(item)
    })


    const newOrder = new PurchaseOrderModel(order)
    return await newOrder.save();
  } catch (error: any) {
    throw new Error(`Error creating a new purchase order ${error.message}`);
  }
};
