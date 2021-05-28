const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const rateService = require('./services/rating.service')
const emailService = require('./services/email.service')
const chalk = require('chalk')
const _ = require('lodash')
const jsonParser = bodyParser.json()
require('./services/db.service')

app.get("/test", (req, res) => {
    res.json(["Rodrigues", "Flávio", "Dennis"]);
});

app.post("/send", jsonParser, async (req, res) => {
    try {
        const rating = req.body;
        console.log('rating >> ', rating);
        const saved = await rateService.save(rating)
        emailService.send()
        res.json({ success: true, message: saved });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");

    const serverDevIps = []
    _.mapKeys(require('os').networkInterfaces(), niGroup => niGroup.map(ni => {
        if (ni.family === 'IPv4') serverDevIps.push(ni.address)
    }))

    console.log(`Available on IPs: ${chalk.green(serverDevIps.join(' , '))}\n`)
});