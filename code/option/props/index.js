import BlogPost from './blog_post.js';

const RootComponent = {
   data() {
      return {
         post: {
            propA: 1,
            propB: 'abc',
            propC: 'def',
            propD: 101,
            propE: { message: 'world' },
            propF: 'danger',
            propG: function () { return 'proG function' }
         }
      }
   }
}

const app = Vue.createApp(RootComponent)

app.component('blog-post', BlogPost)

const vm = app.mount('#props-test') // mount root component instance

