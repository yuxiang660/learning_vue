const TodoItem = {
   template: `<li>This is a todo</li>`
}

const RootComponent = {
   components: {
      TodoItem // Register a new component, the tag of the component becomes todo-item
   },
}

const app = Vue.createApp(RootComponent)
const vm = app.mount('#list-rendering')

console.log(app._component.components) // app._component return RootComponent
