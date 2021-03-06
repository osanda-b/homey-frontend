const filesToCache = [
  "/",
  "assets/css/reset.css",
  "index.html",
  "favicon.ico",
  "app.js",
];

const staticCacheName = "pages-cache-v1";

// Install the SW
self.addEventListener("install", (event) => {
//   console.log("Insatalled");
  self.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate the SW
// self.addEventListener("activate", (event) => console.log("Activated "));

// Listen for fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
        //   console.log("Found in cache");
          return response;
        }
        // console.log("Network request sent");
        return fetch(event.request).then((response) => {
          // TODO 5 - Respond with custom 404 page
          return caches.open(staticCacheName).then((cache) => {
            // cache.put(event.request.url, response.clone())
            return response;
          });
        });
      })
      .catch((error) => {
        // TODO 6 - Respond with custom offline page
      })
  );
});

// Listen for push
var options = {};
self.addEventListener("push", (event) =>
  event.waitUntil(self.registration.showNotification("Hello", options))
);
