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
    "revision": "b6fbca062a22d60ac1b3d627be9c9034"
  },
  {
    "url": "about.html",
    "revision": "9ac4f5729d63747612c05751618d709f"
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
    "url": "assets/js/10.4e48116e.js",
    "revision": "39e6601240a572c860d98c18774b7e24"
  },
  {
    "url": "assets/js/11.7072aa56.js",
    "revision": "79f7a077fde4f10933dfffe4a7b9fd3b"
  },
  {
    "url": "assets/js/12.cadc6e47.js",
    "revision": "6297bb32bbc7567bc10cb8c00e39af4c"
  },
  {
    "url": "assets/js/13.bc9941c0.js",
    "revision": "f3534afb27268ba18381becda8c3093e"
  },
  {
    "url": "assets/js/14.02a8ea18.js",
    "revision": "0847e8f08e82b0976deaed784947469f"
  },
  {
    "url": "assets/js/15.505ccb85.js",
    "revision": "27e3f89d10ec5efb1835e220872ec908"
  },
  {
    "url": "assets/js/16.3f7cf4b5.js",
    "revision": "ee1e0186efa8940e4eee5ad1e65811a2"
  },
  {
    "url": "assets/js/17.57373e88.js",
    "revision": "bd2cbc7aa655d64a9be49e1e1d316947"
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
    "url": "assets/js/4.8fd0a11c.js",
    "revision": "d5c8a5e62b2c763191f2ade9d4847907"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/6.7e2ce816.js",
    "revision": "07f07f4a291938dc3466415aed132b9d"
  },
  {
    "url": "assets/js/7.5225afca.js",
    "revision": "ef62714da3fa789fc519319494ad359a"
  },
  {
    "url": "assets/js/8.a3e3ebd6.js",
    "revision": "c0245a2ae6c841c0162acacec49a0365"
  },
  {
    "url": "assets/js/9.31f51320.js",
    "revision": "47e292d4a1833a923f392cd9d230717c"
  },
  {
    "url": "assets/js/app.ac3ee47c.js",
    "revision": "bd04007b92d899b450ef846eb367b252"
  },
  {
    "url": "cs/about.html",
    "revision": "a19d2c9688054c530f6374a101eae492"
  },
  {
    "url": "cs/compilation.html",
    "revision": "321ecdad3b7968e4747c26d92124ad7b"
  },
  {
    "url": "cs/index.html",
    "revision": "01f2d878dd3022eb31a17ad9d3d65be3"
  },
  {
    "url": "ee/about.html",
    "revision": "afda42cd06790f6cfc524052fdb3569f"
  },
  {
    "url": "ee/index.html",
    "revision": "d4f5c27350660906ae1f56ca90f9527c"
  },
  {
    "url": "ee/poe.html",
    "revision": "1db46a172ac08b7a9e65a908e57838d3"
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
    "revision": "80a77d080cdb87b0fbe453b0da9696dd"
  },
  {
    "url": "others/about.html",
    "revision": "219d2023d041266a76600310545c892d"
  },
  {
    "url": "others/index.html",
    "revision": "474ddb92be687f179df6bd88ffbd9d4d"
  },
  {
    "url": "others/markdown.html",
    "revision": "499ecba3f3ef01b77f42e58698183429"
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
