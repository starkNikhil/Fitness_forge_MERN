import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const UserRegistrationSchema = new mongoose.Schema({
    userName :{
        type: String,
        required: true,
        lowercase: true,
        trim:true,
        unique: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        length: []
    },
    termsAndConditions: {
        type: Boolean,
        default : false,
        required: true
    },

    refreshToken: {
      type: String,
    }

},{
    timestamps:true
});

UserRegistrationSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

UserRegistrationSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserRegistrationSchema.methods.generateAccessToken = async function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserRegistrationSchema.methods.generateRefreshToken = async function(params) {
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
}

export const UserRegistration = new mongoose.model("UserRegistration", UserRegistrationSchema);