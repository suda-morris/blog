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
    "revision": "6124b32a102e6704028fdf90f07295d0"
  },
  {
    "url": "about.html",
    "revision": "e273ef7a5ea8fc8fe6693592e29f6f6a"
  },
  {
    "url": "assets/css/0.styles.d0f69887.css",
    "revision": "321ce84338583bd8751e2ba413a10ab3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b8f45e6.js",
    "revision": "7d35457951d1e0a21dde7f809ba634e6"
  },
  {
    "url": "assets/js/11.f1ffe618.js",
    "revision": "15826f80660cd52c8feb88b07b51e9c4"
  },
  {
    "url": "assets/js/12.60fa034d.js",
    "revision": "fb627dbfed5e4b7f4fdaa9c05fbf1712"
  },
  {
    "url": "assets/js/2.50b72f92.js",
    "revision": "68b3a2ee1942bb108b2359bad0a00ef6"
  },
  {
    "url": "assets/js/3.8e9801e6.js",
    "revision": "6650488c3b883126cdfba455ec18ebbb"
  },
  {
    "url": "assets/js/4.ce90aed6.js",
    "revision": "ae03ae225023226e7af8773965f715e0"
  },
  {
    "url": "assets/js/5.fca7b31f.js",
    "revision": "3b2f5e2bd90972009b922a7d62230ae0"
  },
  {
    "url": "assets/js/6.4776b540.js",
    "revision": "1a5c9445b55ba18e47335b20d474d0a5"
  },
  {
    "url": "assets/js/7.37c3d525.js",
    "revision": "db3704b42c974055dc3262367fe1858d"
  },
  {
    "url": "assets/js/8.61b4bf5e.js",
    "revision": "74f1cc8ccdb9d68c9a1f1db2bb05239f"
  },
  {
    "url": "assets/js/9.e41b2f81.js",
    "revision": "468125c4a447a1743e52f59c944e9acd"
  },
  {
    "url": "assets/js/app.8711c7fd.js",
    "revision": "30398f820178ccae1831458d8549c231"
  },
  {
    "url": "cs/compilation.html",
    "revision": "d6b4d77737615146cb1037f0f2c7bf36"
  },
  {
    "url": "cs/index.html",
    "revision": "31c55c3582d9f0bf180c710e8f51a53f"
  },
  {
    "url": "ee/index.html",
    "revision": "514491b5a4ce2a491bf8be8befc82041"
  },
  {
    "url": "ee/poe.html",
    "revision": "5dd801fdb61e3d3a257118842cff2ea1"
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
    "revision": "dd7ec526825fdc1d1c34a798c797fcae"
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
