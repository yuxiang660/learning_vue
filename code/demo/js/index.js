import vHeader from './header/index.js'
import vFooter from './footer/index.js'
import vHome from './home/index.js'

const vRoot = {
   components: {
      'vheader': vHeader,
      'vhome': vHome,
      'vfooter': vFooter
   },
   template: `
      <div class='vroot'>
         <el-container>
            <el-header>
               <vheader />
            </el-header>
            <el-main>
               <vhome />
            </el-main>
            <el-footer>
               <vfooter />
            </el-footer>
         </el-container>
      </div>
   `
}

export default vRoot;
