import { userTokenValidation } from './../../auth/middleware/userTokenValidation';
import { createPurchaseOrder } from './../controller/purchaseOrderController';
import { Router } from 'express';

const router = Router();

router.post('/purchase_order', userTokenValidation, createPurchaseOrder);

export default router;
