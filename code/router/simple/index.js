const { createApp, h /*hyperscript*/ } = Vue

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes = {
   '/': HomeComponent,
   '/about': AboutComponent
}

const SimpleRouter = {
   props: ['currentRoute'],

   computed: {
      CurrentComponent() {
         return routes[this.currentRoute] || NotFoundComponent
      }
   },

   render() {
      return h(this.CurrentComponent)
   }
}

const RootComponent = {
   data() {
      return {
         route: '/'
      }
   },
   components: {
      'simple-router': SimpleRouter
   },
   methods: {
      go(path) {
         this.route = path
      }
   }
}

createApp(RootComponent).mount('#app')
