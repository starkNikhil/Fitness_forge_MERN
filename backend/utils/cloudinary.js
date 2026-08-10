import {v2 as cloudinary} from "cloudinary";
import {fs} from 'fs';
import { ApiError } from "./apiError";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});




const uploadImage = async (filePath) => {
    try {
        if (!filePath) {
            return null;
        }
        const response = cloudinary.uploader.upload(filePath, {
            resource_type: 'image'
        })
        fs.unlinkSync(filePath);
        return response;
    } catch (error) {
        throw new ApiError(201, error)
    }
}

export {uploadImage}