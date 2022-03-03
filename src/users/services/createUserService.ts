import { User } from './../entity/types/User';
import { logger } from './../../logger/appLogger';
import { CreateUser } from "../entity/types/User";
import { UserModel } from '../entity/models/userModel';


export const createUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    const user = new UserModel(userRequest)
    return user as User
  } catch (err) {
    logger.error(err)
    throw new Error
  }
}
