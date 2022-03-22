import { CartModel } from './../entity/model/cartModel';


export const deleteCartService = async (id: string) => {
  try {
    return await CartModel.deleteOne({id})
  } catch (error: any) {
    throw new Error(error.message)
  }
}
