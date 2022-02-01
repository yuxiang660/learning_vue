import Common from "../common/index.js"

const Header = {
   components : {
      'icommon': Common
   },
   template: `
      <p>This is Header which has Common</p>
      <icommon />
   `
}

export default Header;
