const App = {
   data() {
      return {
         counter: 0
      }
   },
   mounted() {
      setInterval(() => {
         this.counter++
      }, 1000)
   }
}

const vm = Vue.createApp(App).mount('#counter_div')
console.log(vm.counter) // => 0
