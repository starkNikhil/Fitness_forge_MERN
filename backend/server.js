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


app.post('/users/register', async function (req,res) {
    const {userName, password, email} = req.body;
    const user = await User.findOne({userName});

    if(user){
        res.status(401).json("User already exists");
    }else{
        const newUser = new User({
            userName: userName,
            email: email,
            password: password
        })
        newUser.save();
        res.status(201).json("User created successfully");
    }
})








app.listen(PORT||3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
    
})