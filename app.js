const express = require("express");
const app = express();
const rateService = require('./services/rating.service')
const emailService = require('./services/email.service')

app.get("/test", (req, res, next) => {
    res.json(["Rodrigues", "Flávio", "Dennis"]);
});

app.post("/send", (req, res, next) => {
    const rating = req.body; 
    // rateService.save()
    emailService.send()
    res.json({success: true});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});