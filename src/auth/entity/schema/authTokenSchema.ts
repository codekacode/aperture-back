import { Schema } from 'mongoose';
import { UserIdType } from './../../../users/entity/types/User';
import { PurchaseOrder } from '../../../purchaseOrder/entity/types/purchaseOrderInterfase';

export interface Token {
  token: string;
  createdAt: Date;
  expiredAt: Date;
  owner: UserIdType;
}

export const AuthTokenSchema = new Schema<Token>({
  token: {
    type: String,
    required: [true, 'a token is required - error form authTokenSchema']
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  expiredAt: {
    type: Date,
    default: new Date(),
    index: {expires: 60 * 60 * 24}
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a purchase order - error form authTokenSchema']
  }
})
