const push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys()
let vapidKeys = {
    publicKey: 'BHKIRJy1Vil-N02LBik-4ZwT-zmkTdQt85leO9vKBnkZCp14v_ZZlxC0F50-vzRE61SFIHI3Gb2K4TyPEVXj_Mk',
    privateKey: 'kBFNvwyE3nFoMfbdGydFgw1vtU2doUTy8cB91DdEknU'
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

const pushSubscription = {
    endpoint: '..',
    keys: {
        auth: '...',
        p256dh: '....'
    }
};

push.sendNotification(pushSubscription, 'Your Push Payload Text');

//console.log(vapidKeys)