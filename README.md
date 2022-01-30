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
* [方法](code/property/methods/index.html)
* [计算属性](code/property/computed/index.html)

# 简介
## 声明式渲染
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

## 处理用户输入
* 通过`v-on`的方式，可以添加一个事件监听器
    * 例如[处理用户输入](code/intro/event/index.html)例子中的`v-bind:click="reverseMessage"`就将按钮的click动作和[index.js](code/intro/event/index.js)中的`vm.reverseMessage`绑定了
* 通过`v-model`的方式，实现表单输入和应用状态之间的双向绑定
    * 例如[处理用户输入-表单](code/intro/input/index.html)例子中的`v-model="message"`将input输入表单的内容和[index.js](code/intro/input/index.js)中的`vm.message`绑定，而`vm.message`又通过`{{ }}`的方式和`<p>`标签的内容绑定

## 条件与循环
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

## 组件化应用构建
组件(Component)是Vue里面的一个重要概念，允许我们使用小型、独立和通常可复用的组件构建大型应用。组件有两种注册方法：
* 全局注册
    * 例如[组件全局注册](code/intro/comp_global/index.html)例子中，`user-todo-items`组件通过`app.component`函数注册后，就可以在HTML中和其他标签一样使用了。组件的DOM内容由`template`定义，并且可以通过`props`传递数据
* 局部注册
    * 例如[组件局部注册](code/intro/comp_local/index.html)例子中，`todo-item`组件通过`components:{}`的形式往根组件`RootComponent`中添加，因此只有根组件可见

# 应用&组件实例
## 创建一个应用实例
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

## 根组件
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

## 组件实例property
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

## 生命周期钩子
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

## 生命周期图示
![vue_lifecycle](pictures/vue_lifecycle.svg)

# 模板语法

## 插值
### 文本
* `<span>Message: {{ msg }}</span>`
### 原始HTML
* `v-html`会直接作为HTML输出，而忽略数据绑定
### Attribute
* 双大括号语法不能再HTML attribute中使用，需要`v-bind`指令绑定HTML attribute

## 指令
指令(Directives)是带有`v-`前缀的特殊attribute。指令attribute的值预期是单个JavaScript表达式(除了v-for和v-on)。指令的职责是：
* 当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM。
### 参数
一些指令能够接收一个参数，在指令名称之后以冒号表示。
* `<a v-bind:href="url"> ... </a>`
    * 告知v-bind指令将该元素的href attribute与表达式url的值绑定
* `<a v-on:click="doSomething"> ... </a>`
    * 监听DOM事件click
### 动态参数
指令的参数可用用`[]`包裹，进行动态求值
* `<a v-bind:[attributeName]="url"> ... </a>`
    * 如果你的组件实例有一个data property attributeName，其值为"href"，那么这个绑定将等价于`v-bind:href`
* `<a v-on:[eventName]="doSomething"> ... </a>`
    * 当eventName的值为"focus" 时，`v-on:[eventName]`将等价于`v-on:focus`
### 修饰符
修饰符(modifier)是以半角句号`.`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
* `<form v-on:submit.prevent="onSubmit">...</form>`
    * `.prevent`修饰符告诉`v-on`指令对于触发的事件调用`event.preventDefault()`

## 缩写
* `v-bind`缩写：`:`
    * `<a v-bind:href="url"> ... </a>`
    * `<a :href="url"> ... </a>`
    * `<a :[key]="url"> ... </a>`
* `v-on`缩写：`@`
    * `<a v-on:click="doSomething"> ... </a>`
    * `<a @click="doSomething"> ... </a>`
    * `<a @[event]="doSomething"> ... </a>`

# Data Property和方法
## Data Property
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

## 方法
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
    * 例如在[方法](code/property/methods/index.html)例子中，`vm.increment`是`methods`中定义的方法
    * 在定义`methods`时应避免使用箭头函数
* 这些`methods`和组件实例的其它所有property一样可以在组件的模板中被访问
    * `<button @click="increment">Up vote</button>`

# 计算属性和侦听器


