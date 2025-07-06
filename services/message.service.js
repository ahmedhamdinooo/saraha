import mesgModel from "../models/message.model.js"

export const addmessage= async(req,res)=>{
    const {message, userId}=req.body;
    await mesgModel.insertMany({message,userId});
    res.json({message:"success"});
};
export const getmsgs= async(req,res)=>{
    
    let messages =await mesgModel.find({userId:req.id},{message:1,_id:0});
    res.json({message:"success",messages})

};