const mongoose = require('mongoose');


require('dotenv').config();


const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log();
        
        console.log("Connected to the database successfully");
        
    }).catch((error)=>{
        console.log("Unable to connect the database");
        console.log(error);
        process.exit(1);
        
    })
}

module.exports = connectDB