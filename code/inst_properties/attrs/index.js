const ChildComponent = {
   template: '<div>$attrs Test</div>',
   created: function () {
      console.log(this.$attrs['my-attr']) // => Any value
   }
}

const RootComponent = {
   components: {
      'comp': ChildComponent
   }
}

const vm = Vue.createApp(RootComponent).mount('#app')
