const RootComponent = {
   methods: {
      say(message) {
         alert(message)
      }
   }
}

const vm = Vue.createApp(RootComponent).mount('#app')
