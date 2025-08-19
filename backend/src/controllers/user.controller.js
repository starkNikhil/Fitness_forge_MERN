import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { UserRegistration } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await UserRegistration.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({
      validateBeforeSave: false,
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while genreating access and refresh token."
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get uer details from user
  // validation: is empty?
  // check if user is already exists : by username or email
  // create object of user details, store in db
  // remove password and refresh token from response
  // check for user creation
  // return response

  const { userName, password, email } = req.body;
  // console.log(userName);

  if ([userName, password, email].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are compulsory");
  }
  const existedUser = await UserRegistration.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    new ApiError(409, "User already exists with same username or email;");
  }

  const user = await UserRegistration.create({
    userName: userName,
    password: password,
    email: email,
  });

  const createdUser = await UserRegistration.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, "User registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email
  // find the user
  // access and refresh token
  // send cookies
  const { email, userName, password } = req.body;
  //   console.log("email: ", email);
  //   console.log("userName: ", userName);

  if (!email || !userName) {
    throw new ApiError(400, "username or email is required");
  }
  const user = await UserRegistration.findOne({
    $or: [{ email }, { userName }],
  });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordvalid = await user.isPasswordCorrect(password);
  if (!isPasswordvalid) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  // console.log("accessToken: ",accessToken);
  // console.log("refreshToken: ", refreshToken);

  const loggedInUser = await UserRegistration.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user logged in successfully"
      )
    );
});

const logOutUser = asyncHandler(async (req, res) => {
  await UserRegistration.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user Logout Successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.accessToken || req.body.accessToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await UserRegistration.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, " Invalid refresh Token");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refreshToken");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await UserRegistration.findById(req.user?._id);
  const isPasswordCorrect = await UserRegistration.isPasswordCorrect(
    oldPassword
  );
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Incorrect Old Password");
  }
  user.password = newPassword;
  await user.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

export { registerUser, loginUser, logOutUser, refreshAccessToken, changeCurrentPassword };
