import { userLoginService } from './../services/userLoginService';
import { Request, Response, NextFunction } from "express";
import { logger } from "../../logger/appLogger";
import { LoginUser } from "../entity/types/User";


export const userLogin = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await userLoginService(req.body)
    res.status(200).json({
      token,
    })
  } catch (err) {
    logger.error(err)
    throw err
  }
}
