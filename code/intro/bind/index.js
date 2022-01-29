const App = {
   data() {
      return {
         message: 'You loaded this page on ' + new Date().toLocaleString()
      }
   }
}

const vm = Vue.createApp(App).mount('#bind-attribute')
console.log(vm.message) // => You loaded ...
