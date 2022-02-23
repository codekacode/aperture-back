import { ProductModel } from '../entity/models/productModel';
import { Product } from '../entity/types/productInterface';

export const getProductByIdService = async (id: string): Promise<Product | null> => {
  const query = { _id: id };
  try {
    return await ProductModel.findById(query);
  } catch (err) {
    throw err;
  }
};
