<template>
  <div class="demo-type" style="display: flex; justify-content: space-between;">
    <div style="display: flex; align-items: center;">
      <span style="font-size: 40px;   color: rgb(29, 137, 232);">速讯</span>
    </div>
    <div style="display: flex; align-items: center;">
      <span>{{username}}</span>
      <span style="margin-right: 10px">,你好 </span>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
  </div>

</template>

<script>
import {userForm} from "../view/data";

export default {
  name: "commonHeader",
    data() {
      return {
        username: userForm.username
      };
    },
};
</script>

<style lang="less" scoped>

</style>
