import jwt from "jsonwebtoken"


export const auth =(req,res,next)=>{
let token = req.header('token')
jwt.verify(token,'ahmod', function(err, decoded) {
if(err){
res.json(err)
}else {
    req.id=decoded.userId
    next();
}
});
}