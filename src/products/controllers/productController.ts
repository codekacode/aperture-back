import { getProductsAllService } from './../services/getProductsAllService';
import { Request, Response } from 'express';
import { logger } from "../../logger/appLogger";
import { CreateProduct } from '../entity/types/productInterface';
import { createProductService } from '../services/createProductService';


export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getProductsAllService();
        res.status(200).json(products);

    } catch (err: any) {
        logger.error("Error obtener productos",{message: err.message})
    }
}

export const createProduct = async (
    req: Request<{}, {}, CreateProduct>, 
    res: Response
    ) => {
    try {
        const newProduct: CreateProduct = req.body
        const product = await createProductService(newProduct);
        res.status(201).json({data: product});

    } catch (err: any) {
        logger.error("Error crear producto",{message: err.message})
    }
}