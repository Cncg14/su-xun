<template>
  <div class="login-container">
    <el-row>
      <el-col>
        <h1 class="h1">速 讯</h1>
        <div>拉近我们心灵的距离，感知爱与牵绊</div>
        <!--默认打开的页面是注册登录页-->
        <el-tabs
            v-model="activeTab"
            :default-active="defaultActiveTab"
            stretch
            tab-class="tab"
            value="register"
        >
          <!-- 注册 -->
          <el-tab-pane label="注册" name="register">
            <el-form
                ref="registerForm"
                :model="registerForm"
                :rules="Rules"
            >
              <el-form-item
                  prop="username"
                  :rules="Rules.username"
              >
                <el-input
                    v-model="registerForm.username"
                    placeholder="用户名"
                ></el-input>
              </el-form-item>
              <el-form-item
                  prop="tel"
                  :rules="Rules.tel">
                <el-input
                    v-model="registerForm.tel"
                    placeholder="手机号"
                ></el-input>
              </el-form-item>
              <el-form-item
                  prop="password"
                  :rules="Rules.password"
              >
                <el-input
                    type="password"
                    v-model="registerForm.password"
                    placeholder="密码（不小于6位）"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                    type="primary"
                    :loading="loading"

                    @click="register"
                    style="width: 100%; margin-top: 20px"
                >
                  注册速讯
                </el-button>
                <el-alert
                    v-if="registerSuccess"
                    title="注册成功"
                    type="success"
                    show-icon
                    center
                    :closable="false"
                ></el-alert>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 注册 -->
          <!-- 登陆 -->
          <el-tab-pane label="登录" name="login">
            <el-form
                ref="loginForm"
                :model="loginForm"
                :rules="Rules"
            >
              <el-form-item prop="username" :rules="Rules.username">
                <el-input
                    v-model="loginForm.username"
                    placeholder="用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password" :rules="Rules.password">
                <el-input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="密码"
                ></el-input>
              </el-form-item>
              <el-button
                  type="primary"
                  @click="login"
                  :loading="loading"
                  style="width: 100%; margin-top: 60px"
              >
                登录
              </el-button>
            </el-form>
          </el-tab-pane>
          <!-- 登陆 -->
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      registerSuccess: false, // 注册成功标志

      defaultActiveTab: "register",
      activeTab: "register",
      registerForm: {
        username: "",
        password: "",
        tel: "",
      },
      Rules: {
        username: [
          {required: true, message: "*姓名不能为空且只能由字母、数字、下划线组成", trigger: "blur"},
        ],
        tel: [
          {required: true, message: "*手机号全为数字", trigger: "blur"},
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "*请输入正确的手机号格式",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "*密码不能小于6位",
            trigger: "blur"
          },
          {
            min: 6,
            message: "密码长度应在大于6位",
            trigger: "blur",
          },
        ],
      },
      loginForm: {
        username: "",
        password: "",
      },

    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$refs["loginForm"].validate(valid => {
        if (!valid) {
          this.loading = false; // 登录失败也要隐藏 loading 图标
          return;
        }
        console.log('登录成功')
        //跳转到首页
        setTimeout(() => {
          this.$router.push('/AddressBook')
          this.loading = false; //登录成功后隐藏 loading 图标
        }, 2000);
      })
    },
    register() {
      this.loading = true;
      this.$refs["registerForm"].validate(valid => {
        if (valid) {
          console.log('注册成功')
          setTimeout(() => {
            this.activeTab = "login";
            this.loading = false; // 注册成功后隐藏 loading 图标
            this.registerSuccess = true;

          }, 3000);
        } else {
          this.loading = false; // 注册失败也要隐藏 loading 图标
        }
      })
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
}

html {
  background-image: url(/background.webp);
}

.el-form {
  width: 400px;
}

.el-form-item__content {
  margin: 0 !important;
}

.el-form-item {
  margin: 0;
}

.el-form-item__error {
  top: 21%;
  right: 5% !important;
  left: unset;
  color: black;
  font-style: italic;
}

.h1 {
  color: rgb(29, 137, 232);
  font-size: 50px;
  font-weight: 600
}
</style>
