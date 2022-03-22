import { CartModel } from './../entity/model/cartModel';
import { logger } from './../../logger/appLogger';
import { Cart } from './../entity/types/cartInterface';


export const getAllCartsService = async(): Promise<Cart[]> => {
  try{
    const carts: Cart[] = await CartModel.find({})
    return carts
  } catch (error: any) {
    logger.log('error', 'getProductsAllService', {
      message: error.message,
      type: 'mongoose'
    });
    throw new Error(error.message);
  }

}
