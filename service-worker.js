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
    "revision": "9522d2b5616a4371e550a17f6fbb33b8"
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
    "url": "assets/js/10.53d33d2d.js",
    "revision": "a73fe4b30357b4f72a32938fa096bacf"
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
    "url": "assets/js/13.94c505d0.js",
    "revision": "3f4e25fdabab53f444c3d2b79ce45098"
  },
  {
    "url": "assets/js/14.d59211b4.js",
    "revision": "0b188d433f73db723f14d0a8cedaad35"
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
    "url": "assets/js/21.dad5174f.js",
    "revision": "c6134e0b88d75eaa8c831393aacf3418"
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
    "url": "assets/js/26.34d6247d.js",
    "revision": "b50eea5cb7a023f2356163b19d541928"
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
    "url": "assets/js/52.bfc474a5.js",
    "revision": "3fe6f161166f7577f8b1616c5af3b4ab"
  },
  {
    "url": "assets/js/53.84a3e79e.js",
    "revision": "9b25dfc76d6747f8b4cca93ad639f378"
  },
  {
    "url": "assets/js/54.c36819a0.js",
    "revision": "36168a19a0be4748e38645d6936e00f8"
  },
  {
    "url": "assets/js/55.69dcb2f2.js",
    "revision": "a3edb138f2c74895ceed32ae5d3157e0"
  },
  {
    "url": "assets/js/56.f020f43e.js",
    "revision": "2df71e3cdde78373e7c94f218eb6e57f"
  },
  {
    "url": "assets/js/57.8f3b4900.js",
    "revision": "ba420de89278e89781dcd0ef0ff0db87"
  },
  {
    "url": "assets/js/58.8701bd1e.js",
    "revision": "1cf9a3ce6ef870241d28a0e7c0f392f0"
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
    "url": "assets/js/62.4935f44a.js",
    "revision": "3f66423be271b75bfa977f6d7abb94f4"
  },
  {
    "url": "assets/js/63.ab69d6e9.js",
    "revision": "813c457a8d26405444771589ba63b91e"
  },
  {
    "url": "assets/js/64.d1675061.js",
    "revision": "eced51d50c78652b4eef2092d6a2bb48"
  },
  {
    "url": "assets/js/65.47f1a366.js",
    "revision": "b602a890a6e8317a2825d39be5f92f7e"
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
    "url": "assets/js/68.d488748b.js",
    "revision": "15c95fa6a8db756c6ed7aa662f02d56c"
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
    "url": "assets/js/app.dc011b77.js",
    "revision": "cf6f7ef1b7573974df08dc34cd07d05f"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "73412b87b47156b4deee364a9ac85412"
  },
  {
    "url": "cs/bash.html",
    "revision": "62ce6cf1877ac635175902f730589e88"
  },
  {
    "url": "cs/compilation.html",
    "revision": "aab24946fdce9b2d92e4e7255b48a855"
  },
  {
    "url": "cs/index.html",
    "revision": "f4e87b479417b370e7be9b833248397b"
  },
  {
    "url": "ee/about.html",
    "revision": "320ecc27639d151bf0d3c234520131ca"
  },
  {
    "url": "ee/index.html",
    "revision": "d0c4b29b99d60c33395e55648c02278f"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ef7d1ccff3aaadb71b4ea56dd86af0c4"
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
    "revision": "450d726ace9f49976edfc79b4e8fc963"
  },
  {
    "url": "others/about.html",
    "revision": "4efe5c020af9d7e0af80cbdf593b0cd5"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "969387e553ceed7e6337d84358e29469"
  },
  {
    "url": "others/android-studio.html",
    "revision": "23bd76b042334e0f0b4a36f927f50f26"
  },
  {
    "url": "others/android.html",
    "revision": "d576e61f5a28a9595866b6cc60edaf0c"
  },
  {
    "url": "others/chisel.html",
    "revision": "de3fa399748e54d3f5eb40d58a5e28c0"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "e795c490a726c3d55f427b82fa1e3144"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "09f8efc98971cbf46899b1606e2f3967"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "aae5c4125a3a18cdcdfdec3db8b9a598"
  },
  {
    "url": "others/css.html",
    "revision": "a149e043d4aed80e783e037ffead72c0"
  },
  {
    "url": "others/docker.html",
    "revision": "0bccca44dd7b9e89707a7e6c39150375"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "742b59661ba7f654d4093c07a44ee0ca"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1947a4c2a41f4528cf40fc60f4535d94"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c5148bae97cdf1dcc27f3b22d664fc8c"
  },
  {
    "url": "others/esp32.html",
    "revision": "a4d418a737bf52df7e7e2c21e1a276f2"
  },
  {
    "url": "others/freertos.html",
    "revision": "4467df9c8ea228418fa26e37f27de5e3"
  },
  {
    "url": "others/gns3.html",
    "revision": "aa8c7115b138107246f3c7df5f4cffa5"
  },
  {
    "url": "others/gps.html",
    "revision": "820bfc5097677350a1ea128e825b1d80"
  },
  {
    "url": "others/html5.html",
    "revision": "bd999ce69c1a4a5a8be79baf03b8f588"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "5a10c681447beb44a87c85dc63c1a0da"
  },
  {
    "url": "others/index.html",
    "revision": "fe36ad7ed1dcbcfdc23272a5bb1128ad"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "afeef3fd1489aeea69b7777b3e65f4f4"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "658abdcee974ef8443c793870b47036d"
  },
  {
    "url": "others/javascript.html",
    "revision": "af3e464cc4a899066d0d998cfee56175"
  },
  {
    "url": "others/json.html",
    "revision": "c65d3a78493cf5d0c1e44ff8a02f16d2"
  },
  {
    "url": "others/latex.html",
    "revision": "6ce5e4fe7c7589e28516380a772548d4"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b95505fa9f3ed219cbc53be79359955e"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "bb72aa26aa20293529dfa4f8d67d95b2"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "11802b0ee387d2c60f5d2dd6956b7a7e"
  },
  {
    "url": "others/lwip.html",
    "revision": "a0301f248e4175a4929bb80cb1fa24a1"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "1c3a4876fea28310dde2f069e528f5a5"
  },
  {
    "url": "others/markdown.html",
    "revision": "5d467d45771a5296a2739e8f255ee372"
  },
  {
    "url": "others/matlab.html",
    "revision": "3ee94d7b78e9dcc0618c4c3d87f3dd30"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "8ea9ceb39474f9ab18eebb4e0375d941"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b93713cc7c9dc9d2cfca78b1c5d295b6"
  },
  {
    "url": "others/network-security.html",
    "revision": "2d9831b2cde8d5feb088c697be0295ed"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f3d4289917432f259966ae0543d10a9d"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "8e6b2c1e25252c73f9fb1a06e7bb5374"
  },
  {
    "url": "others/poe.html",
    "revision": "2cfe2905e480ea85ebc9913198362b71"
  },
  {
    "url": "others/pyside2.html",
    "revision": "1486d3a1afd12ab0f3badff33fabc2a0"
  },
  {
    "url": "others/python-socket.html",
    "revision": "8a274772a7806192452e455a8c8603cf"
  },
  {
    "url": "others/python.html",
    "revision": "a593f897e3c7194b1fb60cad49ad2c19"
  },
  {
    "url": "others/q-learning.html",
    "revision": "7dbc215dfa2754e0c05c1d656228cd21"
  },
  {
    "url": "others/qr-code.html",
    "revision": "dcd47a6e96b4d2935455c192b0f414bb"
  },
  {
    "url": "others/qt4.html",
    "revision": "6ddb7f3ff66b7543cf385bb59fa1660a"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "18589ab491ff95e597d136379d366c22"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3d5f2cb55b2353e15117c2df61dbba92"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "d57e951dbc49ec1822c391d9390193c8"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f84c0546ebeffa4959d85f969da6aa7f"
  },
  {
    "url": "others/sdn.html",
    "revision": "2e008eec36f18d4a58a834d5d8bf27b6"
  },
  {
    "url": "others/star-uml.html",
    "revision": "7e35c40f428969199f9c6d306c9c28a3"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "259ff36d9cec92a4254f3d3b35cec53a"
  },
  {
    "url": "others/verilog.html",
    "revision": "d233371bf6d738c9de49603eff8c9f86"
  },
  {
    "url": "others/vue.html",
    "revision": "e39f8483b2e6b16361eb572c8baabc36"
  },
  {
    "url": "others/w5500.html",
    "revision": "dd1663327538574238c910d19bbbe646"
  },
  {
    "url": "others/w7500.html",
    "revision": "3852df9a74821e67cd2d22c34b3f3aca"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "b0eba9370645af0c345b343d3fe699a9"
  },
  {
    "url": "resume.html",
    "revision": "5ad5612a4514873a9d375bb0607c2a94"
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
