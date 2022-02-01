const HelloVueApp = {
   data: function() {
      return {
         message: 'Hello Element!!'
      }
   }
}

const app = Vue.createApp(HelloVueApp);
app.use(ElementPlus);
// icons-vue is under development: https://element-plus.gitee.io/zh-CN/component/icon.html
app.component('edit', ElementPlusIconsVue.Edit)
app.component('share', ElementPlusIconsVue.Share)
const vm = app.mount('#app')
