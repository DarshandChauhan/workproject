const Queue = require('bull');
const nodemailer = require('nodemailer');
// 1. Initiating the Queue
const sendMailQueue = new Queue('sendMail', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  }
});
const data = {
  email: 'darshandev.chauhanddc@gmail.com'
};

const options = {
  delay: 600 , // 1 min in ms
  attempts: 2
};
// 2. Adding a Job to the Queue
for(var i=0;i<2;i++){
    console.log(i);
    sendMailQueue.add(data, options);
}


// Define a local completed event
// sendMailQueue.on('completed', (job, result) => {
//   console.log(`Job completed with result ${result}`);
// })
// 3. Consumer
sendMailQueue.process(async job => { 
    return await sendMail(job.data.email); 
  });
  function sendMail(email) {
      console.log(email);
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: 'darshandev.chauhanddc@gmail.com',
        to: email,
        subject: 'check - working ',
        text: "This email is for success checking",
      };
      let mailConfig = {
        service: 'gmail',
        auth: {
          user: 'darshandev.chauhanddc@gmail.com',
          pass: '********'//password
        }
      };
      nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
        if (err) {
            //console.log(err);
          reject(err);
        } else {
            //console.log(info);
          resolve(info);
        }
      });
    });
  }