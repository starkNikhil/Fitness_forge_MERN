import express from 'express';
import { User } from'./models/user.model.js';
import {connectDB} from './config/database.js';

// ENV configuration
import dotenv from 'dotenv'
dotenv.config()




const app = express();


const PORT = process.env.PORT


connectDB()


// Middlewares
app.use(express.json());
// app.use()





// routes

import userRouter from './routes/user.routes.js'

app.use('/api/v1/users', userRouter);









app.listen(PORT||3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
    
})