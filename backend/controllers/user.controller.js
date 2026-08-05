import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
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



const registerUser = asyncHandler(async(req, res)=>{
    const {userName, email, password} = req.body;
    if([email, password, userName].some((field)=> field.trim()==="")){

        
        throw new ApiError(400, "All fields are required.")
    }
    // console.log(`email: ${email}, password: ${password}, username: ${userName}`);
    const existedUser = await User.findOne({$or : [{userName}, {email}]});
    // console.log(`existed user:  ${existedUser}`);
    
    if(existedUser){
        throw new ApiError(409, "User Already existed with this user name or email")
    }
    const user = await User.create({
        userName: userName,
        email: email,
        password : password
    })
    console.log(`User: ${user}`);
    

    const createdUser = await User.findById(user._id).select("-password")
    if(!createdUser){
        throw new ApiError(500, " SOmething went wrong while registering user");
    }

    return res.status(201).json(new ApiResponse(200, "User created successfully"));
})



export {registerUser, generateAccessAndRefreshToken}