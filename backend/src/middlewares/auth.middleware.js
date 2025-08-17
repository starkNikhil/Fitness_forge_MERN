import { UserRegistration } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

export const verifyJWT = asyncHandler(async(req, res, next)=>{
    try{
        const token = req.cokkie?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log(token);
        
        if(!token){
            throw new ApiError(401, "unauthorized request")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = UserRegistration.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user){
            throw new ApiError(401, "Invalid Access Token")
        }
        req.user = user
        next()
    }
    catch(error){
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})