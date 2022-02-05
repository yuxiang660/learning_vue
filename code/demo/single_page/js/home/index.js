const vHome = {
   data() {
      return {
         textarea: ''
      }
   },
   template: `
      <div class='vhome'>
         <el-row :gutter="20">
            <el-col class="grid-content bg-purple" :span="12">
               <el-input
                  v-model="textarea"
                  :rows="19"
                  type="textarea"
                  placeholder="Please input"
               />
               <el-button>Submit</el-button>
            </el-col>
            <el-col class="grid-content bg-purple-dark" :span="12">
               <el-input
                  v-model="textarea"
                  :rows="19"
                  type="textarea"
                  placeholder=""
               />
            </el-col>
         </el-row>
      </div>
   `
}

export default vHome;
