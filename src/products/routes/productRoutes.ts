import { userTokenValidation } from './../../auth/middleware/userTokenValidation';
import { deleteProduct, editProduct, getProductById, getProductByCategory } from './../controllers/productController';
import { Router } from 'express';
import { createProduct, getProducts } from '../controllers';

const router: Router = Router();

router.get('/products', getProducts);
router.get('/products/:prod_id', getProductById);
router.get('/products/by_cat/:cat_id', getProductByCategory);
router.post('/products', userTokenValidation, createProduct);
router.put('/products/:prod_id', editProduct);
router.delete('/products/:prod_id', deleteProduct);

export default router;
