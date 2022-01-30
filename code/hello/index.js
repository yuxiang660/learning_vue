const HelloVueApp = {
   data: function() {
      return {
         message: 'Hello Vue!!'
      }
   }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
