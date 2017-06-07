<template>
 <div class="modal-content">
            <el-form :model="loginForm" :rules="loginForm" ref="loginForm" class="loginForm">
        <el-form-item  prop="userID" >
        <el-input type="text" v-model="loginForm.pass" auto-complete="off" placeholder="用户名/邮箱/手机">
           <template slot="prepend"><i class="login-user"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码">
           <template slot="prepend"><i class="login-password"></i></template>
        </el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="btn btn-primary" :disabled="true">登录</el-button>
        </el-form-item>
        </el-form>
        <div class="modal-foot">
        <router-link to="/more">
        <p>没有帐号？注册一个吧！</p>
        </router-link>
        </div>
</template>