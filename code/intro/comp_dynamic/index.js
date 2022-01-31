const RootComponent = {
   data() {
      return {
         currentTab: 'Home',
         tabs: ['Home', 'Posts', 'Archive']
      }
   },
   computed: {
      currentTabComponent() {
         return 'tab-' + this.currentTab.toLowerCase()
      }
   }
}

const app = Vue.createApp(RootComponent)

app.component('tab-home', {
   template: `<div class="demo-tab">Home component</div>`
})
app.component('tab-posts', {
   template: `<div class="demo-tab">Posts component</div>`
})
app.component('tab-archive', {
   template: `<div class="demo-tab">Archive component</div>`
})

app.mount('#app')
