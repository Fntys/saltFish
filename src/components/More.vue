<template>
  <div class="more">
    <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="电影" name="first">电影</el-tab-pane>
    <el-tab-pane label="图书" name="second">图书</el-tab-pane>
    <el-tab-pane label="音乐" name="third">音乐</el-tab-pane>
    <el-tab-pane label="搜索" name="fourth">搜索</el-tab-pane>
  </el-tabs>
</template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-tabs__nav{
  width:100%;
}
</style>
