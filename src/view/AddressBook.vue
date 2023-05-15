<template>
  <div class="addressBook">
    <el-input
        placeholder="请输入搜索联系人"
        v-model="searchText"
        prefix-icon="el-icon-search"
        clearable
        @click="search"
        @keyup.enter.native="search"
        @clear="resetData"
    ></el-input>
    <div class="header text-left">
      <span class="total">共 {{ filteredCards.length }} 个联系人</span>
    </div>
    <el-radio-group v-model="radio">
      <el-radio :label="'all'">所有联系人</el-radio>
      <el-radio :label="'family'">亲人</el-radio>
      <el-radio :label="'friend'">朋友</el-radio>
      <el-radio :label="'schoolmate'">同学</el-radio>
    </el-radio-group>
    <el-row>
      <el-col v-for="(card, index) in currentPageData" :key="index" :span="8">
        <el-card :body-style="{ padding: '0px',height:'100px' }" shadow="hover">
          <div style="display: flex; align-items: center; padding: 14px;">
            <i class="el-icon-user-solid" style="font-size: 20px; padding: 10px;"></i>
            <div style="font-size: 16px;">
              <span v-if="editingIndex === index">
                <el-input v-model="card.name"></el-input>
                <el-input v-model="card.tel"></el-input>
              </span>
              <span v-else>{{ card.name }}<br>{{ card.tel }}</span>
              <!--              <span>{{ card.tel }}</span>-->
            </div>
            <div style="float: right;">
              <el-button
                  type="text" size="mini"
                  v-if="editingIndex === index"
                  @click="handleClick(index)"
                  class="el-icon-check">
              </el-button>
              <el-button
                  type="text" size="mini"
                  v-if="editingIndex === index"
                  @click="editingIndex = -1 "
                  class="el-icon-close">
              </el-button>
              <el-button
                  type="text"
                  size="mini"
                  v-if="editingIndex !== index"
                  class="el-icon-edit-outline"
                  @click="handleButtonClick(index)">
              </el-button>
              <el-button type="text"
                         size="mini"
                         v-if="editingIndex !== index"
                         @click="deleteCard(index)"
                         class="el-icon-delete">
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
        class="pagination"
        background
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="filteredCards.length"
        @current-change="handleCurrentChange"
    ></el-pagination>
    <el-dialog :visible.sync="dialogVisible" title="登录" :append-to-body="true" :close-on-click-modal="false"
               :close-on-press-escape="false">
      <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="Rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </div>


</template>
<script>
import {cardData} from "@/view/data";

export default {
  data() {
    return {
      searchText: "",
      pageSize: 15,
      currentPage: 1,
      radio: "all",
      cardData: cardData,
      editingIndex: -1,
      initialCardData: [],
      dialogVisible: false,
      loginForm: {
        username: "",
        password: "",
      },
      Rules: {
        username: [
          {required: true, message: "*姓名不能为空且只能由字母、数字、下划线组成", trigger: "blur"},
          {
            pattern: /^\w+$/,
            message: "*只能由字母、数字、下划线组成",
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
    }
  },
  computed: {
    filteredCards() {
      const r = this.radio;
      if (r !== "all") {
        return this.cardData.filter(function (item) {
          return item.category === r;
        });
      } else {
        return this.cardData;
      }
    },
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.filteredCards.slice(startIndex, endIndex)
    },
  },
  mounted() {
    // 判断用户是否已经登录
    if (!localStorage.getItem("isLogin")) {
      this.dialogVisible = true
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    },
    login() {
      // 进行账号密码验证
      if (this.loginForm.username !== "admin" || this.loginForm.password !== "123123") {
        this.$message.error("账号或密码错误，请重新输入！");
        this.loading = false; // 登录失败也要隐藏 loading 图标
        return;
      }
      // 登录成功后设置 isLogin 为 true
      localStorage.setItem("isLogin", true);
      //跳转到首页
      setTimeout(() => {
        this.dialogVisible = false

        this.$router.push('/AddressBook')
        this.loading = false; //登录成功后隐藏 loading 图标
      }, 2000);
    },
    submitForm() {
      // 只有当按钮被激活时才会执行保存数据的操作
      if (this.isActive) {
        // 在这里添加保存数据的代码
        // 例如：localStorage.setItem('data', JSON.stringify(this.form))
        // 手动触发表单验证
        this.$refs.form.validate((valid) => {
          if (valid) {
            // 表单验证通过，提交表单
            this.$refs.form.submit()
          }
        })
      }
    },
    handleButtonClick(index) {
      // 判断用户是否已经登录
      if (!localStorage.getItem("isLogin")) {
        this.dialogVisible = true

      } else {
        this.editingIndex = index;
      }
    },
    handleClick(index) {
      // 判断是否点击了“check”按钮
      // 获取当前卡片的数据
      const card = this.filteredCards[(this.currentPage - 1) * this.pageSize + index]
      // 保存修改后的数据到本地存储中
      localStorage.setItem(`card-${index}`, JSON.stringify(card))
      // 重置编辑状态
      this.editingIndex = -1
    },
    search() {
      const searchText = this.searchText.toLowerCase()
      if (searchText) {
        // 第一次搜索时保存初始数据
        if (this.initialCardData.length === 0) {
          this.initialCardData = [...this.cardData]
        }
        const filteredData = this.initialCardData.filter(card => {
          const name = card.name.toLowerCase()
          return name.includes(searchText)
        })
        this.cardData = filteredData
        this.total = filteredData.length
        this.currentPage = 1
      } else {
        // 如果搜索框为空，则使用初始数据
        this.cardData = [...this.initialCardData]
        this.total = this.cardData.length
        this.currentPage = 1
      }
    },
    resetData() {
      this.searchText = ''
      this.cardData = cardData;
      // 重置初始数据
      this.initialCardData = [...this.cardData]
      this.total = this.cardData.length
      this.currentPage = 1
    },
    deleteCard(index) {
      if (!localStorage.getItem("isLogin")) {
        this.dialogVisible = true
      } else {
        this.cardData.splice((this.currentPage - 1) * this.pageSize + index, 1)
      }
    }
  }
}
</script>

<style lang="less" scoped>

.total {
  font-size: 12px;
  height: 20px;
}

.header {
  display: flex;
  align-items: center;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}
</style>

