import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()
// the use method is used for configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
// for form data
app.use(express.json({limit:"20kb"}))
// for url data ,params
app.use(express.urlencoded({extended:true, limit:"20kb"}))
// for file that will be temporarily stored on the server
app.use(express.static("public"))
// for cookies from the user
app.use(cookieParser())

//routes
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)
// http://localhost:8000/api/v1/users/register
export {app}