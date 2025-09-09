const express = require ('express')
const app = express();
app.use(express.json())
const PORT  = 6687
require('./config/dataBase')
const studentRouter = require("./routers/studentRouter")
app.use(studentRouter)

app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})