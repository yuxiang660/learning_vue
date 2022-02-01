import vCommon from "../common/index.js"

const vHeader = {
   components : {
      'vcommon': vCommon
   },
   template: `
      <p class='vheader'>This is Header which has Common</p>
      <vcommon />
   `
}

export default vHeader;
