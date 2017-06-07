<template>
  <div id="app">
    <nav class="head" v-show="isLogin">
      <img class="nav-logo" src="./assets/img/fish.png">
    </nav>
    <div class="content">
    <router-view></router-view>
    </div>
    <nav class="foot">
    <el-menu mode="horizontal" class="el-menu-nav" default-active="1" @select="handleSelect" >
    <el-row>
      <el-col :span="6">
      <el-menu-item index="1" class="foot-nav-item">
      <router-link to="/">
      <i class="foot-icon foot-home"></i>
      <p>{{firstTabName}}</p>
      </router-link>
      </el-menu-item>
      </el-col>
      <el-col :span="6">
      <el-menu-item index="2" class="foot-nav-item">
      <router-link to="/mission">
      <i class="foot-icon foot-mission"></i>
      <p>{{secondTabName}}</p>
      </router-link>
      </el-menu-item>
      </el-col>
      <el-col :span="6">
      <el-menu-item index="3" class="foot-nav-item">
      <router-link to="/more">
      <i class="foot-icon foot-ele"></i>
      <p>{{thirdTabName}}</p>
      </router-link>
      </el-menu-item>
      </el-col>
      <el-col :span="6">
      <el-menu-item index="4" class="foot-nav-item">
      <router-link to="/user/login">
      <i class="foot-icon foot-user"></i>
      <p>{{fourTabName}}</p>
      </router-link>
      </el-menu-item>
      </el-col>
    </el-row>
    </el-menu>
    </nav>
    </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      firstTabName: '主页',
      secondTabName: '任务',
      thirdTabName: '更多',
      fourTabName: '帐号',
      isLogin:true
    }
  }
}
</script>

