self.addEventListener('install', function(event) {
  console.log(self)
  console.log('install')
})
self.addEventListener('activate', function(event) {
  console.log('activate')
  console.log(self)
})

self.addEventListener('fetch', function(event) {
  console.log('fetch')
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
})
// self.addEventListener('fetch', function(event) {
//   console.log('fetch')
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request).then(response => {
//         caches.open('cache-v1').then(cache => {
//           cache.put(event.request.url, response)
//         })
//         return response
//       });
//     })
//   );
// })