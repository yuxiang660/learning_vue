import vCommon from "../common/index.js"

const vMain = {
   components : {
      'icommon': vCommon
   },
   template: `
      <p class='vmain'>This is Main which has Common</p>
      <icommon />
   `
}

export default vMain;
