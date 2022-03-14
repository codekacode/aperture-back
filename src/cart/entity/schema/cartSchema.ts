import { Cart, Line } from './../types/cartInterface';
import { Schema } from 'mongoose';

export const LineSchema = new Schema<Line>({
  codProduct: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'a code product must be provided for a product'],
  },
  quantity: {
    type: Number,
  }
})

export const CartSchema = new Schema<Cart>({
  createdAt: {
    type: Date,
    default: new Date()
  },
  lines: [LineSchema],
})

