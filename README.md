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
* [组件内部构造](code/intro/component/index.html)
* [组件外部构造](code/intro/comp_props/index.html)

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


