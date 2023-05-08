<template>
  <div class="content">
    <h2>个人信息</h2>
    <div class="message">
      <el-form
          :model="ruleForm"
          label-position="left"
          label-width="100px"
          ref="ruleForm"
      >
        <el-form-item label="姓名:" prop="username">
          <span v-show="isShow">{{ ruleForm.username }}</span>
          <el-input v-model="ruleForm.username" v-show="!isShow"></el-input>
        </el-form-item>
        <el-form-item label="电话号码:" prop="tel">
          <span v-show="isShow">{{ ruleForm.tel }}</span>
          <el-input v-model="ruleForm.tel" v-show="!isShow"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <span v-show="isShow">{{ ruleForm.password }}</span>
          <el-input v-model="ruleForm.password" v-show="!isShow"></el-input>
        </el-form-item>
        <el-form-item v-show="isShow" class="btn">
          <el-button type="primary" @click="updateMsg">编辑信息</el-button>
        </el-form-item>
        <el-form-item v-show="!isShow" class="btn">
          <el-button type="primary" class="pre" @click="preserve">保存</el-button>
          <el-button type="info" class="back" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    // 表单校验
    return {
      ruleForm: {
        username: "",
        tel: "",
        password: ""
      },
      isShow: true,
      oldMsg: ""
    };
  },

  methods: {
    // 点击编辑
    updateMsg() {
      this.isShow = false;
      // 将原来的信息保存
      this.oldMsg = JSON.stringify(this.ruleForm);
    },
    // 保存
    preserve() {
      // 先对表单进行校验
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.isShow = true;
          // 获取现在的信息
          const str = JSON.stringify(this.ruleForm);
          if (str === this.oldMsg) {
            // 两个相等,用户最终并没有修改
            return;
          } else {
            // 发生了修改,发送请求修改数据
          }
        }
      });
    },
    back() {
      this.isShow = true;
      // 放弃操作,直接将原来的值赋值给ruleForm
      this.ruleForm = JSON.parse(this.oldMsg);
    }
  }
};
</script>

<style>


.message .el-button {
  width: 220px;

}

.message .pre,
.message .back {
  width: 100px;
}

.message .btn {
  margin-left: -60px;
}

.message .el-input {
  height: 43px;
  width: 252px;
}

.message .back {
  margin-left: 60px;
}
</style>
