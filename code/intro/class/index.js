const RootComponent = {
   data: function() {
      return {
         isActive: false,
         message: 'Hello Vue!!'
      }
   },
   methods: {
      toggleClass()
      {
         this.isActive = !this.isActive
      }
   }
}

Vue.createApp(RootComponent).mount('#app')
