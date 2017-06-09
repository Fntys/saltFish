<template>
 <div class="modal-content">
 <h4>注册Fish ID</h4>
        <el-form :model="registForm" :rules="registRules" ref="registForm" class="registForm">
        <el-form-item  prop="user" >
        <el-input type="text" v-model="registForm.user" auto-complete="off" placeholder="用户名">
           <template slot="prepend"><i class="regist-user"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <el-input type="password" v-model="registForm.password" auto-complete="off" placeholder="密码">
           <template slot="prepend"><i class="regist-password"></i></template>
        </el-input>
        </el-form-item>
         <el-form-item prop="checkPass">
        <el-input type="password" v-model="registForm.checkPass" auto-complete="off" placeholder="重复密码">
           <template slot="prepend"><i class="regist-password"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item prop="email"
        :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]">
        <el-input type="email" v-model="registForm.email" auto-complete="off" placeholder="邮箱">
        <template slot="prepend"><i class="regist-email"></i></template>
        </el-input>
        </el-form-item>
          <el-form-item >
        <el-checkbox v-model="checked">我已阅读并同意遵守 <i>法律声明</i> 和 <i>隐私条款</i></el-checkbox>
  </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm('registForm')" class="btn btn-primary" >注册</el-button>
        </el-form-item>
        </el-form>
        <div class="modal-foot">
        <router-link to="/user/login">
        <p>如果您已拥有Fish ID,则可在此 <i>登录</i></p>
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
        else if(!/^[a-zA-Z0-9_]+$/.test(value)){callback(new Error('用户名不能含有除字母,数字,下划线之外的任何字符'));}
        else{
            callback();
        }
    };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        else if(!/^[A-Za-z0-9_-]{4,}$/.test(value)){callback(new Error('密码必须是至少4位的字母或数字结合'));}
        else {
          if (this.registForm.checkPass !== '') {
            this.$refs.registForm.validateField('checkPass');
          }
          callback();
        }
      };
        var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

        return{
            registForm:{
              user:'',
              password:'',
              email:'',
              checkPass:''
            },
            checked: true,
            registRules:{
              user:[  {validator: validateUser, trigger: 'blur'}],
              password:[{validator: validatePass, trigger: 'blur'}],
              checkPass:[{validator: validatePass2, trigger: 'blur'}]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          var check=this.checked;
          if (valid && check) {
          var username=this.$refs[formName].model.user;
          var pass=this.$refs[formName].model.password;
          var email=this.$refs[formName].model.email;
          var user = new AV.User();
          user.setUsername(username);
          user.setPassword(pass);
          user.setEmail(email);
          user.signUp().then(function(loginedUser){
            this.$message({customClass:'tips tips-sucess',message: '注册成功',type: 'success'})
            setTimeout(function(){
            this.$router.push({name:'login'})
          }.bind(this),600)
          }.bind(this), (function(error){
            if(err.code='202'){this.$message({customClass:'tips tips-error',message: '用户已存在',type: 'error'})}
            else{this.$message({customClass:'tips tips-error',message: '注册失败，请重试',type: 'error'})}
         }.bind(this)));
        }
           else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      },
}

</script>