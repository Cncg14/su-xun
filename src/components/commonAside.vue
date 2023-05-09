<template>
  <el-menu
      style="width: 250px"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
  >

    <el-menu-item
        :class="item.name === currentMenuName ? 'is-active' : ''"
        @click="clickAddressBook(item)"
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <a href="" class="logout el-icon-s-tools" @click="logOut">退出登录</a>

  </el-menu>
</template>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 92.4vh;
  //background: rgba(100, 167, 196,0.7);
}
.logout{
  color: black;
  text-decoration: none;
  position: fixed;
  bottom: 10px;
  left: 150px;
}
.active{
  color: #409EFF
;
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: '/AddressBook',
          label: '通讯录',
          name: 'addressBook',
          icon: 'phone'
        },
        {
          path: '/AddInform',
          label: '添加信息',
          name: 'addInform',
          icon: 'menu'
        },
        {
          path: '/PersonalCenter',
          label: '个人中心',
          name: 'personalCenter',
          icon: 'user'
        },

      ],
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickAddressBook(item) {
      this.$router.push(item.path)
    },
    // 退出登录
    logOut() {
      // 销毁 token
      localStorage.setItem('token', '')
      // 跳转到登录页
      location.hash = '/view/Login'
    }
  },
  computed: {
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    currentMenuName() {
      return this.$route.name;
    },
  }
}
</script>
