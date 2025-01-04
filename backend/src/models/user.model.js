import mongoose, {Schema} from  "mongoose"

// mongodb save model in bson data
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase:true,
            trim:true
        },
        profile_pic:{
            type:String
        },
        password:{
            type:String,
            required:[true, 'Password is required']
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

export const User= mongoose.model("User",userSchema)