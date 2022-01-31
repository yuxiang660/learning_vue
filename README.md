# Learning Vue
这是一个学习[Vue.js](https://v3.cn.vuejs.org/guide/introduction.html)的地方。

# Code
这里列出了此仓库内所有涉及的实验代码，可通过 https://yuxiang660.github.io/learning_vue/ 进行访问。

* [hello](code/hello/index.html)
* [响应式的声明式渲染](code/intro/reactive/index.html)
* [v-bind](code/intro/bind/index.html)
* [处理用户输入v-on](code/intro/event/index.html)
* [处理用户输入表单v-model](code/intro/input/index.html)
* [条件v-if](code/intro/v-if/index.html)
* [循环v-for](code/intro/v-for/index.html)
* [组件局部注册](code/intro/comp_local/index.html)
* [组件全局注册](code/intro/comp_global/index.html)
* [方法](code/option/methods/index.html)
* [计算属性](code/option/computed/index.html)
* [绑定HTML Class](code/intro/class/index.html)
* [修饰符.stop阻止继续冒泡](code/intro/modifier/index.html)
* [表单数据双向绑定v-model](code/intro/v-model/index.html)
* [自定义input的双向绑定v-model](code/intro/custom_input/index.html)
* [动态组件](code/intro/comp_dynamic/index.html)
* [props选项](code/option/props/index.html)
* [用emits定义一个组件可以向其父组件触发的事件](code/option/emits/index.html)
* [实例方法$emit配合额外的参数使用](code/inst_methods/emit/index.js)
* [实例属性$attr测试](code/inst_properties/attrs/index.html)

# 基础
## 简介
### 声明式渲染
Vue.js的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进[DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)的系统。

> 什么是DOM？<br>
  DOM(Document Object Model，文档对象模型)是HTML和XML文档的编程接口。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

> HTML标记，Element，Node之间是什么关系？<br>
  HTML标记实现了各种不同类型的DOM对象，以便于JS操作。
  Element是对接口Node的实现，是所有文档对象DOM的基类。实现了Node接口的操作，如节点的增删改查；扩展了Node的属性操作，例如className和attribute操作。
  Node是一个接口interface，主要描述了节点的基本方法和属性，如父节点，子节点的操作。
  参考网址：[参考1](https://stackoverflow.com/questions/31467031/whats-the-difference-between-node-element-object)，[参考2](https://github.com/chenshenhai/blog/issues/34)

有两种方式建立DOM和数据的关联：
* 通过`{{ }}`的方式，将DOM的内容和Vue中的数据相关联
    * 例如[响应式的声明式渲染](code/intro/reactive/index.html)例子中的`{{ counter }}`就绑定了[index.js](code/intro/reactive/index.js)中的`vm.counter`
* 通过`v-bind`的方式，将DOM的属性和Vue中的数据相关联
    * 例如[v-bind](code/intro/bind/index.html)例子中的`v-bind:title="message"`就绑定了[index.js](code/intro/bind/index.js)中的`vm.message`

### 处理用户输入
* 通过`v-on`的方式，可以添加一个事件监听器
    * 例如[处理用户输入](code/intro/event/index.html)例子中的`v-bind:click="reverseMessage"`就将按钮的click动作和[index.js](code/intro/event/index.js)中的`vm.reverseMessage`绑定了
* 通过`v-model`的方式，实现表单输入和应用状态之间的双向绑定
    * 例如[处理用户输入-表单](code/intro/input/index.html)例子中的`v-model="message"`将input输入表单的内容和[index.js](code/intro/input/index.js)中的`vm.message`绑定，而`vm.message`又通过`{{ }}`的方式和`<p>`标签的内容绑定

### 条件与循环
到现在为止，我们知道了不同的数据绑定方式：
* 通过`{{ }}`可以把数据绑定到DOM文本
* 通过`v-bind`可以把数据绑定到DOM的attribute
* 通过`v-on`可以把数据绑定到用户的输入事件
* 通过`v-model`可以把数据绑定到用户的输入内容

这一章，我们将介绍两种绑定方式，可以将数据绑定到DOM的结构：
* 通过`v-if`可以把数据绑定到DOM是否显示
    * 例如[条件v-if](code/intro/v-if/index.html)例子中的`v-if="seen"`将`<span>`标签是否显示和[index.js](code/intro/v-if/index.js)中的`vm.seen`绑定
* 通过`v-for`可以绑定数组的数据来渲染一个项目列表
    * 例如[循环v-for](code/intro/v-for/index.html)例子中的`v-for="todo in todos"`将[index.js](code/intro/v-for/index.js)中的`vm.todos`数组展开，并由`<li>`标签显示

### 组件化应用构建
组件(Component)是Vue里面的一个重要概念，允许我们使用小型、独立和通常可复用的组件构建大型应用。组件有两种注册方法：
* 全局注册
    * 例如[组件全局注册](code/intro/comp_global/index.html)例子中，`user-todo-items`组件通过`app.component`函数注册后，就可以在HTML中和其他标签一样使用了。组件的DOM内容由`template`定义，并且可以通过`props`传递数据
* 局部注册
    * 例如[组件局部注册](code/intro/comp_local/index.html)例子中，`todo-item`组件通过`components:{}`的形式往根组件`RootComponent`中添加，因此只有根组件可见

## 应用&组件实例
### 创建一个应用实例
```js
const app = Vue.createApp({
    /* 选项 */
})
```
* 允许链式配置
```js
Vue.createApp({})
    .component('SearchInput', SearchInputComponent)
    .directive('focus', FocusDirective)
    .use(LocalePlugin)
```

### 根组件
* 传递给createApp的选项用于配置**根组件**
* 当我们挂载应用时，根组件被用作渲染的起点
```js
const RootComponent = { 
    /* 选项 */ 
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```
* `mount`不返回应用本身，而返回的是根组件实例

### 组件实例property
* `data`property
    * `data`中定义的property通过组件实例暴露
```js
const app = Vue.createApp({
    data() {
        return { count: 4 }
    }
})

const vm = app.mount('#app')
console.log(vm.count) // => 4
```
* 常见property：methods, props, computed, inject, setup
* Vue组件实例暴露了一些内置property，如`$attrs`和`$emit`。这些property都有一个`$`前缀，以避免与用户定义的property名冲突

### 生命周期钩子
```js
Vue.createApp({
    data() {
        return { count: 1}
    },
    created() {
        // `this` 指向 vm 实例
        console.log('count is: ' + this.count) // => "count is: 1"
    }
})
```
* 生命周期钩子的`this`上下文指向调用它的当前活动实例，即`mount`后返回的vm实例
* 不要在选项property或回调上使用箭头函数，例如`created: () => console.log(this.a)`，因为箭头函数没有`this`

### 生命周期图示
![vue_lifecycle](pictures/vue_lifecycle.svg)

## 模板语法

### 插值
#### 文本
* `<span>Message: {{ msg }}</span>`
#### 原始HTML
* `v-html`会直接作为HTML输出，而忽略数据绑定
### Attribute
* 双大括号语法不能再HTML attribute中使用，需要`v-bind`指令绑定HTML attribute

### 指令
指令(Directives)是带有`v-`前缀的特殊attribute。指令attribute的值预期是单个JavaScript表达式(除了v-for和v-on)。指令的职责是：
* 当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM。
#### 参数
一些指令能够接收一个参数，在指令名称之后以冒号表示。
* `<a v-bind:href="url"> ... </a>`
    * 告知v-bind指令将该元素的href attribute与表达式url的值绑定
* `<a v-on:click="doSomething"> ... </a>`
    * 监听DOM事件click
#### 动态参数
指令的参数可用用`[]`包裹，进行动态求值
* `<a v-bind:[attributeName]="url"> ... </a>`
    * 如果你的组件实例有一个data property attributeName，其值为"href"，那么这个绑定将等价于`v-bind:href`
* `<a v-on:[eventName]="doSomething"> ... </a>`
    * 当eventName的值为"focus" 时，`v-on:[eventName]`将等价于`v-on:focus`
#### 修饰符
修饰符(modifier)是以半角句号`.`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
* `<form v-on:submit.prevent="onSubmit">...</form>`
    * `.prevent`修饰符告诉`v-on`指令对于触发的事件调用`event.preventDefault()`

### 缩写
* `v-bind`缩写：`:`
    * `<a v-bind:href="url"> ... </a>`
    * `<a :href="url"> ... </a>`
    * `<a :[key]="url"> ... </a>`
* `v-on`缩写：`@`
    * `<a v-on:click="doSomething"> ... </a>`
    * `<a @click="doSomething"> ... </a>`
    * `<a @[event]="doSomething"> ... </a>`

## Data Property和方法
### Data Property
组件的data选项是一个函数。Vue会在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后Vue会通过响应性系统将其包裹起来，并以$data的形式存储在组件实例中。为方便起见，该对象的任何顶级property也会直接通过组件实例暴露出来：
```js
const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

console.log(vm.$data.count) // => 4
console.log(vm.count)       // => 4

// 修改 vm.count 的值也会更新 $data.count
vm.count = 5
console.log(vm.$data.count) // => 5

// 反之亦然
vm.$data.count = 6
console.log(vm.count) // => 6
```
* Vue使用`$`前缀通过组件实例暴露自己的内置API。它还为内部property保留`_`前缀。你应该避免使用这两个字符开头的的顶级data property名称

### 方法
我们用`methods`选项向组件实例添加方法，它应该是一个包含所需方法的对象：
```js
const app = Vue.createApp({
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` 指向该组件实例
      this.count++
    }
  }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4

vm.increment()

console.log(vm.count) // => 5
```
当面的代码等价于：
```js
const app = Vue.createApp({
  data: function() {
    return { count: 4 }
  },
  methods: {
    increment: function() {
      // `this` 指向该组件实例
      this.count++
    }
  }
})
```
* Vue自动为`methods`绑定 this，以便于它始终指向组件实例。
    * 例如在[方法](code/option/methods/index.html)例子中，`vm.increment`是`methods`中定义的方法
    * 在定义`methods`时应避免使用箭头函数
* 这些`methods`和组件实例的其它所有property一样可以在组件的模板中被访问
    * `<button @click="increment">Up vote</button>`

## 计算属性和侦听器
计算属性类似于data property，用于data property的简单运算。虽然它的定义和`methods`类似，但是它在实例中的表现和data更接近。
* 例如[计算属性](code/option/computed/index.html)例子中，`vm.calculateBooksMessage`打印的是function，而`vm.publishedBooksMessage`打印的却是"Yes"
* 虽然例子中，`{{ publishedBooksMessage }}`和`{{ calculateBooksMessage（） }}`能达到相同的效果。然而，不同的是**计算属性将基于它们的响应依赖关系缓存**。而调用方法当重新渲染时，会被触发。

### 侦听器
计算属性实现了对数据的监听动作，但Vue提供了`watch`选项，一种更通用的响应数据变化的方法。

## Class与Style绑定
### 绑定HTML Class
* `<div :class="{ active: isActive }"></div>`
    * 上面的语法表示`active`这个class存在与否将取决于data property isActive的truthiness
    * [绑定HTML Class](code/intro/class/index.html)例子中，通过改变`isActive`就可以控制样式切换

# 深入组件

## Props
Props是组件暴露的数据接口，用户可以在组件内自定义各种Prop，这样父组件就可以传递数据到子组件，从而实现组件的更好复用。

### 传递静态或动态的Prop
例子[props选项](code/option/props/index.html)中实现了三种不同的传递Prop的方法:
* 静态传递
    * `<blog-post prop-c="This is static assignment"></blog-post>`
* 动态传递个别Prop
    * `<blog-post :prop-b="post.propB" :prop-c="post.propC"></blog-post>`
* 动态传递整体Prop
    * `<blog-post v-bind="post"></blog-post>`

> 如何关闭firefox的cross origin检测？<br>
  由于使用了`import/export`，在HTML中加载JS文件时需要指定type是module，因此浏览器会报cross origin错误。一个解决办法是通过`python3 -m http.server`起一个server。另一个办法是关闭浏览器的安全检测，火狐浏览器中输入`about:config`，配置如下：about:config -> security.fileuri.strict_origin_policy -> false，[参考网址](https://stackoverflow.com/questions/17088609/disable-firefox-same-origin-policy)

### 非Prop的Attribute
一个非prop的attribute是指传向一个组件，但是该组件并没有相应props或emits 定义的attribute。常见的示例包括class、style和id attribute。可以通过`$attrs`property访问那些attribute。

`$attr`包含了父作用域中不作为组件props或自定义事件的attribute绑定和事件。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定，并且可以通过`v-bind="$attrs"`传入内部组件——这在创建高阶的组件时会非常有用。

例如[$attr测试](code/inst_properties/attrs/index.html)例子中，`comp`组件的`my-attr`属性的内容就可用通过`$attrs['my-attr']`得到。

## 条件渲染
`v-if`指令用于条件性地渲染一块内容，这块内容只会在指令的表达式返回truthy值的时候被渲染。参加例子[条件v-if](code/intro/v-if/index.html)。

## 事件处理
`v-on`指令用于监听DOM事件。如果需要在内联语句处理器中访问原始的DOM事件，可以用特殊变量`$event`把它传入方法。
### 事件修饰符
修饰符是由点开头的指令后缀来表示的，用于修饰原生的DOM事件(.once也能用在自定义事件上)，常见的修饰符有：
* .stop
* .prevent
* .capture
* .self
* .once
* .passive

```html
<!-- 阻止单击事件继续冒泡 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```

例子[修饰符.stop阻止继续冒泡](code/intro/modifier/index.html)中，在按钮click动作上加上`.stop`修饰符，阻止了起继续将单击事件冒泡，从而不会连续弹窗。

### 按键修饰符
Vue 为最常用的键提供了别名：
* .enter
* .tab
* .delete (捕获“删除”和“退格”键)
* .esc
* .space
* .up
* .down
* .left
* .right

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
```

## 表单输入绑定

### 基础用法
可以用`v-model`指令在表单`<input>`, `<textarea>`及`<select>`元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
`v-model`在内部为不同的输入元素使用不同的property并抛出不同的事件：
* text和textarea元素使用`value`property和`input`事件
* checkbox和radio使用`checked`property和`change`事件；
* select字段将`value`作为property并将`change`作为事件。

[表单数据双向绑定](code/intro/v-model/index.html)例子展示了各种表单的操作。

## 组件基础

### 使用事件抛出一个值
`$emit`在子组件中抛出一个事件，并可以带一个参数。通过`$event`在父组件中可以拿到这个参数的值。v-model就是利用这个机制实现的。

在[用emits定义一个组件可以向其父组件触发的事件](code/option/emits/index.html)例子中，WelcomeButton组件通过`$emit('welcome', name)`抛出welcome事件，并带有name参数。因此，可以通过`<welcome-button v-on:welcome="sayHi($event)"></welcome-button>`将name参数的内容，通过`$event`传递给`sayHi`函数。

### 在组件上使用v-model
对于v-model操作等价于一次绑定操作和一次事件监控，例如下面两个操作是等价的：
* `<input v-model="searchText" />`
* `<input :value="searchText" @input="searchText = $event.target.value" />`

`v-model`指令相当于做了：
* `searchText`和input的`value`属性绑定
* `searchText`通过`input`事件动作，更新为用户输入

在[自定义input的双向绑定v-model](code/intro/custom_input/index.html)例子中，`<custom-input v-model="searchText"></custom-input>`就等价于：
```html
<custom-input
  :model-value="searchText"
  @update:model-value="searchText = $event"
/>
```
* 其中，`model-value`是CustomInput的prop：`modelValue`

### 动态组件
[动态组件](code/intro/comp_dynamic/index.html)例子展示了动态组件的代码。其中利用了`<component v-bind:is="currentTabComponent" class="tab"></component>`动态控制Tab组件的显示。

# 工具
## 单文件组件
Vue单文件组件（又名 *.vue 文件，缩写为SFC，single-file-component是一种特殊的文件格式，它允许将 Vue 组件的模板、逻辑与样式封装在单个文件中。
* `<script>`部分是一个标准的JavaScript模块。它应该导出一个Vue组件定义作为其默认导出。
* `<template>`部分定义了组件的模板。
* `<style>`部分定义了与此组件关联的CSS。

[SFC_hello](code/SFC/hello)例子中，创建了一个简单的SFC例子：
* make serve
    * 开启一个网页服务，用于展示网页
* make build
    * 编译出本地的网页，会读入`hello.vue`和`index.html`两个文件进行分析，生成`dist`文件夹
    * `vue.config.js`指定了相对路径，这样进入`dist`文件夹显示网页
* make lib
    * 编译`hello.vue`文件，在`lib`文件夹下产生对应的JS component文件
    * 在`lib`文件夹下还会产生简单的`index.html`文件，这样这个index文件不同于上一级的index文件





