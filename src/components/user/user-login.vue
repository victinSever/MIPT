<template>
  <div>
    <el-form
      :model="passForm"
      status-icon
      :rules="passRules"
      size="medium"
      ref="passForm"
      class="passForm"
      v-if="isPassLogin"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="passForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="passForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="changeLoginWay">手机登录</el-link>
        <el-link type="primary" style="float: right">忘记密码</el-link>
      </el-form-item>
      <el-form-item style="display: flex; justify-content: space-around">
        <el-button circle type="danger" class="iconfont icon-weibo">
        </el-button>
      </el-form-item>
    </el-form>

    <el-form
      :model="phoneForm"
      status-icon
      :rules="phoneRules"
      size="medium"
      ref="phoneForm"
      class="phoneForm"
      v-else
    >
      <el-form-item prop="phone">
        <el-input
          type="text"
          v-model="phoneForm.phone"
          placeholder="请输入手机号"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          v-model="phoneForm.code"
          autocomplete="off"
          placeholder="请输入4位数验证码"
        >
          <span slot="suffix" class="code-link">发送验证码</span
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm2()" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="changeLoginWay">账密登录</el-link>
        <el-link type="primary" style="float: right">忘记密码</el-link>
      </el-form-item>
    </el-form>

    <el-link
      >注册登录即表示同意 <el-link type="primary">xxxx协议</el-link></el-link
    >
  </div>
</template>

<script>
import { getUserIP } from "@/api/manage/user";
import { mapMutations } from "vuex";
export default {
  name: "loginPage",
  props: ["isPassLogin"],
  data() {
    // 信息不合法命名规则
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
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        console.log(value);
        callback(new Error("请输入手机号"));
      } else if (value.length != 11) {
        callback(new Error("手机号长度不合法！"));
      } else {
        callback();
      }
    };

    return {
      passForm: {
        username: "",
        password: "",
        ip: "",
      },
      phoneForm: {
        phone: "",
        code: "",
        sendType: 1,
      },
      
      phonePre: "",
      passRules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
      phoneRules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
      },
    };
  },
  mounted() {
    // if(this.isPassLogin) {
    //   this.getIPAddress();
    // }
  },
  methods: {
    ...mapMutations(["UpdateUserInfo", "UpdateToken"]),

    // 切换登录方式
    changeLoginWay() {
      this.$emit("changeLoginWay");
    },

    // 请求：获取ip地址
    async getIPAddress() {
      try {
        const data = await getUserIP();
        //转js字符串
        const objStr = data.data.split("= ")[1].split(";")[0];
        //执行js代码
        const obj = eval("(" + objStr + ")");
        this.ruleForm.ip = obj.cip;
      } catch (e) {
        this.$message.error(e);
      }
    },
    // 请求：账密登录，并处理信息
    async loginByPass() {
      // const data = await loginByPass(this.ruleForm)
      // console.log(data);
      this.$message.success("登录成功！");
      this.UpdateUserInfo(this.ruleForm);
      this.UpdateToken("1312321");
      this.$emit("closeDialog");
    },
    submitForm() {
      this.$refs["passForm"].validate((valid) => {
        if (valid) {
          this.loginByPass();
        } else {
          this.$message.warning("账密有误!!");
          return false;
        }
      });
    },
    // 请求：手机登录，并处理信息
    async loginByPhone() {
      // const data = await loginByPass(this.ruleForm)
      // console.log(data);
      this.$message.success("登录成功！");
      this.UpdateUserInfo(this.ruleForm);
      this.UpdateToken("1312321");
      this.$emit("closeDialog");
    },
    submitForm2() {
      this.$refs["phoneForm"].validate((valid) => {
        if (valid) {
          this.loginByPhone();
        } else {
          this.$message.warning("手机号格式错误!!");
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

.code-link {
  color: #63b0ff;
  cursor: pointer;
  padding: 0 5px;
  background-color: #fff;
  z-index: 2;
}

.code-link:hover{
  color: skyblue;
}
</style>