import { CartModel } from './../entity/model/cartModel';
import { CreateCard } from './../entity/types/cartInterface';


export const createNewCartService = async (
  cartRequest: CreateCard
) => {
  try {
    const cart = new CartModel(cartRequest)
    return await cart.save();
  } catch (error: any) {
    throw new Error(error);
  }
}
