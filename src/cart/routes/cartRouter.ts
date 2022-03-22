import { createCart, addToCart, deleteCart, getCarts } from './../controllers/cartController';
import { Router } from 'express';

const router: Router = Router();

router.get('/carts', getCarts)
router.post('/cart', createCart)
router.post('/cart/add', addToCart)
router.delete('/cart/:cart_id', deleteCart)

export default router;
