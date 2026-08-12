import Router from 'express'


const router = Router();


// create blogs route
router.route('/createBlog').post(verifyJWT,
    upload.fields([{name:"blogImage"}]), getBlogData
)


export default router;
