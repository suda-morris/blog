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
    "revision": "713dde19469389885eff6f70123d6f13"
  },
  {
    "url": "about.html",
    "revision": "c065c4d78d406b8ccce323701befc0e1"
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
    "url": "assets/js/10.7c5a0e0a.js",
    "revision": "51f2b387f8f54f2a3396e07779213c9d"
  },
  {
    "url": "assets/js/11.a452eadb.js",
    "revision": "85f12dbb62affe28977f24834c063e47"
  },
  {
    "url": "assets/js/12.eafb2f27.js",
    "revision": "e4246880b086a696d029157a5765971b"
  },
  {
    "url": "assets/js/13.97e9cf91.js",
    "revision": "4c7e7fc5d87806ace9191ba4da2e596c"
  },
  {
    "url": "assets/js/14.7c716bac.js",
    "revision": "7ee0015b9102fd098a51128a6f6e550e"
  },
  {
    "url": "assets/js/15.9df65885.js",
    "revision": "7dbcaafb05f8d99e62426c0e5692b896"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.64f168e6.js",
    "revision": "1d4145ac4a9d1aa60917b39b05158e03"
  },
  {
    "url": "assets/js/18.a4a6131f.js",
    "revision": "c7fba579b07a348120a1335334fb3dd6"
  },
  {
    "url": "assets/js/19.63e41b50.js",
    "revision": "5f95dca3d2d35c1d2ca718ba0fa3d5b9"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.a8acc48c.js",
    "revision": "06982b24d3b21b218b693952967af0f3"
  },
  {
    "url": "assets/js/21.e9d74a75.js",
    "revision": "1932702c51d9616809bdbcf060432b06"
  },
  {
    "url": "assets/js/22.1d1b0861.js",
    "revision": "a77a438a253350df9bcbc4d79aeb4e21"
  },
  {
    "url": "assets/js/23.60e2ca35.js",
    "revision": "460872d69592445a4d3c646e771e98c6"
  },
  {
    "url": "assets/js/24.b2f0fb97.js",
    "revision": "68bf48d93663e63e2b2d992937842e04"
  },
  {
    "url": "assets/js/25.a341545f.js",
    "revision": "c076659ea764b423547152528afde917"
  },
  {
    "url": "assets/js/26.34d6247d.js",
    "revision": "b50eea5cb7a023f2356163b19d541928"
  },
  {
    "url": "assets/js/27.0b0ef00c.js",
    "revision": "e27c2f4ec220aa4e7cd662cbc5878a0d"
  },
  {
    "url": "assets/js/28.f195fcbd.js",
    "revision": "33972975b45c73b3a21e418f847a5555"
  },
  {
    "url": "assets/js/29.5617b2e3.js",
    "revision": "63137e7a20b714b2f9b7dd02ad4746d8"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.e8ac104a.js",
    "revision": "c00c3476002b1b1f9761d33966f7a76b"
  },
  {
    "url": "assets/js/31.594ebd8d.js",
    "revision": "f6c48e7a06f615df6fb7be7fda0ec1e6"
  },
  {
    "url": "assets/js/32.e1b42b06.js",
    "revision": "830e0f338e2a27fc313323714ae2a9e0"
  },
  {
    "url": "assets/js/33.08d00d32.js",
    "revision": "ed280228a53044f496889f1f050e1415"
  },
  {
    "url": "assets/js/34.1fa7fd87.js",
    "revision": "4ae5b69af98161c382396c4edd8f4c26"
  },
  {
    "url": "assets/js/35.de170958.js",
    "revision": "df072c6df184d76515d7f73e1a9506a7"
  },
  {
    "url": "assets/js/36.e42233c4.js",
    "revision": "e2dc2ae48e1834294be39e2fc248f52c"
  },
  {
    "url": "assets/js/37.ee8fa185.js",
    "revision": "548027189a0d6dfadf22f5b596737cbb"
  },
  {
    "url": "assets/js/38.a7eda2dc.js",
    "revision": "84c434e2b341402a5b1646011ac673a5"
  },
  {
    "url": "assets/js/39.0a11c877.js",
    "revision": "0d47257fd62f89d53dd672a06c7bc1e9"
  },
  {
    "url": "assets/js/4.7131e971.js",
    "revision": "0f3830ac0354e283468823611896d3ad"
  },
  {
    "url": "assets/js/40.dab93db9.js",
    "revision": "c2fa570023edb76962edb70760bd112e"
  },
  {
    "url": "assets/js/41.c49f0714.js",
    "revision": "36e84b7e5bc284b3e455182efd364699"
  },
  {
    "url": "assets/js/42.d8d152e7.js",
    "revision": "8fa97353c97449ef5b6e2b31cf0b2fd3"
  },
  {
    "url": "assets/js/43.298829b8.js",
    "revision": "2c03465e0230a8f7e0d24e882864b43f"
  },
  {
    "url": "assets/js/44.72f73c9d.js",
    "revision": "eef2e3bab8bb099d976e1542ef98ec35"
  },
  {
    "url": "assets/js/45.cc847329.js",
    "revision": "eeff1152d087aea3f69e7790f963bd1b"
  },
  {
    "url": "assets/js/46.547cb6b8.js",
    "revision": "675476602739fc05f42d3f09a7bfd6e3"
  },
  {
    "url": "assets/js/47.bfcb0e3a.js",
    "revision": "8925bf4308f965158823c9ea51bb7cd9"
  },
  {
    "url": "assets/js/48.330503ec.js",
    "revision": "4a53ec19286eeeca6f743ff47e2a782a"
  },
  {
    "url": "assets/js/49.b1a7da02.js",
    "revision": "a6817f88ad1c646d6e7b9ee0819664a4"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.a59bf0bc.js",
    "revision": "188f58e34f44bcaf2e704cd580491293"
  },
  {
    "url": "assets/js/51.c79c032d.js",
    "revision": "54e5dabb147b2b5601e09c225d0af871"
  },
  {
    "url": "assets/js/52.8b58fef8.js",
    "revision": "9489b6ff5e80971417ad39f901fefdde"
  },
  {
    "url": "assets/js/53.9adb2093.js",
    "revision": "63cda20381c7cb61302abb6ace3087ac"
  },
  {
    "url": "assets/js/54.8894c8ed.js",
    "revision": "a2abcf2b1919964edae66ccb336adfc8"
  },
  {
    "url": "assets/js/55.b566089f.js",
    "revision": "4ccf7c214a2786f51613ff458b3138b2"
  },
  {
    "url": "assets/js/56.882fb1be.js",
    "revision": "5c6ea1b090a5ca9e24b58f9253180e78"
  },
  {
    "url": "assets/js/57.8ea4c730.js",
    "revision": "ca5e7d5e7f8e396666502f87de3c082b"
  },
  {
    "url": "assets/js/58.93b2d8a5.js",
    "revision": "cf27a4c913437930e2b2f289435eeb17"
  },
  {
    "url": "assets/js/59.050e95a5.js",
    "revision": "258f2ccdb1d615b22d15d926d8ceac1d"
  },
  {
    "url": "assets/js/6.a0364a73.js",
    "revision": "dcb3440c8ab1d068fdba22730700dd55"
  },
  {
    "url": "assets/js/60.4a6ecf36.js",
    "revision": "6724191fe610397080ef953fda00f947"
  },
  {
    "url": "assets/js/61.df439b23.js",
    "revision": "3d950600658f0bdf17d1936203dc5a5c"
  },
  {
    "url": "assets/js/62.44c4e09b.js",
    "revision": "119f4c0c0a584b56df977278cda63ca3"
  },
  {
    "url": "assets/js/63.be9cc438.js",
    "revision": "2929f795face02d9f6a06d463ea94c89"
  },
  {
    "url": "assets/js/64.db688e6d.js",
    "revision": "251cad1bddd5d66aaff2c63b8dcd9f3d"
  },
  {
    "url": "assets/js/65.1b048635.js",
    "revision": "ac72b6a5f8eee8199a914284d4d26a55"
  },
  {
    "url": "assets/js/66.04e0afae.js",
    "revision": "962038a35a2d7fae86e538746d33e60b"
  },
  {
    "url": "assets/js/67.56920b76.js",
    "revision": "5baf338abb8ce5dad651aab1c6f06126"
  },
  {
    "url": "assets/js/68.da13ed57.js",
    "revision": "308c038c67efd58f4b3336aa7e441a9b"
  },
  {
    "url": "assets/js/69.cd56f349.js",
    "revision": "d5df4e359cc10e2a6b5d1da2102db912"
  },
  {
    "url": "assets/js/7.307c6a5e.js",
    "revision": "9be81cc11d2651a9772f0896d6846423"
  },
  {
    "url": "assets/js/8.b41aa53d.js",
    "revision": "ced4ba0cc7d7737e571e170497f3ea18"
  },
  {
    "url": "assets/js/9.32775705.js",
    "revision": "fc76f1c5cc55b79733b24ebf7123de53"
  },
  {
    "url": "assets/js/app.4f851d87.js",
    "revision": "6ff6b0b1711ae484a4d7a8b94cbd77d4"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3b4a2217814cf7759207605782ed8df8"
  },
  {
    "url": "cs/compilation.html",
    "revision": "c4999f2a846fc2ee6f4bb41f9d10560c"
  },
  {
    "url": "cs/index.html",
    "revision": "773e83cd6bd7ada2a7d1c0c694d5cd2b"
  },
  {
    "url": "ee/about.html",
    "revision": "84768cb1846a7ca968cb39d29267fc68"
  },
  {
    "url": "ee/index.html",
    "revision": "0ab4d0838d19d0f7d5784a6ca9c1fa9d"
  },
  {
    "url": "ee/poe.html",
    "revision": "228c99543b25dd1ab157117bcf2dc829"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
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
    "url": "images/resume/blog.svg",
    "revision": "2132b282a62fdc63ec6084f47feeadca"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "e5b8dfd88d257ef59607ff503b46a890"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "e855e283466a7596679860477005b95a"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "3fcc2347207e5f9c79a335745ad05d55"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "d011739b9d43665bd81607dfeb7290b2"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "2c022c0cc22ccdea32ea67668608877b"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "879de372ee37b73974b6cdb1847c29d8"
  },
  {
    "url": "index.html",
    "revision": "a2041139c5c1a731f01b7e0001a6cf4a"
  },
  {
    "url": "others/about.html",
    "revision": "6cd74aa480206ee3a875e801ba7b1cb8"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "188d820e490074930222466dad2143c1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "a4b91abb302b1458a934f942725a9a3f"
  },
  {
    "url": "others/android.html",
    "revision": "e87fb11fed8053761b4564a01c04c3a5"
  },
  {
    "url": "others/chisel.html",
    "revision": "cbf036be19ba15522d4991d413793e6c"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "343167fc323a0ecb9f1a426adf7212df"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "68a7635903f9d1d8a62abc6de58a1ec9"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "bcf6ad3a08cef7bdcebc408720dc0b6a"
  },
  {
    "url": "others/css.html",
    "revision": "10b5f1f8985c4a8e307b48dfcbb370f7"
  },
  {
    "url": "others/docker.html",
    "revision": "cb52ce78eec76de3b1eb77d758fa30b8"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "99143f8ebcaf38eb581acfcea0dc5506"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c1ab359c7808bc2ed87c78c20e703bde"
  },
  {
    "url": "others/english-writting.html",
    "revision": "46d4da5a3b0d0990560827ed4ef61d75"
  },
  {
    "url": "others/esp32.html",
    "revision": "7111834954be8b12d5135ca658015653"
  },
  {
    "url": "others/freertos.html",
    "revision": "c03a588463d93741b562447590a77850"
  },
  {
    "url": "others/gns3.html",
    "revision": "45c999dba2c3ab8e52c76b925aa50a39"
  },
  {
    "url": "others/gps.html",
    "revision": "b389150b673f0af9dc2d07bd49dc0ba9"
  },
  {
    "url": "others/html5.html",
    "revision": "b11a7a207c4d58aab3e6977032cd4f0d"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c2dba89210422b4a2b68ce49b9cb404f"
  },
  {
    "url": "others/index.html",
    "revision": "44d7e480d4d19fc588b157356f0a046c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "35f0bdb6635c0ee00c0e673744667cf2"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d1e0ba69e642b3f8524781234a96c223"
  },
  {
    "url": "others/javascript.html",
    "revision": "e4b2c6e27af33cd3968cbc554b8f0086"
  },
  {
    "url": "others/json.html",
    "revision": "3872e5bd156d5afd4ec745da9a2c2896"
  },
  {
    "url": "others/latex.html",
    "revision": "1d748914c5ab392279ab5ef2b46e69ed"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "8d0e5c91d302a15e7105ad79b1d87e33"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "72905362d38e6337bc04e906296c8f5a"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "97badfac0c4bc79805f98ca6fc017d1b"
  },
  {
    "url": "others/lwip.html",
    "revision": "50bee58aeb7aaf712972a2c1de33a407"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "c49a6f4663f6655e695aa8dbef59a31e"
  },
  {
    "url": "others/markdown.html",
    "revision": "d24f8248ef9bdb4b5353ab3d64c97b14"
  },
  {
    "url": "others/matlab.html",
    "revision": "3b7e884c37a5632d43455b499207fa05"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "cf49a7095a5b447183f5b76d99986012"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "a00b0254c8c3b27ea7df6ea2f76bcfd0"
  },
  {
    "url": "others/network-security.html",
    "revision": "72c098378c2586a3bdeb5903de94bd39"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "c4b8c9de6d14eceff3ae4882adc3c45e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "b1d110b0cd6721fda2c3c95e3be6fea8"
  },
  {
    "url": "others/pyside2.html",
    "revision": "afc71ab829cce62bcf5df704916de188"
  },
  {
    "url": "others/python-socket.html",
    "revision": "37e489f97c7e36f696f9497b4cf008a0"
  },
  {
    "url": "others/python.html",
    "revision": "1e5715a3e3ef5bd2f441c58bfb1c8d03"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ebb1ff42111c6956a3d20ec27c523a90"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b3fdd14b3a58833e530ec861fb0e162a"
  },
  {
    "url": "others/qt4.html",
    "revision": "e7a2618bc98fc1df8a9262a0172d1f11"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "84aae5c1b0f0358b77e3486736050a50"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "2f161dcbaf57e76a8c7aeafc093b684d"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "eae843e5da116903c7b0d50e518ff3c7"
  },
  {
    "url": "others/sd-card.html",
    "revision": "6a21b07a407b67508ab036817202cea6"
  },
  {
    "url": "others/sdn.html",
    "revision": "eb5b85cc7d6d3c92dbc93c380bf2f093"
  },
  {
    "url": "others/star-uml.html",
    "revision": "40c6b5ed862aebdd731daf1cadac2454"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "eb57ac0922f7bda7ad1b2899605c33c4"
  },
  {
    "url": "others/verilog.html",
    "revision": "bffbd8d404e2b3b98d2d22e7830dfd35"
  },
  {
    "url": "others/vue.html",
    "revision": "75866ce2cc7a432e14af5a2b3a985bd1"
  },
  {
    "url": "others/w5500.html",
    "revision": "7e0f8e86b02ada3f00e6248359573aac"
  },
  {
    "url": "others/w7500.html",
    "revision": "3ea6c8fb03120bb138bf07a14cf30a01"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "62cc4d5d7f7276824d99d74125585148"
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
