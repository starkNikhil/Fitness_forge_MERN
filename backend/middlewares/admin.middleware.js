import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const authAdmin = asyncHandler(async (req, res, next) => {
    try {
        
        const user = await User.findById(req.user._id).select("roles")
        if (!user) {
            throw new ApiError(401, "User not found");
        }
        if (user.roles !== 'admin') {
            throw new ApiError(403, "Admin access required");
        }

        next();
    } catch (error) {
        throw new ApiError(500, error, "Unable to verify admin privileges");
    }
})

export {authAdmin}