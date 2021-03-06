import { validateToken } from './../utils/tokenManager';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';


export const userTokenValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new ApplicationError(401, 'No token provided'))
    }
    const { id, isAdmin } = validateToken(authorization);
    if (!id) return next(new ApplicationError(401, 'Unvalid token'))

    req.userId = id;
    req.userIsAdmin = isAdmin;

    next();

  } catch (error: any) {
    if (error.message === 'jwt expired') {
      return next(new ApplicationError(401, error.message));
    }
    next(error);
  }
}
