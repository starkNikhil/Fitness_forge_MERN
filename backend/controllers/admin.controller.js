import { Blogs } from "../models/blogs.schema.js";
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

const getPendingBlogs = asyncHandler(async (req, res) => {
    const pendingApprovals = await Blogs.find({ status: 'pending' })
    console.log(pendingApprovals);
    if (pendingApprovals.length == 0) {
        res.status(201).json(new ApiResponse(201, "No pending approval blogs"))
    }
    res.status(200).json(new ApiResponse(200, { blogs: pendingApprovals }))

})

const approveBlogs = asyncHandler(async (req, res) => {
    const blog = await Blogs.findById(req.params.blogId)
    if (!blog) {
        throw new ApiError(401, "Blog not found");
    }
    if (blog.status !== 'pending') {
        res.status(204).json(new ApiResponse(204, "Selected blog is already approved."))
    }
    const updateStatus = await Blogs.findByIdAndUpdate(req.params.blogId, {
        $set: { status: "approved" }
    })

    const updatedBlog = await Blogs.findById(req.params.blogId);
    if (updatedBlog.status !== 'approved') {
        res.status(500).json(new ApiResponse(500, "Something went wrong while updating status."))
    }
    res.status(200).json(new ApiResponse(200, updatedBlog, "Status updated successfully"))

})


const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blogs.findById(req.params.blogId);
    if (!blog) {
        throw new ApiError(401, "Blog not found");
    }
    const blogDeleted = await Blogs.findByIdAndDelete(req.params.blogId)
    if (!blogDeleted) {
        throw new ApiError(400, "Blog not found!");
    } else {
        res.status(200).json(new ApiResponse(200, "Blog deleted successfully"))
    }

})

export { registerAdmin, adminLogin, adminLogOut, getPendingBlogs, approveBlogs, deleteBlog }