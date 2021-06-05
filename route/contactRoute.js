const router = require('express').Router();
const nodemailer = require('nodemailer');



// in order to send mail you have to follow three steps:
//  1.) Create nodemailer transporter 
//  --most common is SMTP transporter 
//  --also SENDMAIL is a command for a simple message like mail() in PushSubscription

//  2.) Set nodemailer message options(mailOptions)
//  --we specify the sender, messages

//  3.) Deliver a message with sendmail

router.post('/contact', (req, res)=> {

    let data = req.body;

    //if fields are empty we want to alert user
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0 ) {

        return res.json({msg: "Please fill all fields"})
    }

    //create a transporter
    let smtpTransport = nodemailer.createTransport({

        service:'Gmail',
        //connect port
        port:465,

        //authenticate
        auth:{
            user: 'ali.hernandez9two@gmail.com',
            pass: 'Future808!'
        }
    })

    // define the mailOptions
    let mailOptions = {
        from: data.email,
        to:'ali.hernandez9two@gmail.com',
        subject:`Message from ${data.name}`,
        html:`
        <h3>Information<h3>

        <ul>
        <li>Name: ${data.name}</li>
        <li>Name: ${data.email}</li>

        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>

        `
    }

    //send message
    smtpTransport.sendMail(mailOptions, (err)=> {

        try {
            
            if(err) return res.status(400).json({msg: 'Please fill all fields'})

            res.status(200).json({msg: 'Message was sent succesfully'})

        }catch (err) {
            if(err) return res.status(400).json({msg: 'There is a server error'})

        }
    })

})

module.exports=router;