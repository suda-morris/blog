(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{390:function(t,a,i){"use strict";i.r(a);var e=i(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("title: Latex Basic\ntags:")]),t._v(" "),i("ul",[i("li",[t._v("Latex\ncategories:")]),t._v(" "),i("li",[t._v("Geek Hobbies\nauthor: suda-morris\ndate: 2016-03-21 11:09:15 +0800")])]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"latex简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#latex简介"}},[t._v("#")]),t._v(" LaTeX简介")]),t._v(" "),i("ol",[i("li",[t._v("LaTeX是一种基于TeX的文档排版系统。")]),t._v(" "),i("li",[t._v("LaTeX并不是单独的程序，现在的TEX系统都是复杂的软件包，里面包含各种排版的引擎、编译脚本、格式转换工具、管理界面、配置文件、支持工具、字体以及数以千计的宏包和文档。一个TeX发行版就是把所有这样的部件都集合在一起，打包发布的软件")]),t._v(" "),i("li",[t._v("TeX是由TeX用户组发布的一个发行版，跨平台")]),t._v(" "),i("li",[t._v("LaTeX的命令以反斜线\\开头，命令一般用英文单词命名，有的可以带参数。")]),t._v(" "),i("li",[t._v("严格来说，LaTeX并不是标记语言，而是主要基于字符串代换的宏语言\n"),i("img",{attrs:{src:"http://i.imgur.com/b7BVgmf.png",alt:"使用各种引擎编译LaTeX文档的简要流程"}})]),t._v(" "),i("li",[t._v("导言区常用命令：\n"),i("ol",[i("li",[t._v("声明文章的标题:\\title{An Embedded FTP Server Powered by PoE}")]),t._v(" "),i("li",[t._v("声明文章的作者:\\author{morris}")]),t._v(" "),i("li",[t._v("声明写作日期:\\date{\\today}")]),t._v(" "),i("li",[t._v("声明参考文献的格式:\\bibliographystyle{plain}")])])]),t._v(" "),i("li",[t._v("以\\begin{document}和\\end{document}声明了一个document环境，里面是论文的正文部分，也是直接输出的部分")]),t._v(" "),i("li",[t._v("\\maketitle命令实际输出论文标题")]),t._v(" "),i("li",[t._v("\\tableofcontents命令输出目录")]),t._v(" "),i("li",[t._v("\\section命令开始新的一节")]),t._v(" "),i("li",[t._v("使用空行分段，单个换行并不会使文字另起一段，而只是起到使源代码更易读的作用，空行只起分段作用，使用很多空行并不起任何增大间距的作用")]),t._v(" "),i("li",[t._v("短浅不用打空格，LaTeX会自动完成文字的缩进，即使手工在前面打了空格，LaTeX也会将其忽略")]),t._v(" "),i("li",[t._v("汉字后面的空格会被忽略，其他符号后面的空格则保留。单个的换行就相当于一个空格，因此源代码中大段文字可以安全地分成短行，空格只起分隔单词或符号的作用，使用很多空格并不起到任何增大字词间距的作用")]),t._v(" "),i("li",[t._v("在需要使用注脚的文字后面使用命令:\\footnote{注脚内容}")]),t._v(" "),i("li",[t._v("需要强调的内容使用命令:\\emph{内容}")]),t._v(" "),i("li",[t._v("命令都以反斜线\\开头，后接命令名，命令名或者是一串字母，或是单个符号。命令可以带一些参数，如果命令的参数不止一个字符(不包括空格)，就必须用花括号括起来。可选参数如果出现，则使用方括号括起来。\n"),i("img",{attrs:{src:"http://i.imgur.com/t6MSwSB.png",alt:"LaTeX命令的格式"}})]),t._v(" "),i("li",[t._v("引用的内容是在正文中使用quote环境得到,quote环境即以\\begin{quote} 和\\end{quote} 为起止位置的部分。它将环境中的内容单独分行，增加缩进和上下间距排印，以突出引用的部分。")]),t._v(" "),i("li",[t._v("文章的摘要也是在\\maketitle之后用abstract环境生成的\n"),i("img",{attrs:{src:"http://i.imgur.com/eQWRnSC.png",alt:"LaTeX环境的一般格式"}})]),t._v(" "),i("li",[t._v("最简单的输入公式的办法是把公式用一对美元符号$"),i("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[i("mjx-math",{staticClass:" MJX-TEX"},[i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("括")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("起")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("来")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("，")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("如")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("使")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("用")])],1)],1)],1),t._v("a+b$就得到漂亮的a+b，这种夹在行文中的公式称为正文公式或行内公式。对比较长或比较重要的公式，一般则单独居中写在一行；为了方便引用，经常还给公式编号。这种公式被称为显示公式或列表公式，使用equation环境就可以方便的输入这种公式。")],1),t._v(" "),i("li",[t._v("键盘上没有的符号，就需要使用一个命令来输入。例如表示角的符号就可以用\\angle输入。命令的名字通常也就是符号的名字，圆周率的符号用\\pi来表示")]),t._v(" "),i("li",[t._v("符号^用来引入一个上标，而_则引入一个下标，它们用起来差不多等同于一个带一个参数的命令，因此多个字符的上下标需要使用花括号分组，如"),i("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[i("mjx-math",{staticClass:" MJX-TEX"},[i("mjx-msup",[i("mjx-mn",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"2"}})],1),i("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[i("mjx-TeXAtom",{attrs:{size:"s"}},[i("mjx-mn",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"1"}}),i("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"="}})],1),i("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[i("mjx-c",{attrs:{c:"1"}}),i("mjx-c",{attrs:{c:"0"}}),i("mjx-c",{attrs:{c:"2"}}),i("mjx-c",{attrs:{c:"4"}})],1)],1)],1)],1),t._v(" "),i("li",[t._v("怎么输入90°，LaTeX默认的数学字体中，并没有一个专门用于表示角度的符号，自然也没有这么命令，角度的符号°是通过上标输入的："),i("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[i("mjx-math",{staticClass:" MJX-TEX"},[i("mjx-msup",[i("mjx-mi",{staticClass:"mjx-n"}),i("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[i("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[i("mjx-c",{attrs:{c:"2218"}})],1)],1)],1)],1)],1)],1),t._v(" "),i("li",[t._v("插图功能不是由LaTeX的内核直接提供的，而是由graphicx宏包提供的。要使用graphicx宏包的插图功能，需要在源文件的导言区使用\\usepackage命令引入宏包")]),t._v(" "),i("li",[t._v("引入graphicx宏包后就可以使用\\includegraphics命令插图了，比如：\\includegraphics[scale=0.4]{DC-DC.jpg}。插入的图形就是一个有内容的矩形盒子，在正文中和一个很大的字符没有多少区别。支持的图形格式包括PDF、PNG、JPG、EPS 等。")]),t._v(" "),i("li",[t._v("除了一些很小的标志图形，我们很少把插图直接夹在文字之中，而是使用单独的环境列出。而且很大的图形如果固定位置，会给分页造成困难。因此，通常把图形放在一个可以变动的相对位置的环境中，称为"),i("strong",[t._v("浮动体")]),t._v("。在浮动体中还可以给图形加入说明性的标题。例如：")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("\\begin{figure}[ht]\n\\centering\n\\includegraphics[scale=0.6]{xiantu.pdf}\n\\caption{宋赵爽在《周髀算经》注中作的弦图（仿制），该图给出了勾股定\n理的一个极具对称美的证明。}\n\\label{fig:xiantu}\n\\end{figure}\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br")])]),i("ol",{attrs:{start:"26"}},[i("li",[t._v("在上面的代码中，figure环境有可选参数[ht]，表示浮动体可以出现在环境周围的文本所在处(here)和一页的顶部(top)，figure环境内部相当于普通的段落（默认没有缩进）；使用声明\\centering表示后面的内容居中；使用caption命令给插图加上自动编号和标题")]),t._v(" "),i("li",[t._v("制作表格需要确定的是表格的行、列对齐模式和表格线，这是由tabular环境完成的：")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("\\begin{table}[H]\n\\begin{tabular}{|rrr|}\n\\hline\n直角边$a$ & 直角边$b$ & 斜边$c$ \\\\\n\\hline\n3 & 4 & 5 \\\\\n5 & 12 & 13 \\\\\n\\hline\n\\end{tabular}%\n\\qquad\n($a^2 + b^2 = c^2$)\n\\end{table}\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br"),i("span",{staticClass:"line-number"},[t._v("6")]),i("br"),i("span",{staticClass:"line-number"},[t._v("7")]),i("br"),i("span",{staticClass:"line-number"},[t._v("8")]),i("br"),i("span",{staticClass:"line-number"},[t._v("9")]),i("br"),i("span",{staticClass:"line-number"},[t._v("10")]),i("br"),i("span",{staticClass:"line-number"},[t._v("11")]),i("br"),i("span",{staticClass:"line-number"},[t._v("12")]),i("br")])]),i("ol",{attrs:{start:"28"}},[i("li",[t._v("tabular环境中有一个参数，里面声明了表格中列的模式，在前面的表格中，|rrr|表示表格有3列，都是右对齐，在第一列和第三列后面各有一条垂直的表格线。在tabular环境内部，行与行之间用命令\\隔开，每行内部的表项则用符号&隔开。表格中的横线则是用命令\\hline产生的。表格与插图一样，都是一个比较大的盒子，一般也放在浮动环境中，即table环境")]),t._v(" "),i("li",[t._v("使用\\bibliographystyle{plain}声明了参考文献的格式，用\\bibliography{math}命令打印参考文献列表。实际上这只是BibTeX处理文献的一个空架子，还需要定义“参考文献数据库”。BibTeX使用的参考文献数据库其实就是个后缀为.bib的文件。BibTeX数据库经常不需要我们自己录入，而可以从相关学科的网站直接下载或是从其他类型的文献数据库转换得到。定义好参考数据库后在正文中使用\\cite命令选择需要LaTeX列出的文献。")]),t._v(" "),i("li",[t._v("引用不仅限于参考文献，图表、公式的编号，只要事先设定了标签，同样可以通过辅助文件为中介引用。基本的交叉引用命令是\\ref，它以标签为参数，得到被引用的编号。数学宏包amsmath就定义了\\eqref命令，专门用于公式的引用，并能产生括号")]),t._v(" "),i("li",[t._v("设计页面尺寸可以使用geometry宏包：\\geometry{a6paper,centering,scale=0.8}，表示页面使用A6纸大小，版心居中，长宽占页面的0.8")]),t._v(" "),i("li",[t._v("改变图标标题格式可以使用caption宏包：\\usepackage[format=hang,font=small,textfont=it]{caption}表示设置图表所有标题使用悬挂对齐方式，整体用小字号，而标题文本使用斜体（对汉字来说就是楷体）")]),t._v(" "),i("li",[t._v("增加目录的项目则可以用tocbibnd宏包：\\usepackage[nottoc]{tocbibind}，宏包默认会在目录中加入目录项本身、参考文献、索引等项目，这里使用nottoc选项取消了在目录中显示目录本身")]),t._v(" "),i("li",[t._v("自定义环境命令,\\newenvironment有3个参数，第一个参数是环境的名字，后两个参数分别是在环境开始和末尾处的代码")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("\\newenvironment{myquote}\n{\\begin{quote}\\kaishu\\zihao{-5}}\n{\\end{quote}}\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br")])]),i("ol",{attrs:{start:"35"}},[i("li",[t._v("自定义新的命令：\\newcommand\\degree{^\\circ}")]),t._v(" "),i("li",[t._v("LaTeX是一种结构化的排版语言，在填写便准格式的模板时可以忽略编号、格式等许多具体细节。在文档排版中应主动追求内容与格式的分离，在document环境之内避免直接使用诸如字体字号、对齐缩进的格式控制命令，而代之以有具体意义的环境和命令，让文档变得清晰")])]),t._v(" "),i("h2",{attrs:{id:"文字与符号"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文字与符号"}},[t._v("#")]),t._v(" 文字与符号")]),t._v(" "),i("ol",[i("li",[t._v("LaTeX中的特殊字母\n"),i("img",{attrs:{src:"http://i.imgur.com/lWzOtlB.png",alt:"LaTeX中的特殊字母及命令"}})]),t._v(" "),i("li",[t._v("LaTeX提供了babel宏包，可以方便同时访问多种语言的字母表，babel宏包可带有一个或多个语言的可选参数，支持不同的语言，如:\\usepackage[greek,english]{babel},将使用英语和希腊语，其中最后一个参数的英语是默认语言，此时希腊语就可以用ASCII字符代替：\\textgreek{abcd}")]),t._v(" "),i("li",[t._v("LaTeX在盘拌种会将单词中的一些字母连写为一个符号，即连字，连字的有无和多少一般是由使用的字体决定的，比如fi和fl连在了一起，有时候为了美观考虑取消连字，可以使用空的分组，比如：f{}ind")]),t._v(" "),i("li",[t._v("在每个标点之后应该加上空格，以保证正确的距离和换行")]),t._v(" "),i("li",[t._v("LaTeX中遇到单引号和双引号连续出现的情形，则在双引号和单引号之间用\\隔开")]),t._v(" "),i("li",[t._v("除了在数学模式中表示减号，符号-在LaTeX正文中也有多种用途：单独使用时它是连字符，两个连用时en dash，用来表示数字范围；三个连用是em dash，即破折号")]),t._v(" "),i("li",[t._v("圣罗浩使用\\ldots或者\\dots命令产生，相比直接输入三个句号，它所略微拉开的间距要合理的多")]),t._v(" "),i("li",[t._v("标准键盘上不能直接录入的标点符号\n"),i("img",{attrs:{src:"http://i.imgur.com/FT4ZOtP.png",alt:"标准键盘不能直接录入的标点符号"}})]),t._v(" "),i("li",[t._v("文本中的空格起分隔单词的作用，任意多个空格与一个空格的功能相同；只有字符后面的空格使有效的，每行最前面的空格会被忽略。单个换行也被看做是一个空格")]),t._v(" "),i("li",[t._v("有一种不可打断的空格，在TeX中被称为带子，用~表示，TeX禁止在这种空格之间分行，因为可以用来表示一些不宜分开的情况\n"),i("img",{attrs:{src:"http://i.imgur.com/qKvkp9w.png",alt:"带子的使用"}})]),t._v(" "),i("li",[t._v("西文的逗号、句号、分号等标点后面应该加空格，这不仅能保证正确的间距，也能保证正确的换行。这是因为，标点后如果没有空格，就不能换行。")]),t._v(" "),i("li",[t._v("空行，即用连续两个换行表示分段，段与段之间会自动得到合适的缩进，任意多个空行与一个空行的效果相同")]),t._v(" "),i("li",[t._v("除了分段，也可以让LaTeX直接另起一行，并不分段。\\命令直接另起一行，上一行保持原来的样子，\\命令可以带一个可选的长度参数，表示换行后增加的额外垂直间距，例如\\[2cm]。\\linebreak则指定一行的断点，上一行仍按完整一行散开对齐")]),t._v(" "),i("li",[t._v("特殊符号\n"),i("img",{attrs:{src:"http://i.imgur.com/T5X1sug.png",alt:"正文中常用的特殊符号"}})]),t._v(" "),i("li",[t._v("LaTeX的基本工具宏包textcomp就定义了大量用于文本的符号，例如欧元符号\\texteuro，千分符\\textperthousand等。tipa宏包提供了国际音标字体的访问")]),t._v(" "),i("li",[t._v("预定义命令的字体族有3种：罗马字体族、无衬底字体族和打字机字体族，其命令为：\n"),i("img",{attrs:{src:"http://i.imgur.com/uiy67RS.png",alt:"预定义命令的字体族"}})]),t._v(" "),i("li",[t._v("预定义命令的字体形状有4种：直立形状、意大利形状、倾斜形状、小型大写形状，其命令为：\n"),i("img",{attrs:{src:"http://i.imgur.com/NPpS0NK.png",alt:"预定义命令的字体形状"}})]),t._v(" "),i("li",[t._v("预定义命令的字体系列有中等和加宽加粗两类\n"),i("img",{attrs:{src:"http://i.imgur.com/kIXpFT7.png",alt:"预定义命令的字体系列"}})]),t._v(" "),i("li",[t._v("对于中文字体，一般只是用不同字体族进行区分。xeCJK和CJK宏包机制下，中文字体的选择命令和西文字体是分离，选择中文字体族使用\\CJKfamily")]),t._v(" "),i("li",[t._v("中文的字体族，根据不同的系统和使用方式有不同，在ctex宏包及文档下有一些预定义\n"),i("img",{attrs:{src:"http://i.imgur.com/eBwRbYt.png",alt:"ctex宏包提供的简化中文字体命令"}})]),t._v(" "),i("li",[t._v("字体命令：\n"),i("ol",[i("li",[t._v("\\emph表示强调，用于把直立体改为意大利体，把意大利体改为直立体")]),t._v(" "),i("li",[t._v("\\underline可以给文字或公式加下划线")])])]),t._v(" "),i("li",[t._v("基本的LaTeX提供了10个简单的生命是命令调整文字的大小\n"),i("img",{attrs:{src:"http://i.imgur.com/QXMMMsV.png",alt:"声明式命令调整文字大小"}})]),t._v(" "),i("li",[t._v("中文字号可以使用ctex宏包或者ctexart等文档类提供的\\zihao命令设置\n"),i("img",{attrs:{src:"http://i.imgur.com/H0dDab2.png",alt:"中文字号"}})]),t._v(" "),i("li",[t._v("LaTeX中的行距是与字号直接相关的，在设置字号的时候，同时也就设置了基本行距为文字大小的1.2倍")])])])}),[],!1,null,null,null);a.default=s.exports}}]);