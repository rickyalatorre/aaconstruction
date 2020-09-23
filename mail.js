
const nodemailer= require("nodemailer");
const mailgun= require("nodemailer-mailgun-transport");


const auth={
  auth:{
    api_key:  "b17adf55e7a4c62d9a14089a958e690d-7cd1ac2b-ab35c164" ,
    domain:  "mail.aaconstruction77.com"
  }

};

const transporter= nodemailer.createTransport(mailgun(auth));

const sendMail= (from: string, subject, text, cb)=>{
  const mailOptions={
    from: "domain@mail.aaconstruction77.com",
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
