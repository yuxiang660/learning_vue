# Learning Vue
这是一个学习[Vue.js](https://v3.cn.vuejs.org/guide/introduction.html)的地方。

# Code
这里列出了此仓库内所有涉及的实验代码，可通过 https://yuxiang660.github.io/learning_vue/ 进行访问。

* [hello](code/hello/index.html)
* [响应式的声明式渲染](code/intro/reactive/index.html)
* [v-bind](code/intro/bind/index.html)
* [处理用户输入](code/intro/event/index.html)

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

