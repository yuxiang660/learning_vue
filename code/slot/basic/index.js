const TodoButton = {
   template: `
      <button>
         <slot></slot>
      </button>
   `
}

const RootComponent = {
   components: {
      'todo-button': TodoButton
   }
}

const vm = Vue.createApp(RootComponent).mount('#app')
