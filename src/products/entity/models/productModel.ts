import {model} from 'mongoose';
import { ProductSchema } from './../schema/productSchema';
import { Product } from './../types/productInterface';

export const ProductModel = model<Product>('Product', ProductSchema)