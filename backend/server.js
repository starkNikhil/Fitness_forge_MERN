const express = require('express');



// ENV configuration
const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./config/database.js')

const app = express();


const PORT = process.env.PORT


connectDB()


// Middlewares
app.use(express.json());
// app.use()





// routes











app.listen(PORT||3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
    
})