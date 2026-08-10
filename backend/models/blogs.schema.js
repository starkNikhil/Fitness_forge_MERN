import { mongoose, Schema } from 'mongoose';
import { User } from './user.model.js';



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

    imageUrl:{
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

blogsSchema.pre("save", async function () {
    if(this.isModified(this.userId)&& !this.name){
        const user = await User.findById(this.userId)
        if(user){
            if(user.lastName){
                this.name = `${user.firstName} ${user.lastName}`
            }else{
                this.name = `${user.firstName}`
            }
        }
    }
});

const BlogsSchema = mongoose.model('BlogsSchema', blogsSchema);

export {BlogsSchema}