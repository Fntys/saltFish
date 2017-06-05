<template>
  <div id="app">
    <nav class="topnav">
      <img class="nav-logo" src="./assets/fish.png">
    </nav>
    <router-view></router-view>
    <nav class="footnav">
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
      <router-link to="/user">
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
      fourTabName: '帐号'
    }
  }
}
</script>
<style src="./min/css/normalize.css"></style>
<style lang="scss"  type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
.topnav{
  height: 50px;
  background:#1F2D3D;
  .nav-logo {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  }
}
.footnav{
  position: fixed;
  bottom:0;
  width:100%;
}
.foot-nav-item{
  color:#212121;
  width:100%;
  .foot-icon{
    width:32px;
    height:32px;
    display: block;
    margin:0 auto;
  }
  .foot-home{
    background:url(./assets/home-1.svg);
  }
   .foot-mission{
    background:url(./assets/mis-1.svg);
  }
   .foot-ele{
    background:url(./assets/more-1.svg);
  }
   .foot-user{
    background:url(./assets/user-1.svg);
  }
  a{
    text-decoration: none;
    display: block;
    width:100%;
    height:100%;
    padding: 5px 0;

  }
  p{
    margin: 0;
    line-height: 25px;
    font-size:12px;
  }
}
.is-active{
  color:#1296db;
 .foot-home{
    background:url(./assets/home-2.svg);
  }
   .foot-mission{
    background:url(./assets/mis-2.svg);
  }
   .foot-ele{
    background:url(./assets/more-2.svg);
  }
   .foot-user{
  background:url(./assets/user-2.svg);
}
}


























/*UI样式重写*/
.el-menu-nav{
  border-top:1px solid #e6e6e6;
  background: #F9FAFC;
}
.el-menu-item{
border-bottom:none;
}
}
</style>
