import { Router } from 'express';
import { createCategory, deleteCategory, editCategory, getAllCategories } from '../controllers/categoryController';

const router: Router = Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.put('/categories/:cat_id', editCategory);
router.delete('/categories/:cat_id', deleteCategory);

export default router;
