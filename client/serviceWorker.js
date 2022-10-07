console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  console.log(e);
  console.log(e.data);
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Test Notification Sent !",
    icon: "https://cdn-icons-png.flaticon.com/512/783/783012.png"
  });
});