// const sendgrid = require('sendgrid')('d-7fd7deba64f4434e9ee956282d1a6a8f')
"use strict";
const nodemailer = require("nodemailer");

exports.send = async (body) => {
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

        let client = await transporter.sendMail({
            from: '"Tagme 👻" <tagme@tagme.com.br>',
            to: "cliente@gmail.com.br",
            subject: "✔ Avaliação feita com sucesso ✔",
            html: "<b>Sua avaliação para o restaurante Outback Steackhouse - Barra da Tijuca foi feita com sucesso. <br>Obrigado por avaliar.</b>",
        });

        let venue = await transporter.sendMail({
            from: '"Tagme 👻" <tagme@tagme.com.br>',
            to: "outback.barra@gmail.com",
            subject: "✔ Avaliação recebida ✔",
            html: "<b>Avaliação do cliente <client_name> foi feita com <rate_number> estrelas.",
        });

        console.log("Message sent to client: %s", client.messageId);
        console.log("Message sent to venue: %s", venue.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(client));
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(venue));
    } catch (err) {
        console.error(err);
        throw err
    }
}
