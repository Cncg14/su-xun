<template>
  <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div style="font-size:40px">添加联系人</div>
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  // name: "AddInform",
  data(){
    return{
      ruleForm: {
        name: ''
      },
    }
  }

}
</script>

<style scoped>

</style>
