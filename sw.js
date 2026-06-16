// Service worker — navegación network-first (HTML siempre fresco si hay red),
// caché para imágenes/recursos estáticos. Soporte offline básico.
const CACHE = 'gte-v6';
const CORE = ['./', './index.html', './tour.html'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // no tocar terceros (YouTube, fuentes)

  // HTML / navegación → network-first (evita servir páginas viejas)
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then((resp) => { const cp = resp.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); return resp; })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Recursos estáticos → cache-first con relleno en segundo plano
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((resp) => {
      const cp = resp.clone();
      caches.open(CACHE).then((c) => c.put(req, cp));
      return resp;
    }).catch(() => cached))
  );
});
