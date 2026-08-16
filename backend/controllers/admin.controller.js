import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerAdmin = asyncHandler(async (req, res) => {
    const {email, userName, password} = req.body;

    if(!(email|| userName)){
        throw new ApiError(401, 'Email or user name is required')
    }
    const existedAdmin = await User.findOne({$or:[{userName}, {email}]})
    if(existedAdmin){
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


export {registerAdmin}