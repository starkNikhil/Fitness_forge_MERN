import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js"
import { UserRegistration } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerUser = asyncHandler(async(req, res)=>{
    // get uer details from user
    // validation: is empty?
    // check if user is already exists : by username or email
    // create object of user details, store in db
    // remove password and refresh token from response
    // check for user creation 
    // return response

    const {userName, password, email} = req.body;
    console.log(userName);
    
    if(
        [userName, password, email].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400, "All fields are compulsory");
    }
    const existedUser = await UserRegistration.findOne({
        $or:[{userName}, {email}]
    });
    if (existedUser) {
        new ApiError(409, "User already exists with same username or email;")
    }

    const user = await UserRegistration.create({
        userName: userName,
        password : password,
        email: email
    });

    const createdUser = await UserRegistration.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500, "something went wrong while registering the user");
    }
    return res.status(201).json(new ApiResponse(200, "User registered Successfully"))
})


export {registerUser}