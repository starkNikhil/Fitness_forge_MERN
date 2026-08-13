import Router from 'express'
import {getBlogData, showAllBlogs} from "../controllers/blog.controller.js"
import { upload } from './../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();


// create blogs route
router.route('/createBlog').post(verifyJWT,
    upload.fields([{name:"blogImage"}]), getBlogData
)

router.route('/viewBlogs').get(showAllBlogs)

export default router;
