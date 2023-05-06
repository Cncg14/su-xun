<template>
  <el-menu
      style="width: 250px"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
  >

    <el-menu-item
        @click="clickAddressBook(item)"
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>

  </el-menu>
</template>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 92.4vh;
  //background: rgba(100, 167, 196,0.7);
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: '/AddressBook',
          name: '通讯录',
          icon: 'phone'
        },
        {
          path: '/AddInform',
          name: '添加信息',
          icon: 'menu'

        },
        {
          path: '/PersonalCenter',
          name: '个人中心',
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
    }
  },
  computed: {
    noChildren() {
      return this.menuData.filter(item => !item.children)
    }
  }
}
</script>
