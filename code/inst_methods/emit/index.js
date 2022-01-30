const WelcomeButton = {
   emits: ['welcome'],
   data() {
      return {
         name: 'Name'
      }
   },
   template: `
      <div>
         <input type="text" v-model="name">
         <button v-on:click="$emit('welcome', name)">
            Click me to be welcomed
         </button>
      </div>
   `
}
const RootComponent = {
   methods: {
      sayHi(name) {
         console.log('Hi ' + name)
      }
   }
}

const app = Vue.createApp(RootComponent)

app.component('welcome-button', WelcomeButton)

app.mount('#emit-example-simple')
