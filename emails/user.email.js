import nodemailer from "nodemailer"
export const sendemail=async (options)=>{
    const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
    user: "electronicsproject130@gmail.com",
    pass: "owtnnyejqtdlismq",
    },
    tls: {
    rejectUnauthorized: false,
    },
});


transporter.sendMail({
    from: '"Bank Cib" <electronicsproject130@gmail.com>',
    to: options.email,//  hamdy.ah098@gmail.com  hagerwagih87@gmail.com   manarwagih20@gmail.com   ahmed.aboali9874@gmail.com  mohamed.fouad4971@gmail.com
    subject:"Hello Mohamed ashref",
    html: `
    <div style="background:#bbf;color:#fff; padding:20px">
    <img src="https://sustainability-excellence.com/wp-content/uploads/2022/08/%D8%A8%D9%86%D9%83-cib.jpg" alt="CIB Logo" style="max-height:50px;">
    <h1>${options.message}</h1>
    <a href="http://localhost:3000/users/verify/${options.token}">Verify</a>
</div>
    `, // HTML body
},(err,info)=>{
if(err){
    console.log(err);
    
}else{
    console.log(info);
    
}
});
}
