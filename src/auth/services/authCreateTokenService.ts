import { logger } from './../../logger/appLogger';
import { createAuthToken, createRefreshToken } from './../utils/tokenManager';
import { UserIdType } from './../../users/entity/types/User.d';


export const authCreateTokenService = (
  userId: string | UserIdType,
  isAdmin: boolean
): { authToken: string; refreshToken: string} => {
  try {
    return {
      authToken: createAuthToken({ id: userId, isAdmin: isAdmin}),
      refreshToken: createRefreshToken({ id: userId })
    };
  } catch (error: any) {
    logger.error(error)
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
}
