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
    "revision": "0381faeb081fac520b3bf6ee0c1ab176"
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
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/js/10.fd63a9bd.js",
    "revision": "1cc3ab00c3ba8948fc7d078765e523a8"
  },
  {
    "url": "assets/js/11.1c2794e5.js",
    "revision": "cf5d03377a70c10424176be4ff3b6312"
  },
  {
    "url": "assets/js/12.1bc4b774.js",
    "revision": "f1b59bd434524aaaa1fc0d8c6a5645ff"
  },
  {
    "url": "assets/js/13.e9e0c036.js",
    "revision": "94be74edef71726c1d7d37a1249fe189"
  },
  {
    "url": "assets/js/14.5b848ea8.js",
    "revision": "13189d7a8c44e868aec356c1c864a0a7"
  },
  {
    "url": "assets/js/15.60fa0cc1.js",
    "revision": "43d6ce7d5af47f61ca20cc787c638978"
  },
  {
    "url": "assets/js/16.ed020014.js",
    "revision": "98febd5f67130e708ba54965d84160e9"
  },
  {
    "url": "assets/js/17.a4b27e93.js",
    "revision": "b1eff1566aa49cfe38e780eac45ea56a"
  },
  {
    "url": "assets/js/18.5cc5abb9.js",
    "revision": "42807bdcede015fe4868e60c4bfaa588"
  },
  {
    "url": "assets/js/19.c2aa2d9d.js",
    "revision": "300c57ea5751f24a8b727d1429b4daff"
  },
  {
    "url": "assets/js/2.2eb33f3b.js",
    "revision": "f747565e8293a49f511505fe6fb5484d"
  },
  {
    "url": "assets/js/20.38b967a2.js",
    "revision": "89db0dccc90596d75c27cbdb1c74abd5"
  },
  {
    "url": "assets/js/21.f7ddc698.js",
    "revision": "a55b45210dbf7c4d2306255152e31662"
  },
  {
    "url": "assets/js/22.994aad1e.js",
    "revision": "e8f04656044d9d3e85377731fdc10239"
  },
  {
    "url": "assets/js/23.81047bc9.js",
    "revision": "24791ef5825a38ff1174777ca9736a44"
  },
  {
    "url": "assets/js/24.50ce9fb7.js",
    "revision": "797272ea1747391345747a849648461b"
  },
  {
    "url": "assets/js/25.9ea37199.js",
    "revision": "d3db9bc150edd1f1cc462e8ca48d8e1a"
  },
  {
    "url": "assets/js/26.e67d42a3.js",
    "revision": "06c0c753c4a5c74e818ddabd95b0bc7d"
  },
  {
    "url": "assets/js/27.9f1c3cf0.js",
    "revision": "92eac50d18e49a460b7b6631b632ed81"
  },
  {
    "url": "assets/js/28.537cd798.js",
    "revision": "a71486e1435c73001a02e94e12fe49dd"
  },
  {
    "url": "assets/js/29.6aa71ccd.js",
    "revision": "e9819e0df7273d550b044939e5978a6b"
  },
  {
    "url": "assets/js/3.31ddccb9.js",
    "revision": "27797af739c90a5afd12d304252ee0cc"
  },
  {
    "url": "assets/js/30.1e401ac6.js",
    "revision": "9dbeb86c5f2945d403bf1abd280c17fc"
  },
  {
    "url": "assets/js/31.696c7c4e.js",
    "revision": "d1fc63f7cda67e25ae88e62ef9bbd703"
  },
  {
    "url": "assets/js/32.2ccc6f25.js",
    "revision": "b7b187ffce7abdc21c8086b2571d8b53"
  },
  {
    "url": "assets/js/33.21deb1a4.js",
    "revision": "ddc602577e338e7fd1023e90819dc2b5"
  },
  {
    "url": "assets/js/34.1c9c010d.js",
    "revision": "4a7a491659c6057c442ecf149647d4a7"
  },
  {
    "url": "assets/js/35.458fcb22.js",
    "revision": "ff7d9b7b0c524a63ec4cadf9a1f60bbd"
  },
  {
    "url": "assets/js/36.0d5e8670.js",
    "revision": "30b2d0fa7c0e26ee6823c757670ebbed"
  },
  {
    "url": "assets/js/37.396bb62e.js",
    "revision": "5c44607a1d7f05973aadf49d148df9d5"
  },
  {
    "url": "assets/js/38.6caee339.js",
    "revision": "9a597c180a69124e5ceeccb3c2c4e14f"
  },
  {
    "url": "assets/js/39.e20b688b.js",
    "revision": "b3a26d5a70866afc5ab9de845bb3c410"
  },
  {
    "url": "assets/js/4.34714239.js",
    "revision": "fd76e6301499efc8bbedf70b94311eb6"
  },
  {
    "url": "assets/js/40.d6925a0c.js",
    "revision": "7f16b6cffd93370901b8e05945a85ade"
  },
  {
    "url": "assets/js/41.ecffcd1b.js",
    "revision": "f143cad8e5921a4e139fb0350993cce1"
  },
  {
    "url": "assets/js/42.9358eec7.js",
    "revision": "1bfef41717abbebfc09e021b098c0e1a"
  },
  {
    "url": "assets/js/43.117139d8.js",
    "revision": "8200a19145b65fff9ec328b655a93cef"
  },
  {
    "url": "assets/js/44.43f49822.js",
    "revision": "5b9d76a37a8960aae6b3deab80984de7"
  },
  {
    "url": "assets/js/45.29f9c04e.js",
    "revision": "6b85a3cd6736a2f920814551d1ec4d23"
  },
  {
    "url": "assets/js/46.1dd7137c.js",
    "revision": "05fe0b042e68884a87ce63ae9ca57886"
  },
  {
    "url": "assets/js/47.d309fceb.js",
    "revision": "3d75810243176b9001a594aac2134d7d"
  },
  {
    "url": "assets/js/48.7aadb863.js",
    "revision": "9cce8a1a14e53a03bff3be5ee57c8f27"
  },
  {
    "url": "assets/js/49.ca407ce3.js",
    "revision": "57b9af55e2eac62a158f7cb29c160b1e"
  },
  {
    "url": "assets/js/5.a7ab811d.js",
    "revision": "c2b7580701fcb93e9c427267880104bb"
  },
  {
    "url": "assets/js/50.a9ed6cc1.js",
    "revision": "d5e2bb1556f2feb0ea34b263a61888a3"
  },
  {
    "url": "assets/js/51.f0624e4a.js",
    "revision": "91c6248cc4c326471604e506694a6ace"
  },
  {
    "url": "assets/js/52.bfeb3dff.js",
    "revision": "38ec6680944fb6e0972f2611bb196dc5"
  },
  {
    "url": "assets/js/53.cc20f0fe.js",
    "revision": "97585aa884cc11aa5c37110fcfa0004b"
  },
  {
    "url": "assets/js/54.ac913322.js",
    "revision": "cc158dcdac1567c9b4163b173d7826bd"
  },
  {
    "url": "assets/js/55.131069ed.js",
    "revision": "a38eff2e0eaabfdb35f5ade09c01364d"
  },
  {
    "url": "assets/js/56.7e5b13d8.js",
    "revision": "3ec20b3dc66e312a05ac4f50bd307754"
  },
  {
    "url": "assets/js/57.becf2211.js",
    "revision": "9201def9fe0dcdbd9a5de2ed766983ac"
  },
  {
    "url": "assets/js/58.26daa11c.js",
    "revision": "36e6c41f434af3c0b9c2cf942807fb1b"
  },
  {
    "url": "assets/js/59.865f07eb.js",
    "revision": "2df8890645d855bb09343800de15cbbc"
  },
  {
    "url": "assets/js/6.b6af52be.js",
    "revision": "dc3bdc8ffa262266449ce604b9c9edfd"
  },
  {
    "url": "assets/js/60.827b93aa.js",
    "revision": "2b5568826dd41dd5c995ea423c5958ce"
  },
  {
    "url": "assets/js/61.52226f45.js",
    "revision": "9905d2afbab3ecf19a9eef294f50d4c3"
  },
  {
    "url": "assets/js/62.d246a96f.js",
    "revision": "512ac22aa4596ab0f06c437e9ba18c8e"
  },
  {
    "url": "assets/js/63.468b6330.js",
    "revision": "e8f586ebdc8dace59bb4b8f358c7bf46"
  },
  {
    "url": "assets/js/64.e1fbfa02.js",
    "revision": "5ac029220eeca0e065a3652421490387"
  },
  {
    "url": "assets/js/65.1a8c132b.js",
    "revision": "0f902bdd6a85961e1dc2035f8619a77d"
  },
  {
    "url": "assets/js/66.82dfcced.js",
    "revision": "c37fd880671bfb2d88c655facb9bf67f"
  },
  {
    "url": "assets/js/67.219e7aa9.js",
    "revision": "6bbd17c994fa6241f7684e48772f857e"
  },
  {
    "url": "assets/js/68.2193a990.js",
    "revision": "e4c2b7d778b1b2c036d6112d3f7a7ab1"
  },
  {
    "url": "assets/js/69.7c8b52d9.js",
    "revision": "3ccfbc1533f47f76e45e8071158e1cfc"
  },
  {
    "url": "assets/js/7.2e6e1ded.js",
    "revision": "9e5c793ebb86f83bbc70ed7551ff3b08"
  },
  {
    "url": "assets/js/70.d7f3fde2.js",
    "revision": "5fb49b695a63ca1b4892f06fd0374a11"
  },
  {
    "url": "assets/js/71.f7084d30.js",
    "revision": "6023141e5426b23ca6c29a907c462738"
  },
  {
    "url": "assets/js/72.faf175aa.js",
    "revision": "6667ac8f1606cec7a434b335f35818f5"
  },
  {
    "url": "assets/js/73.768b8b08.js",
    "revision": "7588a7cb43e2c9c59d2cf6885535cf7c"
  },
  {
    "url": "assets/js/74.b0b2b2e0.js",
    "revision": "2b27001c74655c2fe4c44ba6a3db69b5"
  },
  {
    "url": "assets/js/75.16da9a11.js",
    "revision": "24172c98afed71ae488d8eb3ffc671b8"
  },
  {
    "url": "assets/js/8.f1ef361a.js",
    "revision": "0410d1f830e65931ea04ed8e318b1523"
  },
  {
    "url": "assets/js/9.063f7690.js",
    "revision": "c0da44d9e9301661d0204475c69a9167"
  },
  {
    "url": "assets/js/app.b28991d1.js",
    "revision": "19689fcbc7cd12401af3289450acd933"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "4d0124996ff9c2ac57ffb538f1c218ea"
  },
  {
    "url": "cs/bash.html",
    "revision": "9e49bae296f20bcc4c38e6d2d9bbb61d"
  },
  {
    "url": "cs/cmake.html",
    "revision": "435e878f6eaacf06c63432ce2cde48c7"
  },
  {
    "url": "cs/compilation.html",
    "revision": "a3afe46b5c6cfe5db3c29eb4d0b86279"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "81eeb6f7d18992dd1d1715fbcb5a94ee"
  },
  {
    "url": "cs/index.html",
    "revision": "3ed17c399ce62da61ad4b052b05e67df"
  },
  {
    "url": "cs/keras.html",
    "revision": "3ca4db107446d4fdb3df5fdd18bbfdff"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "85660e81916e77d5c3b6eae913581d3a"
  },
  {
    "url": "ee/about.html",
    "revision": "5e8e3dba8d572e809f7a17b7d68425ef"
  },
  {
    "url": "ee/index.html",
    "revision": "4eb532e7a6ec40c41d825b96f42a4ffa"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "8b226063269f043c6f4e33d5b82e994a"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "6d99eac29ef84a7a65288e2c1e617ac3"
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
    "url": "images/cs/design_pattern/iterator.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
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
    "revision": "e2aba42811cd207417deadc69bc96551"
  },
  {
    "url": "others/about.html",
    "revision": "5eb84e6e967b0be28d66d8994d5dded6"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "34174ddc29071d256a2dacda4474ea84"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0efb87ca5c3312021795d97f75bfd898"
  },
  {
    "url": "others/android.html",
    "revision": "b15a3e711b322753669cff864017de74"
  },
  {
    "url": "others/chisel.html",
    "revision": "3b04f06b02fb7788c744836521161eb4"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "5b1e9fbac3224d76890347baa6fd936b"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "8c6a23dcc617d3570424ddd1cfce61e4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b29330f0e9dd511f8cc9d7b897c70bea"
  },
  {
    "url": "others/css.html",
    "revision": "dc8229859fc432932401b5cadec0be66"
  },
  {
    "url": "others/docker.html",
    "revision": "e737547040910b9835b20d5e392f3bc3"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "08a90022f313b8b7f7bc036b69c0db71"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "e325c91a8124785a5d3a993988a178a6"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b2895d31b406cfc8a25075fc35eb3fc0"
  },
  {
    "url": "others/esp32.html",
    "revision": "7312500578bf7b0751389ce459fce696"
  },
  {
    "url": "others/freertos.html",
    "revision": "1bcbe665a1aeab2a292d759dc54954a3"
  },
  {
    "url": "others/git.html",
    "revision": "ee7be06de40b5e001b6e3e730395851e"
  },
  {
    "url": "others/gns3.html",
    "revision": "25030135f5f090662e1e049411ca0af6"
  },
  {
    "url": "others/gps.html",
    "revision": "e599228a5bbfc08418819423d568b6d5"
  },
  {
    "url": "others/html5.html",
    "revision": "2ef584fbdaa792861545ed919f39b9a3"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "2faca1029d65309bb44c74782e7ff078"
  },
  {
    "url": "others/index.html",
    "revision": "60b9e53d515af1a524e2ad3b41103e73"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f2e0b8eaa8b277a2e08750899e0bac71"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a8070de33d0e88e495a5527466a7e285"
  },
  {
    "url": "others/javascript.html",
    "revision": "a4573d89bf894e527c34a7c724f162cf"
  },
  {
    "url": "others/json.html",
    "revision": "1b2cb0357b95148a4ba097ecf44b9973"
  },
  {
    "url": "others/latex.html",
    "revision": "a3bace5e6b256dc186b6d3ed2b06f166"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b7113b9e9626bdb2bf69515f5b8ccc24"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "29cd7e40bdff6677ef982b0db1dde944"
  },
  {
    "url": "others/lwip.html",
    "revision": "b415c9c8782913aa9bcaa9139ad5db00"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0ca25984e7f866070759665d1c6a1667"
  },
  {
    "url": "others/markdown.html",
    "revision": "3dd37a6065c95b1df0d74ea002eef891"
  },
  {
    "url": "others/matlab.html",
    "revision": "940256fb92a12ac13cdb5165e571252b"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1eca8f7be76e18f26e2f2bd60535f148"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "76ce4b5474d9bbce621a859ac60a907a"
  },
  {
    "url": "others/network-security.html",
    "revision": "6eeb9210392841e2fb14e4b1ac40316f"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f75889577f1fe445f2c108f39aafabbe"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e84b5004aa28e88ef807703499be2ff9"
  },
  {
    "url": "others/poe.html",
    "revision": "a93cea9f9a23c6afb6655060bf03c1fc"
  },
  {
    "url": "others/pyside2.html",
    "revision": "ca654de298fc41a247292d87589a4794"
  },
  {
    "url": "others/python-socket.html",
    "revision": "31091e9a247339ff115ad3d9600f4307"
  },
  {
    "url": "others/python.html",
    "revision": "9378a0b3e563ae55ee91bda429716227"
  },
  {
    "url": "others/q-learning.html",
    "revision": "019efc1606a3d994c64908b28378e1db"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a92946ef95a630375a8054b4fb8aee9e"
  },
  {
    "url": "others/qt4.html",
    "revision": "8930e057e706727c336893d2cd91c19e"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "1504bd6e8da50ad308fe0bd174b439d7"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d1d72d219cfb7a0cf68496c9761a959b"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "287e7b2cd9d77b5b9a1c9de9e88579bd"
  },
  {
    "url": "others/sd-card.html",
    "revision": "741a34ccb520a775b9672992084dbd88"
  },
  {
    "url": "others/sdn.html",
    "revision": "5957355cf09d5544ccfebe5831dca30a"
  },
  {
    "url": "others/star-uml.html",
    "revision": "be2c01ffb2e06e2b1c9800a09d5e1e62"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "afb6745e52b34bb4b173676991cffe09"
  },
  {
    "url": "others/verilog.html",
    "revision": "d4f653cf563853b5ca605a7240553120"
  },
  {
    "url": "others/vue.html",
    "revision": "74ff52abf86bee1b18df9277d262c5e8"
  },
  {
    "url": "others/w5500.html",
    "revision": "a73a6f5956a2ed51d2e9c052bd89689f"
  },
  {
    "url": "others/w7500.html",
    "revision": "1166d519531653b07031bf76df618f8a"
  },
  {
    "url": "resume.html",
    "revision": "3bdd8c4d1e610f497728a490c6ffd301"
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
