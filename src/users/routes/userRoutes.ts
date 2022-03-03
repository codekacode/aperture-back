import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controller/userController";
import { userLogin } from "../controller/userLoginController";


const router: Router = Router();

router.post('/login', userLogin);
router.get('/users', getUsers);

router.delete('/users/:id', deleteUser);
router.post('/signup', createUser)

export default router;
