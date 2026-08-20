const CACHE = 'troi-hom-nay-v1.0.0';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // CHỈ can thiệp (cache) request CÙNG GỐC với app — mọi request ra ngoài (API thời tiết Open-Meteo,
  // API định vị ngược...) phải để trình duyệt tự xử lý bình thường, KHÔNG được đi qua cache/fallback ở
  // dưới. Nếu không loại trừ, 1 request ra ngoài lỡ thất bại sẽ bị trả nhầm về index.html đã cache thay
  // vì báo lỗi thật, khiến ứng dụng tưởng có phản hồi nhưng không đọc được dữ liệu JSON thật.
  if (url.origin !== self.location.origin) return;

  const isHTML = e.request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (isHTML) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
