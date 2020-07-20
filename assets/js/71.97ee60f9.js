(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{629:function(t,s,a){"use strict";a.r(s);var m=a(29),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"q学习-强化学习的具体方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q学习-强化学习的具体方法"}},[t._v("#")]),t._v(" Q学习——强化学习的具体方法")]),t._v(" "),a("p",[t._v("在Q学习的框架中，作为学习对象的是称为Q值（Q-value）的数值，Q值是指在某种情况下，为了选择下一个要采取的行动的"),a("code",[t._v("指标数值")]),t._v("的集合。根据Q学习而获得Q值，在某个状态下选择下一个行动时，可以根据Q值来进行选择。")]),t._v(" "),a("p",[t._v("Q学习中，获得合适的Q值是学习的目标，在学习的初期，不清楚什么是合适的Q值，所以无法做决定。因此在学习的初期，Q值是由随机数来随机确定的。在此基础上，根据Q值进行行动的选择，更新状态。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/11/06/iohpUs.jpg",alt:"Q值更新原则1&2"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/11/06/io4rf1.png",alt:"Q值更新原则3"}})]),t._v(" "),a("h2",{attrs:{id:"q值更新的计算公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q值更新的计算公式"}},[t._v("#")]),t._v(" Q值更新的计算公式")]),t._v(" "),a("p",[t._v("$$\nQ(s_t,a_t)=Q(s_t,a_t)+\\alpha(r+\\gamma \\space maxQ(s_{t+1},a_{t+1})-Q(s_t,a_t))\n$$")]),t._v(" "),a("ul",[a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1),t._v("表示t时刻的状态，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1),t._v("表示在"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1),t._v("时所选的行动")],1),t._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"m"}}),a("mjx-c",{attrs:{c:"a"}}),a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"Q"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("表示在下一个时刻（t+1）能够选择的行动中所对应的Q值中的最大值")],1),t._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1),t._v("表示奖赏（仅限于能够获得时，不能获得的话，是0）")],1),t._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B1"}})],1)],1)],1),t._v("表示学习系数（0.1左右）")],1),t._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3B3"}})],1)],1)],1),t._v("表示折扣率（0.9左右）")],1)]),t._v(" "),a("h2",{attrs:{id:"q-learning算法步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-learning算法步骤"}},[t._v("#")]),t._v(" Q-learning算法步骤")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2018/11/06/ioXhWD.png",alt:"Q-learning算法步骤"}})])])}),[],!1,null,null,null);s.default=c.exports}}]);