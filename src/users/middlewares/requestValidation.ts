import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';

export const userValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.name) {
    next(new ApplicationError(400,'es requerido un nombre - userValidationMiddleware', 'validation'));
  }
  if (!req.body.email) {
    next(new ApplicationError(400,'es requerido un email - userValidationMiddleware', 'validation'));
  }
  next();
}
