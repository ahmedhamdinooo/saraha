import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendemail } from "../emails/user.email.js"
export const signup=async(req,res)=>{
    const {name,email,password,age}=req.body
    const user =await userModel.findOne({email})
    if(user){
    res.json({message:'account already exist'})
    }else{
    bcrypt.hash(password,parseInt(process.env.ROUND), async function(err, hash) {
    await userModel.insertMany({name,email,password:hash,age})
    let token = jwt.sign({email},'ahmed',{expiresIn:60})
    sendemail({email,token,message:"hello"})
    res.json({message:'success'})
});
    }
    
}


export const signin=async(req,res)=>{
    const {email,password} = req.body
    let user=await userModel.findOne({email})
    if(user){
        const match = await bcrypt.compare(password, user.password);
        if(match){
            let token = jwt.sign({ userId:user._id,name:user.name,emailConfirm:user.emailconfirm}, process.env.JWT_KEY);
            res.json({message:"success",token})
            if(user.emailconfirm==true){
            res.json({message:"success",token})
            }else{
            res.json({message:"verify your email first"})

            }
        }else{
            res.json({message:"password incorrect"})
        }
    }else{
        res.json({message:"Account doesnot exist"})

    }
}


export const emailVerify=(req,res)=>{
    const {token}= req.params;
    jwt.verify(token,'ahmed',async(err,decoded)=>{
        if(err){
        res.json(err);
        }else{
let user  = await userModel.findOne({email:decoded.email})
    if(user){
        await userModel.findOneAndUpdate({email:decoded.email},{emailconfirm:true});
        res.json({message:"verified"});
    }else{
    res.json({message:"user not found"});
    }
        }
    })
    
}