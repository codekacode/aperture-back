import { CartModel } from './../entity/model/cartModel';
import { AddLine, Line } from './../entity/types/cartInterface';


export const addCartProductsService = async (
  addLineRequest: AddLine
) => {
  try {
    const cart = await CartModel.findById(addLineRequest.cartId);
    const line: Line = { codProduct: addLineRequest.codProduct, quantity: addLineRequest.quantity}
    cart!.lines.push(line);
    return await cart!.save();
  } catch (error: any) {
    throw error
  }
}
