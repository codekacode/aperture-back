import { createToken } from './../utils/tokenManager';
import { logger } from "../../logger/appLogger";
import { LoginUser } from "../entity/types/User";
import { validatePassword } from "../utils/passwordManager";
import { getOneUserByEmail } from "./getOneUserByEmail";

export const userLoginService = async (
  userRequest: LoginUser
): Promise<string> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);
    if (user){
      const auth = await validatePassword(userRequest.password, user.password)
      if (auth){
        return createToken({id: user.id})
      } else {
        throw new Error
      }
    } else {
      throw new Error
    }
  } catch (err: any) {
    logger.error(err)
    throw new Error(err)
  }
}
