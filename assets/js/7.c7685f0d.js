(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{537:function(t,s,a){t.exports=a.p+"assets/img/regular_expression_functioning.54a18454.png"},538:function(t,s,a){t.exports=a.p+"assets/img/regex_meta_char.115b1f6c.png"},539:function(t,s,a){t.exports=a.p+"assets/img/regex_modes.ee5d9a37.png"},540:function(t,s,a){t.exports=a.p+"assets/img/regex_greedy_example_result.b0c582cb.png"},541:function(t,s,a){t.exports=a.p+"assets/img/regex_greedy_example.63e5c750.jpg"},542:function(t,s,a){t.exports=a.p+"assets/img/regex_lazy_example_result.10e40baa.png"},543:function(t,s,a){t.exports=a.p+"assets/img/regex_greedy_lazy_compare.40c03d7a.png"},544:function(t,s,a){t.exports=a.p+"assets/img/regex_group.43e12b6a.png"},545:function(t,s,a){t.exports=a.p+"assets/img/regex_subgroup.4b14f91e.png"},546:function(t,s,a){t.exports=a.p+"assets/img/regex_subgroup_index.083b6a8a.png"},547:function(t,s,a){t.exports=a.p+"assets/img/regex_search_double_word.3951b939.png"},548:function(t,s,a){t.exports=a.p+"assets/img/regex_match_mode.f36c2bca.png"},549:function(t,s,a){t.exports=a.p+"assets/img/regex_case_insensitive_01.eeb074ed.png"},550:function(t,s,a){t.exports=a.p+"assets/img/regex_case_insensitive_02.b630d137.png"},551:function(t,s,a){t.exports=a.p+"assets/img/regex_dot_all.59b4b56c.png"},552:function(t,s,a){t.exports=a.p+"assets/img/regex_start_end.09cbdacb.png"},553:function(t,s,a){t.exports=a.p+"assets/img/regex_multiline.e3bf8bd8.png"},682:function(t,s,a){"use strict";a.r(s);var n=a(31),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"正则表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),n("p",[n("img",{attrs:{src:a(537),alt:"正则表达式的功能"}})]),t._v(" "),n("h2",{attrs:{id:"元字符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),n("p",[n("img",{attrs:{src:a(538),alt:"元字符"}})]),t._v(" "),n("h2",{attrs:{id:"量词与贪婪"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#量词与贪婪"}},[t._v("#")]),t._v(" 量词与贪婪")]),t._v(" "),n("p",[n("img",{attrs:{src:a(539),alt:"各种匹配模式"}})]),t._v(" "),n("h3",{attrs:{id:"贪婪模式-greedy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贪婪模式-greedy"}},[t._v("#")]),t._v(" 贪婪模式（Greedy）")]),t._v(" "),n("p",[t._v("正则中，表示次数的量词默认是贪婪的，在贪婪模式下，会尝试尽可能最大长度去匹配。")]),t._v(" "),n("p",[t._v("在字符串"),n("code",[t._v("aaabb")]),t._v("中使用正则"),n("code",[t._v("a*")]),t._v("的匹配过程：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(540),alt:"贪婪模式示例"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(541),alt:"贪婪模式解析"}})]),t._v(" "),n("h3",{attrs:{id:"非贪婪模式-lazy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非贪婪模式-lazy"}},[t._v("#")]),t._v(" 非贪婪模式（Lazy）")]),t._v(" "),n("p",[t._v("非贪婪模式下，正则会找出长度最小且满足要求的结果。将贪婪模式变成非贪婪模式的方法是："),n("strong",[t._v("在量词后面加上"),n("code",[t._v("?")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(542),alt:"非贪婪模式示例"}})]),t._v(" "),n("h3",{attrs:{id:"贪婪和非贪婪的对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贪婪和非贪婪的对比"}},[t._v("#")]),t._v(" 贪婪和非贪婪的对比")]),t._v(" "),n("p",[n("img",{attrs:{src:a(543),alt:"贪婪模式与非贪婪模式的对比"}})]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'a*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaabb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 贪婪模式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'a*?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaabb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 非贪婪模式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h2",{attrs:{id:"分组与引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分组与引用"}},[t._v("#")]),t._v(" 分组与引用")]),t._v(" "),n("p",[n("img",{attrs:{src:a(544),alt:"正则分组"}})]),t._v(" "),n("p",[t._v("括号在正则中可以用于分组，被括号括起来的部分“子表达式”会被保存成一个子组，简单来说，第几个括号就是第几个分组。")]),t._v(" "),n("p",[t._v("如果正则中出现了括号，那么就会认为，这个子表达式在后续可能会再次被引用，如果我们不打算去引用，建议将其声明为"),n("strong",[t._v("不保存")]),t._v("子组，以提高正则的性能。实现方法是，在括号里面使用"),n("code",[t._v("?:")]),t._v("进行声明。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("正则")]),t._v(" "),n("th",[t._v("示例")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("保存子组")]),t._v(" "),n("td",[t._v("(正则)")]),t._v(" "),n("td",[t._v("\\d{15}(\\d{3})?")])]),t._v(" "),n("tr",[n("td",[t._v("不保存子组")]),t._v(" "),n("td",[t._v("(?:正则)")]),t._v(" "),n("td",[t._v("\\d{15}(?:\\d{3})?")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(545),alt:"分组"}})]),t._v(" "),n("h3",{attrs:{id:"分组的编号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分组的编号"}},[t._v("#")]),t._v(" 分组的编号")]),t._v(" "),n("p",[t._v("如果要看某个括号里面的内容是第一个分组，该怎么办？我们只需要数左括号（开括号）是第几个，就可以确定是第几个子组。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(546),alt:"分组编号"}})]),t._v(" "),n("h3",{attrs:{id:"命名分组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名分组"}},[t._v("#")]),t._v(" 命名分组")]),t._v(" "),n("p",[t._v("有些语言提供了命名分组，这比数字更有辨识度，不容易出错。格式为："),n("code",[t._v("(?P<group-name>regular-expression)")])]),t._v(" "),n("h3",{attrs:{id:"分组引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分组引用"}},[t._v("#")]),t._v(" 分组引用")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("编程语言")]),t._v(" "),n("th",[t._v("查找时引用方式")]),t._v(" "),n("th",[t._v("替换时引用方式")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Python")]),t._v(" "),n("td",[t._v("\\number")]),t._v(" "),n("td",[t._v("\\number")])]),t._v(" "),n("tr",[n("td",[t._v("Java")]),t._v(" "),n("td",[t._v("\\number")]),t._v(" "),n("td",[t._v("$number")])]),t._v(" "),n("tr",[n("td",[t._v("JavaScript")]),t._v(" "),n("td",[t._v("\\number")]),t._v(" "),n("td",[t._v("$number")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(547),alt:"正则表达式查找重复单词"}})]),t._v(" "),n("h2",{attrs:{id:"匹配模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式"}},[t._v("#")]),t._v(" 匹配模式")]),t._v(" "),n("p",[t._v("匹配模式，指的是正则中一些"),n("strong",[t._v("改变元字符匹配行为")]),t._v("的方式。常见的匹配模式有 4 种：不区分大小写模式、点号通配模式、多行模式和注释模式。")]),t._v(" "),n("p",[t._v("具体做法是，将**模式修饰符 (? 模式标识)**放在整个正则前面。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(548),alt:"匹配模式"}})]),t._v(" "),n("h3",{attrs:{id:"不区分大小写模式-case-insensitive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不区分大小写模式-case-insensitive"}},[t._v("#")]),t._v(" 不区分大小写模式（Case-Insensitive）")]),t._v(" "),n("p",[n("img",{attrs:{src:a(549),alt:"正则表达式不区分大小写模式"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(550),alt:"正则表达式不区分大小写模式"}})]),t._v(" "),n("p",[t._v("Python 代码中如何使用不区分大小写的匹配模式")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"cat"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAT Cat cat"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IGNORECASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CAT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cat'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h3",{attrs:{id:"点号通配模式-dot-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#点号通配模式-dot-all"}},[t._v("#")]),t._v(" 点号通配模式（Dot All）")]),t._v(" "),n("p",[t._v("正则中提供了一种模式，让英文的点（.）可以匹配上包括换行的任何字符。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(551),alt:"正则表达式点号通配模式"}})]),t._v(" "),n("h3",{attrs:{id:"多行匹配模式-multiline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多行匹配模式-multiline"}},[t._v("#")]),t._v(" 多行匹配模式（Multiline）")]),t._v(" "),n("p",[t._v("通常情况下，^匹配整个字符串的开头，$ 匹配整个字符串的结尾。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(552),alt:"正则表达式开始和结尾"}})]),t._v(" "),n("p",[t._v("多行模式的作用在于，使  ^ 和 $ 能匹配上每行的开头或结尾。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(553),alt:"正则表达式多行模式"}})]),t._v(" "),n("p",[t._v("正则中还有 "),n("code",[t._v("\\A")]),t._v(" 和 "),n("code",[t._v("\\z")]),t._v("（Python 中是 "),n("code",[t._v("\\Z")]),t._v("） 这两个元字符容易混淆，"),n("code",[t._v("\\A")]),t._v(" 仅匹配整个字符串的开始，"),n("code",[t._v("\\z")]),t._v(" 仅匹配整个字符串的结束，在多行匹配模式下，它们的匹配行为不会改变，如果只想匹配整个字符串，而不是匹配每一行，用这个更严谨一些。")]),t._v(" "),n("h3",{attrs:{id:"注释模式-comment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注释模式-comment"}},[t._v("#")]),t._v(" 注释模式（Comment）")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("w+"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#word) \\1(?#word repeat again)")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\nregex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("r'''(?mx)  # 使用多行模式和x模式\n^          # 开头\n(\\d{4})    # 年\n(\\d{2})    # 月\n$          # 结尾\n'''")]),t._v("\n\nre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'202006\\n202007'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出结果 [('2020', '06'), ('2020', '07')]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);