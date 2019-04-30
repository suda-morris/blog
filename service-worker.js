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
    "revision": "ab90f42b483a7475b3ebe200870df576"
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
    "url": "assets/js/12.c3dd4916.js",
    "revision": "50d9da0f6680dbba2fcbb29f74d9d18c"
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
    "url": "assets/js/17.e6155edb.js",
    "revision": "c561cd6b219f0e57781be0029ca0e4e0"
  },
  {
    "url": "assets/js/18.e963076d.js",
    "revision": "3b01ba89e2dd47e5719ec773dbba7e86"
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
    "url": "assets/js/21.2016bc02.js",
    "revision": "75288f2fa43e31635c30820a2de4a2ce"
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
    "url": "assets/js/26.c79cd065.js",
    "revision": "99527d9dcb45fe76a5bd42462c7ac9d8"
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
    "url": "assets/js/32.4f06c630.js",
    "revision": "51476c0a7213f9179fef9f0c18916e18"
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
    "url": "assets/js/35.e3e4ac80.js",
    "revision": "5f58e7bd80ea1ad2cfc92bba6a7965fa"
  },
  {
    "url": "assets/js/36.ff8bbb99.js",
    "revision": "b10ad872ad8af0b5d8a95685f69638d5"
  },
  {
    "url": "assets/js/37.2affec3f.js",
    "revision": "c7aa0984f0d7b76b3b3e6f9372b9f162"
  },
  {
    "url": "assets/js/38.32d080a5.js",
    "revision": "e4f75052a8a296b876a03457bb92e6e3"
  },
  {
    "url": "assets/js/39.d4034502.js",
    "revision": "d68f58219a45853d71e21d10d42f343a"
  },
  {
    "url": "assets/js/4.7131e971.js",
    "revision": "0f3830ac0354e283468823611896d3ad"
  },
  {
    "url": "assets/js/40.6bbbf9c3.js",
    "revision": "d27c0c7dc990c3ef37f7eb8c86d3d7c1"
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
    "url": "assets/js/43.34b029ca.js",
    "revision": "c895742a2a055093149ad23602092228"
  },
  {
    "url": "assets/js/44.e8b99949.js",
    "revision": "5f15758c14ef88f39e0edfa5155e1e29"
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
    "url": "assets/js/49.158dc614.js",
    "revision": "ef2701d6c88af489ab1002db63e6490f"
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
    "url": "assets/js/52.ef3bad39.js",
    "revision": "96b3ba8ca7e9db5d2141b0b9ab218dad"
  },
  {
    "url": "assets/js/53.6befa3d2.js",
    "revision": "597b2a5cb09e75cd841644ee4bd0f885"
  },
  {
    "url": "assets/js/54.90f1cd79.js",
    "revision": "c9e22aed2e534ae122d1a83ac3520a10"
  },
  {
    "url": "assets/js/55.21d04997.js",
    "revision": "7a9adca3047123371456c5a7a20f1699"
  },
  {
    "url": "assets/js/56.33c4b756.js",
    "revision": "126c46e7ef688cab25126f865d5a01ab"
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
    "url": "assets/js/6.a0364a73.js",
    "revision": "dcb3440c8ab1d068fdba22730700dd55"
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
    "url": "assets/js/68.a94e7b95.js",
    "revision": "10c0cc0e21915586d52e4b4afae9afb0"
  },
  {
    "url": "assets/js/69.cd56f349.js",
    "revision": "d5df4e359cc10e2a6b5d1da2102db912"
  },
  {
    "url": "assets/js/7.05f8ac37.js",
    "revision": "a517aa276e88885982af78c966234d85"
  },
  {
    "url": "assets/js/8.ab17c590.js",
    "revision": "8257cfaf2b642696f541a5efc72a78f9"
  },
  {
    "url": "assets/js/9.592902ce.js",
    "revision": "f5d9e6ffa5d29425fc4b6146ab4cc030"
  },
  {
    "url": "assets/js/app.49c648e5.js",
    "revision": "c146627f9042ffbe8fa5a608eb19e970"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "5c253917e2607d542e2b4b89fd2106d9"
  },
  {
    "url": "cs/compilation.html",
    "revision": "7bf9de680cfd31274b401a7f71217206"
  },
  {
    "url": "cs/index.html",
    "revision": "acab3867fbf1c4ab793162e0dc423377"
  },
  {
    "url": "ee/about.html",
    "revision": "0247343c94f940f239f4fc9f37bf2155"
  },
  {
    "url": "ee/index.html",
    "revision": "48046244e9cd742fa8a8c4ef8ad3f08c"
  },
  {
    "url": "ee/poe.html",
    "revision": "3da0aaab53eb135aece6827ab328e4a9"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/cs.svg",
    "revision": "fe696bfe6c74377d4e9be63e9f170afc"
  },
  {
    "url": "images/ee/ee.svg",
    "revision": "e0d4275736606674f67f12997b80a8b5"
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
    "revision": "5a4049f39c2727cf2d3e43b91618c59f"
  },
  {
    "url": "others/about.html",
    "revision": "dad8f21bd93313cea0b05741b4bcf346"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "4971f38bc2d3de52b1efc663d22da40c"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0524b2716a2005014af6c070a586ad3c"
  },
  {
    "url": "others/android.html",
    "revision": "06f3463f9cd98c16e30b21be6491eebc"
  },
  {
    "url": "others/chisel.html",
    "revision": "11592de13485151cdb08392c3ef3a483"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "cd8923f408e0a0b8f7afed1261ff47fa"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "135ffa7f00ec52b654aa6ed1d47bbf32"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "83f4ffe2d99d9a4a1bb4881cef12d9b2"
  },
  {
    "url": "others/css.html",
    "revision": "c727d71b7a1a3b876739c2fb272e3bd9"
  },
  {
    "url": "others/docker.html",
    "revision": "1ca110fab048d1db99208eaf9a130b3d"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "baae55fa827f887d7c2a4bf41bf8ffb7"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1cc2723b63ecce9dcdda858a9108381d"
  },
  {
    "url": "others/english-writting.html",
    "revision": "9c0d33dc9823a12ec390455477be848a"
  },
  {
    "url": "others/esp32.html",
    "revision": "ae107834fd5eca6f824ad2ca881d66ac"
  },
  {
    "url": "others/freertos.html",
    "revision": "18a0f67238e7a56a9d15c0cf60ff6823"
  },
  {
    "url": "others/gns3.html",
    "revision": "f5f84d089aa42276d80af1515e3dd7e6"
  },
  {
    "url": "others/gps.html",
    "revision": "d3c44239e46af656504b89df86795752"
  },
  {
    "url": "others/html5.html",
    "revision": "e3e5e4e73300700cbd2d3ec0df060152"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "8291c2102e92d89f1bc6e77e03972be2"
  },
  {
    "url": "others/index.html",
    "revision": "47c360fc0229fef20c05c8d0b6c3c96d"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4b19316f233bb44427de296f2ee18c03"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "2c75e438d01ab10ebc2bbbf356ae0335"
  },
  {
    "url": "others/javascript.html",
    "revision": "f29f1955e299f53a7123ae933ce5b5df"
  },
  {
    "url": "others/json.html",
    "revision": "9aabfbca899d4c207945e72aa64a97f1"
  },
  {
    "url": "others/latex.html",
    "revision": "f5e61f7638191a880d0f5421069a4144"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "56bb7184f7ebc6bd9b4dde5420395b02"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "66cf47679bc0f11e6be6637090d39011"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "488f26fa44261ffd7fbee1d04b320ae8"
  },
  {
    "url": "others/lwip.html",
    "revision": "3c3e5691c6b38265cdc0205bb06630ea"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a8bb9b4e20e8ee738eae75d80b1d32fe"
  },
  {
    "url": "others/markdown.html",
    "revision": "10dd6da59a261a9ba12c76807345163e"
  },
  {
    "url": "others/matlab.html",
    "revision": "7576dbe72708e635825b376072cf2231"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "aa4e3a60dc3a26f9f47de88caaf74617"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "37a46b8f6919e3c7457ff6fc9a1dacf4"
  },
  {
    "url": "others/network-security.html",
    "revision": "6a7c4cd26785a9be7a86b0a656ba9b7c"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "8f51ffee8fc88292a3e1e90f0fbe5f54"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "56db8c5f316e82feec0918e7936b2d01"
  },
  {
    "url": "others/pyside2.html",
    "revision": "94cab05c2ea7f2f38bfb6ce348761d3f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "c613e38c6d37d5a32b92330a15627490"
  },
  {
    "url": "others/python.html",
    "revision": "44ca2fc4710f937c6ebf977afc014193"
  },
  {
    "url": "others/q-learning.html",
    "revision": "6ff60379b18d3dc3f13984c1cc0c598c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "2403d284dffbef05151c045b9cc1db1c"
  },
  {
    "url": "others/qt4.html",
    "revision": "ddc1f1f365f87938818db21b0f7355ea"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d5258778aeead10c589b6234ccbd3730"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "864ce6deb4c284d365fb4651ca2d1a49"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "6e1f6c5d5175f356cbcd1069db95ebcb"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f6d2a51224bfa1fd114fcd7c359f43d3"
  },
  {
    "url": "others/sdn.html",
    "revision": "7daf618401b691052b535f662e2b9cb4"
  },
  {
    "url": "others/star-uml.html",
    "revision": "ddcf509487f1de548e127466b1d682f4"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "cce2781a766a14197039e635ef0d4236"
  },
  {
    "url": "others/verilog.html",
    "revision": "d7c560fde56066a62597d278fbe89852"
  },
  {
    "url": "others/vue.html",
    "revision": "840b3a10ef10ce07f1e1cfbe3708cce1"
  },
  {
    "url": "others/w5500.html",
    "revision": "82e7ff083854511bf414b577642797d1"
  },
  {
    "url": "others/w7500.html",
    "revision": "aed8ef94a23c61473564490880c84754"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "77dcde4a1705c6237be1ab2be4420d0a"
  },
  {
    "url": "resume.html",
    "revision": "1140ddf86b89d0a2aeb1414f0055df69"
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
