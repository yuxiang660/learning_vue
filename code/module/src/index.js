import Header from './header/index.js'
import Main from './main/index.js'

const Root = {
   components: {
      'iheader': Header,
      'imain': Main
   },
   template: `
      <div>
         <p>This is Root which has Header</p>
         <iheader />
         <imain />
      </div>
   `
}

export default Root;
