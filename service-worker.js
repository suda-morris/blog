/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fd8186e7da4fe9a1bb5defdfa1b4301f"
  },
  {
    "url": "about.html",
    "revision": "44b67e29d11ab6c5aace11d1ef02f43f"
  },
  {
    "url": "assets/css/0.styles.aea52b3d.css",
    "revision": "ae1d25e511a384b68fff9900d23c6b0c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2c9c1562.js",
    "revision": "dc58dbcf34ac60701c3b70c9557c78b3"
  },
  {
    "url": "assets/js/11.3ae2eea4.js",
    "revision": "5aceabc05f69b35c6dbffea98eec9d66"
  },
  {
    "url": "assets/js/12.1df563a6.js",
    "revision": "7f5d4546125ff7a158b2885abe2ca1a7"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/3.3753a3bc.js",
    "revision": "c1dc14bbbbabb5d17d1ab81c5cba3278"
  },
  {
    "url": "assets/js/4.1abcb6e1.js",
    "revision": "70e8d105ca2eaae5677a901db9d3eddb"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/6.5812b9ea.js",
    "revision": "6a619eea2165cf6f33f5fa6886ae1129"
  },
  {
    "url": "assets/js/7.7de6cf79.js",
    "revision": "816beaab2cb905a1e6922f6d938be2be"
  },
  {
    "url": "assets/js/8.f1e27d1a.js",
    "revision": "fe4d0682a8c69d6b63d4525bdb0784ad"
  },
  {
    "url": "assets/js/9.b8e0cb22.js",
    "revision": "68ae078d6fa26ae4a9a585e84899f6d9"
  },
  {
    "url": "assets/js/app.f5e2706b.js",
    "revision": "9487097855d3a567d8644353762f526b"
  },
  {
    "url": "cs/compilation.html",
    "revision": "8cad22bb2922f2c5d1ebea4b4a5fb1d8"
  },
  {
    "url": "cs/index.html",
    "revision": "0a07a1f14f60e118bc76fba6f5e41660"
  },
  {
    "url": "ee/index.html",
    "revision": "145fdf9d90b38ec25e697139a6372960"
  },
  {
    "url": "ee/poe.html",
    "revision": "8adf1e3ce09487861cecc0e2c8dc523a"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "hero.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7f3f777d138f012a2265d77b10d952f8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "04dcbd879d05aca11b08e8ccac38a8b0"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "408ea52ae94a10257aec25a4e0d1aa36"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78eb4441988533905ba97b4f6f379a76"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3293a2ba7357e53a03a13a85cfc24cd8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a5ae50cb2baa927cbc564db72d233038"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bbfaa6a7ce0ab3899cd13fae0516dabc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0fa51e6798434754e980306de7b8c083"
  },
  {
    "url": "index.html",
    "revision": "68d06c6999580874f612c6dc78ca59a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
