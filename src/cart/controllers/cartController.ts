import { getAllCartsService } from './../services/getAllCartsService';
import { logger } from './../../logger/appLogger';
import { addCartProductsService } from './../services/addCartProductsService';
import { CreateCard, AddLine } from './../entity/types/cartInterface';
import { createNewCartService } from './../services/createNewCartService';
import { Request, Response, NextFunction } from 'express';
import { deleteCartService } from '../services/deleteCartService';

export const getCarts = async (req: Request, res: Response) => {
  try {
    const carts = await getAllCartsService();
    res.status(200).json(carts)
  } catch (err: any) {
    logger.error('Error')
  }
}

export const createCart = async (
  req: Request<{}, {}, CreateCard>,
  res: Response,
  next: NextFunction
) =>  {
  try {
    const newCart: CreateCard = req.body
    const cart = await createNewCartService(newCart);
    res.status(201).json({data: cart})
  } catch (err) {
    throw err
  }
}

export const addToCart = async (
  req: Request<{}, {}, AddLine>,
  res: Response
) => {
  try {
    const addCart: AddLine = req.body
    const toCart = await addCartProductsService(addCart)
    await toCart.populate({path:'lines.codProduct', model:'Product'})
    res.status(201).json({ data: toCart})
  } catch (err) {
    throw err
  }
}

export const deleteCart = async (
  req: Request<{cart_id: string}>,
  res: Response
) => {
  try {
    const deleteCartById = await deleteCartService(req.params.cart_id)
    res.status(204).json(deleteCartById)
  } catch (error: any) {
    throw new Error(error)
  }
}
