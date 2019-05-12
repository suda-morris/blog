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
    "revision": "0ab5006949609014e8c520aa76bbeac9"
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
    "url": "assets/js/12.cfdaaa7e.js",
    "revision": "a6a11cbc383b9bfd1727f5873a4bca9d"
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
    "url": "assets/js/15.470bbdeb.js",
    "revision": "4dbdbf2d824354a5fb9114a5c2289ef0"
  },
  {
    "url": "assets/js/16.1146c2b8.js",
    "revision": "e058dc8a252f2b270c7e5ff15e8d736f"
  },
  {
    "url": "assets/js/17.907230eb.js",
    "revision": "429c4b546fbc9305d195e37556502c88"
  },
  {
    "url": "assets/js/18.c216624d.js",
    "revision": "9fb67f944ea5a156fad4665389f6e062"
  },
  {
    "url": "assets/js/19.07721fc5.js",
    "revision": "75418fa77a6c7e836679d3159fa6cab1"
  },
  {
    "url": "assets/js/2.5203ae48.js",
    "revision": "b43e93b01cf80ff6cf0c4c4c0d7a1008"
  },
  {
    "url": "assets/js/20.8611442e.js",
    "revision": "2e570be1399b15682f9a44e7b6e2b377"
  },
  {
    "url": "assets/js/21.f40529be.js",
    "revision": "5cd357e95a2123b5c8382b7ffeadf41d"
  },
  {
    "url": "assets/js/22.c9c12d28.js",
    "revision": "1f576a23a35708bd825a59a45a71312c"
  },
  {
    "url": "assets/js/23.7548c7cb.js",
    "revision": "524f47f57dbf5a96eec88ec0a02a64f3"
  },
  {
    "url": "assets/js/24.7c888ef3.js",
    "revision": "3be20cf4ee7bc7214c55e9aa43df469a"
  },
  {
    "url": "assets/js/25.0e2bea73.js",
    "revision": "9a889f4eb4c72a6489d8661335b85938"
  },
  {
    "url": "assets/js/26.c346f7c6.js",
    "revision": "d7dbb66fbd086c437e950c7e28ef124a"
  },
  {
    "url": "assets/js/27.ef47ca7c.js",
    "revision": "7c18fec52e969d124554544da6b66f14"
  },
  {
    "url": "assets/js/28.0a9e89ff.js",
    "revision": "5be7456fb0a175bd379e63dddddc96d9"
  },
  {
    "url": "assets/js/29.2811c366.js",
    "revision": "e1766dce4bd1a9610ebc9b9c2528453f"
  },
  {
    "url": "assets/js/3.ee9c868d.js",
    "revision": "0c55b4bc3fe4f6df4faf5cd088dbd9d9"
  },
  {
    "url": "assets/js/30.97468ce2.js",
    "revision": "c1afe77aa7601a8dd17a65d5088e5741"
  },
  {
    "url": "assets/js/31.e44ba6cd.js",
    "revision": "8532ff9750217b1f86c4193579a8c17e"
  },
  {
    "url": "assets/js/32.6a61a726.js",
    "revision": "e1ce350ff66096b17a229f2860ad32de"
  },
  {
    "url": "assets/js/33.0eead473.js",
    "revision": "b8589ae3a51cfc6b1cd612ca3a023272"
  },
  {
    "url": "assets/js/34.f63fe7f6.js",
    "revision": "406a3be3f6dbd723945c680f5ba016a7"
  },
  {
    "url": "assets/js/35.52be639b.js",
    "revision": "c8a6fd810e113da02b176b279c00308a"
  },
  {
    "url": "assets/js/36.af0c1d06.js",
    "revision": "4854b69b53139c0df785adae88a433cd"
  },
  {
    "url": "assets/js/37.4f5372cb.js",
    "revision": "08afa0f321581ffdbb34c692de14baf8"
  },
  {
    "url": "assets/js/38.064c04dc.js",
    "revision": "df965f79a11fa61ccae6c2a37f1e0620"
  },
  {
    "url": "assets/js/39.22ec9dd7.js",
    "revision": "41dab79b040920df6bfc810c54c71824"
  },
  {
    "url": "assets/js/4.fa8a62ca.js",
    "revision": "f52e7d20ba5b911bbbbafeefd57f5e0b"
  },
  {
    "url": "assets/js/40.4e625985.js",
    "revision": "c69e183499310c192aa8d89e61f2bcaf"
  },
  {
    "url": "assets/js/41.6586df66.js",
    "revision": "3eee2f1ae24398ca23621476b828697f"
  },
  {
    "url": "assets/js/42.0e31b534.js",
    "revision": "1229c064e0b1318cb3cd1dd3530ae3fb"
  },
  {
    "url": "assets/js/43.1d6da04e.js",
    "revision": "011167ee646dd43c987bea9a7408eda3"
  },
  {
    "url": "assets/js/44.f7ea51d9.js",
    "revision": "98fcb18b5681f973ed077953543d9d3f"
  },
  {
    "url": "assets/js/45.d74ef2c0.js",
    "revision": "226cc9f0ddd03dc8b648a6ce58d9584e"
  },
  {
    "url": "assets/js/46.980635ea.js",
    "revision": "053ccd888428c9534f579fbf5e4af0e5"
  },
  {
    "url": "assets/js/47.d2bdfdf9.js",
    "revision": "e4f08665c9790ad75724a4c622ac5092"
  },
  {
    "url": "assets/js/48.86bbd8f6.js",
    "revision": "efe7afe6cde63f765e6239bb14d2866e"
  },
  {
    "url": "assets/js/49.c9f8c030.js",
    "revision": "0f3eb49d6d7e9e0755219a7aaf1bc089"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.0ad0abd1.js",
    "revision": "05fc7bc6f3c81d6e7375840b63adc058"
  },
  {
    "url": "assets/js/51.c7b9863d.js",
    "revision": "93b388c946f0387765513141ca9a8681"
  },
  {
    "url": "assets/js/52.f0871e9e.js",
    "revision": "f4eafe65adc2f92f6c39a2a83af2fe90"
  },
  {
    "url": "assets/js/53.d71408da.js",
    "revision": "cdbd1f4a480c7a75715ed4fb4283d32d"
  },
  {
    "url": "assets/js/54.1b3eef38.js",
    "revision": "5afcfdbb7f5dbc23497aa1c0fd68432f"
  },
  {
    "url": "assets/js/55.a84bedfe.js",
    "revision": "3e84a16e2bbc0af72a7ecff9efbe9e1a"
  },
  {
    "url": "assets/js/56.39b89665.js",
    "revision": "27df9c41a828d1157d00ec60ff3e1f4a"
  },
  {
    "url": "assets/js/57.83bbc676.js",
    "revision": "a805981c35568b2bdf1597c44320d7df"
  },
  {
    "url": "assets/js/58.05828456.js",
    "revision": "0bc814e8e2c432c4a368feba6bad4d83"
  },
  {
    "url": "assets/js/59.8fe98ad4.js",
    "revision": "813b19036c5b05ffe433e903d35768af"
  },
  {
    "url": "assets/js/6.5080ff4e.js",
    "revision": "992a2cc519fdfd793e6cf4ffca3bcd0a"
  },
  {
    "url": "assets/js/60.fa16504e.js",
    "revision": "1a5038fea46f26d01ef58e923e4d47eb"
  },
  {
    "url": "assets/js/61.6a6be627.js",
    "revision": "fc8fc3d442c4989bb1fc557fc9269d5c"
  },
  {
    "url": "assets/js/62.eda7f5c3.js",
    "revision": "6b6dfd342677cbe2925f6d20e9f93ebf"
  },
  {
    "url": "assets/js/63.726d91bf.js",
    "revision": "2cd66357d1101697fbf47d79d4cd94df"
  },
  {
    "url": "assets/js/64.f9b837f0.js",
    "revision": "74796e35fb9422192f92710b69d5fdf8"
  },
  {
    "url": "assets/js/65.2ca4c9dd.js",
    "revision": "25a9afc2a2e31d58b882d38c72701bfd"
  },
  {
    "url": "assets/js/66.b3f5c11f.js",
    "revision": "b5d5b5f7c47f2f2e185d12b7a5021297"
  },
  {
    "url": "assets/js/67.fc0db5ab.js",
    "revision": "d9e74399c247d5b941d20326f15f23bb"
  },
  {
    "url": "assets/js/68.8c6be5ea.js",
    "revision": "399f448907dedfd97caa45230c763b25"
  },
  {
    "url": "assets/js/69.d72640ac.js",
    "revision": "42a5f390f74e63379318161ece91eedb"
  },
  {
    "url": "assets/js/7.f49c4cfa.js",
    "revision": "b030fd4179e1fccdefa5c7aa894e8c22"
  },
  {
    "url": "assets/js/70.f49ced8f.js",
    "revision": "ed667bbf6bbd7c263b001f3591eb9ff5"
  },
  {
    "url": "assets/js/71.11e87ba5.js",
    "revision": "81c233407d2bc7c5cec470ccec0e3b12"
  },
  {
    "url": "assets/js/72.41a81933.js",
    "revision": "e1fc4fb418bdd881d229a435ac782ee5"
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
    "url": "assets/js/app.dad6d174.js",
    "revision": "ca224f86db1be4ef007002ec808ff06f"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "dbadc8c1200dc6d453c500b951c1b5a2"
  },
  {
    "url": "cs/bash.html",
    "revision": "236ac1fbe17340e64ebe735f4c04dbc4"
  },
  {
    "url": "cs/cmake.html",
    "revision": "76fc5fb3500fb6988d79304579ebb7a9"
  },
  {
    "url": "cs/compilation.html",
    "revision": "53dd194317b973f0e2c2d1a1a9ade89b"
  },
  {
    "url": "cs/index.html",
    "revision": "feda69e2ac5c06f8247902433e25b6d0"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "33ea71a7c72308972ddb62666d2ff870"
  },
  {
    "url": "ee/about.html",
    "revision": "4d433e088262c773d39addac2e90d642"
  },
  {
    "url": "ee/index.html",
    "revision": "c1690aa0c61567f76ef0352f1ad6a0ca"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "54df5d7ea1ee3690e9e9b45b0307cbce"
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
    "revision": "0a56f9760033131bea64b1c83a0ac714"
  },
  {
    "url": "others/about.html",
    "revision": "c60fd30e38773fbe4331014cb7415fcb"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "82c0278e971c1079215310a124723808"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9818d7886a723486f58932f7b85dd34f"
  },
  {
    "url": "others/android.html",
    "revision": "97ce3f550292df30e63afb7446edb133"
  },
  {
    "url": "others/chisel.html",
    "revision": "aa343f367a0b54c33f8d992881d41835"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b2d9a4dfa54d785384d1b73df094ef39"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "6dba53b3a0441157cce99a9ce2b1cd7d"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "32463d332b31c3a684cc729ba8860bce"
  },
  {
    "url": "others/css.html",
    "revision": "eb79bb3556210893b6e65c0e13497c0d"
  },
  {
    "url": "others/docker.html",
    "revision": "e1bc6a580c338816d7449176489cbc84"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "81694bce3fa2ca5fe35745d1442d3041"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "f546627156c514886e4f79b62b346032"
  },
  {
    "url": "others/english-writting.html",
    "revision": "2a081a1efb5c35426d16e4502bf57a7b"
  },
  {
    "url": "others/esp32.html",
    "revision": "e5cab8bfa9594582ec20e79e40a961c5"
  },
  {
    "url": "others/freertos.html",
    "revision": "757f4d6ec2cbbb2e8bfd98329557a0ee"
  },
  {
    "url": "others/git.html",
    "revision": "9c4a30bdba8c447629b3e92b97b943ee"
  },
  {
    "url": "others/gns3.html",
    "revision": "0801025b84cafd9858a1a8a4b6648d73"
  },
  {
    "url": "others/gps.html",
    "revision": "f5df660f2ae9e31c0e4655e5f57392ed"
  },
  {
    "url": "others/html5.html",
    "revision": "7661517ad9274b57087814b846748298"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "09d73ec591dc2398003af12349714d59"
  },
  {
    "url": "others/index.html",
    "revision": "ab027b676cda3ad881dd36bcd5f6e7f6"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "2c082b85b0cfea3c7cc02ac4dbaf4d04"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d4364d48cad69e2f00daa9a7a84da70b"
  },
  {
    "url": "others/javascript.html",
    "revision": "1e4e004712cb6de29bb80db53613ef2a"
  },
  {
    "url": "others/json.html",
    "revision": "0179ddb676c2ee2331f991eb0e33b0a9"
  },
  {
    "url": "others/latex.html",
    "revision": "55ef23e03315730b6237e8100793fbd4"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "4bde389f41fc33aa466f130fc04f55b6"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "c8138d329f59fdf13ed6dff2cdc60dfa"
  },
  {
    "url": "others/lwip.html",
    "revision": "88e507e631c2eafbe90794b9b77b687d"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a97347549642df58595f40c9c7042687"
  },
  {
    "url": "others/markdown.html",
    "revision": "b16d61eec6e4d036279c307c182d9c30"
  },
  {
    "url": "others/matlab.html",
    "revision": "b26c1c422faf349075cbba73b8075b9b"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "cac37e1682f30835b5943890da5afba5"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "baecdaed4b912fb509f912688619df50"
  },
  {
    "url": "others/network-security.html",
    "revision": "c23629c37a3808c8b352f4349d0bbf9f"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "1b22c83a4e03247783ff964e70243785"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "98e818f1f6dd492886788667791d76f8"
  },
  {
    "url": "others/poe.html",
    "revision": "77aeaf6d6049caefaccde9f8c0636d93"
  },
  {
    "url": "others/pyside2.html",
    "revision": "1deb2607bbc32625486df221ea8f2fe3"
  },
  {
    "url": "others/python-socket.html",
    "revision": "cb721e24942f9c1836893dac6325652e"
  },
  {
    "url": "others/python.html",
    "revision": "0521da5394a2bcb67bbd0b5d34d83df2"
  },
  {
    "url": "others/q-learning.html",
    "revision": "4bc005f26466215df04a9b7bbfee63e4"
  },
  {
    "url": "others/qr-code.html",
    "revision": "9aa40fcdf2bc01af38ae3210217b4839"
  },
  {
    "url": "others/qt4.html",
    "revision": "33c25bf89794f8fe9120fbb4c791524b"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "fe6fef3bcb40d535bf1816de5f64ebc7"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "180c48260e3e070cb1e2dd81987d0abe"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5f859ac2296bfb10058b907c0a15e153"
  },
  {
    "url": "others/sd-card.html",
    "revision": "bbb038e4f557df6c07ebb2b09ae16f97"
  },
  {
    "url": "others/sdn.html",
    "revision": "ae31dd7e480e3dfc6512beafc9273a36"
  },
  {
    "url": "others/star-uml.html",
    "revision": "4f391466fd107999fe403933305b3357"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "cf98660e2adb0f6f32c9f36a0ae72e49"
  },
  {
    "url": "others/verilog.html",
    "revision": "6642a87d232954390720c6b879ef23c6"
  },
  {
    "url": "others/vue.html",
    "revision": "d661c7ee6ad3bc6b8a74c5d2f6f1fc8d"
  },
  {
    "url": "others/w5500.html",
    "revision": "7721b910b9eee85b525de04ba7788873"
  },
  {
    "url": "others/w7500.html",
    "revision": "42349351242581f31147238d5953757e"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "db6fff240166afb9fe04d49e9d641292"
  },
  {
    "url": "resume.html",
    "revision": "e1fd6cdb3cfed013817ddb2dd734db10"
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
