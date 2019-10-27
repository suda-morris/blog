(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{294:function(t,e,r){"use strict";r.r(e);var a=r(2),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("title: Docker Introduction\ntags:")]),t._v(" "),r("ul",[r("li",[t._v("Docker\ncategories:")]),t._v(" "),r("li",[t._v("Geek Hobbies\nauthor: suda-morris\ndate: 2016-08-25 19:37:00")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"docker安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[t._v("#")]),t._v(" Docker安装")]),t._v(" "),r("ol",[r("li",[t._v("内核要求：3.10以上")]),t._v(" "),r("li",[t._v("安装命令：curl -sSL https://get.docker.com/ | sh")]),t._v(" "),r("li",[t._v("启动docker：systemctl start docker")]),t._v(" "),r("li",[t._v("将docker加入到开机启动：systemctl enable docker")])]),t._v(" "),r("h2",{attrs:{id:"docker镜像分层技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像分层技术"}},[t._v("#")]),t._v(" Docker镜像分层技术")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://i.imgur.com/oE2fYaF.png",alt:"docker的镜像分层技术"}})]),t._v(" "),r("ol",[r("li",[t._v("docker镜像是运行环境和业务代码的整体打包")]),t._v(" "),r("li",[t._v("Aufs是Another Union File System的缩写，支持将多个目录挂载到同一个虚拟目录下")]),t._v(" "),r("li",[t._v("已构建的镜像会设置成只读模式，read-write写操作是在read-only上的一种增量操作，不影响read-only层")])]),t._v(" "),r("h2",{attrs:{id:"镜像仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像仓库"}},[t._v("#")]),t._v(" 镜像仓库")]),t._v(" "),r("ol",[r("li",[t._v("Docker官方镜像中心（hub.docker.com）")]),t._v(" "),r("li",[t._v("从中心镜像仓库下载到宿主机本地上的镜像称为本地镜像")]),t._v(" "),r("li",[t._v("如果第一次下载镜像，会把镜像所有层都下载回来")]),t._v(" "),r("li",[t._v("利用镜像分层技术，如果主机上已经有layer存在，下载新增的layer，类似git代码提交机制")]),t._v(" "),r("li",[t._v("docker pull <$images>")])]),t._v(" "),r("h2",{attrs:{id:"删除镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[t._v("#")]),t._v(" 删除镜像")]),t._v(" "),r("ol",[r("li",[t._v("docker rmi <$images>")])])])}),[],!1,null,null,null);e.default=o.exports}}]);