import { UserModel } from '../entity/models/userModel';
import { User } from './../entity/types/User';

export const getOneUserByEmail = async (
  email: string
) => {
  try {
    const user: User | null = await UserModel.findOne({
      email: email
    })
    return user
  } catch (error) {
    throw error
  }
}
