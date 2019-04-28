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
    "revision": "c6cabfbe81461a5d743977f39eb0f3ed"
  },
  {
    "url": "about.html",
    "revision": "e3574f867b511b88eb87d1dd2e298e04"
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
    "url": "assets/js/13.98aba16a.js",
    "revision": "6d4d20f71c3f21d23f58b615c25f4249"
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
    "url": "assets/js/19.54ef75b4.js",
    "revision": "ae4876589650dc173cd653088c5f20ae"
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
    "url": "assets/js/22.b46535ec.js",
    "revision": "ee50aee10386f7c8cadcef592c859932"
  },
  {
    "url": "assets/js/23.60e2ca35.js",
    "revision": "460872d69592445a4d3c646e771e98c6"
  },
  {
    "url": "assets/js/24.2d58c046.js",
    "revision": "ae8d1d574e85d16cc475e3f8615a62c5"
  },
  {
    "url": "assets/js/25.1a89c386.js",
    "revision": "d43deb0dd25d9efd14b1bd28e23ad670"
  },
  {
    "url": "assets/js/26.b90e1900.js",
    "revision": "58f1cce948a81e62d14870d17f6536d0"
  },
  {
    "url": "assets/js/27.7dcb3ae2.js",
    "revision": "b2c0417a8c0a0a6109587372302f377e"
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
    "url": "assets/js/31.632f3fa0.js",
    "revision": "0f4a9df994b655c03cb7a49a51e4f140"
  },
  {
    "url": "assets/js/32.a993aa84.js",
    "revision": "c9cfbd8f0cf32d4b0ea89b8932bd59c7"
  },
  {
    "url": "assets/js/33.5e502933.js",
    "revision": "ce8b78c2bd24a57be2bd8dc380432a1b"
  },
  {
    "url": "assets/js/34.240c76cb.js",
    "revision": "8cc20ff6f0298dd06005ca43ca3bdb6d"
  },
  {
    "url": "assets/js/35.b5009de5.js",
    "revision": "c134e572017e71174a1388ed73870019"
  },
  {
    "url": "assets/js/36.ea014eb4.js",
    "revision": "d3be72610947808d49c5c50ce0d3db82"
  },
  {
    "url": "assets/js/37.ee8fa185.js",
    "revision": "548027189a0d6dfadf22f5b596737cbb"
  },
  {
    "url": "assets/js/38.cee26d2f.js",
    "revision": "8074fe5d3832be15993390f09d9ca066"
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
    "url": "assets/js/40.f72953ab.js",
    "revision": "001c6008b34223db195e5d3d229a0c59"
  },
  {
    "url": "assets/js/41.cf38c126.js",
    "revision": "0738e37051d7a3b8335592ba16c00acf"
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
    "url": "assets/js/52.76637ce6.js",
    "revision": "67a785916acc063b17ef55e9364776f6"
  },
  {
    "url": "assets/js/53.9de0797e.js",
    "revision": "fc57702272357741a0ee6c85d1a1a891"
  },
  {
    "url": "assets/js/54.5d195733.js",
    "revision": "7b9eba8b097773936656685c4297e7e6"
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
    "url": "assets/js/57.165d80f4.js",
    "revision": "557227f81cc857ef501ca54d2bb35e51"
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
    "url": "assets/js/61.4f4d2139.js",
    "revision": "9db649102e15eb9dd7cca23cb5b82f28"
  },
  {
    "url": "assets/js/62.6c8e136c.js",
    "revision": "b4c387f655293ee3368f41223f91b35d"
  },
  {
    "url": "assets/js/63.6bb372b1.js",
    "revision": "3f7222b5339e3fa7dfb2e46bc8b1d8dd"
  },
  {
    "url": "assets/js/64.8e611e8b.js",
    "revision": "bbcc9dec756733c833d97c51703969d3"
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
    "url": "assets/js/7.3194dda5.js",
    "revision": "7c00e6c22cdd9dc5bc3924a1bbac4080"
  },
  {
    "url": "assets/js/8.d9d04462.js",
    "revision": "15958e220125e67edde720ad99d481de"
  },
  {
    "url": "assets/js/9.32775705.js",
    "revision": "fc76f1c5cc55b79733b24ebf7123de53"
  },
  {
    "url": "assets/js/app.98267e72.js",
    "revision": "de28885a579efce7da4523409dc28f25"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3c6cb2f0ada47fac8c643e790568feb1"
  },
  {
    "url": "cs/compilation.html",
    "revision": "bd90645e03076ff20e18c268a0668caf"
  },
  {
    "url": "cs/index.html",
    "revision": "fec590105ca448f8f326bdf29dec8d9a"
  },
  {
    "url": "ee/about.html",
    "revision": "6fa32d8397efa43bd3f25c18c817e914"
  },
  {
    "url": "ee/index.html",
    "revision": "01fca9a8c7fd939686ead662eda1c0a4"
  },
  {
    "url": "ee/poe.html",
    "revision": "e59c1a6577f784456215f8802d21bd7b"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/briefcase-solid.svg",
    "revision": "9fd44636044a485b424f8c0e1167e82c"
  },
  {
    "url": "images/check-resume.png",
    "revision": "03ee6d4b9726599f930720057819c6aa"
  },
  {
    "url": "images/envelope-solid.svg",
    "revision": "9dcc304269103819c8b58459454d1585"
  },
  {
    "url": "images/github-brands.svg",
    "revision": "3959958a15f3512c7edb9f28e3707417"
  },
  {
    "url": "images/graduation-cap-solid.svg",
    "revision": "1df86bff60eadf99cd8091d0264e1fd1"
  },
  {
    "url": "images/how-to.gif",
    "revision": "836f64bad56ee188fa339a73f93af2d5"
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
    "url": "images/info-circle-solid.svg",
    "revision": "d9a24d05eed3db4d122adcaf0ac3d956"
  },
  {
    "url": "images/info-solid.svg",
    "revision": "17861ffead670d4056c589854f7e795c"
  },
  {
    "url": "images/phone-solid.svg",
    "revision": "b7ea3cb664eebd9f40c8c405446903a7"
  },
  {
    "url": "images/preview.png",
    "revision": "81ebc06eaec0ebefcbee6ddbc136f6ae"
  },
  {
    "url": "images/project-diagram-solid.svg",
    "revision": "c2163f387803156881f6935657a03cf5"
  },
  {
    "url": "images/rss-solid.svg",
    "revision": "1332ad9304047da48e97e17e1f92d288"
  },
  {
    "url": "images/tools-solid.svg",
    "revision": "d6d3c47f133ca5124e14af3bd6038ea9"
  },
  {
    "url": "index.html",
    "revision": "e1feee82181e202f16c4c537536face5"
  },
  {
    "url": "others/about.html",
    "revision": "de8d3de0bff8427a6c7422f697f7f0e0"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "b4d8f90d6adaa530aa96a480f185b61d"
  },
  {
    "url": "others/android-studio.html",
    "revision": "d8b40014ca5c7fe387e80b8a9c924cfb"
  },
  {
    "url": "others/android.html",
    "revision": "2a9a455e12bb45f0beeb6aa0445b7f42"
  },
  {
    "url": "others/chisel.html",
    "revision": "e8f41565109f3426fd1dc1e54a09cfbf"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "528d1a04d3ca69d1369c08b1ac0d7f8e"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "45ba02dd9e2845ac655a0463b09012c0"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9f436abe75d954fd42a0151ea46909eb"
  },
  {
    "url": "others/css.html",
    "revision": "6a51a7221e77c95efe3dda61fa05dc95"
  },
  {
    "url": "others/docker.html",
    "revision": "2994d4c2c20f2c878e5b841c5601c297"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "1dced2fd583f8a28490077a4d4cabfb6"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "e8c48ea545e11c3b7ffdaef188814a95"
  },
  {
    "url": "others/english-writting.html",
    "revision": "4044ebb6ffe1e2ead369b6d5c257d77a"
  },
  {
    "url": "others/esp32.html",
    "revision": "c8363dcb7e92d90b2768c862c6ed16d8"
  },
  {
    "url": "others/freertos.html",
    "revision": "7e075988dd1ef6c8eeffde56c1773606"
  },
  {
    "url": "others/gns3.html",
    "revision": "671a8bc345844c93c7df4682ab4b6e14"
  },
  {
    "url": "others/gps.html",
    "revision": "21980ac2eb7449d73932383e6349d119"
  },
  {
    "url": "others/html5.html",
    "revision": "be1a1e14aca64c52323973ff0aad02d9"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "d0a1703605baf16190ab46ca0730301d"
  },
  {
    "url": "others/index.html",
    "revision": "85b746c7f4e74b4fcad7c423826de3c5"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "852bf13d143477f79ac9fc1304c9c175"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "166a4ee9857e8b65fc4a11e67cbd383d"
  },
  {
    "url": "others/javascript.html",
    "revision": "932fbf858fa5964492cb72bd8b5f5bd2"
  },
  {
    "url": "others/json.html",
    "revision": "6a46897b11d3660ecb60308b9fca6b39"
  },
  {
    "url": "others/latex.html",
    "revision": "c3abfca92bdbac7d4c4a78bc1d990f72"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "753f6f3578ca1dad4f92583554c58649"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "174f63df12dc0be0993246483c6188bc"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "ee186167c5953a3018d84cd3d88a8e59"
  },
  {
    "url": "others/lwip.html",
    "revision": "d4cc52affa6e13e7e76e2e1c99cfe7b8"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "95ef0bed60f1155dbf12cfbab8a8fd48"
  },
  {
    "url": "others/markdown.html",
    "revision": "0e3cfe255730499d63450b3fdda1904f"
  },
  {
    "url": "others/matlab.html",
    "revision": "668df557bb3ebfb55f4240c3adf4f5e9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "2640438a0cfb3a62997c048a1460be73"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "9715e191fbf6138276ab8fced17bb674"
  },
  {
    "url": "others/network-security.html",
    "revision": "9dc60ce54c74c41c69d03ed9de2c0c41"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "92b14d19d583b76a44258f5cc6d88591"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "962df7ba7ff47bf4a9f6e37f6daf8b01"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9cc462f394297687c52832075ac486ba"
  },
  {
    "url": "others/python-socket.html",
    "revision": "d65ed43b2a309079178b15089be8be31"
  },
  {
    "url": "others/python.html",
    "revision": "d0c8474c6f6670300fa1a180e97a0a4a"
  },
  {
    "url": "others/q-learning.html",
    "revision": "a48fcf121a7b43c75b69f1cd713546ff"
  },
  {
    "url": "others/qr-code.html",
    "revision": "041e312b4c8158c41488700bb2c84566"
  },
  {
    "url": "others/qt4.html",
    "revision": "11db032fad152215085b3264f7047c2c"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "27d1ee334e9a80c60e029952c826cfc5"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "41221a39b4a4b45e280bfc1ea52a4533"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b4dd158217b908f25322d1cd540a04aa"
  },
  {
    "url": "others/sd-card.html",
    "revision": "646dc0e8ee86bd35e1d4b6348b3963b8"
  },
  {
    "url": "others/sdn.html",
    "revision": "1e97ccf86bdd8a8554bfb3d8d260cd10"
  },
  {
    "url": "others/star-uml.html",
    "revision": "3a86049cb9bb7b8bfde4ea5d269128ec"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "c6ec25c017f87d40e2c77e6424d635a9"
  },
  {
    "url": "others/verilog.html",
    "revision": "4eaa787f9bf36e150645f607f0b51933"
  },
  {
    "url": "others/vue.html",
    "revision": "8fb4662594e6505d82ddfc3780114bde"
  },
  {
    "url": "others/w5500.html",
    "revision": "d593e7dc2fb95da2d690712e88f98d18"
  },
  {
    "url": "others/w7500.html",
    "revision": "7c53d72eeef4c07c965e89b55a031d4f"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "af9f89a3b50d542aaf20405d1c327bdb"
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
