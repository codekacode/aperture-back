import { createToken } from './../utils/tokenManager';
import { logger } from './../../logger/appLogger';
import {Request, Response, NextFunction } from "express";
import { createUserService } from '../services/createUserService';
import { getAllUsersService } from '../services/getAllUsersService';
import { deleteUserService } from '../services/deteleUserService';
import { CreateUser } from '../entity/types/User';


export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users)
  } catch (err) {
    logger.error(err);
  }
}

export const createUser = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(req.body)
    const token =  createToken({id: newUser.id})
    console.log(token)
    res.status(200).json({data: token})
  } catch (err) {
    logger.error(err);
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    await deleteUserService(id)
    res.status(200).json({ data: [], message: 'user deleted succesfully'})
  } catch (err) {
    logger.error(err);
  }
}
