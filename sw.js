self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js'
      ])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  );
})