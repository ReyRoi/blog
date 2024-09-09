const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const cors = require("cors")
const PORT = process.env.PORT
const cookieParser = require('cookie-parser')
const userRouter= require('./routes/userRoute')
const SigninRouter = require('./routes/SigninRoute')
//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Db is connected")
})
.catch((error)=>console.log(error))

//route
app.use('/',userRouter)
app.use('/',SigninRouter)

app.listen(PORT,()=>{
    console.log("Server is listening")
})