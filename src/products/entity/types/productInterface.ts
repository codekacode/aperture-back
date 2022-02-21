import {Types} from 'mongoose';

export interface Product {
    id: ProductIdType
    name: string
    price: number
    description: string
    createdAt: Date
    editedAt: Date | null;
}

export type ProductIdType = {
    _id: Types.ObjectId
}