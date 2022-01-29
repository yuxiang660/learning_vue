const App = {
   data() {
      return {
         message: 'Hello Vue.js!'
      }
   },
   methods: {
      reverseMessage() {
         this.message = this.message
            .split('')
            .reverse()
            .join('')
      }
   }
}

const vm = Vue.createApp(App).mount('#event-handling')
console.log(vm.message)
