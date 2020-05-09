importScripts("https://via.batch.com/v2/worker.min.js");

const eventsList = ["pushsubscriptionchange", "install", "push", "notificationclick", "message"];
eventsList.forEach(eventName => {
  self.addEventListener(eventName, event => {
    event.waitUntil(self.handleBatchSDKEvent(eventName, event));
  });
});
