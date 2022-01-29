const TodoItem = {
   props: ['todo'],
   template: `<li>{{ todo.id }}_{{ todo.text }}</li>`
}

const RootComponent = {
   components: {
      'todo-item': TodoItem // Register a local component, the todo-item component is inside RootComponent
   },
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
const vm = app.mount('#list-rendering')  // mount root component instance

console.log(app._component.components) // app._component return RootComponent
