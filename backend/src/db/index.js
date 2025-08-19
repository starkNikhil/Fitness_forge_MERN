import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js';

const  dbConnect = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

        // console.log(`\n MongoDB connected !! DB HOST: ,${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default dbConnect