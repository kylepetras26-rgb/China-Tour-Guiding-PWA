/*
  China Tour Guiding — Competition Training Simulator
  Service Worker

  Purpose:
  - Cache the app shell so the simulator (randomization, timers, modes,
    coverage tracking, history, settings) keeps working with no network.
  - Never touch localStorage — all training progress lives there and is
    completely untouched by install/activate/fetch or by updates below.
*/

const CACHE_VERSION = 'v1';
const CACHE_NAME = 'china-tour-guiding-' + CACHE_VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// INSTALL — pre-cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting ? null : null) // wait for explicit SKIP_WAITING message instead of auto-activating
  );
});

// ACTIVATE — clean up old caches from previous versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('china-tour-guiding-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH — cache-first for the app shell, network-first fallback to cache for everything same-origin
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never intercept cross-origin requests

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((networkRes) => {
          // opportunistically cache newly seen same-origin GET responses
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          return networkRes;
        })
        .catch(() => {
          // offline and not cached — fall back to the app shell page itself
          // so navigations still open the app instead of failing outright
          if (req.mode === 'navigate') return caches.match('./index.html');
          return new Response('', { status: 504, statusText: 'Offline and not cached' });
        });
    })
  );
});

// Let the page trigger activation of a waiting worker without wiping data.
// index.html posts this message when the user taps "Update Now".
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
