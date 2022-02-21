import { ProductModel } from './../entity/models/productModel';
import { logger } from "../../logger/appLogger";
import { Product } from "../entity/types/productInterface";

export const getProductsAllService = async (): Promise<Product[]> => {
    try { 
        const products: Product[] = await ProductModel.find({});
        return products
    } catch (err: any) { logger
        logger.log('error', 'getProductsAllService', {
            message: err.message, 
            type: 'mongoose'
        })
        throw new Error(err.message);
    }
}