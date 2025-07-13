const nodemailer = require("nodemailer");

const mailSender = async (MdEmail, TiThLarge, body) => {
    try{
        let transporter = nodemailer.createTransport(
            {
                host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            }
    
        );
        let info=await transporter.sendMail(
            {
                from:"tnp cell of Nit jamshedpur",
                to:`${MdEmail}`,
                subject:`${TiThLarge}`,
                text:`${body}`,
            }
        );
        console.log("Message sent: %s",info.messageId);
        console.log(info);
    }
    catch(err){
       console.log("error in sending email");
       console.log(err);
    }
}
module.exports=mailSender;