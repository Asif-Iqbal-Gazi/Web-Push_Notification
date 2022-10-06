const push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys()

let vapidKeys = {
    publicKey: 'BOd8cpQ6SDdQ2WM5pEc8VeDyPTq_YgHC_MW5j9s16NI-SL286W8j2Yura1BDYFG4o8hl2fixG_rDG6W3DZeYnTc',
    privateKey: 'Cgv1-btYL0-zcCEJVhJIseMGO89DefdutVOk_hjlTAQ'
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dpxtMhLUxcM:APA91bE9V6Zca6zHBkveGTHu6TaLq53n7bT6YQpBcibVrhW57URleDit9jgxVgId3Kr6aLYCiUfA0emNvhbCRFLkHbVJTJekFE0RfONdXgnbc-7HgHzvkJ-O3G5dPH3BDK63fvxwSHhc',
    expirationTime: null,
    keys: {
        p256dh: 'BPIUvX2ghgaF9Po6kMaxrHvl8JipaHmLxRMJjtrUqBEQrAk_CCvUXyOdr2nYGK3qd1q9-iq5YVryI3I37v0dC04',
        auth: 'IMIyQp028PykJkE0lN7qpw'
    }
};
const payload = JSON.stringify({ title: "Asif Test!", body: "From Asif's Laptop!" })
push.sendNotification(pushSubscription, payload);

//console.log(vapidKeys)
