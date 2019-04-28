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
    "revision": "c88f594079e6c66e6ed72a916b3a34f8"
  },
  {
    "url": "about.html",
    "revision": "a7e915788ce649af4cbe0199d61e8f57"
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
    "url": "assets/js/13.4bfde5b4.js",
    "revision": "c9db0dd8fd57ac20daab197376ac21ed"
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
    "url": "assets/js/18.49c51782.js",
    "revision": "64612bdd1739812b2a3cd85aa77a923c"
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
    "url": "assets/js/22.c4c3fb5e.js",
    "revision": "466c4efd0259cfbdfcba6f70a87810ce"
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
    "url": "assets/js/27.5a8b63f9.js",
    "revision": "35e23f8a5c6a9e1a3c2e6563abe00bfe"
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
    "url": "assets/js/33.cf8d00da.js",
    "revision": "de4c009331ae5bd2887155d4ca084369"
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
    "url": "assets/js/36.1fcde07c.js",
    "revision": "3d7326f7a9e559a87185146f6055643b"
  },
  {
    "url": "assets/js/37.ee8fa185.js",
    "revision": "548027189a0d6dfadf22f5b596737cbb"
  },
  {
    "url": "assets/js/38.7d3f6057.js",
    "revision": "eca3ed8c85ad02a5015d15cf4f2791f0"
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
    "url": "assets/js/40.2d929624.js",
    "revision": "286dd41b0fee9612ed921028dc2fd34b"
  },
  {
    "url": "assets/js/41.c34a1e57.js",
    "revision": "09b7b3079e04fafb1b0458b3e475af2a"
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
    "url": "assets/js/45.3f4b474c.js",
    "revision": "fdee051b924d816db1231be8a3290509"
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
    "url": "assets/js/48.2ee0be6e.js",
    "revision": "27970bd9d749ceb9e91ed8b24b38a8a1"
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
    "url": "assets/js/50.07abbf60.js",
    "revision": "9a68d38a0b81e688a5181e7076e49166"
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
    "url": "assets/js/53.9de0797e.js",
    "revision": "fc57702272357741a0ee6c85d1a1a891"
  },
  {
    "url": "assets/js/54.3b58aa0b.js",
    "revision": "eea92c5ffdde67bb4ca9e720895de81c"
  },
  {
    "url": "assets/js/55.79d0b9a5.js",
    "revision": "5189e2e94c9d7a4b8b2df42e6fc0a4eb"
  },
  {
    "url": "assets/js/56.882fb1be.js",
    "revision": "5c6ea1b090a5ca9e24b58f9253180e78"
  },
  {
    "url": "assets/js/57.6e4ab174.js",
    "revision": "6809add63b2650a9cf49c0163481f9c2"
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
    "url": "assets/js/61.b98c2d97.js",
    "revision": "66e45d829fa15d91c7ca469116329b25"
  },
  {
    "url": "assets/js/62.f647e052.js",
    "revision": "28105eb385da87c8a349dea5298caf2d"
  },
  {
    "url": "assets/js/63.1f4e0bfd.js",
    "revision": "e591cae14f0ad5146b6cbb7c2d1eb3a8"
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
    "url": "assets/js/7.11b59aaa.js",
    "revision": "cc57db9a7f8c6f5f6ea2f6980b3f550d"
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
    "url": "assets/js/app.d6bf4dc1.js",
    "revision": "adeeb3236de92f745ad7bb32e66336ed"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "c502f30db6cf159082a320937de42789"
  },
  {
    "url": "cs/compilation.html",
    "revision": "a447057310a4d7a25a4fb5008a670887"
  },
  {
    "url": "cs/index.html",
    "revision": "896ae52c75d5efc6494093be4c0d3eeb"
  },
  {
    "url": "ee/about.html",
    "revision": "b8de0177633d03d975d4623b634dee6c"
  },
  {
    "url": "ee/index.html",
    "revision": "66a4e36e98f5c23e46b4ba0ca05c027b"
  },
  {
    "url": "ee/poe.html",
    "revision": "d3a190e8f754f54628788d3385be475a"
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
    "revision": "0664d850e3eb48c6d079ac68ba7fcbe2"
  },
  {
    "url": "others/about.html",
    "revision": "a77bd275f15d0e0ccbd0cec0c8f50be1"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "e405416e859878e6c913fe6da7a38533"
  },
  {
    "url": "others/android-studio.html",
    "revision": "fbe06c4bdc5562230e3f45fefbff75a0"
  },
  {
    "url": "others/android.html",
    "revision": "d7c0d2af24e60676b7569f6140ddacf1"
  },
  {
    "url": "others/chisel.html",
    "revision": "e0a81bf1b2e398d213ee8861013fd2e5"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "82aa69883b41dbf80a9df142a6b329df"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f84fdf5d82ff55ad48ffba22040e12a6"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "25db5708f5b0953f91298d321f91373e"
  },
  {
    "url": "others/css.html",
    "revision": "9b8fb783700e3a58f0f237c01e9de064"
  },
  {
    "url": "others/docker.html",
    "revision": "ffed495e90d9fe28734da86336f02c4c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ab543ca6d4d8c1407294d62e13d84370"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a92690959892b78b3bc1f45b3de0d1a4"
  },
  {
    "url": "others/english-writting.html",
    "revision": "baebb92dd28a6769510d701748edc80c"
  },
  {
    "url": "others/esp32.html",
    "revision": "00ef97c01973c9f4de58ef41beb86276"
  },
  {
    "url": "others/freertos.html",
    "revision": "a919ac7df089282b33a285590047af98"
  },
  {
    "url": "others/gns3.html",
    "revision": "992b00cfcca3e146f5bfaafada76497c"
  },
  {
    "url": "others/gps.html",
    "revision": "1f2ce453c229892dd910de7bd93931ae"
  },
  {
    "url": "others/html5.html",
    "revision": "60606b98358607ea04f0f87cc8601365"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "bdba51492f503283ac767d298bdcf600"
  },
  {
    "url": "others/index.html",
    "revision": "a46c65e71178626a799ad45277e8b9be"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "49478bbafe5eb991e04b0ce42e73d638"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "0163b476e4f31802e069ce0487f57bdc"
  },
  {
    "url": "others/javascript.html",
    "revision": "7bbeb3cd56554baf7273a55ddf14e0ef"
  },
  {
    "url": "others/json.html",
    "revision": "964492885e61787b7af2f16c2b6dc69a"
  },
  {
    "url": "others/latex.html",
    "revision": "9ac8c3daec0910eb86bbbd88e56f468a"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "e005b98bc8b25fd2b50964bec8216892"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "cc6c380e8d0303eb12e55f39ce398011"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "cecd9acec1815bb4b655b5c2c7e31256"
  },
  {
    "url": "others/lwip.html",
    "revision": "4dda9f68c528e9a9a25975d249f78a26"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7fe42dc92ebb99f772f8db7e81ce5dea"
  },
  {
    "url": "others/markdown.html",
    "revision": "21c62df762c7ea94f45d52555f4a895a"
  },
  {
    "url": "others/matlab.html",
    "revision": "fb85a8f30b7e37eee5ad0bb9d28b413a"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "c13bfa479b6e54e2b6e66404e6065bc9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c339c80f3389cb510d52ea711874ea35"
  },
  {
    "url": "others/network-security.html",
    "revision": "de1b2ca32946877dbda55bc4a7933401"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "4a8c66d731ff8462868450980d6d5e76"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "ff8ba55960e90c180263891ba1c03a6c"
  },
  {
    "url": "others/pyside2.html",
    "revision": "d493ef4812f7e9b7233aefded4deff49"
  },
  {
    "url": "others/python-socket.html",
    "revision": "c79f14d78caf5b39dc1d97f5fda62de5"
  },
  {
    "url": "others/python.html",
    "revision": "119172f292a0096f8f1deb425eeb19f5"
  },
  {
    "url": "others/q-learning.html",
    "revision": "3ffb165f66b404eea05f202bf8adc65e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "fed7fe88e527a9ef607016a11d7083ed"
  },
  {
    "url": "others/qt4.html",
    "revision": "ef227e085afea36d0f9ed78728b86615"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "c6196623308c87c4b8cc3271988d4e9d"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5cc5d06cfaa44089cd7b3e6ccf7427ea"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b73606a7bb247959a6aba78104a6aa6f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "eb45022bf356973c02625e3970324f8f"
  },
  {
    "url": "others/sdn.html",
    "revision": "7b39313ce36685c0368c8b3497f745d6"
  },
  {
    "url": "others/star-uml.html",
    "revision": "90269633212dba2d23744480c5254f6c"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "31d2dee62c876a216e2405ce422251c5"
  },
  {
    "url": "others/verilog.html",
    "revision": "11075ca77dedd7fbe56c8ab0ef2b22e7"
  },
  {
    "url": "others/vue.html",
    "revision": "8dcd4ac4e9f431e1efad84d86311a344"
  },
  {
    "url": "others/w5500.html",
    "revision": "766124893211b0ad8c676d0634628786"
  },
  {
    "url": "others/w7500.html",
    "revision": "fc83b59f7da47afd5edb262d49f1eca2"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "aea9a1a328caa46cdb0bc8fafc08ca53"
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
