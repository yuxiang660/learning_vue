const HelloVueApp = {
   data: function() {
      return {
         message: 'Hello Element!!'
      }
   }
}

const app = Vue.createApp(HelloVueApp);
app.use(ElementPlus);
const vm = app.mount('#app')
