<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    size="medium"
    ref="ruleForm"
    class="ruleForm"
  >
    <el-form-item prop="username">
      <el-input
        type="text"
        v-model="ruleForm.username"
        autocomplete="off"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
        style="width: 100%"
        >登录</el-button
      >
    </el-form-item>
    <el-form-item>
      <el-link type="primary">手机登录</el-link>
      <el-link type="primary" style="float: right">忘记密码</el-link>
    </el-form-item>
    <el-form-item style="display: flex; justify-content: space-around">
      <el-button circle type="danger" class="iconfont icon-weibo"> </el-button>
    </el-form-item>
    <el-link
      >注册登录即表示同意 <el-link type="primary">xxxx协议</el-link></el-link
    >
  </el-form>
</template>

<script>
// import {getUserIP} from '@/api/manage/user'
import axios from 'axios'
export default {
  name: "loginPage",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getIPAddress()
  },
  methods: {
    // 获取ip地址
    getIPAddress() {
      // const data = getUserIP()
      // console.log(data);
      axios.get('/ip/cityjson?ie=utf-8').then(res => {
        if(res.status == 200) {
          const data = eval(res.data)
          console.log(res.data, data);
        }
      })
      
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='scss' scoped>
.root {
}
</style>