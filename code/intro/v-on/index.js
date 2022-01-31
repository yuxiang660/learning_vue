const RootComponent = {
   methods: {
      say(event, message) {
         if (message) {
            alert(message)
         }
         // `event` is the native DOM event
         if (event) {
            alert(event.target.tagName)
         }
      }
   }
}

const vm = Vue.createApp(RootComponent).mount('#app')
