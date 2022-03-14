import { UserModel } from './../../users/entity/models/userModel';
import { encryptedPassword } from './../utils/passwordManager';


import { logger } from './../../logger/appLogger';
import { CreateUser } from './../../users/entity/types/User.d';


export const authCreateUserService = async (
  userRequest: CreateUser
) => {
  try {
    userRequest['password'] = await encryptedPassword(userRequest.password);
    const user = new UserModel(userRequest);
    return await user.save();
  } catch (error: any) {
    logger.error(error);
    throw new Error(error)
  }
}
