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
    "revision": "86037ed148405951b4a39371cbf87a45"
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
    "url": "assets/js/11.ed532d36.js",
    "revision": "95f5f9f2013c03e8d5736edef3833b29"
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
    "url": "assets/js/14.73fa4ba0.js",
    "revision": "da08a334b5689dc28f4cdf2d1913bbba"
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
    "url": "assets/js/44.78311849.js",
    "revision": "b566d39c629915739fa574242bbaf18a"
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
    "url": "assets/js/app.a3419773.js",
    "revision": "4d2fc95d26d30db92241c32f81e177eb"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "696ef235507ab898f612fc53e0fc1dd3"
  },
  {
    "url": "cs/bash.html",
    "revision": "ff37af52c87f0d755c9646b809e3347d"
  },
  {
    "url": "cs/compilation.html",
    "revision": "5225048d190c2bfdfcadf81b00cdc224"
  },
  {
    "url": "cs/index.html",
    "revision": "7a7e67dd06b6e6ea2b09f28d87999530"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "7d327611f120cf00c126186ce2902ffb"
  },
  {
    "url": "ee/about.html",
    "revision": "ea03125889077f9d1a4f3adaff52b981"
  },
  {
    "url": "ee/index.html",
    "revision": "90ca0925097cbfdb41a05b6c052bbdab"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "142100858327df64bc9c51014e9db994"
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
    "revision": "3eb5366dfbb2be1884be44d8cb427498"
  },
  {
    "url": "others/about.html",
    "revision": "060521f7c76216c318961f60d1ffafeb"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "344159828bc9fa2fc48b8b583d49f273"
  },
  {
    "url": "others/android-studio.html",
    "revision": "37db5339022549b9d07ab34764a16686"
  },
  {
    "url": "others/android.html",
    "revision": "e420789bd1691257b8c6764b721f2282"
  },
  {
    "url": "others/chisel.html",
    "revision": "8077bf17acb8dacb94b7293744e00178"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "17605e2bef42f2d76f82b0d198fd4b4f"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "907da799f27075b76bc5933a3ab42591"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "8e5f39539f19209f4877e85de791d3d3"
  },
  {
    "url": "others/css.html",
    "revision": "07476ecf29e375eb0eabac90f0065f83"
  },
  {
    "url": "others/docker.html",
    "revision": "f169daab515f9d75cc6ba735b217f950"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c80ddc40b3af8705409a5bed791b48e3"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "accbe35dd09713183712168d18b4224f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "9ffdd85a93690a082072eb19d54ae80d"
  },
  {
    "url": "others/esp32.html",
    "revision": "998ba437ae9a87a47f2c2d149355bca5"
  },
  {
    "url": "others/freertos.html",
    "revision": "acb4388648d78944c1fa4ee601188d9b"
  },
  {
    "url": "others/gns3.html",
    "revision": "f1c67478936ff74d488e2aaa14bd201e"
  },
  {
    "url": "others/gps.html",
    "revision": "0def2cd4f2b90c2a08ab8f4d37248202"
  },
  {
    "url": "others/html5.html",
    "revision": "d52462c9f75848aae54e41157251e0db"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "4c20e76cb01384252abb12c6d7a405cb"
  },
  {
    "url": "others/index.html",
    "revision": "9677b83d0d7e36b6c2c143c5fa0c4f0a"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "c36be652ee2be499166f135e24c23cf9"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "69626f810f63f19c46d69f59c53a59b0"
  },
  {
    "url": "others/javascript.html",
    "revision": "56ae3a265c0eeab1412d4961c9629d8c"
  },
  {
    "url": "others/json.html",
    "revision": "5a226b81170182cd4e9f9d26c24ae1df"
  },
  {
    "url": "others/latex.html",
    "revision": "57f169b577ea13f1fe26b2ef52980e31"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "acdd4507e392773fbeb024db0d062ff6"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "0fa26232f36eca458450599ec72fc6a3"
  },
  {
    "url": "others/lwip.html",
    "revision": "e97d149f79a00e0471cd7b75f3a1e102"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "f182147887165bc00e0dd5f10e9ce86e"
  },
  {
    "url": "others/markdown.html",
    "revision": "ee451971f62eccc305a3a90768fca91e"
  },
  {
    "url": "others/matlab.html",
    "revision": "e71f8b5cf5351dac380a27644e131a7a"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f9604206497c4f66b8ac9694f1d0e812"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8b3f80d37c2afd470998f07d21ec8ae4"
  },
  {
    "url": "others/network-security.html",
    "revision": "02b0396ea6e9267c913510c28d08277c"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "0969ae1bef4d56079871f9be16d2ad27"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "97f02513a28d9a15536bb90db6924f84"
  },
  {
    "url": "others/poe.html",
    "revision": "7c119f2c362b2f1be2a4036fa29aa7d6"
  },
  {
    "url": "others/pyside2.html",
    "revision": "6fb156e2a47b542bab171a5e07f6e2ed"
  },
  {
    "url": "others/python-socket.html",
    "revision": "deeca5674f2c35edb138307879dd3464"
  },
  {
    "url": "others/python.html",
    "revision": "eabdb494c8852f75f15efdd9ebc2e3dc"
  },
  {
    "url": "others/q-learning.html",
    "revision": "27e1e2e26b109ec93e530c318649b66e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "c3ea96d3c1132a200f05cc24c968dc3a"
  },
  {
    "url": "others/qt4.html",
    "revision": "d7846a6a3cfcc9c318d585bc7bd92fbf"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "f116ef73d31c41d9bde0ca9221bced86"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "a9f10069a66e57650bf7341950caa3eb"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "a9f0d4fbfd68d1fabf41579ab4451ce6"
  },
  {
    "url": "others/sd-card.html",
    "revision": "2086833726f192ca2862baec68f949b3"
  },
  {
    "url": "others/sdn.html",
    "revision": "303b632fb8f92b412eb44611de1ec635"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a340fc6f8edd4371105922cba6a60b32"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "add76bdb5706696e4825b6122a965ad5"
  },
  {
    "url": "others/verilog.html",
    "revision": "ca9d27356a2551c824e9d959a9c9ca64"
  },
  {
    "url": "others/vue.html",
    "revision": "5a77c3bd2eee12b90754881bf23a2357"
  },
  {
    "url": "others/w5500.html",
    "revision": "4727b989c0ff456050a21fb07864b20e"
  },
  {
    "url": "others/w7500.html",
    "revision": "dcab938f0cd4bd6d90359e8794d156be"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "fd0c9270fad282c334700850f654a21b"
  },
  {
    "url": "resume.html",
    "revision": "9ef86b72c6ec1709b48cb311954fa720"
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
