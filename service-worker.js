// キャッシュ名とアセットの定義
const CACHE_NAME = 'scoreboard-app-v1.1';
const ASSETS = [
  '/',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-192.png',
  'icon-maskable-512.png'
];

// インストール時に実行される
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('キャッシュを開きました');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時に実行される
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// フェッチイベントを処理
self.addEventListener('fetch', event => {
  // オンラインなら通常のフェッチ、オフラインならキャッシュを返す
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
