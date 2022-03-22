import { CartId } from './../../cart/entity/types/cartInterface';
import { createPurchaseOrderService } from './../services/createPurchaseOrderService';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { logger } from './../../logger/appLogger';
import { NextFunction, Request, Response } from 'express';
import { deletePurchaseOrderService } from '../services/deletePurchaseOrderService';

export const createPurchaseOrder = async (
  req: Request<{}, {}, { cartId: CartId }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { cartId } = req.body;
  try {
    const newOrder = await createPurchaseOrderService({
      cartId ,
      owner: req.userId,
    })
    res.status(201).json({ data:newOrder })
  } catch (error: any) {
    logger.error('error on create order purchase', {
      instance: 'controller',
      service: 'createPurchaseOrder',
      trace: error.message
    })
    next(new ApplicationError(403, error.message))
  }
}

export const deletePurchaseOrder = async (
  req: Request<{orderId: string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderId } = req.params;
    const userId = '';
    const result = await deletePurchaseOrderService(orderId, userId);

    res.status(200).json({ secces: result})
  } catch (error) {
    logger.error('Error getting purchase order');
    next(error);
  }
}
