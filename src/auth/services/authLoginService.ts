import { validatePassword } from './../utils/passwordManager';

import { authCreateRefreshToken } from './authCreateRefreshToken';
import { logger } from './../../logger/appLogger';
import { createAuthToken } from './../utils/tokenManager';

import { getOneUserByEmail } from './../../users/services/getOneUserByEmail';
import { LoginUser } from './../../users/entity/types/User.d';

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
}

export const authLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error('user mail or password is incorrect - authLoginService');

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error('user email or password is incorrect - authLoginService');
    const authToken = createAuthToken({id: user.id, isAdmin: user.isAdmin});
    const refreshToken = await authCreateRefreshToken(user.id);

    return {
      authToken,
      refreshToken
    }

  } catch (error: any) {
    logger.error(error)
    throw new Error(`Error creating a new project ${error.message}`);
  }
}
