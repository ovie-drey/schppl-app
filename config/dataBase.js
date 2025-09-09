const mongoose = require('mongoose')
require('dotenv').config()

const link = process.env.tega

mongoose.connect(link)
.then(
    ()=>{
        console.log("connecting to database success")
    }
).catch((error)=>{
    console.log(error.message())
});
