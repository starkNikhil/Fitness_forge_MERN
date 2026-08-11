import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {loginUser, registerUser, logOutUser, getUserProfile, fillForm, getBlogData} from '../controllers/user.controller.js'
import { upload } from './../middlewares/multer.middleware.js';



const router = Router();


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyJWT, logOutUser)
router.route('/profile').post(verifyJWT, fillForm)


// get user profile if it is already filled
router.route('/profile').get(verifyJWT, getUserProfile)


// Blogs
router.route('/createBlog').post(verifyJWT,
    upload.fields([{name:"blogImage"}]), getBlogData
)


export default router;