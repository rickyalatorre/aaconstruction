
const nodemailer= require("nodemailer");
const mailgun= require("nodemailer-mailgun-transport");


const auth={
  auth:{
    api_key: process.env.API_KEY || "b17adf55e7a4c62d9a14089a958e690d-7cd1ac2b-ab35c164" ,
    domain: process.env.DOMAIN || "sandbox49ff95f7a3a84f33a62a9ee8877de84d.mailgun.org"
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
