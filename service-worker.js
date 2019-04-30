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
    "revision": "e9d303e4eaf821c87797efe1c50a87d1"
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
    "url": "assets/js/10.ed604406.js",
    "revision": "44c16dd9186116ef899af936f61d3e32"
  },
  {
    "url": "assets/js/11.59c6397a.js",
    "revision": "1f776060711eaca4bed51de539ccd21d"
  },
  {
    "url": "assets/js/12.8cc64600.js",
    "revision": "2075c89607a278c91acd5691d7ad3c4e"
  },
  {
    "url": "assets/js/13.2db54e59.js",
    "revision": "73350e4ed01f22a0ccb52d833bde2cbe"
  },
  {
    "url": "assets/js/14.3034a496.js",
    "revision": "f9bd495a3b72c555d07e484eae1cbd23"
  },
  {
    "url": "assets/js/15.8c0968a2.js",
    "revision": "db7369d1022db940127d5f1332a4a5e7"
  },
  {
    "url": "assets/js/16.1e0835f9.js",
    "revision": "2e4aa56b7575afb9cb8ddc215a4973c1"
  },
  {
    "url": "assets/js/17.682910b6.js",
    "revision": "7c6079378b7a50a425d1fa9dea558681"
  },
  {
    "url": "assets/js/18.a2351d2a.js",
    "revision": "82d64994512e981aa31b37912b463e4d"
  },
  {
    "url": "assets/js/19.cf63efdf.js",
    "revision": "3ea2d26a12d83281f09a5b25b61eb657"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.21d43680.js",
    "revision": "804866abbcf34bca9240443f600c9cb6"
  },
  {
    "url": "assets/js/21.73d653b5.js",
    "revision": "ad28b8571948352fc88d9aa8c76bcde5"
  },
  {
    "url": "assets/js/22.97a5e37d.js",
    "revision": "84bc6e8619c264ffe539510751e11f43"
  },
  {
    "url": "assets/js/23.7786899f.js",
    "revision": "be874b91298b1924f64316b43d6cac3b"
  },
  {
    "url": "assets/js/24.dc627132.js",
    "revision": "d974eae5aba568bd4e43c0a377467d43"
  },
  {
    "url": "assets/js/25.a101bc2b.js",
    "revision": "813d8874d388790ffecdcd022419f5da"
  },
  {
    "url": "assets/js/26.fcc2d373.js",
    "revision": "0cd2b69db3c6a9d0a6b28a07f427b227"
  },
  {
    "url": "assets/js/27.738b981a.js",
    "revision": "8edc4f44afc1fe8f406124eb5a4f7659"
  },
  {
    "url": "assets/js/28.9cce63f8.js",
    "revision": "e3526d7c34f8bd7808c171a32628ef04"
  },
  {
    "url": "assets/js/29.6691870d.js",
    "revision": "c71bf3b6d1c53271f743f4f689405f90"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.eeee9971.js",
    "revision": "dbda7c4b5a2b1e2eb8191f7d57202be7"
  },
  {
    "url": "assets/js/31.affaa2dc.js",
    "revision": "110b60540e20f37e82a4eb982f2f9045"
  },
  {
    "url": "assets/js/32.ff3fa55a.js",
    "revision": "c72da129e3acaf9e26ddcd04538cced8"
  },
  {
    "url": "assets/js/33.ae3b46fc.js",
    "revision": "bd72a3f20b888a5b5984f1aba7938b1c"
  },
  {
    "url": "assets/js/34.622d4045.js",
    "revision": "c4d1a127f01f54bf969a2749c2f7acdc"
  },
  {
    "url": "assets/js/35.258d6513.js",
    "revision": "1fb7d63192d1fb460f86d78e5304406d"
  },
  {
    "url": "assets/js/36.ff8bbb99.js",
    "revision": "b10ad872ad8af0b5d8a95685f69638d5"
  },
  {
    "url": "assets/js/37.3b6d85ca.js",
    "revision": "2bc8008fe849f4368ac398ba50fb07e7"
  },
  {
    "url": "assets/js/38.32d080a5.js",
    "revision": "e4f75052a8a296b876a03457bb92e6e3"
  },
  {
    "url": "assets/js/39.6493918c.js",
    "revision": "9d0f3c9b56a027a8c58f4b31a8b3bc35"
  },
  {
    "url": "assets/js/4.7131e971.js",
    "revision": "0f3830ac0354e283468823611896d3ad"
  },
  {
    "url": "assets/js/40.94db0e68.js",
    "revision": "f888435dc1c511b26aada575414111fd"
  },
  {
    "url": "assets/js/41.16e48cb6.js",
    "revision": "b3a3fe4db41b29f7781ce08ac9e8cc20"
  },
  {
    "url": "assets/js/42.8266f98a.js",
    "revision": "beeeca0c72ca1afeb898052e08a6c323"
  },
  {
    "url": "assets/js/43.91ac53ea.js",
    "revision": "8072dffdf3da2cb026e23f304655ace3"
  },
  {
    "url": "assets/js/44.188f8677.js",
    "revision": "72301261c83fff9f9ee5863a97767555"
  },
  {
    "url": "assets/js/45.478c6297.js",
    "revision": "9b7f00dff7bc1cd5c8afd565fd27355a"
  },
  {
    "url": "assets/js/46.80abc8be.js",
    "revision": "d0a3abf5efb718d845170d4e9adf5c2b"
  },
  {
    "url": "assets/js/47.aa7bc7cc.js",
    "revision": "d15e502cb151ecd250085f6e27273bd9"
  },
  {
    "url": "assets/js/48.b462ae25.js",
    "revision": "6e627e97dad052017f6096910ba3fbef"
  },
  {
    "url": "assets/js/49.42eed51d.js",
    "revision": "f8a8d40f80a3dbf92d05d9c0f3384395"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.1eb1aa33.js",
    "revision": "e7c163fdc1e58a35d1902397ff46cd5a"
  },
  {
    "url": "assets/js/51.977931fc.js",
    "revision": "e09835af818336aaae9eb8c9630e3ab8"
  },
  {
    "url": "assets/js/52.64446532.js",
    "revision": "e058657f10eeb79aef397a24d63057f6"
  },
  {
    "url": "assets/js/53.9bcc5382.js",
    "revision": "9e5c466e5971f7a346baee6c53f42869"
  },
  {
    "url": "assets/js/54.f192c243.js",
    "revision": "35a85ab94553c4f24f5fda7c4cbc6558"
  },
  {
    "url": "assets/js/55.facf783d.js",
    "revision": "f5f0c640cffb6952a9743d18675881b8"
  },
  {
    "url": "assets/js/56.322c339d.js",
    "revision": "22b2876f116b29c351e05432be6322bb"
  },
  {
    "url": "assets/js/57.38c26893.js",
    "revision": "a3a9171c13c7e5ab03b14dff71e5d37a"
  },
  {
    "url": "assets/js/58.bd545169.js",
    "revision": "4947978d26c9096fef46922722d5c92c"
  },
  {
    "url": "assets/js/59.e0a14351.js",
    "revision": "467c50a864668ad68bdebce04550d76d"
  },
  {
    "url": "assets/js/6.bc9d54c4.js",
    "revision": "99d6b01401c68ea1c750022ca6a6e27e"
  },
  {
    "url": "assets/js/60.7792cc6d.js",
    "revision": "967af993010138988099563a71a34960"
  },
  {
    "url": "assets/js/61.d9ad6105.js",
    "revision": "36997876194583f024c30c0c4fd97fd4"
  },
  {
    "url": "assets/js/62.de3a689a.js",
    "revision": "e6e91fb3bc716f3073a12ab1f4905d13"
  },
  {
    "url": "assets/js/63.1e69131c.js",
    "revision": "0b0d7491f0ad365e66d95861f473fe8d"
  },
  {
    "url": "assets/js/64.7c78e369.js",
    "revision": "1e553dfd516fb6e46f17590e8b012bae"
  },
  {
    "url": "assets/js/65.d95bf0ff.js",
    "revision": "c51a171805fa669286ed926ba1d3e2d3"
  },
  {
    "url": "assets/js/66.a3e61d41.js",
    "revision": "de28c9272811160cf455b02af1e67c46"
  },
  {
    "url": "assets/js/67.991e91bd.js",
    "revision": "5e29a03e58ba9cb6599497ef1e92c5a3"
  },
  {
    "url": "assets/js/68.5a419adb.js",
    "revision": "1aae9132b7c8238c71f00e60494bc892"
  },
  {
    "url": "assets/js/69.cd56f349.js",
    "revision": "d5df4e359cc10e2a6b5d1da2102db912"
  },
  {
    "url": "assets/js/7.0655ced2.js",
    "revision": "c7402f05dd02b42f487ebcbefb4dbaf4"
  },
  {
    "url": "assets/js/8.ab17c590.js",
    "revision": "8257cfaf2b642696f541a5efc72a78f9"
  },
  {
    "url": "assets/js/9.f670172e.js",
    "revision": "03332a0c24984cb9107e81e0448ef140"
  },
  {
    "url": "assets/js/app.35133deb.js",
    "revision": "2431e2df831c27c94fbd8fed940ffde7"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "c02fc29206e7573964973ba94318980c"
  },
  {
    "url": "cs/compilation.html",
    "revision": "92b9f1df329b055d5440069fb4891b4a"
  },
  {
    "url": "cs/index.html",
    "revision": "f357e5539e4ee89ca6e0f94cab13626e"
  },
  {
    "url": "ee/about.html",
    "revision": "5e9ea50650db0a5a1347f7d7149718ac"
  },
  {
    "url": "ee/index.html",
    "revision": "01cf7b8a2429273a3375a5a568b6ebd1"
  },
  {
    "url": "ee/poe.html",
    "revision": "1522011be2ee659353177d17d21353ef"
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
    "url": "images/resume/ai.svg",
    "revision": "f1dafe8922f7dca830e4ea40abe5a814"
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
    "url": "images/resume/electronic.svg",
    "revision": "bbc07af00a040961f7610db77ec955f8"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "46552f138017b1941df626e468d77937"
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
    "url": "images/resume/hobby.svg",
    "revision": "1958411e2d6842c6ed08302a14c944a1"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "81bb4f03b3167297e7dfa9efc25e242b"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "3769543541ba02f40a922818ea7f9425"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "6ba074a9f3d4d8dad64511a293c7dccf"
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
    "url": "images/resume/writing.svg",
    "revision": "bbf32bc943b50af3e456a375567a7f03"
  },
  {
    "url": "index.html",
    "revision": "3ad66af1fb6cb9325750f4a243c26794"
  },
  {
    "url": "others/about.html",
    "revision": "c77232ca1c2e31351c0495fd5220906e"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "28f9fac9c6966d14db80cb58576e7a4a"
  },
  {
    "url": "others/android-studio.html",
    "revision": "7e9eb51bbce3eeed0bd7202d7dd8baca"
  },
  {
    "url": "others/android.html",
    "revision": "b64c9f51394f7a391655cfdb1dc690d5"
  },
  {
    "url": "others/chisel.html",
    "revision": "f2e8475f89d7473f763a03e018f7dffc"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "943e0f9cfb2c96087ff55710f566a5f0"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f51a536b350bbe25927dc20dc4a91a79"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "1e92c898c4042f053576e9a7c6103192"
  },
  {
    "url": "others/css.html",
    "revision": "608cd52538d9ddfca1ee5ebe11f34465"
  },
  {
    "url": "others/docker.html",
    "revision": "b26dccf8484ea6ad98f37928316201de"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "b2d7aa0156e35d4a845248ca925f94ed"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "02e5c317bfb1dae5ebc35a93ff8f1eb2"
  },
  {
    "url": "others/english-writting.html",
    "revision": "31018df897f33d3c4080bde6e3e761f0"
  },
  {
    "url": "others/esp32.html",
    "revision": "fd991bf810868a626a59d86a7a074b90"
  },
  {
    "url": "others/freertos.html",
    "revision": "122823f314f53af65f197c39f2ca615d"
  },
  {
    "url": "others/gns3.html",
    "revision": "45fbb1d7e70722a69b5f6041df398b4b"
  },
  {
    "url": "others/gps.html",
    "revision": "63886ae81d162620e744d9b813cb1b05"
  },
  {
    "url": "others/html5.html",
    "revision": "18d059536f8de7ac383d6b49a4c5b3ca"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9b96364a00a2dcfb3584530376ea5f56"
  },
  {
    "url": "others/index.html",
    "revision": "12f31454536c5bba54d7401504107b1d"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "1a2a58a31d8dc9ea9947fb613c0255fc"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "51f0fe96d007ac447bba4ece86bc3bc0"
  },
  {
    "url": "others/javascript.html",
    "revision": "2cf0fdc921ee6723452b7c7f04c77946"
  },
  {
    "url": "others/json.html",
    "revision": "b657bef3b6c00c1b0bef75fed4215ad5"
  },
  {
    "url": "others/latex.html",
    "revision": "7b17ea93f33a65921353300095704c10"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "bf20e01ad9dd0dc4311b93d8ae068e24"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "cf850ee4a59eeaf617089d0de7ae4424"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "afdd9bb49ad1839e0d5c6412b888d1ba"
  },
  {
    "url": "others/lwip.html",
    "revision": "fd73e0ed7f7748bb2c1689e45ccb3f02"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "800b307d0c04fcffd8a0636265b63488"
  },
  {
    "url": "others/markdown.html",
    "revision": "d2d7a9ee90d8fb1b7f54add18ac01e60"
  },
  {
    "url": "others/matlab.html",
    "revision": "40323378dd496393b7ce37d32ef340b5"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a1b91bbf2a6216d4de16043c3cf285a2"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c531c7eccd58bc8c629300b02e150400"
  },
  {
    "url": "others/network-security.html",
    "revision": "de4ac5934fa59d4c6e5c5516563de360"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "e9d9aabc5f6b84f69bf2b2e360678c4a"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "9ada6a982533b2a7f6a09446260910e3"
  },
  {
    "url": "others/pyside2.html",
    "revision": "61a6a721d43508b6caff2208d9ab669d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "c027086fb994bf3a96790e3d68644342"
  },
  {
    "url": "others/python.html",
    "revision": "41639d47cdf3165e580f1b142ad23fe6"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e9bb56d2fe213f30433048b97c1cc573"
  },
  {
    "url": "others/qr-code.html",
    "revision": "00e16d1b1fc5cd417fb876cb8e7deb20"
  },
  {
    "url": "others/qt4.html",
    "revision": "3dd04dc09dbb764098c3a6a45e85093d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "40fa6bdb07cfdf38e947943c079eb98a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5c536957e7affad8c9da2bcd31a64035"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "9d9e474b23d42d564d8087c4b6e19268"
  },
  {
    "url": "others/sd-card.html",
    "revision": "c4374319dfc6839e0cd8739d854210a1"
  },
  {
    "url": "others/sdn.html",
    "revision": "a4d1883025db02903cbafd0beedffcfe"
  },
  {
    "url": "others/star-uml.html",
    "revision": "75540d57ef0b410c6d37f013b290ed0a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "8ab5fe4edc93f84e8d47c1bb86e0c6ad"
  },
  {
    "url": "others/verilog.html",
    "revision": "ca544dedcea7f7cfddf5b9627e02237b"
  },
  {
    "url": "others/vue.html",
    "revision": "6782e2eae5676a36ea60f0ab2acdd120"
  },
  {
    "url": "others/w5500.html",
    "revision": "aa92c483531042ac0950eb0599b15a96"
  },
  {
    "url": "others/w7500.html",
    "revision": "112ad408d8b87630ad7fe05f13851ff9"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "d3909b1f25bf031d5596cfc0c9e3cf7f"
  },
  {
    "url": "resume.html",
    "revision": "8bbb561cd17a95401407174b7bfb9a82"
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
