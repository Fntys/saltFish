<template>
  <div id="app">
    <nav class="head" v-if="isLogin">
      <img class="nav-logo" src="./assets/img/fish.png">
    </nav>
    <transition :name="transitionName">
    <router-view></router-view>
    </transition>
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
      isLogin:true,
      transitionName: 'fade'
    }
  },
    created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'fade' : 'fade'
      loading:true
    }
  },
  methods:{
    fetchData(){
      this.loading = true
    }
  }
}
</script>

