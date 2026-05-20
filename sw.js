/* 春宵錄 Service Worker - 離線快取版 */
const CACHE_NAME = 'chunxiao-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-152.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

/* 安裝：預快取所有靜態資源 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

/* 啟動：清理舊版快取 */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* 攔截請求：優先用快取，失敗才走網路（Cache First 策略） */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        /* 動態快取新請求 */
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        /* 完全離線時回傳主頁面 */
        return caches.match('./index.html');
      });
    })
  );
});
