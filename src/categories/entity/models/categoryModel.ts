import { Category } from './../types/categoryInterface';
import { model } from 'mongoose';
import { CategorySchema } from '../schema/categorySchema';

export const CategoryModel = model<Category>('Category', CategorySchema);
