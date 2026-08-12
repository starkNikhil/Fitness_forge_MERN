import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { fillForm , getUserProfile} from "../controllers/user.controller.js";


const router = Router();



router.route('/profile').post(verifyJWT, fillForm)

// get user profile if it is already filled
router.route('/profile').get(verifyJWT, getUserProfile)


export default router