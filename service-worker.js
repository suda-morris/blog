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
    "revision": "c9322a5b20ef09c5cb81f4211a7abee6"
  },
  {
    "url": "assets/css/0.styles.c4b83633.css",
    "revision": "9669ae2515a628073fb617be9eda1296"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.762f9583.js",
    "revision": "401ff33e3409313228e21872a160bb83"
  },
  {
    "url": "assets/js/11.2fcfe9d0.js",
    "revision": "f653e4229211b2253e3389d8e459f5da"
  },
  {
    "url": "assets/js/12.b08b128b.js",
    "revision": "3c22059a1b37515ab13747d0bdd89801"
  },
  {
    "url": "assets/js/13.1cec2db5.js",
    "revision": "bedcca38beeb63ebbd0ebb830676cd62"
  },
  {
    "url": "assets/js/14.32ece556.js",
    "revision": "afa0939a34aecb223d6978bf130aa192"
  },
  {
    "url": "assets/js/15.d98cd71c.js",
    "revision": "6c0401ba5a63e5609b83d3c01e42039d"
  },
  {
    "url": "assets/js/16.6d68dda4.js",
    "revision": "f1ede444ce6cd41f275262dc7f3f4069"
  },
  {
    "url": "assets/js/17.204d8c34.js",
    "revision": "cd0ae04bfb5b74e9702354bc06e1b006"
  },
  {
    "url": "assets/js/18.cd66f2a5.js",
    "revision": "a3f4cb07ed11ae93445851c3b89fb8d3"
  },
  {
    "url": "assets/js/19.761b765d.js",
    "revision": "a3d078f4377282055f3666766d59cb13"
  },
  {
    "url": "assets/js/2.5203ae48.js",
    "revision": "b43e93b01cf80ff6cf0c4c4c0d7a1008"
  },
  {
    "url": "assets/js/20.a5a9fc3e.js",
    "revision": "09f70535970ddf008727ba194db2b293"
  },
  {
    "url": "assets/js/21.986e7999.js",
    "revision": "0efd1d6aae7d20740011d5c2cfccf5f0"
  },
  {
    "url": "assets/js/22.9b934ea5.js",
    "revision": "eee1e4a8add9696b0bb39cd838d7a664"
  },
  {
    "url": "assets/js/23.26173746.js",
    "revision": "0566a89f7121637574856061c02fbd6f"
  },
  {
    "url": "assets/js/24.dd3eedf7.js",
    "revision": "0acdf622276819f598a5db78de2dcca3"
  },
  {
    "url": "assets/js/25.f57c9f2c.js",
    "revision": "c10f7a002f35bf525de2a5f2270a6ffb"
  },
  {
    "url": "assets/js/26.2ba83bcb.js",
    "revision": "1fdf31c2790da49113d696bfc3fa3dc1"
  },
  {
    "url": "assets/js/27.47d8a4f9.js",
    "revision": "a74df0d732d683db57585be8a00a3a78"
  },
  {
    "url": "assets/js/28.c22c910a.js",
    "revision": "6e8454b214db7b216fa72b6125a54223"
  },
  {
    "url": "assets/js/29.af35f9f0.js",
    "revision": "58ab205656e76a2de105fc79677c2048"
  },
  {
    "url": "assets/js/3.ee9c868d.js",
    "revision": "0c55b4bc3fe4f6df4faf5cd088dbd9d9"
  },
  {
    "url": "assets/js/30.659f701a.js",
    "revision": "80a8b107fe87da18e1dd41686838448c"
  },
  {
    "url": "assets/js/31.da9503a7.js",
    "revision": "0982263cc7b76db99d86e57a42087409"
  },
  {
    "url": "assets/js/32.3611bb7f.js",
    "revision": "3d13c34898221010fe5d63706f7fa7f7"
  },
  {
    "url": "assets/js/33.f77df989.js",
    "revision": "a3e87251e50a993860a43d63643d8e8f"
  },
  {
    "url": "assets/js/34.6b579c8c.js",
    "revision": "347b5b1655fcc0426d5765d3685fcfd1"
  },
  {
    "url": "assets/js/35.6080163a.js",
    "revision": "efbb131d7dda9833a9dcc9d5e6cdf1d3"
  },
  {
    "url": "assets/js/36.d803537d.js",
    "revision": "748aae46c644d517cf05c333f795e807"
  },
  {
    "url": "assets/js/37.c6000af3.js",
    "revision": "39cb13b6ebbbca47c55ef55dd3d557d5"
  },
  {
    "url": "assets/js/38.638d0042.js",
    "revision": "affe2dc8059a0c08dea5b1760cc24af8"
  },
  {
    "url": "assets/js/39.8839cac0.js",
    "revision": "5999db7c37a193a34d253fbe27b92bd0"
  },
  {
    "url": "assets/js/4.fa8a62ca.js",
    "revision": "f52e7d20ba5b911bbbbafeefd57f5e0b"
  },
  {
    "url": "assets/js/40.9b793275.js",
    "revision": "9e2be8fbda67b2bedab272e67a6d6dae"
  },
  {
    "url": "assets/js/41.6e94d3f9.js",
    "revision": "77737dc24fa0d601f7bd05f3c6194862"
  },
  {
    "url": "assets/js/42.1364e4fd.js",
    "revision": "caad83ab956afd139c7e69dbcf5d5e9b"
  },
  {
    "url": "assets/js/43.ea92b4b8.js",
    "revision": "a4bd783e73bd8a97e60e24f2dfc1bf5c"
  },
  {
    "url": "assets/js/44.f47f9311.js",
    "revision": "c6a11aed1b0e2fb1e430db91f8a8a306"
  },
  {
    "url": "assets/js/45.95bb4ff5.js",
    "revision": "c71a0709117e3f83366202606b3caeba"
  },
  {
    "url": "assets/js/46.b6b6ad95.js",
    "revision": "9a0974ce0e49f72667227ac6235bc635"
  },
  {
    "url": "assets/js/47.87928254.js",
    "revision": "c77dfebf45b752b337019d09f1d2436e"
  },
  {
    "url": "assets/js/48.fdd673a6.js",
    "revision": "dd752f0a864e76d5cb66fc82420d1d53"
  },
  {
    "url": "assets/js/49.36b945d5.js",
    "revision": "14f7773266481bd502339d22755ae5e7"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.e0477d41.js",
    "revision": "db7efb4298d9fd54d361b5345442071b"
  },
  {
    "url": "assets/js/51.8432a6a8.js",
    "revision": "7d1b846b3f070b65eb027714a7e6cbdc"
  },
  {
    "url": "assets/js/52.e2b93383.js",
    "revision": "653f474e67c52609f11965d93abae886"
  },
  {
    "url": "assets/js/53.82e21b62.js",
    "revision": "ec1a05121d1201afaaaba96c6e7c4698"
  },
  {
    "url": "assets/js/54.2e64c87b.js",
    "revision": "804571bf550411e2054e014b4463ab1e"
  },
  {
    "url": "assets/js/55.11404852.js",
    "revision": "99cb3ffd82ab393d5796029e0001d110"
  },
  {
    "url": "assets/js/56.9c8f399d.js",
    "revision": "bd4eb47989299a46adf014f8a7c235bc"
  },
  {
    "url": "assets/js/57.9d7b2234.js",
    "revision": "b70d4c1db79d996afaccbb6f36e503d9"
  },
  {
    "url": "assets/js/58.f529fe8a.js",
    "revision": "f315a5472e43cdb17d76e06aff16bef3"
  },
  {
    "url": "assets/js/59.1775f984.js",
    "revision": "e78f37f52f5392a549445472f565c106"
  },
  {
    "url": "assets/js/6.5080ff4e.js",
    "revision": "992a2cc519fdfd793e6cf4ffca3bcd0a"
  },
  {
    "url": "assets/js/60.5556fb04.js",
    "revision": "995d00af1e8afdb0d06c8512ece0fc9f"
  },
  {
    "url": "assets/js/61.fabb778b.js",
    "revision": "566b26257162cef5ac5aa09b67914d8f"
  },
  {
    "url": "assets/js/62.fafd767d.js",
    "revision": "440d2d48bab5b7c766fa1d0e0dcef50b"
  },
  {
    "url": "assets/js/63.aea40e3e.js",
    "revision": "f7bd8bf4a3cfb405cf14104798c8b853"
  },
  {
    "url": "assets/js/64.baf5418e.js",
    "revision": "a9ae5a04faefc020ecb9797e48c42011"
  },
  {
    "url": "assets/js/65.4142990b.js",
    "revision": "aec21f76b6edc174723a4a994f43ea2f"
  },
  {
    "url": "assets/js/66.2a18e1cb.js",
    "revision": "93d4eb0a4857a0c9ef628ff5823b2b74"
  },
  {
    "url": "assets/js/67.eb9fdd54.js",
    "revision": "8b5af65bf5a08cce168443a64a7c3662"
  },
  {
    "url": "assets/js/68.947829dd.js",
    "revision": "19da6f7f8e28cce7ac64edd5d9290f97"
  },
  {
    "url": "assets/js/69.514972e6.js",
    "revision": "a72c235ed0bb8a603fccb0c47bb51430"
  },
  {
    "url": "assets/js/7.f49c4cfa.js",
    "revision": "b030fd4179e1fccdefa5c7aa894e8c22"
  },
  {
    "url": "assets/js/70.8c0e9d52.js",
    "revision": "998f9d5f9bb1324f5ff15dfc855d17ce"
  },
  {
    "url": "assets/js/71.0986e429.js",
    "revision": "cfcc24aba49acaf0cda96e2dbcce84e0"
  },
  {
    "url": "assets/js/72.b93d4c05.js",
    "revision": "628895b072b56c4f3d383f4b4b32be89"
  },
  {
    "url": "assets/js/73.50147b93.js",
    "revision": "cff596e75963345a1febfa3df664b10e"
  },
  {
    "url": "assets/js/8.6e32f0dc.js",
    "revision": "ff5cdd54800ec188197a2b219519fdf8"
  },
  {
    "url": "assets/js/9.67fbd9f3.js",
    "revision": "4dbaf1da2b8a6cbbdd7b230de853bcce"
  },
  {
    "url": "assets/js/app.c7640f7d.js",
    "revision": "2fd4601c767d973c5c9a7c69d639f978"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "6df9f3ae29fb027a399e2ab3e2a9a2ab"
  },
  {
    "url": "cs/bash.html",
    "revision": "43835cf549fa26451bd2f8d99b605552"
  },
  {
    "url": "cs/cmake.html",
    "revision": "99edf8f73d2a13ddf56fca57cd426aba"
  },
  {
    "url": "cs/compilation.html",
    "revision": "d590ce6316f9f47de74b8e33f48b0c31"
  },
  {
    "url": "cs/index.html",
    "revision": "f8e0486adeaecd9d12dfd4b8a24160d5"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e278ee8123dcc85e261f67200e6d02af"
  },
  {
    "url": "ee/about.html",
    "revision": "3f961238b0d515b031304189f00e53d8"
  },
  {
    "url": "ee/index.html",
    "revision": "a389edbe61278aed30e40c5a4f8bfdd0"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "7ffe6cb0ea1d64092bdd5d99cf9b1772"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "6ee01cb1b0ba3015d83c1747ce901968"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logistic_regression.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "images/cs/ai/sigmoid_function.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
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
    "revision": "c4b7d87a028080c43d837b15cba75eab"
  },
  {
    "url": "others/about.html",
    "revision": "4510538478ed6b271eb16cb840fddf3d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "2f0aa64515c2918c1034e53519f7cbc1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "eb8ba3bfdeae0bdd05b93555c998fc80"
  },
  {
    "url": "others/android.html",
    "revision": "da7146f020d51fee14177c0b7b4693ac"
  },
  {
    "url": "others/chisel.html",
    "revision": "de7637225bceab668ae0a4981ec0a018"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "6bcfb0f8d7d27096371028b794d6963c"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "17ef0fe8bbd9c2eb890c47c2a3242bc3"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "5f59a72fd40a5b6705aacf098cf33641"
  },
  {
    "url": "others/css.html",
    "revision": "fcc637542ef9161e059c06c29bee1dd0"
  },
  {
    "url": "others/docker.html",
    "revision": "025581ccfc6ef9d8d862b4bb458dd3bf"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8ce6fca1e29e9a9d380e517dd1dee49f"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "fa2ca206f9b6e040769c51533d0fc9c7"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6eb9ea1d6bb3a6379bcac7753adedbcf"
  },
  {
    "url": "others/esp32.html",
    "revision": "c774d12bba2fd2d459916758ef6fac37"
  },
  {
    "url": "others/freertos.html",
    "revision": "8cff0c9b47a96a8280a34a939bfb4eef"
  },
  {
    "url": "others/git.html",
    "revision": "a88d3a84dc6bee13e85d9d90a6251374"
  },
  {
    "url": "others/gns3.html",
    "revision": "00e0dac4c2a207c3457929756008caec"
  },
  {
    "url": "others/gps.html",
    "revision": "6271ec182f74736dfc0f301e5070420f"
  },
  {
    "url": "others/html5.html",
    "revision": "585e4f8cee02cf45421e9bed0560af74"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "73a602d2aefb4b84b7679af0f8bf34f3"
  },
  {
    "url": "others/index.html",
    "revision": "625d6ab9dc1bc0bd607bc146f1fb4079"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "50337369b7879fedd40ec43ff8d3ddc8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "607a23dcb6f477aa2e10c15b12d43882"
  },
  {
    "url": "others/javascript.html",
    "revision": "a013a0d237701d99f511b87d40883fe6"
  },
  {
    "url": "others/json.html",
    "revision": "d2e5d30a85191889e0dfba724b08450f"
  },
  {
    "url": "others/latex.html",
    "revision": "3a950dcb66fa1ee0ff65fc9cd31b8e9f"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "cae55b3da96ee92e0b6b090ba99efa69"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "b980dbea88a0c57ab45725dabda5080c"
  },
  {
    "url": "others/lwip.html",
    "revision": "7ee8f85b596aa7f8fdefd39c8a08f7ea"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "169e19272de3af501075a003a5eaa50e"
  },
  {
    "url": "others/markdown.html",
    "revision": "835752d8a5e7bf3a0ab653723ec449bf"
  },
  {
    "url": "others/matlab.html",
    "revision": "bfc1fb56f7ceed6e0aae843719373358"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a2850193c6af29c4c8792ad5ed653fb9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "7db749361d3b9af7d38290fc9a70f7cd"
  },
  {
    "url": "others/network-security.html",
    "revision": "6f7b975463ef2945bebb58c9edccab6d"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "948ceea9685bc219e4c56afc49f22db1"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e0be383172b0098ca0a396ec39df0fbe"
  },
  {
    "url": "others/poe.html",
    "revision": "61338beeb7f15a052fd05d5603a28a53"
  },
  {
    "url": "others/pyside2.html",
    "revision": "0be9c4ff011de366ddf751d2ec7b7999"
  },
  {
    "url": "others/python-socket.html",
    "revision": "1c56ace0f0cb9c6d6972ef10e783dd6c"
  },
  {
    "url": "others/python.html",
    "revision": "c462b811b3a6b282b5ba81d04d048651"
  },
  {
    "url": "others/q-learning.html",
    "revision": "917c5db89ed7299785676787df5bf74c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a55c92fae39fb9998e45d496e0d4d67e"
  },
  {
    "url": "others/qt4.html",
    "revision": "c9cccf3d13e5c2df90b2c21ce4ff1294"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "bc82b7745ec58c05c45e26aa688b5b43"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7793e6513cb2174975369c72f1733629"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "6e369cfdce457e2a96bfee6ed6cfc4dd"
  },
  {
    "url": "others/sd-card.html",
    "revision": "87e5e29636f6a05c9cbf7485799f697c"
  },
  {
    "url": "others/sdn.html",
    "revision": "22db9eeb01ea01ea4585a05f1265f8ec"
  },
  {
    "url": "others/star-uml.html",
    "revision": "0265514e76ac53ef4bc4943029bc18cd"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "da351b4bfffe15425d9a9b08656b6d32"
  },
  {
    "url": "others/verilog.html",
    "revision": "895dfb7402da1baab65f80796f6ce155"
  },
  {
    "url": "others/vue.html",
    "revision": "2ab9eca8e938690571f259875c8a5285"
  },
  {
    "url": "others/w5500.html",
    "revision": "7a81789be7b3c9c63ff86f485b846035"
  },
  {
    "url": "others/w7500.html",
    "revision": "c368f0727dbdad230393512317a25625"
  },
  {
    "url": "resume.html",
    "revision": "2612d1d54b3b36ee5f3d22640853761d"
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
