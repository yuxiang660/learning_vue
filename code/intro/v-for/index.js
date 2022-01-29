const App = {
   data() {
      return {
         todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
         ]
      }
   }
}

const vm = Vue.createApp(App).mount('#list-rendering')
console.log(vm.todos) // todos is a proxy, "todos[0].text" can get the first todo text
