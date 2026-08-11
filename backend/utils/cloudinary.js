import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs";
import { ApiError } from "./apiError.js";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (filePath) => {
    try {
        if (!filePath) return null;

        // 1. MUST AWAIT CLOUDINARY UPLOAD
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        });

        // 2. Remove local file after successful upload
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return response;
    } catch (error) {
        // 3. Remove local file if upload fails to prevent junk build-up
        if (filePath && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        
        // Pass a proper string message to ApiError
        throw new ApiError(500, error?.message || "Failed to upload image to Cloudinary");
    }
};

export { uploadImage };