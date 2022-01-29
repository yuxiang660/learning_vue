const App = {
   data() {
      return {
         message: 'You loaded this page on ' + new Date().toLocaleString()
      }
   }
}

Vue.createApp(App).mount('#bind-attribute')
