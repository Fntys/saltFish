<template>
 <div class="modal-content">
 <h4>使用Fish ID登录</h4>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="loginForm">
        <el-form-item  prop="user" >
        <el-input type="text" v-model="loginForm.user" auto-complete="off" placeholder="用户名/邮箱">
           <template slot="prepend"><i class="login-user"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码">
           <template slot="prepend"><i class="login-password"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item prop="btn">
        <el-button type="primary" @click="submitForm('loginForm')" class="btn btn-primary"  v-model="loginForm.btn">登录</el-button>
        </el-form-item>
        </el-form>
        <div class="modal-foot">
        <router-link to="/user/regist">
        <p>没有帐号？<i>注册</i> 一个吧！</p>
        </router-link>
        </div>
        </div>
</template>
<script>
import Util from "../../util/util"
import "../../assets/js/initLeanCloud"
export default {
    data(){
    var validateUser = (rule, value, callback) => {
        if (value === '') {callback(new Error('请输入用户名'));}
        else{
            callback();
        }
    };
        var validatePass = (rule, value, callback) => {
        if (value === '') {callback(new Error('请输入密码'));}
        else{
            callback();
        }
    };
    return{
            loginForm:{
              user:'',
              password:'',
              btn:true
            },
            loginRules:{
                user:[  {validator: validateUser, trigger: 'blur'}],
                password:[{validator: validatePass, trigger: 'blur'}]
            }
        };
    },
    methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$refs[formName].disabled=false;
           var username=this.$refs[formName].model.user;
           var pass=this.$refs[formName].model.password;
           AV.User.logIn(username, pass).then(function (loginedUser) {
            this.$message({customClass:'tips tips-sucess',message: '登录成功，正在为您跳转...',type: 'success'})
            var name=loginedUser.getUsername(),
            email=loginedUser.getEmail(),
            token=loginedUser.getSessionToken();
            window.localStorage.setItem('userToken', token);
            window.localStorage.setItem('userName', name);
            setTimeout(function(){
            this.$router.push({name:'index'})
          }.bind(this),1000)
           }.bind(this),function(error){
            this.$message({
             customClass:'tips tips-error',
             message: '用户名或密码错误',
             type: 'error'
            })
           }.bind(this));
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
}
}

</script>