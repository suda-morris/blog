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
    "revision": "cb3fa6ffec6bd19f195e3631920f1b29"
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
    "url": "assets/js/10.9f23ba5d.js",
    "revision": "fddb64c81aac4ccbbe2cb0a89b68dfba"
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
    "url": "assets/js/13.8fee2a77.js",
    "revision": "9bf4284bcd89a3b74f1916ab8ab76b9d"
  },
  {
    "url": "assets/js/14.7c716bac.js",
    "revision": "7ee0015b9102fd098a51128a6f6e550e"
  },
  {
    "url": "assets/js/15.2e8fafc4.js",
    "revision": "c93747b41bdb0e19b10047affe81b7c9"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.0ee49138.js",
    "revision": "bc9ee06db5ca7490c680447d1b71cc4f"
  },
  {
    "url": "assets/js/18.49c51782.js",
    "revision": "64612bdd1739812b2a3cd85aa77a923c"
  },
  {
    "url": "assets/js/19.26f0abbb.js",
    "revision": "dd983a58212008717fd25c0ee523d5e4"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.5d20b12e.js",
    "revision": "2c49f4ae4edb4386c1a7f1abf7a1aaad"
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
    "url": "assets/js/23.418d6234.js",
    "revision": "016ca14e51d096fdc8c164ca39b0cee5"
  },
  {
    "url": "assets/js/24.b2f0fb97.js",
    "revision": "68bf48d93663e63e2b2d992937842e04"
  },
  {
    "url": "assets/js/25.2e67b9a1.js",
    "revision": "525e30c7af163244a58eb3f48f808e56"
  },
  {
    "url": "assets/js/26.b90e1900.js",
    "revision": "58f1cce948a81e62d14870d17f6536d0"
  },
  {
    "url": "assets/js/27.0b0ef00c.js",
    "revision": "e27c2f4ec220aa4e7cd662cbc5878a0d"
  },
  {
    "url": "assets/js/28.59f1bd9e.js",
    "revision": "f50b1478e5eab52a7320c4b76126b9c7"
  },
  {
    "url": "assets/js/29.af6fa38e.js",
    "revision": "7e53a1e7c21e16ac78b3e1d4ea570ecf"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.89bb07b1.js",
    "revision": "d9c321cecd8fa03e5c401ff5815e0eac"
  },
  {
    "url": "assets/js/31.6c694c6a.js",
    "revision": "933a6365b7f1f2638dfa05faf3f479d7"
  },
  {
    "url": "assets/js/32.6f5dab1a.js",
    "revision": "20edb8fefd2faeb3fc5ddfba122f8bb1"
  },
  {
    "url": "assets/js/33.08d00d32.js",
    "revision": "ed280228a53044f496889f1f050e1415"
  },
  {
    "url": "assets/js/34.ba4bf389.js",
    "revision": "c75a4b399552c4c9440c4ae52c130372"
  },
  {
    "url": "assets/js/35.b5009de5.js",
    "revision": "c134e572017e71174a1388ed73870019"
  },
  {
    "url": "assets/js/36.e42233c4.js",
    "revision": "e2dc2ae48e1834294be39e2fc248f52c"
  },
  {
    "url": "assets/js/37.96b284de.js",
    "revision": "3d0a057b7496d9c0e6d081cc07e3783f"
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
    "url": "assets/js/4.e3e090f7.js",
    "revision": "a9c27245504f4c9ce764a9b86e0dbbe7"
  },
  {
    "url": "assets/js/40.f72953ab.js",
    "revision": "001c6008b34223db195e5d3d229a0c59"
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
    "url": "assets/js/43.c3053021.js",
    "revision": "9ca8b07b6dcb16eb165631c1f3be1e6a"
  },
  {
    "url": "assets/js/44.30cf0529.js",
    "revision": "b084f1247411abdfd09b429c127cb31b"
  },
  {
    "url": "assets/js/45.9220b443.js",
    "revision": "6a068ca298af21cddd3e92951a1c098a"
  },
  {
    "url": "assets/js/46.547cb6b8.js",
    "revision": "675476602739fc05f42d3f09a7bfd6e3"
  },
  {
    "url": "assets/js/47.778b8037.js",
    "revision": "322c8e029bb05292c427267fffabba0f"
  },
  {
    "url": "assets/js/48.fc41c802.js",
    "revision": "578e9884f19f15f6d3d4ce01e0d565fa"
  },
  {
    "url": "assets/js/49.aac13fd5.js",
    "revision": "38503ee850653a3d8aeb5414813b3c1f"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.de6cb49e.js",
    "revision": "5dc3897f70a889d219243963b3e6ed88"
  },
  {
    "url": "assets/js/51.7af9f517.js",
    "revision": "1d262cf68ab30b41e99322be293760c0"
  },
  {
    "url": "assets/js/52.42b239da.js",
    "revision": "08d170f6f1a3a479294aacfb2899ebea"
  },
  {
    "url": "assets/js/53.442d5e52.js",
    "revision": "c19417c666554a42c4ba48631fec5fa6"
  },
  {
    "url": "assets/js/54.b8a3d93b.js",
    "revision": "efce3899f99242de6df05191ee3c49e8"
  },
  {
    "url": "assets/js/55.8f69ebf0.js",
    "revision": "1358757ab98a925391e646f21f878cb6"
  },
  {
    "url": "assets/js/56.d9d573dc.js",
    "revision": "8d099fd511515bb2f31caab2fad00f92"
  },
  {
    "url": "assets/js/57.8f3b4900.js",
    "revision": "ba420de89278e89781dcd0ef0ff0db87"
  },
  {
    "url": "assets/js/58.cfa6a4a1.js",
    "revision": "99d7e3c758d92ff6e25fbda828a4964f"
  },
  {
    "url": "assets/js/59.e91c2df4.js",
    "revision": "b28dea5bb6429ca65273c4e013152a05"
  },
  {
    "url": "assets/js/6.a0364a73.js",
    "revision": "dcb3440c8ab1d068fdba22730700dd55"
  },
  {
    "url": "assets/js/60.80dc3e63.js",
    "revision": "f33b33d4ee27e7028dc0bac2e05e1718"
  },
  {
    "url": "assets/js/61.bc8d93c4.js",
    "revision": "f2621babb2d6193443f7a13ab28c2210"
  },
  {
    "url": "assets/js/62.e21299a6.js",
    "revision": "58e4e359bb8100a7f87cbef6ca51c1d4"
  },
  {
    "url": "assets/js/63.0b14764d.js",
    "revision": "70877687bcebed1dd4514aa9c2c50a66"
  },
  {
    "url": "assets/js/64.d1675061.js",
    "revision": "eced51d50c78652b4eef2092d6a2bb48"
  },
  {
    "url": "assets/js/65.0e8fed7b.js",
    "revision": "91605a5717ac4c570512e85a679291c5"
  },
  {
    "url": "assets/js/66.631e6987.js",
    "revision": "e3e99a7560518326f2a1660b04f25279"
  },
  {
    "url": "assets/js/67.deda1286.js",
    "revision": "70d69890fc745a38b95a5fbc5203fa4a"
  },
  {
    "url": "assets/js/68.6a94c41e.js",
    "revision": "07347523e07653f266ef3388ce78337a"
  },
  {
    "url": "assets/js/69.4084b8dc.js",
    "revision": "1706afab60a1f25bc61e0a327af6f692"
  },
  {
    "url": "assets/js/7.05f8ac37.js",
    "revision": "a517aa276e88885982af78c966234d85"
  },
  {
    "url": "assets/js/70.5a644ac8.js",
    "revision": "bc11c082912f78d5950097d92b71b506"
  },
  {
    "url": "assets/js/71.75c2f594.js",
    "revision": "243ab3fcac4c42c05031f6bfa8926b44"
  },
  {
    "url": "assets/js/8.ab17c590.js",
    "revision": "8257cfaf2b642696f541a5efc72a78f9"
  },
  {
    "url": "assets/js/9.5709aa1f.js",
    "revision": "dba4ebab184ef80799af081b9bc08f37"
  },
  {
    "url": "assets/js/app.cd6c1e85.js",
    "revision": "c4ca7b224e919888e67791a88e8c4aea"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "1411ab078734963cbbc06eb06cf6a45b"
  },
  {
    "url": "cs/bash.html",
    "revision": "2b9c9259b385ebc1b2d7c61aa1641a28"
  },
  {
    "url": "cs/compilation.html",
    "revision": "d9b87e5c6f796dd0b885557091de1554"
  },
  {
    "url": "cs/index.html",
    "revision": "3e1ab894e8b84cda0c9b00b1014e2c77"
  },
  {
    "url": "ee/about.html",
    "revision": "71cc0081291d6c54f8b27930e22a7b8a"
  },
  {
    "url": "ee/index.html",
    "revision": "61a41cdf2753dc22c9e9ffe780a44c58"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "71ceb06fff2d1b619e794f339bd40593"
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
    "url": "images/others/others.svg",
    "revision": "28a34ae59424a4becd8ace3f14b0b58c"
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
    "revision": "b4aee46aa9585bfb8de8b363b0ed14d9"
  },
  {
    "url": "others/about.html",
    "revision": "773127f5d274038d1c25bf870bb54ade"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "ecb198aa9b85982041ef9dfa8c91a78e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "5c4a99437d4f03d21f6ebd4f0db87c34"
  },
  {
    "url": "others/android.html",
    "revision": "3b8b51bc2317ecc59cf5ef94745e0c4f"
  },
  {
    "url": "others/chisel.html",
    "revision": "44d180e455acb9837007d27d08087162"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "826b182f0117566c7a105da41badaa80"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "fd82c506aea2c4b2368f741f9fc9e978"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "26f4274bcd1c696f572448092917747e"
  },
  {
    "url": "others/css.html",
    "revision": "d7c5826c505c9fbb411908ad58d0ade1"
  },
  {
    "url": "others/docker.html",
    "revision": "b6b6f7e7176aa404c5c0acaddbe91606"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "93bcec84f48d9f1049a197d7dadf83ab"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c28818b7a97c1f2914924fc6bd112c81"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6a1a17d3b35c30915bb67ff25d4fd395"
  },
  {
    "url": "others/esp32.html",
    "revision": "f4bb8d4736b2ae2cd7da93189010cf46"
  },
  {
    "url": "others/freertos.html",
    "revision": "9902b5caefac3608616537827f53b61c"
  },
  {
    "url": "others/gns3.html",
    "revision": "9e47bfb218209a61e6656ad090b693d5"
  },
  {
    "url": "others/gps.html",
    "revision": "7fd91ae7483e92d409d96a4afe828f03"
  },
  {
    "url": "others/html5.html",
    "revision": "f22dbe858ad7c867e1afd79d40f768dd"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "77ef99e51f98299b965f048ce61684bd"
  },
  {
    "url": "others/index.html",
    "revision": "1b76ac03b51ff5bb242f7afbea7dded8"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "71d4a177b157371302ff6bad1dfe7b69"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "13d2b492b6e548b690b907767b8729b8"
  },
  {
    "url": "others/javascript.html",
    "revision": "17b7144820c4d6059d892d86c67f392a"
  },
  {
    "url": "others/json.html",
    "revision": "d82a3521f10cf1404aa2c1f1660a0ea6"
  },
  {
    "url": "others/latex.html",
    "revision": "0712820a9c600a58c93c07f40869e515"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "afcccf45de988eb0bc652bd29758cc7d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "2eeb3ad3cf24ec2fe5498d44ba71caf9"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "b5f84a265815793967c76da3c07ca2ed"
  },
  {
    "url": "others/lwip.html",
    "revision": "1a6e4f3b137df65fbc44b0dffa0fdf25"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "1ef6eb2be75313d580cbf40fbc1fe7d5"
  },
  {
    "url": "others/markdown.html",
    "revision": "22ff6dce36f2306afc032a24daf71fe3"
  },
  {
    "url": "others/matlab.html",
    "revision": "852ed6984485af2ce2f1e25634ee7271"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ae658f1a67e0f6762f4e04ad50cfb9dd"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "97974f944603085a861f1aaf92586b2c"
  },
  {
    "url": "others/network-security.html",
    "revision": "3464079be45bb4bdb7e8f8b7e4d51501"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "0e5432e940a0237d4f7e08c19b046671"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "62e201c4d0f062e28dd82d130f2dc1de"
  },
  {
    "url": "others/poe.html",
    "revision": "67fb89acb47109bf612caf333f25a0a8"
  },
  {
    "url": "others/pyside2.html",
    "revision": "bfb88fed8ec32e22b0309aa3f5d5efc9"
  },
  {
    "url": "others/python-socket.html",
    "revision": "92417fa963c55b97e046ddbab1161d43"
  },
  {
    "url": "others/python.html",
    "revision": "b71b89afa75bdd761b85d855bde378b9"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ca9d5cbc48ee2622df1f017561d6c6b6"
  },
  {
    "url": "others/qr-code.html",
    "revision": "ecdb288e807b61487bd834495d6936b0"
  },
  {
    "url": "others/qt4.html",
    "revision": "9b96e86ae8b4d98a96bd9d671d13f1f9"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "1d20913f29b868cc8853b78f0eae06d4"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "6cc0c5a0f9482de8a4692320cb5b1aac"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "64042d4b78957b46693d9a76cb71882b"
  },
  {
    "url": "others/sd-card.html",
    "revision": "1f85e0642b7ab0a345a737c773e1446c"
  },
  {
    "url": "others/sdn.html",
    "revision": "010bf6c314cc7174229c4fb5f49ddc2f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "df275953f9ea25a160002f16f42abb6f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "0fc4f693fa1c897dfad4814ae669c66e"
  },
  {
    "url": "others/verilog.html",
    "revision": "aaa0f3dad126f25f336365017c8dc72f"
  },
  {
    "url": "others/vue.html",
    "revision": "a40a140c4361ea6aac0ab16141e240e8"
  },
  {
    "url": "others/w5500.html",
    "revision": "e369d933c2aa59161654338fcce8fdb5"
  },
  {
    "url": "others/w7500.html",
    "revision": "d0c075fb59cb88ae4032e3e5994fa261"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "d06cd9c291e8a2a85a255d151d09249e"
  },
  {
    "url": "resume.html",
    "revision": "3b31fe629a3ea8d0c81999d06dc75fce"
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
