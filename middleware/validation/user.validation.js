import joi from "joi"
const methods= ['body','params']
const schema = {
    body:joi.object({
    name:joi.string().min(3).max(15).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    repassword:joi.ref('password'),
    age:joi.number().min(16).max(50)
}),
params:joi.object({
    id:joi.string().min(4).max(4)
})
}

export const uservalidation =(req,res,next)=>{
const msgArray =[]
methods.map((key)=>{
const {error}=schema[key].validate(req[key],{abortEarly:false})
if(error){
    error.details.map((msg)=>{
        msgArray.push({msg:msg.message})
    })
}
})
if(msgArray.length>0){
res.json(msgArray)
}else{
next()
}

}
