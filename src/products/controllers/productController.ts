import { getProductByCategoryService } from './../services/getProductByCategoryService';
import { editProductService } from '../services/editProductService';
import { getProductsAllService } from './../services/getProductsAllService';
import { Request, Response } from 'express';
import { logger } from '../../logger/appLogger';
import { CreateProduct, EditProduct } from '../entity/types/productInterface';
import { createProductService } from '../services/createProductService';
import { getProductByIdService } from '../services/getProductByIdService';
import { deleteProductByIdService } from '../services/deleteProductByIdService';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsAllService();
    res.status(200).json(products);
  } catch (err: any) {
    logger.error('Error obtener productos', { message: err.message });
  }
};

export const createProduct = async (
  req: Request<
    {purchaseOrderId: string},
    {},
    CreateProduct>,
  res: Response
) => {
  try {
    const { name, price, description, categories} = req.body;
    const product = await createProductService({
      name,
      price,
      description,
      categories
    });
    await product!.populate("categories", "name description")
    res.status(201).json({ data: product });
  } catch (err: any) {
    logger.error('Error crear producto', { message: err.message });
  }
};

export const editProduct = async (
  req: Request<{ prod_id: string }, {}, EditProduct>,
  res: Response
) => {
  try {
    const updateTask = await editProductService(req.params.prod_id, req.body);
    res.status(200).json({ data: updateTask });
  } catch (err) {
    throw err;
  }
};

export const getProductById = async (
  req: Request<{ prod_id: string }>,
  res: Response
) => {
  try {
    const getProductById = await getProductByIdService(req.params.prod_id);
    res.status(200).json(getProductById);
  } catch (err) {
    throw err;
  }
};

export const deleteProduct = async (
  req: Request<{ prod_id: string }>,
  res: Response
) => {
  try {
    const product = await deleteProductByIdService(req.params.prod_id);
    res.status(204).json(product)
  } catch (err) {
    throw err;
  }
}


export const getProductByCategory = async (
  req: Request<{ cat_id: string}>,
  res: Response
) => {
  try {
    const products = await getProductByCategoryService(req.params.cat_id);
    console.log(products)
    res.status(200).json(products);
  } catch (err) {
    throw err;
  }
}
