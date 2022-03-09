import { AuthTokenSchema, Token } from './../schema/authTokenSchema';
import { model } from 'mongoose';

export const TokenModel = model<Token>('Token', AuthTokenSchema);
