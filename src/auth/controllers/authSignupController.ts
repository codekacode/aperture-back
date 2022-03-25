import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { authCreateTokenService } from './../services/authCreateTokenService';
import { authCreateUserService } from './../services/authCreateUserService';
import { CreateUser } from './../../users/entity/types/User.d';
import { NextFunction, Request, Response } from 'express';

export const authSignup = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const newUser = await authCreateUserService(req.body);
    const token = authCreateTokenService(newUser.id, newUser.isAdmin);
    res.status(200).json({token})
  } catch (error: any) {
    next(new ApplicationError(400, error.message))
  }
}
