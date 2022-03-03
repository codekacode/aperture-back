import { logger } from "../../logger/appLogger"
import { CategoryModel } from "../entity/models/categoryModel"

export const deleteCategoryService = async (id: string) => {
  const query = { _id: id}
  try {
    return await CategoryModel.deleteOne(query)
  } catch (err) {
    logger.error(err)
  }
}
