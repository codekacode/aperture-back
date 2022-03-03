import { User } from './../entity/types/User';
import { UserModel } from "../entity/models/userModel"
import { logger } from '../../logger/appLogger';


export const getAllUsersService = async(): Promise<User[]> => {
  try {
    const users: User[] = await UserModel.find({})
    return users
  } catch (err) {
    logger.error(err)
    throw err
  }
}
