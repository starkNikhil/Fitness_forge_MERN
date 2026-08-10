import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {loginUser, registerUser, logOutUser, getUserProfile, fillForm} from '../controllers/user.controller.js'




const router = Router();


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyJWT, logOutUser)
router.route('/profile').post(verifyJWT, fillForm)


// get user profile if it is already filled
router.route('/profile').get(verifyJWT, getUserProfile)



export default router;