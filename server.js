const push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys()

let vapidKeys = {
    publicKey: 'BOd8cpQ6SDdQ2WM5pEc8VeDyPTq_YgHC_MW5j9s16NI-SL286W8j2Yura1BDYFG4o8hl2fixG_rDG6W3DZeYnTc',
    privateKey: 'Cgv1-btYL0-zcCEJVhJIseMGO89DefdutVOk_hjlTAQ'
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/f9o-G6gzQLE:APA91bGIS96DvFIkBNOJA42DoP7vZuNyQDeFTgfwzLe1gule1_6hWoUzeOplUWjs9d11AkGFxfF8WOxBNbf0egBd6mnOzWOndo60GIxib6yR2O97rVQNKr2gBB_rqNjiU2NIvVrD8ATQ',
        expirationTime: null,
            keys: {
        p256dh: 'BOuHJoN6Ren3E1nQPwlvq_8hUkhWaVk9q4jVJQ85GPfbbb3FzLLh5Y696XBCUIJJS_YRdFPp38R4xwKKwnR8a3Y',
            auth: 'ow9lO41YKoveO2WCfgMn6A'
    }
};
const payload = JSON.stringify({ title: "Asif Test!", body: "From Asif's Laptop!" })
console.log(payload)
push.sendNotification(pushSubscription, payload);

//console.log(vapidKeys)
