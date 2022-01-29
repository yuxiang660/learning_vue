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

Vue.createApp(App).mount('#counter_div')
