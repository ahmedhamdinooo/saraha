import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    emailconfirm:{
        type:Boolean,
        default:false,
    }

})
export default mongoose.model('user',schema)