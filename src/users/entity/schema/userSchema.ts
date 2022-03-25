import { User } from './../types/User';
import { Schema } from 'mongoose';


export const UserSchema = new Schema<User>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date
  }
})
