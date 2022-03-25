import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';

export const isAdminValitation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
    const { userIsAdmin } = req;
    if (!userIsAdmin) return next(new ApplicationError(401, "You don't have admin access"))

    next()
}
