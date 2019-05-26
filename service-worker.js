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
    "revision": "a006602fd449794e30ba34ceb7559061"
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
    "url": "assets/js/10.e7ec2bde.js",
    "revision": "d4962626d33e068478b002f1f38b2f98"
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
    "url": "assets/js/21.1d55331f.js",
    "revision": "240881222efef822021f7be48f216c19"
  },
  {
    "url": "assets/js/22.994aad1e.js",
    "revision": "e8f04656044d9d3e85377731fdc10239"
  },
  {
    "url": "assets/js/23.d5fa0d2c.js",
    "revision": "1d11de06015e70053861e0bde6aa15fc"
  },
  {
    "url": "assets/js/24.52ff137a.js",
    "revision": "5c4a0ea0a8d499e6b7189798ff483de6"
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
    "url": "assets/js/5.882e8075.js",
    "revision": "72199b50a4640dacf697b1727703467e"
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
    "url": "assets/js/52.614567fe.js",
    "revision": "d486c1e2639babd1b57e28212af66802"
  },
  {
    "url": "assets/js/53.0bdd4973.js",
    "revision": "671f038ea5214697526740a0ce8589fc"
  },
  {
    "url": "assets/js/54.da5a56dc.js",
    "revision": "466e0365c666bcdf13b7c62e8b22bfe6"
  },
  {
    "url": "assets/js/55.0bf4e90f.js",
    "revision": "7a4b9240096cfc941fca12272da3650c"
  },
  {
    "url": "assets/js/56.3bea3a15.js",
    "revision": "e234b7ab84c23dd1dfd0dd014be34182"
  },
  {
    "url": "assets/js/57.b1c47232.js",
    "revision": "8c700aaee9eda7e9c8b0e5dfba5a6e0f"
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
    "url": "assets/js/60.2525df39.js",
    "revision": "d3bea4f8b602d2ca12f52463d3e474e9"
  },
  {
    "url": "assets/js/61.51a71dfc.js",
    "revision": "ba7dbe99e07b5766ffdaaad1e85951b1"
  },
  {
    "url": "assets/js/62.d246a96f.js",
    "revision": "512ac22aa4596ab0f06c437e9ba18c8e"
  },
  {
    "url": "assets/js/63.28ca9f33.js",
    "revision": "67cbefc9c4bb2cd2a0a342bfaa91469c"
  },
  {
    "url": "assets/js/64.773bab48.js",
    "revision": "8d11804c97856feded780d18392de251"
  },
  {
    "url": "assets/js/65.1a8c132b.js",
    "revision": "0f902bdd6a85961e1dc2035f8619a77d"
  },
  {
    "url": "assets/js/66.3f27c990.js",
    "revision": "81cc6291df23e6d43a9c39308bf7f140"
  },
  {
    "url": "assets/js/67.627ae150.js",
    "revision": "e864bf8cd32a3d97dad665cffde59e15"
  },
  {
    "url": "assets/js/68.6d6bdac0.js",
    "revision": "7347e5ae6e6e0bf1c5fc7524c12784a7"
  },
  {
    "url": "assets/js/69.39d1feb8.js",
    "revision": "83aaba9c3d20bd6a4fcaa54cf0905d9c"
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
    "url": "assets/js/71.7d6d4db9.js",
    "revision": "057198a0a6feece1b8dca0b861e6725f"
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
    "url": "assets/js/74.757423b8.js",
    "revision": "aa68f59ad03b6a92f2743b9336c22ae1"
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
    "url": "assets/js/9.dcd80b4d.js",
    "revision": "2be1d027242d516338c845a2e0b593d6"
  },
  {
    "url": "assets/js/app.3a4771a5.js",
    "revision": "ca03aea321a3b18cb6e7e83f5c58d2c4"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "a6fe2b2f55b786ec693c9dd183c414b5"
  },
  {
    "url": "cs/bash.html",
    "revision": "592d2f3be37b870892c8f9cb32a162b0"
  },
  {
    "url": "cs/cmake.html",
    "revision": "cd07d4e1205842fb7950ab36dd3a819e"
  },
  {
    "url": "cs/compilation.html",
    "revision": "5c4248e505fe058212a524d8c750675d"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f7647234e70647e6809c8438526ab5bc"
  },
  {
    "url": "cs/index.html",
    "revision": "65eace620f2f638aca3fae3833ca147f"
  },
  {
    "url": "cs/keras.html",
    "revision": "dc4081ed01777ad3adf02e9c698a36c6"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "1558fb897209e410d0174f55bd4a2557"
  },
  {
    "url": "ee/about.html",
    "revision": "7780a15d640f40dcf5e84ca228da65bd"
  },
  {
    "url": "ee/index.html",
    "revision": "64c4dce1d507cf9107393b193d1fab11"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0ddb2213568381c07bc3ab7d306174b8"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d3aba61becf5d94db1d53d8dbf5b98e9"
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
    "revision": "a256241ed6439022cf3c63c138d9ac69"
  },
  {
    "url": "others/about.html",
    "revision": "b897ae5a51282db888c78d12a73a2c73"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "bd26f6f68349d45455e9320aa9c48668"
  },
  {
    "url": "others/android-studio.html",
    "revision": "e5dec612cca87b4aae362525e69b9736"
  },
  {
    "url": "others/android.html",
    "revision": "5b4fe83d92cb612931653282dd26fd61"
  },
  {
    "url": "others/chisel.html",
    "revision": "fdd9745d32d94496cad338e4b7b1638b"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "90a5bff898506c5c3657f990ec04a8a0"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "775f87e697b7d2f38ac96416220b2e1b"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "21620f70988613f3c00c480e8cb9051e"
  },
  {
    "url": "others/css.html",
    "revision": "034dbdac63d2172bccd4bbd173252e2a"
  },
  {
    "url": "others/docker.html",
    "revision": "b8630d5b284c4a056d163aa078327d6b"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8a5fa33cee4a90784ee93ab3f3127688"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a7c5b107ac70cef296cdd717744ad600"
  },
  {
    "url": "others/english-writting.html",
    "revision": "0f6bd1629f6c83d64cc57b89f82c07a1"
  },
  {
    "url": "others/esp32.html",
    "revision": "ca9357adf292aaa7991d455e7d7ccc39"
  },
  {
    "url": "others/freertos.html",
    "revision": "e98e5f7eea75e7315a950b0680b46aad"
  },
  {
    "url": "others/git.html",
    "revision": "b0d65ad4de0d37e4804374b8f6bae4a8"
  },
  {
    "url": "others/gns3.html",
    "revision": "247532bf948527a3c0811970fe80511b"
  },
  {
    "url": "others/gps.html",
    "revision": "a5278b2d1a7822886e91086fff8b4d9f"
  },
  {
    "url": "others/html5.html",
    "revision": "08fc00ff5c829cd02c15683d45dcf22f"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "cda9cf568c157f70628b17d03a2ea5ad"
  },
  {
    "url": "others/index.html",
    "revision": "ce441d7856b9504024920c153a499f07"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f6e50870ad5e688d821208374302d64b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "02dc9953a8fb9c2eee20605932f5793b"
  },
  {
    "url": "others/javascript.html",
    "revision": "c9865af6ac34fa7e3afb9883f07156b7"
  },
  {
    "url": "others/json.html",
    "revision": "53989230b8d99cbe2a73ce9cd551c473"
  },
  {
    "url": "others/latex.html",
    "revision": "10b38d54ba84560614d444d3ec8eb993"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "843fa881eec6383f705be47cf26d99a4"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "c4239e83633220db0f2d60e629974c25"
  },
  {
    "url": "others/lwip.html",
    "revision": "7f62de01ebd9bb07059540324e48ed57"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "f96969328f178a305a0a08a28c4f3769"
  },
  {
    "url": "others/markdown.html",
    "revision": "a6433c15ad6d793b61e401e3dc278161"
  },
  {
    "url": "others/matlab.html",
    "revision": "175bd193e7cc46d71baa633768c1f83b"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "15c86b7614ae8b3e6882194025f104ca"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "0dee07c6b6eb5481f440744db5f9e3da"
  },
  {
    "url": "others/network-security.html",
    "revision": "da40183c293929a8d9c3d4bc20e7ea61"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "db57d32e9b93054130e7fe34d27686fb"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "eaf0b3d220268a73373ce0ef4c0904fe"
  },
  {
    "url": "others/poe.html",
    "revision": "aeb957db3888675b09a0926ffb141e38"
  },
  {
    "url": "others/pyside2.html",
    "revision": "74044372a65282c2325040647671be33"
  },
  {
    "url": "others/python-socket.html",
    "revision": "eb17466924d9bcd32c49233fe55cbffe"
  },
  {
    "url": "others/python.html",
    "revision": "346f1e97a10fbb0801ecc063bbff3f4f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "a24a8ee287f2b50a3104e280d1e857ea"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b2245a648c20d0e05d6401c265c8b7ee"
  },
  {
    "url": "others/qt4.html",
    "revision": "161330687071ee462b635fc2fbc5325d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "6994bd02efdb1837441290c63d0a2a6c"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "29d7953c9bf8f278b2f6551709e7a8a4"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "3c9e3b122c6d6e037d64a2531f880bb0"
  },
  {
    "url": "others/sd-card.html",
    "revision": "506446bca78618d2f6e7620548fe2c1c"
  },
  {
    "url": "others/sdn.html",
    "revision": "3329ab7942d903175e87984405babc04"
  },
  {
    "url": "others/star-uml.html",
    "revision": "562b06de69cf2a711aea6d3d662dc088"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6b8872cc3c9fc1b616050b18e5432b3c"
  },
  {
    "url": "others/verilog.html",
    "revision": "f490badb5efd42e373677700038f12ce"
  },
  {
    "url": "others/vue.html",
    "revision": "8078289e4727a22a33f4ac8220dfeda4"
  },
  {
    "url": "others/w5500.html",
    "revision": "66ca639311b3a98013ba92e582fc797b"
  },
  {
    "url": "others/w7500.html",
    "revision": "0347e3d66034d015ffca48768cf5ec3b"
  },
  {
    "url": "resume.html",
    "revision": "1f52636bb26804321ff645501531a9c3"
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
