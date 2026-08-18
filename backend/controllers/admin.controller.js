import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAccessAndRefreshToken } from "./user.controller.js";

const registerAdmin = asyncHandler(async (req, res) => {
    const { email, userName, password } = req.body;

    if (!(email || userName)) {
        throw new ApiError(401, 'Email or user name is required')
    }
    const existedAdmin = await User.findOne({ $or: [{ userName }, { email }] })
    if (existedAdmin) {
        throw new ApiError(403, "Admin already exists");
    }
    const admin = await User.create({
        email: email,
        userName: userName,
        password: password,
        roles: 'admin'
    });
    const createdAdmin = await User.findById(admin._id).select("-password")
    if (!createdAdmin) {
        throw new ApiError(500, " SOmething went wrong while registering Admin");
    }

    res.status(200).json(new ApiResponse(200, "Admin created successfully"))
})

const adminLogin = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(`userName: ${userName}, email: ${email}, password: ${password}`);

    if (!(userName && password)) {
        throw new ApiError(400, "Wrong credentials")
    }
    const admin = await User.findOne({ userName });
    if (!admin) {
        throw new ApiError(404, "User does not exist");
    }
    console.log(admin);


    const isPasswordValid = await admin.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(admin._id);

    const loggedInAdmin = await User.findById(admin._id).select("-password -refreshToken");
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200).
        cookie("accessToken", accessToken, options).
        cookie("refreshToken", refreshToken, options).
        json(new ApiResponse(200, {
            user: loggedInAdmin,
            accessToken: accessToken,
            refreshToken: refreshToken
        }, "Admin logged in successfully"))

})

const adminLogOut = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, {
        $set: { refreshToken: null }
    }, {
        new: true
    });
    const options = {
        httpOnly: true,
        secure: true
    }
    res.status(200).clearCookie('accessToken', options).
    clearCookie("refreshToken", options).
    json(new ApiResponse(200, {}, "User logged out successfully"))
})

export { registerAdmin, adminLogin, adminLogOut }