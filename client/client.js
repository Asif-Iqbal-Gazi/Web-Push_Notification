const publicVapidKey = 'BOd8cpQ6SDdQ2WM5pEc8VeDyPTq_YgHC_MW5j9s16NI-SL286W8j2Yura1BDYFG4o8hl2fixG_rDG6W3DZeYnTc';

// Check for service worker
if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
    // Register Service Worker
    console.log("Registering Service Wroker...");
    const register = await navigator.serviceWorker.register("/serviceWorker.js", {
        scope: "/"
    }).then((reg) =>{
      if(reg.installing){
        console.log("Service Worker Installing..");
      } else if(reg.waiting){
        console.log("Service Worker Installed...");
      } else if(reg.active) {
        console.log("Service Worker Active...");
      }
    });
    console.log("Service Worker registered...");


    // Register Push
    console.log("Registering Push...");
    let sw = await navigator.serviceWorker.ready;
    const subscription = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log("Push Registered...");

    // Send Push Notification
    console.log("Sending Push...");
    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json"
        }
      });
    console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }