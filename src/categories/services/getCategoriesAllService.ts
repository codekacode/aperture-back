import { logger } from '../../logger/appLogger';
import { CategoryModel } from '../entity/models/categoryModel';
import { Category } from './../entity/types/categoryInterface';

export const getCategoriesAllService = async () => {
  try {
    const categories: Category[] = await CategoryModel.find({});
    return categories
  } catch (err: any) {
    logger.error(err)
  }

}
