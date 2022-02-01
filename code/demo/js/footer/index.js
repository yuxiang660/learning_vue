import vCommon from "../common/index.js"

const vFooter = {
   components : {
      'vcommon': vCommon
   },
   template: `
      <p class='vfooter'>This is Footer which has Common</p>
      <vcommon />
   `
}

export default vFooter;
