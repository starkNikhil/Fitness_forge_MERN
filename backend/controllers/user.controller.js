import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { UserPhysicalDetail } from '../models/userPhysicalDetails.model.js'
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { BlogsSchema } from "../models/blogs.schema.js";

const isFieldEmpty = (field) => {
    if (field === undefined || field === null) return true;
    if (typeof field === "string") return field.trim() === "";
    return false; // For numbers, booleans, etc.
};




const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({
            validateBeforeSave: false,
        });
        console.log(accessToken);

        console.log(refreshToken);

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating the refresh token")
    }
}



const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if ([email, password, userName].some((field) => field.trim() === "")) {


        throw new ApiError(400, "All fields are required.")
    }
    // console.log(`email: ${email}, password: ${password}, username: ${userName}`);
    const existedUser = await User.findOne({ $or: [{ userName }, { email }] });
    // console.log(`existed user:  ${existedUser}`);

    if (existedUser) {
        throw new ApiError(409, "User Already existed with this user name or email")
    }
    const user = await User.create({
        userName: userName,
        email: email,
        password: password
    })
    console.log(`User: ${user}`);


    const createdUser = await User.findById(user._id).select("-password")
    if (!createdUser) {
        throw new ApiError(500, " SOmething went wrong while registering user");
    }

    return res.status(201).json(new ApiResponse(200, "User created successfully"));
})


const loginUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    if (!(userName || password)) {
        throw new ApiError(400, "username and password is required")
    }
    // console.log(`userName: ${userName}, password: ${password}`);

    const user = await User.findOne({ userName })
    // console.log(`userId ${user._id}`);
    if (!user) {
        throw new ApiError(404, "User does not exist");
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedInUSer = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200).
        cookie("accessToken", accessToken, options).
        cookie("refreshToken", refreshToken, options).
        json(new ApiResponse(200, {
            user: loggedInUSer,
            accessToken, refreshToken
        }, "User logged in successfully"
        ))
})

const logOutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, {
        $set: { refreshToken: null }
    },
        { new: true }
    );
    const options = {
        httpOnly: true,
        secure: true,
    };


    res.status(200).clearCookie("accessToken", options).
        clearCookie("refreshToken", options).json(new ApiResponse(200, {}, "User logged out successfully"))
})



const fillForm = asyncHandler(async (req, res) => {
    const { firstName,
        lastName,
        dateOfBirth,
        gender,
        height,
        weight,
        currentIssues,
        pastIssue,
        profession,
        sleepHours,
        dietDetails,
        workOutAvailability,
        workOutTiming } = req.body;


    
    if ([firstName, lastName, dateOfBirth, gender, height, weight, currentIssues, pastIssue, profession, sleepHours, dietDetails, workOutAvailability, workOutTiming].some(isFieldEmpty)) {
        throw new ApiError(400, "All fields are required.")
    }
    // console.log(` firstName: ${firstName},
    //     lastName: ${lastName},
    //     dateOfBirth: ${dateOfBirth},
    //     gender: ${gender},
    //     height ${height},
    //     weight: ${weight},
    //     currentIssues: ${currentIssues},
    //     pastIssue: ${pastIssue},
    //     profession: ${profession},
    //     sleepHours: ${sleepHours},
    //     dietDetails: ${dietDetails},
    //     workOutAvailability: ${workOutAvailability},
    //     workOutTiming: ${workOutTiming}`);
    
    const existedUser = await UserPhysicalDetail.findOne({ userId: req.user._id });
    if (existedUser) {
        throw new ApiError(401, "USer details already exists")
    }
    const details = await UserPhysicalDetail.create({
        userId: req.user._id,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        gender: gender,
        height: Number(height),
        weight: Number(weight),
        currentIssues: currentIssues,
        pastIssue: pastIssue,
        profession: profession,
        sleepHours: sleepHours,
        dietDetails: dietDetails,
        workOutAvailability: workOutAvailability,
        workOutTiming: workOutTiming

    })
    

    console.log(`Details: ${details}`);
     const createUserDetails = await UserPhysicalDetail.findById(details._id);
    if (!createUserDetails) {
        throw new ApiError(500, "Something went wrong while registering physical details");
    }

    res.status(200).json(new ApiResponse(201,createUserDetails, "Details saved successfully."))

})


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await UserPhysicalDetail.findOne({userId: req.user._id}).select("-userId -_id")
    console.log(`user Details: ${user}`);
    
    if(!user){
        throw new ApiError(400, "User details not found")
    }


    res.status(201).json(new ApiResponse(201, user))
})



const getBlogData = asyncHandler(async (req,res) => {
    const user = BlogsSchema.findOne({userId: req.user._id})
    if(!user){
        throw new ApiError(401, "User not found")
    }

    const {title, }

})

export { registerUser, generateAccessAndRefreshToken, loginUser, logOutUser, getUserProfile, fillForm }