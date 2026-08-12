import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {loginUser, registerUser, logOutUser, getUserProfile, fillForm, getBlogData} from '../controllers/user.controller.js'
import { upload } from './../middlewares/multer.middleware.js';



const router = Router();


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyJWT, logOutUser)






// Blogs



export default router;