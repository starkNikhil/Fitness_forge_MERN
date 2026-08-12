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

// blogsSchema.pre("save", async function () {
//     // FIX 1: Pass the field name as a string "userId"
//     // FIX 2: Matched 'Name' field casing defined in the schema
//     if (this.isModified("userId") && !this.Name) {
//         const user = await UserPhysicalDetail.findById(this.userId);
        
//        if (user) {
//             this.Name = user.lastName 
//                 ? `${user.firstName} ${user.lastName}` 
//                 : `${user.firstName}`;
//         }
//     }
// });

const BlogsSchema = mongoose.model('BlogsSchema', blogsSchema);

export {BlogsSchema}