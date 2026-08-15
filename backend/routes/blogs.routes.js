import Router from 'express'
import {getBlogData, showAllBlogs, readFullBlog, updateBlog} from "../controllers/blog.controller.js"
import { upload } from './../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();


// create blogs route
router.route('/createBlog').post(verifyJWT,
    upload.fields([{name:"blogImage"}]), getBlogData
)
// show all blogs to public
router.route('/viewBlogs').get(showAllBlogs)

// read a blog
router.route('/readBlog').get(verifyJWT, readFullBlog )

// update blog route
router.route('/updateBlog', verifyJWT, updateBlog )

export default router;
