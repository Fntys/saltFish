<template>
<div id="login" @keyup.enter="login">
            <transition name="fade">
            <div class="login-tip" v-show="tipFlag">
                测试账号：&nbsp&nbsp用户名：test &nbsp&nbsp&nbsp 密码：test
            </div>
            </transition>
            <div class="modal-pf">
            <div class="modal-title">
            <img src="../../assets/img/fish.svg" alt="">
            <h4>使用测试帐号{{$route.params.id}}</h4>
            <router-view></router-view>
            </div>
            </div>
            </div>
</div>
</template>

<script>
import AV from "../../assets/js/av"
import Util from "../../util/util"
/*import "../../assets/js/initLeanCloud"*/
export default {
    data(){
        return{
            tipFlag: false,
            isLogin:false,
            loginForm:{
              userID:'',
              password:''
            }
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