<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
// import addressBook from './view/AddressBook.vue'

export default {

    data () {
      return {
        radio: '1'
      };
    }

  }
</script>

<style lang="less" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
html,body{
  margin: 0;
  padding: 0;
}
</style>
