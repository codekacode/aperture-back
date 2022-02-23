import { Router } from 'express';
import { createCategory, editCategory, getAllCategories } from '../controllers/categoryController';

const router: Router = Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.put('/categories/:cat_id', editCategory);

export default router;
