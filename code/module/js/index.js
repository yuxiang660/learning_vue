import vHeader from './header/index.js'
import vHome from './home/index.js'

const vRoot = {
   components: {
      'vheader': vHeader,
      'vhome': vHome
   },
   template: `
      <div>
         <p class='vroot'>This is Root which has Header</p>
         <vheader />
         <vhome />
      </div>
   `
}

export default vRoot;
