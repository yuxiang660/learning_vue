import vHeader from './header/index.js'
import vFooter from './footer/index.js'
import vHome from './home/index.js'
import vAbout from './about/index.js'

const { h /*hyperscript*/ } = Vue

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
   '/': vHome,
   '/about': vAbout
}

const vMain = {
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

const vAside = {
   emits: ['click'],

   template: `
      <el-menu>
         <el-menu-item index="1" @click="$emit('click', '/')">Home</el-menu-item>
         <el-menu-item index="2" @click="$emit('click', '/about')">About</el-menu-item>
      </el-menu>
   `
}

const vRoot = {
   data() {
      return {
         title: "Demo Header",
         footer: "Demo Footer",
         route: "/"
      }
   },
   components: {
      'vheader': vHeader,
      'vmain': vMain,
      'vaside': vAside,
      'vfooter': vFooter
   },
   methods: {
      go(path) {
         this.route = path
      }
   },
   template: `
      <div class='vroot'>
         <el-container>
            <el-header> <vheader :title="title" /> </el-header>
            <el-container>
               <el-aside width="200px"> <vaside @click="go"/> </el-aside>
               <el-container>
                  <el-main> <vmain :current-route="route" /> </el-main>
                  <el-footer> <vfooter :footer="footer"/> </el-footer>
               </el-container>
            </el-container>
         </el-container>
      </div>
   `
}

export default vRoot;
