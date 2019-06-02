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
    "revision": "abf7f6b0278628beb42161444009b7d0"
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
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
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
    "url": "assets/js/10.e42406a5.js",
    "revision": "1a1875d7ee27e6273df28136ec3dd259"
  },
  {
    "url": "assets/js/11.1ca27009.js",
    "revision": "8c5208bafdc6561c9ff8794f05706a30"
  },
  {
    "url": "assets/js/12.4631da34.js",
    "revision": "8621908be6ed573df74203b56550c8e0"
  },
  {
    "url": "assets/js/13.32a3baec.js",
    "revision": "c30c2cab982d4e82804cd822e80d12a8"
  },
  {
    "url": "assets/js/14.31632b50.js",
    "revision": "4c80e7055bd08cc21127ab3b44a90169"
  },
  {
    "url": "assets/js/15.a82e0025.js",
    "revision": "61788d5ac9aa777d990ec6f09143e605"
  },
  {
    "url": "assets/js/16.bf3962f9.js",
    "revision": "083d52a03974655ca4dc21abae0156e9"
  },
  {
    "url": "assets/js/17.021bc2ec.js",
    "revision": "ee99fd888d0d867b959d180dd2306e72"
  },
  {
    "url": "assets/js/18.9b4aa60c.js",
    "revision": "99b3457790898e4b911bcb2bdf1ce931"
  },
  {
    "url": "assets/js/19.8251839f.js",
    "revision": "a476e5f6a4687b3dd3b63e6d13c709ed"
  },
  {
    "url": "assets/js/2.b8e55ebe.js",
    "revision": "1bd38b8b6be8e59052d8a4ce771f4f2e"
  },
  {
    "url": "assets/js/20.989fd360.js",
    "revision": "6b5b71385526bd9247939903e718f577"
  },
  {
    "url": "assets/js/21.629d8bf4.js",
    "revision": "06f30ecaaa11855f6c1fe6c19daf514a"
  },
  {
    "url": "assets/js/22.96ead94e.js",
    "revision": "055f95b81a1b098ddf146b1234f13692"
  },
  {
    "url": "assets/js/23.bc89cce4.js",
    "revision": "4c4f667ddaf03e6562997d987cb3baf8"
  },
  {
    "url": "assets/js/24.f5aa309a.js",
    "revision": "27946ba642c691223d5617def6179864"
  },
  {
    "url": "assets/js/25.1eda7551.js",
    "revision": "a4c6e330fe2d2e0e53f6ad00278599d2"
  },
  {
    "url": "assets/js/26.6e9e2082.js",
    "revision": "daf7ac29339fbc604aa174ca612ac5b9"
  },
  {
    "url": "assets/js/27.e9635d1f.js",
    "revision": "0f5bafdb17b2c799ccec2ec20f39179c"
  },
  {
    "url": "assets/js/28.e5998d2c.js",
    "revision": "91c99e22502e4c4d1a685d44f8ececa8"
  },
  {
    "url": "assets/js/29.d51a1cab.js",
    "revision": "fa8e90d129658fe74a0d124ef3eb8fdb"
  },
  {
    "url": "assets/js/3.59c0c4d4.js",
    "revision": "bd317a67e347c385f83bfbdbc43dc562"
  },
  {
    "url": "assets/js/30.f257b133.js",
    "revision": "1696a64a4bc381ea2160c467580a8426"
  },
  {
    "url": "assets/js/31.44fa929f.js",
    "revision": "d9a256341819da4b4d6c1769e59a88d1"
  },
  {
    "url": "assets/js/32.16493aa3.js",
    "revision": "53e061f5533f2afe0c507d5a982f0ef7"
  },
  {
    "url": "assets/js/33.77c1acaf.js",
    "revision": "928f2746a18f17f86a7d4951a208445e"
  },
  {
    "url": "assets/js/34.ea5dd938.js",
    "revision": "eff3999d4398dad48803898f51eb23c0"
  },
  {
    "url": "assets/js/35.2c9448e7.js",
    "revision": "3ef13baccf0300cd01936d2913d42274"
  },
  {
    "url": "assets/js/36.5100d7d4.js",
    "revision": "a720b83f5da4f7c7495d94e916c6c0b5"
  },
  {
    "url": "assets/js/37.f8b94a90.js",
    "revision": "1e48985226743d03ab20303160600798"
  },
  {
    "url": "assets/js/38.891f43dc.js",
    "revision": "f695c8b25041f35f35b8a93df2044677"
  },
  {
    "url": "assets/js/39.097e7cc8.js",
    "revision": "76adf432921d7723b49ecd65e06ceac5"
  },
  {
    "url": "assets/js/4.2164dd22.js",
    "revision": "4bbe9f2f36ea539f15a0df5c539338ac"
  },
  {
    "url": "assets/js/40.a0d6d37b.js",
    "revision": "2ddc6ea93847f554547f7d710963e6b1"
  },
  {
    "url": "assets/js/41.94f19784.js",
    "revision": "f6cda76aee78f913417bc644f430a55b"
  },
  {
    "url": "assets/js/42.07092a43.js",
    "revision": "8c55e0a0b21cfe1ab0cb534f5bbb8935"
  },
  {
    "url": "assets/js/43.db7dfccc.js",
    "revision": "0abfa2f222a3875a0e95c871b8426886"
  },
  {
    "url": "assets/js/44.eef878fd.js",
    "revision": "276e2a375a39467aa3201bf9529e3cb4"
  },
  {
    "url": "assets/js/45.f57420a4.js",
    "revision": "ba285a0bccf2c3172054a6a90d272910"
  },
  {
    "url": "assets/js/46.ee3c2437.js",
    "revision": "f583c926a8a678fc36f9eba324c843a2"
  },
  {
    "url": "assets/js/47.509ebb76.js",
    "revision": "4d2a5d0d1130a5b25fbee603fe2262b8"
  },
  {
    "url": "assets/js/48.90d7e575.js",
    "revision": "3f324e59193619748f38089f7231d658"
  },
  {
    "url": "assets/js/49.d0764cc7.js",
    "revision": "bfc3ad13298fdc8b2f944512ba7f6454"
  },
  {
    "url": "assets/js/5.15ff714e.js",
    "revision": "6df4e04f5a3a80b3dd4fc0352f7c1254"
  },
  {
    "url": "assets/js/50.21b38a40.js",
    "revision": "3608fe6391d496dd19d459614904c97b"
  },
  {
    "url": "assets/js/51.a6d91398.js",
    "revision": "2fdc03efa316200e644b4b2668913e99"
  },
  {
    "url": "assets/js/52.600ac5d8.js",
    "revision": "ff9ff01a427a26a3380381cfd1877845"
  },
  {
    "url": "assets/js/53.cea14f37.js",
    "revision": "d74da4fa5fedc893cb9e070daa851bfb"
  },
  {
    "url": "assets/js/54.e17560c2.js",
    "revision": "f580887553dd12a1c0684ac315a49b93"
  },
  {
    "url": "assets/js/55.c4bcb0da.js",
    "revision": "9a056b01ed9bb8559ca69d2854a3e478"
  },
  {
    "url": "assets/js/56.aaf337b3.js",
    "revision": "32b7060adeeb0f1c6ca26a63b62f0fdf"
  },
  {
    "url": "assets/js/57.b9dccde6.js",
    "revision": "d674b2befda2696dec991ffac4ae2fcd"
  },
  {
    "url": "assets/js/58.5e57217a.js",
    "revision": "af078253f03339abcc6aa6736d749521"
  },
  {
    "url": "assets/js/59.20fbd0e3.js",
    "revision": "fbb3827027e032a9f4df69e6ba060303"
  },
  {
    "url": "assets/js/6.e1d36dc2.js",
    "revision": "9335f756f9095dc20353f87435653ded"
  },
  {
    "url": "assets/js/60.c83374d2.js",
    "revision": "9e3d6e4d0c7bf4f878cfcebad944c533"
  },
  {
    "url": "assets/js/61.a5fc1b71.js",
    "revision": "2cbd0d0c27ee0eb59f0f5e6c91a0baa4"
  },
  {
    "url": "assets/js/62.bb627d6a.js",
    "revision": "fc1d216ab88256ac05c829613fcce211"
  },
  {
    "url": "assets/js/63.d080c16e.js",
    "revision": "3595957e25633460802f41bd075b8bd5"
  },
  {
    "url": "assets/js/64.c1754b0b.js",
    "revision": "6875f1a4ed24eae44c5ee622b3778518"
  },
  {
    "url": "assets/js/65.e978ed3f.js",
    "revision": "421630956da93729169054d28940cd0f"
  },
  {
    "url": "assets/js/66.ccd62936.js",
    "revision": "5efeebf76de4ccf99b307b318dccff5d"
  },
  {
    "url": "assets/js/67.592b42fc.js",
    "revision": "89d96d5fe0e5f0eebbc67f22db07f999"
  },
  {
    "url": "assets/js/68.6d9fe09f.js",
    "revision": "86b1d5d69c3613dff3aa857bde06b84c"
  },
  {
    "url": "assets/js/69.3da322c5.js",
    "revision": "79b85dc9dff5c91804e73d19fd5e7cf8"
  },
  {
    "url": "assets/js/7.1081e7e1.js",
    "revision": "6d6919532ace353d502dbf80de792718"
  },
  {
    "url": "assets/js/70.07d37c81.js",
    "revision": "91600e1b2dcfea0ef3fe627cd6de834d"
  },
  {
    "url": "assets/js/71.da3d1775.js",
    "revision": "3fea04727b1dd04893317b3f37060358"
  },
  {
    "url": "assets/js/72.e197bea6.js",
    "revision": "b500987ea37103db96e651053ef70675"
  },
  {
    "url": "assets/js/73.5ec6df75.js",
    "revision": "06eebd72c56b4c1294a19496c576ae7d"
  },
  {
    "url": "assets/js/74.86c2c837.js",
    "revision": "446d24462d58c98612ec29ce67d4960e"
  },
  {
    "url": "assets/js/75.2501da97.js",
    "revision": "5dbe3a0189fe6fec6025dcbe199d1abd"
  },
  {
    "url": "assets/js/76.0ef899ea.js",
    "revision": "842c8933d608fc46bed754f5b515e3c2"
  },
  {
    "url": "assets/js/8.2f31cbe2.js",
    "revision": "4c59cd4ebefa5cd995e9e4716434547a"
  },
  {
    "url": "assets/js/9.61087f90.js",
    "revision": "f586a32ca7bb73d6fa32eeed2234d5e3"
  },
  {
    "url": "assets/js/app.185b5f31.js",
    "revision": "95213304fc0dcc31b14aedae1e17a103"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "f15e85263d8939cd2c5d73a270955fb5"
  },
  {
    "url": "cs/bash.html",
    "revision": "09a1040d3e7585218f970aa1885a10b5"
  },
  {
    "url": "cs/cmake.html",
    "revision": "f129cea611501bfff6e11d167d99aac5"
  },
  {
    "url": "cs/compilation.html",
    "revision": "74af2cb68f77135c531a0eb81c585cd5"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "28b205627118bfc2163a19a971da3507"
  },
  {
    "url": "cs/index.html",
    "revision": "70017752970a54025116cc10f44e30d0"
  },
  {
    "url": "cs/keras.html",
    "revision": "602f164d481b9da01170ec526e424be5"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "3380ad7f5756e144daf1d7b6777fce2b"
  },
  {
    "url": "cs/scala.html",
    "revision": "64010028f7e9b30bf13e327860b6bd1c"
  },
  {
    "url": "ee/about.html",
    "revision": "2fd114cb61a9564e2ef8158da11a02e4"
  },
  {
    "url": "ee/index.html",
    "revision": "632d05a00e7eda5ca25efc4d3eb91c26"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "de003ad7baebd74cae6d13425c30d119"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "49cf00fa58e75d89ba274fa63e2566b2"
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
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
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
    "revision": "cafa78dc220b7e8b16f8784ec3d077dc"
  },
  {
    "url": "others/about.html",
    "revision": "bd283c60f517fec152a1315cef7706df"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8b23ecb49dd4c1c508942790b76c7da6"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0a44ec5e1d95ceeb7d18abac099190af"
  },
  {
    "url": "others/android.html",
    "revision": "7312a5d04459295d939a4057b89f2cc8"
  },
  {
    "url": "others/chisel.html",
    "revision": "3cc1ee92a58a0aed89802b4828b7870f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "605fb8188ec957177c079af0d6394166"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "7337b47d725a5bbab53adbdf193d4cfa"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "a4682810fb32e66b6c66793ada929531"
  },
  {
    "url": "others/css.html",
    "revision": "ba639c911d5d5416ffc8c93b98e5ed15"
  },
  {
    "url": "others/docker.html",
    "revision": "65323554a2b14a3ed2715b123b7d4702"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "7ce383bf76f8c429ea29c7102005b313"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "126e0939593c12bbbd101a236ce007b3"
  },
  {
    "url": "others/english-writting.html",
    "revision": "f3a2ab20320d7781fff6c69500e83547"
  },
  {
    "url": "others/esp32.html",
    "revision": "93a0359de7dbcb33c0345078ae1a2a4c"
  },
  {
    "url": "others/freertos.html",
    "revision": "0027b90697cce66fbc7f0d4c10f69415"
  },
  {
    "url": "others/git.html",
    "revision": "3e4d2fe9fde14cecebdf678c36314ee8"
  },
  {
    "url": "others/gns3.html",
    "revision": "0c50bfaf001711308d432d69ca987bcd"
  },
  {
    "url": "others/gps.html",
    "revision": "94c8cd104e62a76003fd3aa4082a9ebc"
  },
  {
    "url": "others/html5.html",
    "revision": "e6df2da1f366d66566b90d2d3bc6bed2"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "1725b1ccda5203f5cef4ace4ae46f063"
  },
  {
    "url": "others/index.html",
    "revision": "d5556537412e8bf8875dd8f160634048"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "aaede6fefc026523825f113f789d4dc5"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ce3fa8fde6238d24226dc861b3475848"
  },
  {
    "url": "others/javascript.html",
    "revision": "d1b6ceb6db6b2a0b2e3b06405d9e550d"
  },
  {
    "url": "others/json.html",
    "revision": "01e09aa901f3f71ace6a5ed5b670856d"
  },
  {
    "url": "others/latex.html",
    "revision": "4bd5e6041af8d6fff09e4e4bed30a508"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ce7f1ab5aef73e4a87761a241f2c05e8"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7412075dea9e72edf94ce4a53700a972"
  },
  {
    "url": "others/lwip.html",
    "revision": "fc2d43da34f091b102c0eae6cb5a375f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "07ca4c4d482afeb9971d3a05d6abb546"
  },
  {
    "url": "others/markdown.html",
    "revision": "e353c48c818bb55b450a4ff014118936"
  },
  {
    "url": "others/matlab.html",
    "revision": "16cc01daec5005b442243d5023c829e5"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1a373d560775f3fe68cda2c614e8b889"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8c7fd90cbc0e582cb54f06e013ef408f"
  },
  {
    "url": "others/network-security.html",
    "revision": "5e27cb404a7f6f6081cc4707afee9d10"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "fa654a0188db6848dcf86e90bf2a0a7f"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "9dc0f4fcbae9b854655edbe1573cd349"
  },
  {
    "url": "others/poe.html",
    "revision": "7bd2af2b75c6ea069b3cb2bb9d544f21"
  },
  {
    "url": "others/pyside2.html",
    "revision": "0b0dca5ac4ff9c87c06a216495c11557"
  },
  {
    "url": "others/python-socket.html",
    "revision": "fa19d198cdb7900c44cc833e07badc8c"
  },
  {
    "url": "others/python.html",
    "revision": "62575a2fcee6546ac634b7b67e5926fc"
  },
  {
    "url": "others/q-learning.html",
    "revision": "66dd8f6b8799a6d0ed45c99530b0900e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7d8ef084b508bc96ee2b22584302a425"
  },
  {
    "url": "others/qt4.html",
    "revision": "66c64e0c3ccc4a14ffc3a77d89b3f407"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "2809923956af6720c98a59613faa3cef"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5759cfc53142da849d4a74e8e1a0909c"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5da9e8672483ae120942a9db4c906ca9"
  },
  {
    "url": "others/sd-card.html",
    "revision": "08d618e21db3f6b6eee2f68c297555b6"
  },
  {
    "url": "others/sdn.html",
    "revision": "c685e49cf8540b1e670bcd27a299ff29"
  },
  {
    "url": "others/star-uml.html",
    "revision": "6104e497211bdd67c10c2a495e4f6bcc"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "57f2288310964da4db982697ec059ba6"
  },
  {
    "url": "others/verilog.html",
    "revision": "8be06309d168321a578983e3b97a733b"
  },
  {
    "url": "others/vue.html",
    "revision": "49d85db90b0e1089be6163260ad41fcb"
  },
  {
    "url": "others/w5500.html",
    "revision": "138266f5306ae62e8499ec71fd57b48e"
  },
  {
    "url": "others/w7500.html",
    "revision": "9bd58c3c491c4532d72c30854de3f31f"
  },
  {
    "url": "resume.html",
    "revision": "979f5ce99368171501cd7151f3905f47"
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
