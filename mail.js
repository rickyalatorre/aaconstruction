
const nodemailer= require("nodemailer");
const mailgun= require("nodemailer-mailgun-transport");


const auth={
  auth:{
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }

};

const transporter= nodemailer.createTransport(mailgun(auth));

const sendMail= (email, subject, text, cb)=>{
  const mailOptions={
    from: email,
    to: "alatorre1057@gmail.com",
    subject,
    text
  };

  transporter.sendMail(mailOptions,function(err, data){
    if (err){
    return  cb(err, null);
    } else{
      return cb(null, err);
    }

  });

}

module.exports= sendMail;
