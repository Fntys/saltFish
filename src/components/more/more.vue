<template>
  <div class="more">
    <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="电影" name="first">电影</el-tab-pane>
    <el-tab-pane label="图书" name="second">图书</el-tab-pane>
    <el-tab-pane label="音乐" name="third">音乐</el-tab-pane>
    <el-tab-pane label="美图" name="fourth">美图</el-tab-pane>
    <el-tab-pane label="" name="five"><span slot="label"><i class="el-icon-search"></i></span></el-tab-pane>
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
  .el-tabs__item{
    width:20%;
  }
}
</style>
