import { createPurchaseOrder } from './../controller/purchaseOrderController';
import { Router } from 'express';

const router = Router();

router
  .route('/purchase_order')
  .post(
    createPurchaseOrder
  );

export default router;
