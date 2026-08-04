import {AsyncHandler} from "../utils/asyncHandler";
import {ApiError} from "../utils/apiError";
import {ApiResponse} from "../utils/apiResponse";
import { User } from "../models/user.model";
import jwt from  'jsonwebtoken';
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async (userId)=>{
    try{
        const user = await User.findById(userId);
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({
            validateBeforeSave: false,
        });
        console.log(refreshToken);
        
        return {refreshToken}

    }catch(error){
        throw new ApiError(500, "Something went wrong while generating the refresh token")
    }
}