import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectingDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected To Database successfully! DB Host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Database NOT connnected",error)
        process.exit(1)
    }

}

// when their is only one function to export from the file
export default connectingDB;