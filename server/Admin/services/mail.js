const nodemailer = require('nodemailer');
require('dotenv').config();

/* Send rejected mail to washer */
const rejectedMailToWasher = function(email){
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
           auth: {
                user: process.env.emailId,
                pass: process.env.password
             },
        secure: true,
    });
    
    
    const mailData = {
          from: process.env.emailId,  // sender address
          to: email,   // reciever
          subject: 'ACCOUNT DECLINED',
          text: 'Hey, sorry to inform you, but your registration as washer is declined by the Admin. Good luck for future endeavours!'   
    };
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
}


/* Send accepted mail to washer */
const acceptedMailToWasher = function(email){
  const transporter = nodemailer.createTransport({
      service: 'Gmail',
         auth: {
              user: process.env.emailId,
              pass: process.env.password,
           },
      secure: true,
  });
  
  
  const mailData = {
        from: process.env.emailId,  // sender address
        to: email,   // reciever
        subject: 'ACCOUNT APPROVED',
        html : 
      '<h1>Congratulations, your registration request as <b>washer</b> has been accepted.</h1><br><p>Login and create your profile first, to start getting orders.Login Now!</p><br>Click <a href="http://localhost:4200/login">here</a>'   
  };
  
  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  });
}

module.exports = { rejectedMailToWasher, acceptedMailToWasher };