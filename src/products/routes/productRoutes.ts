import { deleteProduct, editProduct, getProductById } from './../controllers/productController';
import { Router } from 'express';
import { createProduct, getProducts } from '../controllers';

const router: Router = Router();

router.get('/products', getProducts);
router.get('/products/:prod_id', getProductById);
router.post('/products', createProduct);
router.put('/products/:prod_id', editProduct);
router.delete('/products/:prod_id', deleteProduct);

export default router;
