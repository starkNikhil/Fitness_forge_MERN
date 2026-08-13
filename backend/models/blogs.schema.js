import { mongoose, Schema } from 'mongoose';
import { UserPhysicalDetail } from './userPhysicalDetails.model.js';



const blogsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Name: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    excerpt:{
        type: String,
        required: true
    }
    ,

    blogImageUrl:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "pending"
    }
},{
    timestamps: true
})


const Blogs = mongoose.model('BlogsSchema', blogsSchema);

export {Blogs}