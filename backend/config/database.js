import { mongoose } from 'mongoose';


// ENV configuration
import dotenv from 'dotenv'
dotenv.config()


export const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log();
        
        console.log("Connected to the database successfully");
        
    }).catch((error)=>{
        console.log("Unable to connect the database");
        console.log(error);
        process.exit(1);
        
    })
}

