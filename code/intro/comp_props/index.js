const RootComponent = {
   data() {
      return {
         groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
         ]
      }
   }
}

const app = Vue.createApp(RootComponent)

app.component('user-todo-items', {
   props: ['todo'],
   template: `<li>{{ todo.id }}_{{ todo.text }}</li>`
})

const vm = app.mount('#list-rendering')

console.log(app._component.data()) // app._component return RootComponent

