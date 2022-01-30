const App = {
   data() {
      return {
         counter: 0
      }
   },
   methods: {
      increment() {
         this.counter++
      }
   }
}

const app = Vue.createApp(App)
const vm = app.mount('#counter_div')
console.log(vm.counter) // => 0
console.log(vm.increment)
