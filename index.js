const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json())

const pubKey = process.env.publicKey;
const priKey = process.env.privateKey;
//console.log(pubKey);
//console.log(priKey);

// Vapid Keys
const vapidKeys = {
    publicKey: pubKey,
    privateKey: priKey
};

webpush.setVapidDetails(
    'mailto:test@test.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
    console.log(req.body);

    // Send 201 -resource created
    res.status(201).json({});

    // Create Payload
    const payload = JSON.stringify({ title: "Push Test" });

    // Pass object into sendNotification
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));