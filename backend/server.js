import express from 'express';
import { User } from'./models/user.model.js';
import {connectDB} from './config/database.js';
import cookieParser from 'cookie-parser';
// ENV configuration
import dotenv from 'dotenv';
dotenv.config();




const app = express();


const PORT = process.env.PORT;


connectDB();


// Middlewares
app.use(express.json());
app.use(cookieParser());





// routes
// user routes
import userRouter from './routes/user.routes.js'

app.use('/api/v1/users', userRouter);


// profile routes
import profileRouter from './routes/profile.routes.js';
app.use('/api/v1/users', profileRouter);



// blog routes
import blogRouter from './routes/blogs.routes.js';
// create blog
app.use('/api/v1/blogs', blogRouter);



// Admin Routes
import AdminRouter from "./routes/admin.routes.js";

app.use('/api/v1/admin', AdminRouter);

app.listen(PORT||3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
    
});