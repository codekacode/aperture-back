import { Product } from './../types/productInterface';
import { Schema } from 'mongoose';

export const ProductSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Se requiere un nombre para el producto']
  },
  price: {
    type: Number,
    required: [true, 'Se requiere un precio para el producto']
  },
  description: {
    type: String,
    default: 'Producto de calidad'
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date
  }
});
