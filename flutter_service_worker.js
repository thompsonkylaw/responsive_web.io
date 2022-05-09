'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "56a24685b3a02607eb4beb242dfbaadf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dff47b5fbab76d1e4eabf0d4c73e0dcd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "95e6bcbcf06d32a75c3fdc8e9ae3f6f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b88668bcd6ffe760ee99ce60e7588b7",
".git/logs/refs/heads/master": "9b88668bcd6ffe760ee99ce60e7588b7",
".git/logs/refs/remotes/origin/master": "a1cdaf004953e971a76be4e729820fc8",
".git/objects/04/432b2e4e7ae1b5ba5b982d4f2d163b70fd38aa": "ee1cafc3c2516e87c2514e19cf3939bb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/3d263bb1569caba94eb4adddbc0fac5eabaf06": "bee891338163e0338f3fe6d1cc145af7",
".git/objects/13/81066242b28ef6e48a2208db2ddb093b2ef8f1": "4461d5d4e388656e91fb34f5c25f1561",
".git/objects/14/1b62ab1cdbbf5fbc4fa36ed4004c52ef2b8162": "7d6186a213bd8c57ba9ba2928d971eb4",
".git/objects/14/fc66a5284420bf5a0fb48be75751ded2052c4f": "f59db94654ba1e98b278fdbd303eaf16",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e031f77fe526a66d3678b2b84daea6596a481c": "c7ddef336f8c9903f9edf6a334f06228",
".git/objects/2f/f1e6a2550fb4ab765f3b533c7f24a742a0d5c0": "2092aabcedbd66d06e139b268a063db3",
".git/objects/36/ecc74a64a22a5d52530154f362411c758196bb": "7edceb2cdbe27fbe1c6e19bef017edef",
".git/objects/38/0e755ba112b3f0679fa720ac268da661e77b88": "a35ca6b376cfad1c544bbacb25cfbabb",
".git/objects/45/6deb39e173966e05f7f554d8d82fe825c7ecf3": "ff7df3cf19201d2408009a9441b8cbcf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/64e62b6f11a5ef1be827fc937de87b8c4e82d6": "e0672b8b9ea0a36e070e5d6cf04b2125",
".git/objects/4a/49fd8da41be4b01785464e68bdd3b6ab2ff422": "ff628c36d75a2795074f1c25a00de0ff",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/7905310b05afe2341e3be912270f37f03d0da5": "e9b76551b22c8631a47c3a2ff569abcd",
".git/objects/51/232f40970c82be0478840676fe824946640d41": "ea722a0d31e75069861d869c58f840e3",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/3a169aa7d64f1f48908841be85a6e131391984": "baafc8f2d422ac23f3cae63d33594b6c",
".git/objects/5c/be0fa641bcce68f76982b2868ff52a0bd36cc2": "516bd0ba26dc7c044c24243b10c9f233",
".git/objects/5f/bb880ebc46cad84cf0e1cc1c2c4049fac49049": "e9a1b0332c366e5067fb2981ddb9b80a",
".git/objects/60/d99519a8b4aeb9714fe5284a858aa288db6fcf": "016d7cbe8bdd816c829ced0eca17c0a3",
".git/objects/66/c68b1e150080761b1d194399a9f033d5d185b1": "3f77d96e9c4e59649dabe72f16bbd279",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e25da0093ed203bde4b7d19e7f56b7eb0bf51f": "c919a7307c5701df434663bd28f56bc1",
".git/objects/80/e99dfc280a854af129439770fec34ed8daa0b8": "d1514cc97e09f51d34b063a8d1b45936",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/2824e02aa84ee54c7d965b41075afcedae9110": "5b9953f52b0b8d0818613ff21107fb0e",
".git/objects/95/882806e46505e9be668adc3d0232980ad7aa23": "ec405b0965e9502e2d5904485e78a96e",
".git/objects/95/b635a9cdf7b329dd5ec846a3f5e6b401e78906": "b06e0b7fb3d7d7ebbff0a0aa88c9e6bc",
".git/objects/9a/740c17876127d0f4b3f2ba7d57450aca74a553": "3240af13307019d6d3789054aeab1f37",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/b3ae0673e43ecb6ae6c3be8f222213a56d28a8": "76ccb6e13494b73ea33001724dfd8129",
".git/objects/a9/d68f87548db620d66e07b4ae246975cee2533f": "18e49ccbe567a7219552f03b5707d79e",
".git/objects/aa/e4fbc04a07cd05859a2514d29ce0b5519e50b9": "58c88e523a21a36d21c94711a06250e8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/238c57b7133bfa5de4a1169bde033c29c290cb": "a8fb4a3de6eccb06168e7206d7abe0e0",
".git/objects/ac/e2931b61b6173cf150239a60dab2e05b5716b8": "727dce760bc1ccacf4d34744b43d7b9a",
".git/objects/b7/443551fc0e8b8d9faa65cd1214ba509e5d651a": "92a6afd056f3eeaf6f2f1ee07909bdf7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7c4a9ed81954ab1c44e034fe2c1c7808b524dd": "8c47080b8330a6da3eda64011cdded5e",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c4/1a74707ac32594bdd834cf7a6363bf6745feb6": "dcd545feed6ad3d853815c127597ce2a",
".git/objects/ca/fc2312363b44a1bc22da5e4997701dd6ee9510": "d2b86ba9e89284197ba1915f78420531",
".git/objects/d9/33a668919623bbacd8c4d03327368ca750328b": "20fafd892c0f31cca75a7ef68b6ff721",
".git/objects/df/89b35fbefce75498f5e8a00ecb821a8dddb62d": "d87d82e734890bf6ccd67738b1531a6f",
".git/objects/e0/be6ba296a4d8a9e48bd7262873d48fcf3b03c4": "3a0b52aba4985867e2525082c9c7f2ea",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/5b92b4dd558b87aa112f88c8d118d56539734f": "ba85910b520d37b506d28e9f91ed4d2c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/896d78082dde0f0654a88ac6a620c5d7507d1e": "994f403c605dd54ab97c4dd53bf0ffce",
".git/objects/f2/1d2aa35c7a5bed3338d596ca998a84f7d37670": "d22b4433a49125c2ec15dc42956a755b",
".git/objects/f5/8a902cf0883ff599ebcfc1e3a1b9137a77d7d8": "320820e5d5cdf9faefce109d2ac82d04",
".git/objects/f6/c7717548551e22f9a5290b6b706394c8d22baf": "0a14a4f4cd9e13f3551d2fc0aaa30a42",
".git/objects/f6/da0f2b8737278141360a700986f68f95605144": "bb7b7a35fb01251ce19e9a3cbd7132ce",
".git/objects/f7/d71d0e81a50d9b93f52c20f7e2001dc5f2adb5": "9c1fbc1d88af753ee954ade5a3796692",
".git/objects/f8/d97bb7127603ca94abe7ba37b8dc11352f9269": "d0343b9fc19cd927b8fe4b61f30d8eaf",
".git/objects/fb/7ce52feac09f6b7250ea0f73ad51a49e1ad6b3": "9c080156c5066b8a3261bf2a17d27d8a",
".git/ORIG_HEAD": "19ce80135a7ddeab22e3908714342445",
".git/refs/heads/master": "444f8a1138bc030c242c4ed6f7fe70b0",
".git/refs/remotes/origin/master": "444f8a1138bc030c242c4ed6f7fe70b0",
"assets/AssetManifest.json": "29ecf9c9bae09430c402e630dfd53ad6",
"assets/assets/Icons/Angle%2520down.svg": "24e10127668681c0e4e450129c221002",
"assets/assets/Icons/Angle%2520right.svg": "12a8fca11166d4b938ecb487ed675861",
"assets/assets/Icons/Download.svg": "817f412b5e1f162104e27c3b30c1cbb5",
"assets/assets/Icons/Edit.svg": "3a821516ae6575e54a8f4571428def33",
"assets/assets/Icons/File.svg": "f63ad9bd9ce54acf20da563fcea393c5",
"assets/assets/Icons/Inbox.svg": "55037f7401b91fe121e7c0da38cfbc45",
"assets/assets/Icons/Markup%2520filled.svg": "9cc473548e2b123fdd5a1bdc39fd8a8f",
"assets/assets/Icons/Markup.svg": "493194a8ca3f74ca22471f5d22ffd6e4",
"assets/assets/Icons/More%2520vertical.svg": "0d6074af7ec3da1f66981dc82db30765",
"assets/assets/Icons/Paperclip.svg": "8c48aa4e178a10207bcf33d874ac0891",
"assets/assets/Icons/Plus.svg": "510ee85e1e0b58e1e1c4a91693371262",
"assets/assets/Icons/Printer.svg": "aa659bcf41e77bd85e31bc04fe72758f",
"assets/assets/Icons/Reply%2520all.svg": "842631184315ab916bc3f6641d20b1b1",
"assets/assets/Icons/Reply.svg": "236fd99c7fe9ce272fcae64a6e1cd5d5",
"assets/assets/Icons/Search.svg": "9e1d9a247f0a1f63cb6bd8fbf3a226bd",
"assets/assets/Icons/Send.svg": "04c5fe1e6dfff59a73e19164e0fae753",
"assets/assets/Icons/Sort.svg": "641b1bdd5979607dbea036ef11cf4579",
"assets/assets/Icons/Transfer.svg": "9ee3410c0a5d84562d70153890d4ee69",
"assets/assets/Icons/Trash.svg": "defdd2c6bdd89a609dc50b000030c7d3",
"assets/assets/images/Img_0.png": "afbe6d2666c4766da1192ed32c81e379",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/profile.png": "057d526daa4cfcbadc8e574c2dfbaa28",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "0314730940d13b7abf59cddaee5c1808",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0329f72d62ea1beb40b2061a5e43b705",
"/": "0329f72d62ea1beb40b2061a5e43b705",
"main.dart.js": "f03156069340568b9a9929b3bc8b3ee7",
"manifest.json": "74ee074ef502e30210b9b1c7b14821a1",
"version.json": "9aa0d9e688cdc06ab7bfe4cb2c3cf66d",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
