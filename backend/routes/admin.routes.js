import { Router } from "express";
import { adminLogin, adminLogOut, approveBlogs, deleteBlog, getPendingBlogs, registerAdmin } from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authAdmin } from "../middlewares/admin.middleware.js";

const router = Router();


// Admin registration route
router.route('/registerAdmin').post(registerAdmin)

// Admin login 
router.route("/adminLogin").post(adminLogin)

// admin Logout

router.route('/adminLogout').post(verifyJWT, authAdmin, adminLogOut)

// Getting all pending approval blogs

router.route('/getPendingBlogs').get(verifyJWT, authAdmin, getPendingBlogs)

// approve pending blogs

router.route('/:blogId/approve').patch(verifyJWT, authAdmin, approveBlogs)

// delete blogs

router.route('/:blogId').delete(verifyJWT, authAdmin, deleteBlog)

export default router