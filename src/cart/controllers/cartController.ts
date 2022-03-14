import { addCartProductsService } from './../services/addCartProductsService';
import { CreateCard, AddLine } from './../entity/types/cartInterface';
import { createNewCartService } from './../services/createNewCartService';
import { Request, Response, NextFunction } from 'express';

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
