<template>
  <div class="main">
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <common-aside/>
        </el-aside>
        <el-main style="background: rgba(196, 221, 245,0.8)">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>
<script>
import commonAside from "@/components/commonAside.vue";
import commonHeader from "@/components/commonHeader.vue";
// import CommonAside from "@/components/commonAside.vue";
export default {
  components: {commonAside, commonHeader},
  data() {
    return {}
  },

}
</script>
<style>
.el-header{
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  line-height: 38px;
  padding-left: 70px;
  padding-right: 70px;
}

body > .el-container {
  margin-bottom: 40px;
}

</style>
