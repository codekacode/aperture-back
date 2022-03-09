import { Router } from 'express';


const router: Router = Router();

router
  .route('/signup')
  .post()

router.route('/login').post();
router.route('/refreshtoken').post();

export default router;
