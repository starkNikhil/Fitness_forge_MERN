import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js"
import { UserPhysicalDetail } from "../models/userPhysicalDetails.model.js";
import { Blogs } from "../models/blogs.schema.js";
import { User } from "../models/user.model.js";
import { uploadImage } from "../utils/cloudinary.js";



const generateExcerpts = (content, wordLimit =100)=>{
    const words = content.trim().split(/\s+/)

    if(words.length <= wordLimit){
        return content.trim();
    }
    return words.slice(0, wordLimit).join(" ") + "..."
}


const getBlogData = asyncHandler(async (req, res) => {
    // 1. Added await and fixed query to findById
    const user = await User.findById(req.user._id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    

    const { title, content } = req.body;
    if (!title || !content) {
        throw new ApiError(400, "Title and content are required");
    }

    const excerpt = generateExcerpts(content);
    const blogImageLocalPath = req.files?.blogImage?.[0]?.path;
    
    if (!blogImageLocalPath) {
        throw new ApiError(400, "Blog image is required");
    }

    const image = await uploadImage(blogImageLocalPath);
    if (!image || !image.url) {
        throw new ApiError(500, "Error uploading image to Cloudinary");
    }
    const userDetails = await UserPhysicalDetail.findOne({userId: req.user._id})
    if(!userDetails){
         throw new ApiError(404, "User details not found");
    }

    const name = userDetails.lastName 
                ? `${userDetails.firstName} ${userDetails.lastName}` 
                : `${userDetails.firstName}`;
    
                
    // 2. Save secure_url (string), not the entire response object
    const blogData = await Blogs.create({
        userId: req.user._id,
        Name: name,
        title,
        content,
        excerpt,
        blogImageUrl: image.secure_url || image.url
    });

    // 3. Verify using the created document's _id
    const createdBlog = await Blogs.findById(blogData._id);
    if (!createdBlog) {
        throw new ApiError(500, "Something went wrong while creating the blog");
    }

    return res.status(201).json(
        new ApiResponse(201, createdBlog, "Blog created successfully")
    );
});

const showAllBlogs = asyncHandler(async (req, res)=>{
    const blogs = await Blogs.find({status: "approved"}).select("Name title excerpt")
    if(!blogs){
        throw new ApiError(400, "No blog is available")
    }
    // console.log(blogs);
    
    res.status(200).json(
        new ApiResponse(200, blogs)
    )
})


const readFullBlog = asyncHandler(async (req, res) => {
    
    const blog = await Blogs.findById(req.params.blogId).select('title Name content')
    if(!blog){
        throw new ApiError(401, "No blog found");
    }
    res.status(200).json(new ApiResponse(200, blog))
})


const updateBlog = asyncHandler(async (req, res)=>{
     const {title, content} = req.body;
     console.log(`title: ${title} body: ${content}`);

    
})

export {getBlogData, showAllBlogs, readFullBlog, updateBlog}