import { logger } from './../../logger/appLogger';
import { ProductModel } from "../entity/models/productModel";
import { CreateProduct, Product } from "../entity/types/productInterface";

 export const createProductService = async (
     newProductData: CreateProduct
 ) => {
    try {
        const product = new ProductModel(newProductData)
        return await product.save();
    } catch (err: any) {
        logger.log('error', 'CreateProductService', {
            message: err.message,
            type: 'mongoose',
        });
    }

 }