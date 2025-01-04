import dotenv from "dotenv"
import {app} from './app.js'
import connectingDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectingDB() //this returns a promise
.then(()=>{
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
    })
}

)
.catch((err)=>{
    console.log("MONGO DB connection failed!!",err)
}
)