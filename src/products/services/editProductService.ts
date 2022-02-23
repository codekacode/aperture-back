import { ProductModel } from '../entity/models/productModel';
import { EditProduct, Product } from '../entity/types/productInterface';

export const editProductService = async (
  id: string,
  data: EditProduct
): Promise<Product | null> => {
  const query = { _id: id };
  try {
    return await ProductModel.findByIdAndUpdate(query, data);
  } catch (err) {
    throw err;
  }
};
