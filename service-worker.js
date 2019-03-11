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
    "revision": "389138f1d12c68f8076ba422c6ccc913"
  },
  {
    "url": "about.html",
    "revision": "4c9cb4ae32c822827e6858794ed6c7ad"
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
    "url": "assets/js/10.976f2acd.js",
    "revision": "c09e1e04b622cdd8dd3e8eda568f5af0"
  },
  {
    "url": "assets/js/11.936fb0af.js",
    "revision": "daf1ef1a004b563be9c6ff87bbb831ea"
  },
  {
    "url": "assets/js/12.5133a4ef.js",
    "revision": "e0a8c2c292b74dc40ef56a25d437b4fd"
  },
  {
    "url": "assets/js/2.803a515f.js",
    "revision": "8f5f501602a65fe8a6c8765b6bbc5a88"
  },
  {
    "url": "assets/js/3.526778e7.js",
    "revision": "9e0527bf5e0e36c316ebd6ba72bd47c5"
  },
  {
    "url": "assets/js/4.48e8193b.js",
    "revision": "4f6aadb4f1b73b5319fcd5dcdbb59935"
  },
  {
    "url": "assets/js/5.7ef51a70.js",
    "revision": "cc389b3eba4a2c91c3630a2db752d583"
  },
  {
    "url": "assets/js/6.64531da4.js",
    "revision": "a73e39c916ee1a40695f916281d14e78"
  },
  {
    "url": "assets/js/7.49d7fcff.js",
    "revision": "2ebf2a854cb5aae8cae380a1eb6c8944"
  },
  {
    "url": "assets/js/8.1255aaa3.js",
    "revision": "11a564eb2065b3f51f8165186d8bed1a"
  },
  {
    "url": "assets/js/9.7fff23a2.js",
    "revision": "d75c9befaa2508e24afea9291ca1aa70"
  },
  {
    "url": "assets/js/app.7531685b.js",
    "revision": "7bcf51be65c2bfb028af160ae9aed8f5"
  },
  {
    "url": "cs/compilation.html",
    "revision": "7a2a96f82e33b663430f4911e4a51d09"
  },
  {
    "url": "cs/index.html",
    "revision": "88e0057715be27d175d6f16089329cd7"
  },
  {
    "url": "ee/index.html",
    "revision": "da029e982118df46ba496e1c700c4640"
  },
  {
    "url": "ee/poe.html",
    "revision": "649efe4ed7855d69a191a9c4dfde7faf"
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
    "revision": "352598bcd405213e06d7cc5cb06f545a"
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
