const App = {
   data() {
      return {
         seen: true
      }
   }
}

const vm = Vue.createApp(App).mount('#conditional-rendering')
console.log(vm.seen) // console input: "vm.seen = false", to see the change
