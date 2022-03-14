import { authRefreshTokenService } from './../services/authRefreshTokenService';
import { NextFunction, Request, Response } from 'express';


export const refreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    const token = authRefreshTokenService(req.userId, authorization!);
    res.status(200).json({token})
  } catch (error) {
    next(error);
  }
}
