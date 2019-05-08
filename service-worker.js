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
    "revision": "2717f6187fe3b5bf062b24151a45e4ec"
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
    "url": "assets/js/10.b0c0010d.js",
    "revision": "50e92a24ef3100a0948797ffba494efd"
  },
  {
    "url": "assets/js/11.5e0311ed.js",
    "revision": "47e67d1f9de38b4e9d81d6dcc5a48244"
  },
  {
    "url": "assets/js/12.1ad341e6.js",
    "revision": "7762caa2d61652ead8c39c1fab3fcf14"
  },
  {
    "url": "assets/js/13.475ed0f9.js",
    "revision": "6b6f303c6585108377978be0b3b3fc1d"
  },
  {
    "url": "assets/js/14.509a879e.js",
    "revision": "a71df3e825fe0e80cfc95f4dafd19cee"
  },
  {
    "url": "assets/js/15.6ab69359.js",
    "revision": "327b86116c14c7ffc3fd81db032d3af4"
  },
  {
    "url": "assets/js/16.0bf9f453.js",
    "revision": "fcc65dc532813ebd9df80beb3e69612b"
  },
  {
    "url": "assets/js/17.632e3b2c.js",
    "revision": "a8e2a406d0843349e04c75080c443bfc"
  },
  {
    "url": "assets/js/18.cbaa8241.js",
    "revision": "af0eeea9e1a1b4084a4580a7645cd3d8"
  },
  {
    "url": "assets/js/19.dddf4958.js",
    "revision": "c49e6dcdef14486965b043a305f58c74"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.f6d3a41e.js",
    "revision": "d580b3cbff788097303a472b5e99fb0d"
  },
  {
    "url": "assets/js/21.05bb93e6.js",
    "revision": "ea9746da0dd2e7753727fc478e50cc39"
  },
  {
    "url": "assets/js/22.93b038ed.js",
    "revision": "96f595c74dca32b78bf7015f099ef816"
  },
  {
    "url": "assets/js/23.273fd471.js",
    "revision": "a55554445b40785c1445d4301c006f68"
  },
  {
    "url": "assets/js/24.e1e5cf40.js",
    "revision": "51e59d568ee479bc21d3068e79d69447"
  },
  {
    "url": "assets/js/25.149e7db6.js",
    "revision": "29836fa72e269c43dbd7feb29a10b0be"
  },
  {
    "url": "assets/js/26.c3f5eed4.js",
    "revision": "c2ab68f24114376654983a3cb03cf564"
  },
  {
    "url": "assets/js/27.d8fe261f.js",
    "revision": "457bc5ff294797dc15359a5f5d05dac8"
  },
  {
    "url": "assets/js/28.e2e83e3f.js",
    "revision": "f50d7931726a70826d4404eda9605b86"
  },
  {
    "url": "assets/js/29.7c9a47b8.js",
    "revision": "bc3a1c05762e0ae601d66fd42b39b2f0"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.6e7d5b7a.js",
    "revision": "0648f62b4ff8a9dc1ffc60a22f5d4612"
  },
  {
    "url": "assets/js/31.b1fabd67.js",
    "revision": "127a6dddaf5949ecde431993d0a49fcb"
  },
  {
    "url": "assets/js/32.9decea62.js",
    "revision": "64a84cb79ec365e90d1e8b94face5344"
  },
  {
    "url": "assets/js/33.fa4e1467.js",
    "revision": "3828f28f9336cc5a1170296650e0dd1e"
  },
  {
    "url": "assets/js/34.7089be9f.js",
    "revision": "396550504a961b6d3cd9a097faa87f03"
  },
  {
    "url": "assets/js/35.dcce5440.js",
    "revision": "3bf89034049c46716a5581750a7c17c6"
  },
  {
    "url": "assets/js/36.5ae704cf.js",
    "revision": "8107857601d94a58abf9cd94f6575b2f"
  },
  {
    "url": "assets/js/37.b50c1350.js",
    "revision": "f2a82a831b5a03631b411146028b5e11"
  },
  {
    "url": "assets/js/38.4312e88b.js",
    "revision": "be8505d1c1282fc0fd497220d15dd627"
  },
  {
    "url": "assets/js/39.13fc97da.js",
    "revision": "09bdbbcc2161959281ebf1a99c61c1f5"
  },
  {
    "url": "assets/js/4.e3e090f7.js",
    "revision": "a9c27245504f4c9ce764a9b86e0dbbe7"
  },
  {
    "url": "assets/js/40.0ca172e6.js",
    "revision": "6c01cb0a8b69201c424fca98b5e18464"
  },
  {
    "url": "assets/js/41.88869c6a.js",
    "revision": "30ab3a2bb6b12e937f47644d19269ac8"
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
    "url": "assets/js/app.8313024d.js",
    "revision": "ba3e6722b43fb4aa5e6d5120d84728a9"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "6e7dbbedd7b419ed5fd8fdf008ca5477"
  },
  {
    "url": "cs/bash.html",
    "revision": "80f61621e9bdcc2ac3d35fb98aeeb21f"
  },
  {
    "url": "cs/compilation.html",
    "revision": "941d755e74754f19644c8c64e406e359"
  },
  {
    "url": "cs/index.html",
    "revision": "466f2edec352f725b4df745ad8681806"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "c2a0ae7c18785b1b279127512f8c378f"
  },
  {
    "url": "ee/about.html",
    "revision": "1a07ea54f896fac345bf552745bb696b"
  },
  {
    "url": "ee/index.html",
    "revision": "36b4a2362c17eb4ba6c4fc0ece057891"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "98a26bc67d39732082404e1267908f71"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logdistic_regression.png",
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
    "revision": "3c0ef53a60f980a9c289a04abc278967"
  },
  {
    "url": "others/about.html",
    "revision": "1af5a9d293b0b3f92464befd4f39ba4b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "c1562b3e788758802eabef2f9b0270fa"
  },
  {
    "url": "others/android-studio.html",
    "revision": "99735aaa0766a9818d0af6a81c632051"
  },
  {
    "url": "others/android.html",
    "revision": "53c3e2dacbc1632542fb0b0a19161cbc"
  },
  {
    "url": "others/chisel.html",
    "revision": "975ecd58c80a6d9cdacf1a0dbcc77135"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4b041037318a7ebb9a3a27f2b96dc3aa"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "5276ee205708b6b6a77618e64d144013"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b17e4716a17e9c058ad705cd67a7b56e"
  },
  {
    "url": "others/css.html",
    "revision": "41c1d50ba5621d9361fe45e9f073853e"
  },
  {
    "url": "others/docker.html",
    "revision": "af53406fc3f6a6736712dc893a86fa2f"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "f6fb9adf6ea517ffb36ef8b6d8e397e2"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "6e374d75a5ad540134af47951576c01a"
  },
  {
    "url": "others/english-writting.html",
    "revision": "4947cd9952b5df93aa3ec98ecb76a0dc"
  },
  {
    "url": "others/esp32.html",
    "revision": "6bcfa5748505fd9e2391c1667023aa52"
  },
  {
    "url": "others/freertos.html",
    "revision": "ac1d74ed567d404c668d3aae3f562aa3"
  },
  {
    "url": "others/gns3.html",
    "revision": "8af2f190bb591421b8ff81c8b4a580dc"
  },
  {
    "url": "others/gps.html",
    "revision": "9c08e5e040876cf0fa6b25ff595ec47c"
  },
  {
    "url": "others/html5.html",
    "revision": "78dce7d3bd470acae8ed717c575b2cee"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "4a615a35996e995660a3e6ec459f0c13"
  },
  {
    "url": "others/index.html",
    "revision": "8792b7c3530bb59d366023d9c1789348"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "b2508e0c625e08ebf3082fc794d51ccb"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "03d4ded01c2f08c2d2e28432e96fb6b3"
  },
  {
    "url": "others/javascript.html",
    "revision": "0101d0967e65dd90f372291f81d4e227"
  },
  {
    "url": "others/json.html",
    "revision": "82bc897fa94b2b842d49587bdd0d60bc"
  },
  {
    "url": "others/latex.html",
    "revision": "b9ac98b62180e2a69673192883342965"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "71daba21aa112ccb02717a6934eb22f1"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ab02deb9cf6fba840e6229b7eed3ba52"
  },
  {
    "url": "others/lwip.html",
    "revision": "981eaca3efc37810d82481ff8cb32b45"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "ae933edd2fcedb41dc932e17970adc40"
  },
  {
    "url": "others/markdown.html",
    "revision": "7acc8000d875e3d6b401824615143c42"
  },
  {
    "url": "others/matlab.html",
    "revision": "c1c0be0fa4bd6d085fd7a4d839cf09aa"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "2c37e8b774634d13e7e7103efd3d520e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "f37c0d50c125f6b0294d70c1b56dc295"
  },
  {
    "url": "others/network-security.html",
    "revision": "71b6b694d9b5cca349aa596dd7c21ec8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6224b90d141909c7f4a1bb633a886458"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "53a12086f19297a4cbf09a0707d37d19"
  },
  {
    "url": "others/poe.html",
    "revision": "b60bb48d3271727457437c8e4dcf2cd3"
  },
  {
    "url": "others/pyside2.html",
    "revision": "aaeb8ea2b067a69cea147d645fc94818"
  },
  {
    "url": "others/python-socket.html",
    "revision": "8352044bc89bf963709d7382312f63ac"
  },
  {
    "url": "others/python.html",
    "revision": "451e3ebce4dfaef8fa8c0e2e382fa7bc"
  },
  {
    "url": "others/q-learning.html",
    "revision": "2de813c53e7e7af0d4ebde017c2b33ea"
  },
  {
    "url": "others/qr-code.html",
    "revision": "807f2c26d6adc2ad9d39389102113dda"
  },
  {
    "url": "others/qt4.html",
    "revision": "1725dba8a1e8670426a7259be6b2db34"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "a728b9a722edb104f4e4115abb395c47"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "8064834072aaa62e40d023be7ee48f49"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "a084bcd7f6f1ddad4f5f629d479fc5a6"
  },
  {
    "url": "others/sd-card.html",
    "revision": "16475f7e479c0366bc8cc04a2a366eaa"
  },
  {
    "url": "others/sdn.html",
    "revision": "61b881bcdca65626f9355f47cea114bb"
  },
  {
    "url": "others/star-uml.html",
    "revision": "838cbb6a93ef4f5dff9ac8e2e7e4db9d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "5b97640209cacebbb82dc64e543361eb"
  },
  {
    "url": "others/verilog.html",
    "revision": "1c8d6fd9df567d3fc63f1c37340bd432"
  },
  {
    "url": "others/vue.html",
    "revision": "85b5ab058aaeaa59aeab61ddf76bc02d"
  },
  {
    "url": "others/w5500.html",
    "revision": "2c2390f72ebbacadc6fc2bd5d4fc81c5"
  },
  {
    "url": "others/w7500.html",
    "revision": "385c1c294ae8a99a6ebecb2245d7ff40"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "b2f85b139c9a9a3913a7a0f77eeff74c"
  },
  {
    "url": "resume.html",
    "revision": "988f3a29490073a629f4c6c140a10cdf"
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
