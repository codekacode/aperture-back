import { UserModel } from "../entity/models/userModel"


export const deleteUserService = async (id: string): Promise<void> => {
  try {
    await UserModel.deleteOne({ id })
  } catch (err) {
    throw new Error
  }
}
