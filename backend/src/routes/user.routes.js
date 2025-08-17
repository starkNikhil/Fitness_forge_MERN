import { Router } from "express";
import { loginUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//user registration route
router.route("/register").post(registerUser);

// user login route
router.route("/login").post(loginUser);

// secured Routes
router.route("/logout").post(verifyJWT,logOutUser)

export default router;
