import { Router } from "express";
import { deleteUser, getUsers } from "../controller/userController";



const router: Router = Router();

router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);

export default router;
