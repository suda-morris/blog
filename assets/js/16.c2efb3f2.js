(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{544:function(s,t,a){s.exports=a.p+"assets/img/sbt_jvm_options.53a2af9f.png"},599:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"𝙎𝙘𝙖𝙡𝙖-基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#𝙎𝙘𝙖𝙡𝙖-基础"}},[s._v("#")]),s._v(" 𝙎𝙘𝙖𝙡𝙖 基础")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("h3",{attrs:{id:"全局安装-scala-编译器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-scala-编译器"}},[s._v("#")]),s._v(" 全局安装 Scala 编译器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" scala\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"全局安装-sbt-构建系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-sbt-构建系统"}},[s._v("#")]),s._v(" 全局安装 sbt 构建系统")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://dl.bintray.com/sbt/debian /"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/apt/sources.list.d/sbt.list\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sbt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"设置-sbt-代理仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置-sbt-代理仓库"}},[s._v("#")]),s._v(" 设置 sbt 代理仓库")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://www.scala-sbt.org/1.x/docs/Proxy-Repositories.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("设置代理仓库官方指南"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("新建 "),n("code",[s._v("$HOME/.sbt/repositories")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("repositories"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\naliyun: http://maven.aliyun.com/nexus/content/groups/public\ntypesafe-ivy-releases: http://repo.typesafe.com/typesafe/ivy-releases/, "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("organization"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("revision"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("s/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("artifact"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("classifier"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", bootOnly\nsonatype-oss-releases\nmaven-central\nsonatype-oss-snapshots\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"在-idea-中给-jvm-添加额外的选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-idea-中给-jvm-添加额外的选项"}},[s._v("#")]),s._v(" 在 IDEA 中给 JVM 添加额外的选项")]),s._v(" "),n("p",[n("img",{attrs:{src:a(544),alt:"sbt_jvm_options"}})]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("-Dsbt.override.build.repos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n-Dsbt.repository.config"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.sbt/repositories\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"sbt-基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sbt-基础"}},[s._v("#")]),s._v(" sbt 基础")]),s._v(" "),n("h3",{attrs:{id:"流程控制中的-break-和-continue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程控制中的-break-和-continue"}},[s._v("#")]),s._v(" 流程控制中的 break 和 continue")]),s._v(" "),n("p",[s._v("scala 语言中没有 "),n("strong",[s._v("break")]),s._v(" 和 "),n("strong",[s._v("continue")]),s._v(" 关键字，但是可以通过"),n("strong",[s._v("异常捕获")]),s._v("或者"),n("strong",[s._v("循环守卫")]),s._v("的方式来达到类似效果。")]),s._v(" "),n("h4",{attrs:{id:"breakable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#breakable"}},[s._v("#")]),s._v(" breakable")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("scala"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("control")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Breaks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("break"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" breakable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// break")]),s._v("\nbreakable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("<-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            break"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        println"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// continue")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("<-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    breakable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            break"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        println"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h4",{attrs:{id:"循环守卫"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#循环守卫"}},[s._v("#")]),s._v(" 循环守卫")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// break")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("<-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tloop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \tprintln"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// continue")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("<-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tprintln"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"函数式编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[s._v("#")]),s._v(" 函数式编程")])])}),[],!1,null,null,null);t.default=e.exports}}]);