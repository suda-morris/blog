title: Vue
tags:
  - Vue

categories:

  - Geek Hobbies
author: morris
date: 2019-01-05 23:10:00

---

## 数据绑定

Vue在设计上使用`MVVM`模式，当`View`发生变化时会自动更新到`ViewModel`，反之亦然。`View`和`ViewModel`之间通过双向绑定建立联系。

```vue
<template>
  <div id="app">
    <!-- 使用自定义过滤器对数据进行过滤 -->
    <h1>{{date_time | formatDateTime}}</h1>
    <h2>{{name}}</h2>
    <input type="text" v-model="name" placeholder="你的名字">
    <!-- 使用 v-pre 即可跳过这个元素和它的子元素的编译过程 -->
    <h3 v-pre>{{这里的内容是不会被编译的}}</h3>
    <!-- 除了简单的绑定属性值外，还可以使用 JavaScript 表达式进行简单的运算、三元运算 -->
    <h3>{{isDone?"Done":"Not Done"}}</h3>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      name: "Hello esp-desk",
      isDone: true,
      date_time: new Date()
    };
  },
  filters: {
    formatDateTime: function(value) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  },
  created: function() {
    // 实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载， 此时 $el 还不可用。需要初始化处理一些数据时会比较有用
    console.log(this.name);
  },
  mounted: function() {
    //el 挂载到实例上后调用，一般第一个业务逻辑会在这里开始
    console.log(this.$el);
    var _this = this; //声明一个变量指向 Vue 实例 this ，保证作用域一致
    this.timer = setInterval(() => {
      _this.date_time = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    //实例销毁之前调用。主要解绑一些使用 addEventListener 监听的事件等
    console.log("beforeDestory");
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="scss">
</style>
```

## 计算属性

模板内的表达式只能用于简单的运算，逻辑复杂时，使用vue实例的计算属性`computed`。计算属性可以完成各种复杂的逻辑，包括运算、函数调用等。**计算属性还可以依赖多个vue实例的数据**，只要其中任一数据有变化，计算属性就会重新执行。

计算属性与methods的主要区别在于，计算属性是基于它的**依赖缓存**的，只有当依赖的数据发生变化时才会执行计算。

```vue
<template>
  <div id="app">
    <h2>{{reverseText}}</h2>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      text: "192.168.10.11"
    };
  },
  computed: {
    reverseText: function() {
      return this.text
        .split(".")
        .reverse()
        .join(".");
    }
  }
};
</script>

<style>
</style>
```

## Vue指令

### v-bind及其语法糖

```vue
<template>
  <div id="app">
    <img :src="imgUrl">
    <a v-bind:href="url">百度</a>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      url: "https://www.baidu.com",
      imgUrl: "https://s2.ax1x.com/2019/01/06/FHVUR1.jpg"
    };
  }
};
</script>

<style lang="scss">
</style>
```

#### 绑定class

给`v-bind:class`设置一个对象，可以动态切换class

```vue
<div id="app">
    <div class="static" :class="{'active':isActive, 'error':isError}"></div>
</div>
```

* 类名active依赖于数据isActive，当其为true时，div会拥有类名Active，为false时则没有
* `:class`可以与普通class共存
* 当`:class`的表达式过长或者逻辑复杂时，还可以绑定**计算属性**

给`v-bind:class`设置一个数组，应用一个class列表

```vue
<div id="app">
    <div :class="[{'active': isActive}, errorCls]"></div>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isActive: true,
            errorCls: 'error'
        }
    })
</script>
```

#### 绑定style

```Vue
<div id="app">
    <div :style="styles">文本</div>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            styles: {
                color: 'red',
                fontSize: 14 + 'px'
            }
        }
    })
</script>
```

### v-on及其语法糖

```vue
<template>
  <div id="app">
    <h2 v-if="show">这是一段文字</h2>
    <button v-on:click="hideLabel">隐藏文字</button>
    <button @click="showLabel">显示文字</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    hideLabel: function() {
      this.show = false;
    },
    showLabel: function() {
      this.show = true;
    }
  }
};
</script>
```

需要注意

* `@click`调用的方法名后可以不跟括号“()”，此时，如果该方法有参数，默认会将原生事件对象event传入。
* Vue提供了一个特殊变量`$event`，用于访问原生DOM事件

#### 修饰符

在@绑定的事件后面加小圆点‘.’，再跟一个后缀来使用修饰符。Vue支持以下修饰符：

* .stop
* .prevent
* .capture
* .self
* .once

具体用法如下

```html
<!-- 阻止单击事件冒泡 -->
<a @click.stop="handle"></a>
<!-- 提交事件不再重载页面 -->
<form @submit.prevent="handle"></form>
<!-- 修饰符可以串联 -->
<a @click.stop.prevent="handle"></a>
<!-- 只有修饰符 -->
<form @submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div @click.capture="handle">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div @click.self="handle">...</div>
<!-- 只触发一次，组件同样适用 -->
<div @click.once="handle">...</div>
```

在表单元素上监听键盘事件时，还可以使用按键修饰，比如按下具体某个键时才调用方法：

```html
<!-- 只有在keyCode是13时才调用vm.submit() -->
<input @keyup.13="submit">
```

除了具体某个keyCode外，Vue还提供了一些快捷键名称

* .enter
* .tab
* .delete(捕获“删除”和“退格”键)
* .esc
* .space
* .up
* .down
* .left
* .right

这些按键修饰符可以组合使用，或和鼠标一起配合使用：

* .ctrl
* .alt
* .shift
* .meta

例如：

```html
<!-- Shift + S -->
<input @keyup.shift.83="handleSave">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething"></div>
```

### v-once

`v-once`是一个不需要表达式的指令，作用是定义它的元素或组件只渲染一次，包括元素或组件的所有子节点。首次渲染后，不再随数据的变化重新渲染，将被视为静态内容。`v-once`在业务中很少使用，当需要进一步优化性能的时候，可能会用到。

### v-if、v-else-if、v-else条件渲染指令

```vue
<template>
  <div id="app">
    <template v-if="status===1">
      <h2>status:1</h2>
    </template>
    <template v-else-if="status===2">
      <h3>status:2</h3>
    </template>
    <template v-else>
      <h4>status:3</h4>
    </template>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      status: 3
    };
  }
};
</script>
```

* Vue在渲染元素时，处于效率考虑，会尽可能复用已有的元素而非重新渲染。如果不希望这样做，可以使用Vue提供的`key`属性，它可以让你自己决定是否要复用元素，key的值必须是唯一的

```vue
<template>
  <div id="app">
    <template v-if="type==='name'">
      <label>用户名：</label>
      <input placeholder="输入用户名" :key="name-input">
    </template>
    <template v-else>
      <label>邮箱：</label>
      <input placeholder="输入邮箱" :key="mail-input">
    </template>
    <button @click="changeType">切换输入类型</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      type: "name"
    };
  },
  methods: {
    changeType: function() {
      this.type = this.type === "name" ? "email" : "name";
    }
  }
};
</script>
```

### v-show

`v-show`的用法与`v-if`基本一致，只不过`v-show`是改变元素的CSS属性display，当`v-show`表达式的值为false时，元素会隐藏，查看DOM结构会看到元素上加载了内联样式`display:none`

```vue
<template>
  <div id="app">
    <p v-show="status===1">当status为1时显示该行</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      status: 1
    };
  }
};
</script>
```

* v-show只是简单的CSS属性切换，无论条件真与否，都会被编译，相比之下，`v-if`更适合条件不经常改变的场景，因为它切换开销相对较大，而`v-show`适用于频繁切换条件
* **`v-show`不能在\<template\>上使用**

### 列表渲染指令 v-for

#### 遍历数组

```vue
<template>
  <div id="app">
    <ul>
      <template v-for="(language,index) in languages">
        <h2 :key="index">{{index}}</h2>
        <li :key="index">{{language.name}}</li>
        <li :key="index">{{language.IDE}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      languages: [{ name: "C", IDE: "CLion" }, { name: "Java", IDE: "Eclipse" }]
    };
  }
};
</script>
```

#### 枚举对象的属性

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="(value,key,index) in user" :key="index">{{index+1}}-{{key}}:{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {
        name: "morris",
        age: 20,
        gender: "male"
      }
    };
  }
};
</script>
```

#### 迭代整数

```vue
<template>
  <div id="app">
    <span v-for="n in num" :key="n">{{n}} </span>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      num: 11
    };
  }
};
</script>
```

#### 数组更新

Vue的核心是数据与试图的双向绑定，当我们修改数组时，Vue会检测到数据变化，所以用`v-for`渲染的视图也会立即更新。Vue包含了一组使观察数组变异的方法，使用它们改变数组也会触发视图更新：

* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

使用以上方法会改变被这些方法调用的原始数组，有些方法不会改变原数组，它们会返回一个新的数组，例如：

* filter()
* concat()
* slice()

在使用这些非变异方法时，可以用新数组来替换原数组（Vue在检测到数组变化时，并不是直接重新渲染整个列表，而是最大化地复用DOM元素，替换的数组中，含有相同元素的项不会被重新渲染，因此可以大胆地用新数组来替换旧数组，不用担心性能问题）。

**注意，以下变动的数组中，Vue是不能检测到的，也不会触发视图更新：**

* 通过索引直接设置项，比如app.books[3]={...}，解决方法是使用Vue内置的set或者splice方法
* 修改数组长度，比如app.books.length = 1，解决方法是使用Vue内置的splice方法

#### 过滤与排序

如果不想改变原数组，想通过一个数组的副本来做过滤或排序的显示，可以使用计算属性来返回过滤或者排序后的数组

```vue
<template>
  <div id="app">
    <ul>
      <template v-for="lan in sortedLan">
        <li :key="lan.name">语言名：{{lan.name}}</li>
        <li :key="lan.IDE">开发环境：{{lan.IDE}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      languages: [
        { name: "Java", IDE: "Eclipse" },
        { name: "Python", IDE: "PyCharm" }
      ]
    };
  },
  computed: {
    sortedLan: function() {
      return this.languages.sort(function(a, b) {
        return a.name.length < b.name.length;
      });
    }
  }
};
</script>
```

### 表单数据的双向绑定 v-model

使用`v-model`后，表单控件显示的值只依赖所绑定的数据，不再关心初始化时的value属性，对于在<textares></textarea>之间插入的值也不会生效。

事实上，`v-model`是一个特殊的语法糖，只不过它会在不同的表单上智能处理。
