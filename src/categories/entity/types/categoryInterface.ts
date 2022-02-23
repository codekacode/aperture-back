import {Types} from 'mongoose';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  createdAt: Date;
  editedAt: Date | null;
}

export type CategoryId = {
  _id: Types.ObjectId;
}

export type CreateCategory = Omit<Category, 'id' | 'createdAt' | 'editedAt' >

export type EditCategory = Omit<Category, 'id' | 'createdAt' | 'editedAt' >
