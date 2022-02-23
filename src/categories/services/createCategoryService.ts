import { CategoryModel } from './../entity/models/categoryModel';
import { logger } from "../../logger/appLogger"
import { CreateCategory } from '../entity/types/categoryInterface';

export const createCategoryService = async (newCategoryData: CreateCategory) => {
  try {
    const category = new CategoryModel(newCategoryData);
    return await category.save();
  } catch (err) {
    logger.error(err)
  }
}
