const version = "1.0.0"
const cacheName = `RN-${version}`
self.addEventListener('install', e => {
    e.waitUntil(
    caches.open(cacheName).then(cache => {
        console.log('[Service Worker] Fetching resource: ' + e.request)

        return cache.addAll([
                `/index.html`,
                `/manifest.json`,
                `/assets/css/app.css`,
                `/assets/js/init.js`,
                `/assets/img/manifest/192x192.png`,
                `/assets/img/manifest/128x128.png`,
                `/assets/img/manifest/512x512.png`,
                `/assets/img/favicon.png`
            ]).then(() => self.skipWaiting())
        })
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request)
            })
    )
})
