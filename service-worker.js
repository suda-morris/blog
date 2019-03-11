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
    "revision": "a0bb8889510541190620fb6b8705f8f1"
  },
  {
    "url": "about.html",
    "revision": "eb5d42119cb7c97781f5606c7292fc30"
  },
  {
    "url": "assets/css/0.styles.df5489fb.css",
    "revision": "306b07bc6bea4bca27d40a1b2a875ec3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.05a6a83a.js",
    "revision": "1f134f7b4f8ad375e4cb6ce201a36cab"
  },
  {
    "url": "assets/js/11.4d40f659.js",
    "revision": "c9ad4f6cf4a00f7c3d4e91b3b88b74ee"
  },
  {
    "url": "assets/js/12.351ef279.js",
    "revision": "6e2f3bc0f4af91eff153f14e0ac62679"
  },
  {
    "url": "assets/js/2.95857ee2.js",
    "revision": "4a74b57c0d06ae39c418279997ec7d88"
  },
  {
    "url": "assets/js/3.d5a81605.js",
    "revision": "1c9ccd0929131a21bcb8f0ada98fa188"
  },
  {
    "url": "assets/js/4.4fef9c2c.js",
    "revision": "344c5e3f26f37bf3cdeba9cc855e9ba9"
  },
  {
    "url": "assets/js/5.15692330.js",
    "revision": "9448d0b4676e9c9306501ab252b4167b"
  },
  {
    "url": "assets/js/6.b9b18e1f.js",
    "revision": "e26657df72f46a27e2df2b058a18579f"
  },
  {
    "url": "assets/js/7.d3303bf2.js",
    "revision": "e9004aabeb1d535395868388a3445a2a"
  },
  {
    "url": "assets/js/8.b564c6a6.js",
    "revision": "2ef48da94a836cb98553a2cef5fed9ec"
  },
  {
    "url": "assets/js/9.1025236c.js",
    "revision": "9ecba53210ec179e1793b55ecb82b060"
  },
  {
    "url": "assets/js/app.3d75d5ff.js",
    "revision": "874d93642ce77ad3398599a63324132e"
  },
  {
    "url": "cs/compilation.html",
    "revision": "4f52a60243fd3ba3b45518182854c7d2"
  },
  {
    "url": "cs/index.html",
    "revision": "5047a739602b18385b30444c4074d3b7"
  },
  {
    "url": "ee/index.html",
    "revision": "eebc121020872d4341674d2c2f96cb06"
  },
  {
    "url": "ee/poe.html",
    "revision": "db6b7f3e924bd8bc4dd3b67e5ac0384a"
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
    "revision": "a417300ef94627760352b739215ee6de"
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
