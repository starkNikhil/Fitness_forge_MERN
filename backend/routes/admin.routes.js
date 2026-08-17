import { Router } from "express";
import { adminLogin, registerAdmin } from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authAdmin } from "../middlewares/admin.middleware.js";

const router = Router();


// Admin registration route
router.route('/registerAdmin').post(registerAdmin)

// Admin login 
router.route("/adminLogin").post( adminLogin)

export default router