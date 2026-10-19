/* Sipariş Listesi - çevrimdışı önbellek. Sürümü değiştirince eski önbellek silinir. */
const VERSION = 'v1.3.1';
const CACHE = 'siparis-' + VERSION;
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './libs/xlsx.full.min.js', './libs/html5-qrcode.min.js', './libs/pdfmake.min.js', './libs/vfs_fonts.js',
  './libs/tesseract/tesseract.min.js', './libs/tesseract/worker.min.js', './libs/tesseract/tesseract-core-simd-lstm.wasm.js', './libs/tesseract/tur.traineddata.gz', './libs/tesseract/eng.traineddata.gz',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // Sayfa: önce ağ (güncel sürüm), ağ yoksa önbellek.
    e.respondWith(
      fetch(req).then(r => {
        if (r.ok) { const c = r.clone(); caches.open(CACHE).then(cache => cache.put('./index.html', c)); }
        return r;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Kütüphaneler, simgeler: önce önbellek.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const c = r.clone(); caches.open(CACHE).then(cache => cache.put(req, c)); }
      return r;
    }))
  );
});
