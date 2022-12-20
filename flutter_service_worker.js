'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b263d1a7ab6eaa59bf4e4fe90a183460",
"assets/assets/icons/belanja.png": "f0c15fa8b3f9dddbdf8e90c640605c30",
"assets/assets/icons/bulk.png": "53f1548a3ddc5273ed2b9df6b59496bd",
"assets/assets/icons/digipos.png": "50135c01d95ab680ac96f7d5dfcb05b0",
"assets/assets/icons/digipos_new.png": "9fea54e194128bd255dde331f2cd6676",
"assets/assets/icons/emoney.png": "87a7d5d45e9a0133f4161bbe7c5751cf",
"assets/assets/icons/emoney_new.png": "ebcab0fdff5e37c58563cf5371a1ba9f",
"assets/assets/icons/fisik_new.png": "ab0076c407c584b1aa56013d8107e63a",
"assets/assets/icons/game.png": "f91de661117a3ca75919bb71b8f5dd63",
"assets/assets/icons/game_new.png": "5ef4161134bc60ac50ec65e233f109d5",
"assets/assets/icons/internet.png": "3a29503ece2562311717b50235c35eef",
"assets/assets/icons/internet_new.png": "3a8252b623e7cd4abc645c6756c41ea9",
"assets/assets/icons/pdam-01.png": "04140709450b1e454b088e83e4fc5f80",
"assets/assets/icons/perdana_new.png": "60f4ec08c0590f9f59eddbc569aa5e4c",
"assets/assets/icons/pulsa.png": "ac0182dc5c82a1297dca2d94112690ee",
"assets/assets/icons/pulsa_new.png": "f428dc93b1480033135e3d06660db282",
"assets/assets/icons/tagihan.png": "07d2e6ef0ce6bb1527492847cb2f4d64",
"assets/assets/icons/tagihan_new.png": "79c5832d649abe9aaa6e4453dfaa33ca",
"assets/assets/icons/telp.png": "82312cb065023cb2eabdc99dcbf065d2",
"assets/assets/icons/telp_new.png": "da5265d8b875ac17f32edc20953fe450",
"assets/assets/icons/token.png": "4c257a35dffc590254011753e33545be",
"assets/assets/icons/token_new.png": "90c5221e386f941a0014464818eb0664",
"assets/assets/icons/transfer.png": "8ab421b24e449093ec905578fc447ba1",
"assets/assets/icons/voucher.png": "8ac9c1d1cc7f055930c58f8ea0d647ab",
"assets/assets/icons/voucher_new.png": "b4266b3ab8ec2fd0109c4dfa894e7c46",
"assets/assets/img/alfamart.png": "16ce2b0b4c1ad9a89a36fe988b5ee66f",
"assets/assets/img/bank.png": "10e75959da5465830c8b584fe7d130d1",
"assets/assets/img/ff.jpg": "33036716f6e6e294d8647b5039c7968a",
"assets/assets/img/indomart.jpg": "55f226a3233c80f88ef6bb6bddce6a29",
"assets/assets/img/logo.jpg": "d32ba38c1758922c2701246fde5cd3df",
"assets/assets/img/operator/axis.png": "375977fb3435d38c5ab671919a98069b",
"assets/assets/img/operator/dana.png": "bbb3206042652ff047c7de82fc3bf95e",
"assets/assets/img/operator/game.png": "085182edab1e59ce2620528193f46b83",
"assets/assets/img/operator/gopay.png": "9cbd851119e9ce3c65c4b209316f5779",
"assets/assets/img/operator/indosat.png": "f7437b73d670d13c5d8174c6c7da7aaf",
"assets/assets/img/operator/linkaja.png": "b76bc256b634d0b4f6878c3a03929ca2",
"assets/assets/img/operator/ovo.png": "e725ce3f10914c30267f92d91aa29c76",
"assets/assets/img/operator/pln.png": "5957db03eb17b9eada87d5a1ebbabfe3",
"assets/assets/img/operator/shopee.jpg": "4125c72188f96309adcc7bc1753d059c",
"assets/assets/img/operator/smart.png": "89ac6d764ac11ab2554ab709b3bd6d5b",
"assets/assets/img/operator/telkomsel.png": "36a59afca4e5140d6b73e56740f17f0f",
"assets/assets/img/operator/three.png": "91ce96179cbcc22e0b050785e23c2ff5",
"assets/assets/img/operator/xl.png": "0a9ccd3521ef6c1406460bf61e8ed04b",
"assets/assets/img/otp_icon.png": "983dad9ce6869c1f15e79075d8b8ae20",
"assets/assets/img/outlet.jpg": "2e4e44f17d94fee4cc5d7ab425858f44",
"assets/assets/img/pulsa.jpg": "1192a25b4136105c213c5674781ae6fe",
"assets/assets/img/slidebar.jpg": "5d71b54d395d9d105c8172802b77e566",
"assets/assets/img/slidebar1.jpg": "41290cb3954b98cf97145e325a8d0aa3",
"assets/assets/img/slidebar2.jpg": "872c3b49b3760d1a2ccf9dc25533c693",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6bd1a569950e1011666f666c7edef84c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.jpg": "d32ba38c1758922c2701246fde5cd3df",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "79ab2b8b9bd555d2f152bbe82d172f53",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.jpg": "d32ba38c1758922c2701246fde5cd3df",
"index.html": "db84594310bbb140d6c929af2a0656bb",
"/": "db84594310bbb140d6c929af2a0656bb",
"main.dart.js": "2fb11a7d4a17036b0c9ada264facf615",
"manifest.json": "16a51997ed0dcb0712b306656b2e47fa",
"version.json": "ac11c13daf73559e99bc84ad512795c7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
