import { loginUserSchema } from './../utils/userSchemaValidator';
import { bodyRequestValidator } from './../../shared/validators/bodyRequestValidators';
import { authLogin } from './../controllers/authLoginController';
import { Router } from 'express';
import { authSignup } from '../controllers/authSignupController';


const router: Router = Router();

router.post('/signup', authSignup)
router.post('/login', authLogin);
router.route('/refreshtoken').post();

export default router;
