
import { model } from 'mongoose';
import { Cart } from '../types/cartInterface';
import { CartSchema } from '../schema/cartSchema';

export const CartModel = model<Cart>('Cart', CartSchema);
