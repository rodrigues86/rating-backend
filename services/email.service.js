// const sendgrid = require('sendgrid')('d-7fd7deba64f4434e9ee956282d1a6a8f')
"use strict";
const nodemailer = require("nodemailer");

exports.send = async function send(from, to, body) {
    try {
        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
                user: 'keon78@ethereal.email',
                pass: 'e8eVE1H174FW73WPhy'
            }
        });

        let info = await transporter.sendMail({
            from: '"Rodrigues 👻" <rodrigo@tagme.com.br>',
            to: "rodrigo@tagme.com.br, devteam@tagme.com.br",
            subject: "Avaliação ✔", 
            text: "Hello world?", 
            html: "<b>Hello world</b>", 
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
        console.error(err);
        throw err
    }
}
