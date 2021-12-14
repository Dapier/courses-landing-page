const functions = require("firebase-functions");
const admin = requiere('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp();

let transporter = nodemailer.createTransport({
    host:"smtp.sendgrid.net",
    port:587,
    secure:false,
    auth:{
        user: "api",
        pass: "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"
    }
})

exports.sendEmail = functions.https.onRequest((req, res) =>{
    const email_from = "josuea501@gmail.com";
    const message = "Watefac sale strim pa ";

    const mailOption = {
        from: "Dev Courses	<josuea501@gmail.com>",
        to: 'josuea501@gmail.com',
        subject: 'Dev Courses Contact',
        html: `${message} <br><br> From : ${email_from}`
    }

    transporter.sendMail(mailOption, (error, info) =>{
        if(error){
            console.log(`Error: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
            res.send(error.toString())
        }
        res.send('You message was submitted succesfully!')
    });
})