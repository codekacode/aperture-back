import { createCart, addToCart } from './../controllers/cartController';
import { Router } from 'express';

const router: Router = Router();

router.post('/cart', createCart)
router.post('/cart/add', addToCart)

export default router;
