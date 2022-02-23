import { logger } from "../../logger/appLogger";
import { CategoryModel } from "../entity/models/categoryModel";
import { Category, EditCategory } from "../entity/types/categoryInterface";

export const editCategoryService = async (
  id: string,
  data: EditCategory
) => {
  const query = { _id: id };
  try {
    return await CategoryModel.findByIdAndUpdate(query, data);
  } catch (err) {
    logger.error(err)
  }
}
