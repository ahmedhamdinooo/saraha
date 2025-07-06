import mongoose from "mongoose";

const schema = mongoose.Schema({
    message:String,
    userId:mongoose.SchemaTypes.ObjectId,

})
export default mongoose.model('message',schema)