import { ProductModel } from '../entity/models/productModel';

export const deleteProductByIdService = async (id: string) => {
  const query = { _id: id };
  try {
    return await ProductModel.deleteOne(query);
  } catch (err) {
    throw err;
  }
};
