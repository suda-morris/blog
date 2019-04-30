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
    "revision": "92dcf0cb24cf9afa67c4ac9aea29ee64"
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
    "url": "assets/js/11.33f38c9c.js",
    "revision": "141e8402e04c9ee5e0b532378daeb081"
  },
  {
    "url": "assets/js/12.59b8f6c1.js",
    "revision": "43d491ae42fdd2ca4e36476431ca4ace"
  },
  {
    "url": "assets/js/13.f7ddc241.js",
    "revision": "ea9eeba3553d321e3bf75d5b7541f3a4"
  },
  {
    "url": "assets/js/14.17663e31.js",
    "revision": "30ba3e40b04a8d226ae0461a2c67a6fc"
  },
  {
    "url": "assets/js/15.3d8139ba.js",
    "revision": "894757756604aee1b30b03d82ba3a392"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.d2e551cb.js",
    "revision": "c1812d971df0061b22dc79ff4821062b"
  },
  {
    "url": "assets/js/18.68d20a2c.js",
    "revision": "d4462e3a2ed405d485905940e131a64c"
  },
  {
    "url": "assets/js/19.b022c778.js",
    "revision": "dc341f02103ffc0886df51f9d9972f6d"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.79f42a2b.js",
    "revision": "28cdb0c5227638e7696a72098ccc1d81"
  },
  {
    "url": "assets/js/21.e9d74a75.js",
    "revision": "1932702c51d9616809bdbcf060432b06"
  },
  {
    "url": "assets/js/22.9892c8ff.js",
    "revision": "025bdf8578f5fde128524a07a4bc6f11"
  },
  {
    "url": "assets/js/23.d0114f8f.js",
    "revision": "00e8b9d6ccce6d47124b1ef7590e060d"
  },
  {
    "url": "assets/js/24.2137c7b0.js",
    "revision": "aa8468b7068a99305afb8d612888b021"
  },
  {
    "url": "assets/js/25.ae4c59cb.js",
    "revision": "5e2d5574711faf6af7be46a6affa117a"
  },
  {
    "url": "assets/js/26.b90e1900.js",
    "revision": "58f1cce948a81e62d14870d17f6536d0"
  },
  {
    "url": "assets/js/27.4a8f37f0.js",
    "revision": "c9b8e91a95851838da3409250d85fcd6"
  },
  {
    "url": "assets/js/28.b4583a43.js",
    "revision": "87942dc09d7dc8f63b1a70db01da5e6d"
  },
  {
    "url": "assets/js/29.2b349e1f.js",
    "revision": "08e6c3930253854acb8a16abd51becef"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.34730ace.js",
    "revision": "2412f9a16c491f26488ee216b702ece4"
  },
  {
    "url": "assets/js/31.356ef136.js",
    "revision": "7a46a91a6563012642d779f215152d0d"
  },
  {
    "url": "assets/js/32.3a8f3247.js",
    "revision": "e65a9d15fcf046e0b45766f01b709261"
  },
  {
    "url": "assets/js/33.f879ba70.js",
    "revision": "359b7349d2f8cb758cac1300774a6a9c"
  },
  {
    "url": "assets/js/34.7dd01167.js",
    "revision": "57d3232bae22bb6ef446d0eea73798f1"
  },
  {
    "url": "assets/js/35.5d28f42d.js",
    "revision": "831c84a8cbd740e2d2406893660b31d1"
  },
  {
    "url": "assets/js/36.19882378.js",
    "revision": "0e2e6519d180084545b3dbd8a1410bee"
  },
  {
    "url": "assets/js/37.e6457baa.js",
    "revision": "bb0d121aac159fc307ba049440fe65bc"
  },
  {
    "url": "assets/js/38.73f77d20.js",
    "revision": "5551964e7ce2115e536b4824baa65394"
  },
  {
    "url": "assets/js/39.0a11c877.js",
    "revision": "0d47257fd62f89d53dd672a06c7bc1e9"
  },
  {
    "url": "assets/js/4.7131e971.js",
    "revision": "0f3830ac0354e283468823611896d3ad"
  },
  {
    "url": "assets/js/40.1b0dd498.js",
    "revision": "e413bed96f5462995e9814d5bdb1ce5f"
  },
  {
    "url": "assets/js/41.1ef6ec05.js",
    "revision": "937a0b994e3962c2ca0a606314cabb19"
  },
  {
    "url": "assets/js/42.cf587378.js",
    "revision": "1cf0096bfb93ccd40052a7331fdbaea2"
  },
  {
    "url": "assets/js/43.92158c79.js",
    "revision": "992a0521bbc5bf5c81103bbebc82cdf1"
  },
  {
    "url": "assets/js/44.5b4391fc.js",
    "revision": "b2ff1681fcfcab97b52e428d36c57754"
  },
  {
    "url": "assets/js/45.1d961d0b.js",
    "revision": "346c3690507aa554627ab1d1a63a16de"
  },
  {
    "url": "assets/js/46.46a4a00b.js",
    "revision": "0eb7783ccfa273842041206c1c703554"
  },
  {
    "url": "assets/js/47.cf8a321b.js",
    "revision": "6dc47e4c1af125677194c84c409ae359"
  },
  {
    "url": "assets/js/48.713a60e0.js",
    "revision": "860137ce0ab1d3e2c52564c9978fbfdd"
  },
  {
    "url": "assets/js/49.b1a7da02.js",
    "revision": "a6817f88ad1c646d6e7b9ee0819664a4"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.96f44868.js",
    "revision": "c5df03d125cbd79b152eddb3f1f60924"
  },
  {
    "url": "assets/js/51.2c97da89.js",
    "revision": "ebc72f44828f43413fca7b1acdae2307"
  },
  {
    "url": "assets/js/52.7bf4d14d.js",
    "revision": "58a59801862aacfc6213cba4dbf0c13d"
  },
  {
    "url": "assets/js/53.9de0797e.js",
    "revision": "fc57702272357741a0ee6c85d1a1a891"
  },
  {
    "url": "assets/js/54.3b58aa0b.js",
    "revision": "eea92c5ffdde67bb4ca9e720895de81c"
  },
  {
    "url": "assets/js/55.87c212b5.js",
    "revision": "a23cee9124d89630b53f5c86f79154f4"
  },
  {
    "url": "assets/js/56.6a72e128.js",
    "revision": "65bb22bf9283a04201c947b37d9ca4b9"
  },
  {
    "url": "assets/js/57.0bdc8f07.js",
    "revision": "3d04129c8fcfd543ecf9ba3d2e329734"
  },
  {
    "url": "assets/js/58.93b2d8a5.js",
    "revision": "cf27a4c913437930e2b2f289435eeb17"
  },
  {
    "url": "assets/js/59.9242d115.js",
    "revision": "97a6c72da1626029565284fc2bd954bb"
  },
  {
    "url": "assets/js/6.c2a56e42.js",
    "revision": "eb26e0c205636b13fe4ed97bc800495b"
  },
  {
    "url": "assets/js/60.4a6ecf36.js",
    "revision": "6724191fe610397080ef953fda00f947"
  },
  {
    "url": "assets/js/61.a904c80a.js",
    "revision": "8bc5adc3a77bd1662bc643e18e4c2a46"
  },
  {
    "url": "assets/js/62.05dd3cd5.js",
    "revision": "375355e63d1405b1679ce3874773775f"
  },
  {
    "url": "assets/js/63.ecb7357c.js",
    "revision": "b989a9d8561948590ac8bb76545d06bc"
  },
  {
    "url": "assets/js/64.8e611e8b.js",
    "revision": "bbcc9dec756733c833d97c51703969d3"
  },
  {
    "url": "assets/js/65.1b048635.js",
    "revision": "ac72b6a5f8eee8199a914284d4d26a55"
  },
  {
    "url": "assets/js/66.04e0afae.js",
    "revision": "962038a35a2d7fae86e538746d33e60b"
  },
  {
    "url": "assets/js/67.56920b76.js",
    "revision": "5baf338abb8ce5dad651aab1c6f06126"
  },
  {
    "url": "assets/js/68.da13ed57.js",
    "revision": "308c038c67efd58f4b3336aa7e441a9b"
  },
  {
    "url": "assets/js/69.850bb1f0.js",
    "revision": "96552b09b5b468ef6768c14cf58dd1e5"
  },
  {
    "url": "assets/js/7.da4bc7cc.js",
    "revision": "80aa2764a911c5e77703af55516ab802"
  },
  {
    "url": "assets/js/70.5ae44640.js",
    "revision": "4fce0ffc25437a95aeef301f40059429"
  },
  {
    "url": "assets/js/8.3a6c9ec9.js",
    "revision": "ed7ce43c388598fb29fe41c439112dd7"
  },
  {
    "url": "assets/js/9.9ea9bd2b.js",
    "revision": "3e42c59793f7bfbcf7be73ae7b4fe798"
  },
  {
    "url": "assets/js/app.e9789cff.js",
    "revision": "476f1c2f7f78f0bbd3994209669ab3d3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "dbb1992d9593dbeced1796fa8d0f7737"
  },
  {
    "url": "cs/bash.html",
    "revision": "80012195eed81252950e42f6d5d61d25"
  },
  {
    "url": "cs/compilation.html",
    "revision": "4d8855fe8de1091905e718beb485dd39"
  },
  {
    "url": "cs/index.html",
    "revision": "4c8b9ee79099d51b9424dec00223f4e6"
  },
  {
    "url": "ee/about.html",
    "revision": "d912167a019cbaa6d2d5176af9300ba6"
  },
  {
    "url": "ee/index.html",
    "revision": "a3998ab375cad0de18c6a673f32b2eea"
  },
  {
    "url": "ee/poe.html",
    "revision": "49cecfce1540e1e1ce07310c077db88a"
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
    "revision": "8fa213a0d3c5a99e0d1b6570115cb82e"
  },
  {
    "url": "others/about.html",
    "revision": "d3784b249fcc08a377b1ad9d1286b830"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "516e08a2cc62db5fddac64ac49d2bed8"
  },
  {
    "url": "others/android-studio.html",
    "revision": "badfb753672b605e27c5a55f68c9e391"
  },
  {
    "url": "others/android.html",
    "revision": "7f718b2558a1043805958d26eadfc814"
  },
  {
    "url": "others/chisel.html",
    "revision": "848a0303e38663b1565f6fe6a7b10d10"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "f2f0400a409656a5bb6a82bda2871af4"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "52df270c8c42d6f0a68240610a68df84"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "10c585d5345d6634eb294c525b49b315"
  },
  {
    "url": "others/css.html",
    "revision": "a59f3ec7d493c2b6157191499f192bae"
  },
  {
    "url": "others/docker.html",
    "revision": "192b3026dd5b317bd0df3615a4a7af30"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5544563a92a7e4a96d12f610380f4c60"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ce063035092b2fdb92062f87f3e46849"
  },
  {
    "url": "others/english-writting.html",
    "revision": "07f0ba4486e8b5da2b900e45af0934fe"
  },
  {
    "url": "others/esp32.html",
    "revision": "69cb4240c6e691b1d897470c9a3123e4"
  },
  {
    "url": "others/freertos.html",
    "revision": "0ac19d60d8e9a62fb7bd137f604a5d2a"
  },
  {
    "url": "others/gns3.html",
    "revision": "2c08210278f8b5a5513a8553843b360e"
  },
  {
    "url": "others/gps.html",
    "revision": "07dc6c9aa2c92ebd1df16b595974d948"
  },
  {
    "url": "others/html5.html",
    "revision": "e76c8e7a4d2e4406d788947f41061892"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9dc2c9eda91f46f5a1426c196e707b2e"
  },
  {
    "url": "others/index.html",
    "revision": "88b1acb0cbfb06af6d8b8e73f2ee9e34"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "d61575c32d080845f55919266daee8af"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d4c27ba27a50b0067081280589c66a56"
  },
  {
    "url": "others/javascript.html",
    "revision": "7ab39af784708a67446ac744feecd490"
  },
  {
    "url": "others/json.html",
    "revision": "13d029b1f5aceca47eac27efc4dda1eb"
  },
  {
    "url": "others/latex.html",
    "revision": "04f33e9d6af71c512364a89ec66cb5af"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "972f8b41fd178c9dac0eb59e426cb683"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "0afabb1ab342b3b691750072238c9275"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "1eaa448025e295e059fb043b133926b9"
  },
  {
    "url": "others/lwip.html",
    "revision": "307e4885a6c1acdfdddba5e7b21d5bae"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0af3fa4555ef6f77e150f01dd4aabc2f"
  },
  {
    "url": "others/markdown.html",
    "revision": "c2e2f3b762de438cccdd48a21569648d"
  },
  {
    "url": "others/matlab.html",
    "revision": "ba4a49cac77da0c0ea197df474516dd6"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a63ced9ea69a6649358acfa2b351f491"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "bd7140a8af83caf4c9bca7a2996d5825"
  },
  {
    "url": "others/network-security.html",
    "revision": "200a8610b835c2fca5e9de74e285e20a"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "c145f58dc5cba65f366e6417b6c56203"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "80e4a70a0a7d94ee7addcbf2a7abd78a"
  },
  {
    "url": "others/pyside2.html",
    "revision": "2201a072913754c199e13930f589d6ad"
  },
  {
    "url": "others/python-socket.html",
    "revision": "cacf2dce3593864e543c38339779341e"
  },
  {
    "url": "others/python.html",
    "revision": "d8bcb3af62eaa68f4a5a56a51981429a"
  },
  {
    "url": "others/q-learning.html",
    "revision": "7cbf1daa4b06446a5fd488758b8f475c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a08694f624450378b6b3febf6045cf9e"
  },
  {
    "url": "others/qt4.html",
    "revision": "224dda23751a1d3d2c1b8558f56c874b"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "7e4485234759ec5aac6cd440d56eb88e"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "fb0dca0e0b419bab1ce6a34e23836458"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "1b270c33840a51a4b23607f2b3edddf1"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f1843351c8f3046aa66fbaef7eb27268"
  },
  {
    "url": "others/sdn.html",
    "revision": "d8d51054cab038e589315b571631a1d5"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f6af816edf7eec3beb435a968dee9b9a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "eba7910e7ebd8ddc1ff069a2a736675a"
  },
  {
    "url": "others/verilog.html",
    "revision": "1d472ee221c288d9d4b3211c23db56f6"
  },
  {
    "url": "others/vue.html",
    "revision": "b83ae28d6ad270506a759bd7bca1f100"
  },
  {
    "url": "others/w5500.html",
    "revision": "52559acd9910857666000254285cc9b6"
  },
  {
    "url": "others/w7500.html",
    "revision": "a4170671a5d689b173ecd0693d5b241d"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "2c8cc83b28b2e00c4d917231165c53c9"
  },
  {
    "url": "resume.html",
    "revision": "9660b3247d371e003517504e56677aaa"
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
