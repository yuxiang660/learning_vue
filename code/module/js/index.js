import vHeader from './header/index.js'
import vMain from './main/index.js'

const vRoot = {
   components: {
      'vheader': vHeader,
      'vmain': vMain
   },
   template: `
      <div>
         <p class='vroot'>This is Root which has Header</p>
         <vheader />
         <vmain />
      </div>
   `
}

export default vRoot;
