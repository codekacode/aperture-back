import { getCategoriesAllService } from './../services/getCategoriesAllService';
import { editCategoryService } from './../services/editCategoryService';
import { Request, Response } from 'express';
import { createCategoryService } from './../services/createCategoryService';
import { CreateCategory, EditCategory } from "../entity/types/categoryInterface";
import { logger } from '../../logger/appLogger';

export const getAllCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const categories = await getCategoriesAllService();
    res.status(200).json(categories);
  } catch (err: any) {
    logger.error('Error al obtener categorias', {message: err.message})
  }
}

export const createCategory = async (
  req: Request<{}, {}, CreateCategory>,
  res: Response
) => {
  try {
    const newCategory: CreateCategory = req.body;
    const category = await createCategoryService(newCategory);
    res.status(201).json({data: category})
  } catch (err) {
    throw err;
  }
}

export const editCategory = async (
  req: Request<{ cat_id: string}, {}, EditCategory>,
  res: Response
) => {
  try {
    const updateCategory = await editCategoryService(req.params.cat_id, req.body);
    res.status(200).json({data: updateCategory})
  } catch (err) {
    logger.error(err)
  }
}
