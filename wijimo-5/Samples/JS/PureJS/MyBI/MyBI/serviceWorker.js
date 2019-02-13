// must be in the root
// 100% event-driven
// 'self' is a reference to the worker:
// https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self

// initialize cache when app is installed
self.addEventListener('install', async e => {
    const cache = await caches.open('mybi-static');
    await cache.addAll([
        './',
        './styles/app.css',
        './scripts/app.js',
        './scripts/vendor/wijmo.theme.material.min.css',
        './scripts/vendor/wijmo-bundle.min.js',
        './resources/home.svg',
        './resources/current.svg',
        './resources/trends.svg',
        './resources/details.svg',
        './resources/options.svg',
        './resources/wijmo-logo.png'
    ]);
});

// intercept fetch requests sent from app to network
self.addEventListener('fetch', e => {
    const req = e.request;
    const url = new URL(req.url);
    if (url.origin === req.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkFirst(req));
    }
});

// fetch from cache if possible, fall back on network
async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

// fetch from network if possible (and cache for later), fall back on cache
async function networkFirst(req) {
    const cache = await caches.open('mybi-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}
