const App = {
   data() {
      return {
         message: 'Hello Vue.js!'
      }
   }
}

const vm = Vue.createApp(App).mount('#input-handling')
console.log(vm.message)
