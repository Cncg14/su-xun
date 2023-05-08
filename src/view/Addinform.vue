<template>
  <div class="form-container">
  <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
    <div style="font-size:40px; margin: 30px">添加联系人</div>
    <el-form-item label="姓名" prop="name" style="margin-bottom: 20px;">
      <el-row>
        <el-col :span="18">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="电话号码" prop="tel" style="margin-bottom: 20px">
      <el-row>
        <el-col :span="18">
          <el-input v-model="ruleForm.tel" placeholder="请输入电话号码"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="与我的关系" prop="relative" >
      <el-row>
        <el-col :span="8">
          <el-select v-model="ruleForm.relative">
            <el-option label="亲人" value="family"></el-option>
            <el-option label="朋友" value="friend"></el-option>
            <el-option label="同学" value="schoolmate"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
  </div>
</template>


<script>
export default {
  // name: "AddInform",
  data() {
    return {
      ruleForm: {
        name: '',
        tel:'',
        relative:''
      },
    }
  }

}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}</style>
