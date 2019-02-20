var swCache = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/img/1-small.jpg',
  '/img/2-small.jpg',
  '/img/3-small.jpg',
  '/img/4-small.jpg',
  '/img/5-small.jpg',
  '/img/6-small.jpg',
  '/img/7-small.jpg',
  '/img/8-small.jpg',
  '/img/9-small.jpg',
  '/img/10-small.jpg'
  ];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(swCache)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
            console.log(`An error occurred: ${err}`);
        })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((err) => console.log(err))
  );
});