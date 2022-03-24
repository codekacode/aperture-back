import { logger } from './../../logger/appLogger';
import { CategoryModel } from './../../categories/entity/models/categoryModel';
import { ProductModel } from './../entity/models/productModel';

export const getProductByCategoryService = async (cat_id: string) => {
  try {
    return await ProductModel.find({categories: cat_id })
  } catch ( err: any) {
    logger.error('error consultar categoria', {
      service: 'getProductByCategoryService',
      trace: err.message
    })
  }
}
