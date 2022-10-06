// Listen for push event
self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNotification('test message', {});
})