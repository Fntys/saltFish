<template>
<div id="login">
            <transition name="fade">
            <div class="login-tip" v-show="tipFlag">
                测试账号：&nbsp&nbsp用户名：test &nbsp&nbsp&nbsp 密码：test
            </div>
            </transition>
            <div class="login-form">
                
            </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            tipFlag: false
        }
    },
    mounted(){
        this.tipFlag = true;
        setTimeout(function(){
            this.tipFlag = false;
        }.bind(this),4000)
    }
}

</script>
<style lang="scss" scoped>
.login-tip{
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  min-height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(0,0,0,.8);
  color: #fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>