import { logger } from '../../logger/appLogger';
import { TokenModel } from '../entity/model/authTokenModel';
import { createRefreshToken } from '../utils/tokenManager';
import { UserIdType } from '../../users/entity/types/User';


export const authCreateRefreshToken = async (
  userId: string | UserIdType
): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({id: userId});
    const token = new TokenModel({
      owner: userId,
      token: refreshToken
    })
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    logger.error(error);
    throw new Error(`Error creating a new project ${error.message}`)
  }
}
