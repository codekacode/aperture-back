import { model } from 'mongoose';
import { User } from './../types/User';
import { UserSchema } from '../schema/userSchema';

export const UserModel = model<User>('User', UserSchema)
