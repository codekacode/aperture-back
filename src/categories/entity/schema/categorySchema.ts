import { Category } from './../types/categoryInterface';
import { Schema } from 'mongoose';

export const CategorySchema = new Schema<Category>({
  name: {
    type: String,
    required: [true, 'Se requiere un nombre para el nombre de la categoria']
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date
  }
})
