<template>
  <div>
    <!-- 账密登录 -->
    <el-form
      :model="passForm"
      status-icon
      size="medium"
      ref="passForm"
      v-if="loginWay === 1"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="passForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
          ref="inputUsername"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="passForm.password"
          autocomplete="off"
          placeholder="请输入密码"
          ref="inputPassword"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link :underline="false" type="primary" @click="changeLoginWay(2)"
          >手机登录</el-link
        >
        <el-link
          :underline="false"
          type="primary"
          style="float: right"
          @click="changeLoginWay(3)"
          >忘记密码</el-link
        >
      </el-form-item>
      <el-form-item style="display: flex; justify-content: space-around">
        <el-button circle type="danger" class="iconfont icon-weibo">
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 手机登录 -->
    <el-form
      :model="phoneForm"
      status-icon
      size="medium"
      ref="phoneForm"
      v-else-if="loginWay === 2"
    >
      <el-form-item prop="phone">
        <el-input
          type="text"
          v-model="phoneForm.phone"
          placeholder="请输入手机号"
          ref="inputPhone"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          v-model="phoneForm.code"
          autocomplete="off"
          placeholder="请输入6位数验证码"
          ref="inputCode"
        >
          <span
            slot="suffix"
            :class="
              'code ' + (sendCodeTime === 0 ? 'code-link' : 'code-disabled')
            "
            @click="getPhoneCode(1)"
          >
            {{
              sendCodeTime === 0 ? "发送验证码" : sendCodeTime + "s后再次发送"
            }}
          </span>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm2()" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link :underline="false" type="primary" @click="changeLoginWay(1)"
          >切换登录方式</el-link
        >
      </el-form-item>
    </el-form>

    <!-- 忘记密码 -->
    <el-form
      :model="restoreForm"
      status-icon
      size="medium"
      ref="restoreForm"
      v-else-if="loginWay === 3"
    >
      <el-form-item prop="phone">
        <el-input
          type="text"
          v-model="restoreForm.phone"
          placeholder="请输入手机号"
          ref="inputRePhone"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          v-model="restoreForm.code"
          autocomplete="off"
          placeholder="请输入6位数验证码"
          ref="inputReCode"
        >
          <span
            slot="suffix"
            :class="
              'code ' + (sendCodeTime === 0 ? 'code-link' : 'code-disabled')
            "
            @click="getPhoneCode(3)"
          >
            {{
              sendCodeTime === 0 ? "发送验证码" : sendCodeTime + "s后再次发送"
            }}
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="restoreForm.newPassword"
          placeholder="请输入新密码"
          ref="inputRePassword"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm3()" style="width: 100%"
          >修改</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link :underline="false" type="primary" @click="changeLoginWay(4)"
          >邮箱重置密码</el-link
        >
        <el-link
          :underline="false"
          type="primary"
          style="float: right"
          @click="changeLoginWay(1)"
          >账密登录</el-link
        >
      </el-form-item>
    </el-form>

    <!-- 邮箱重置密码 -->
    <el-form
      :model="emailForm"
      status-icon
      size="medium"
      ref="emailForm"
      v-else-if="4"
    >
      <el-form-item prop="email">
        <el-input
          type="email"
          v-model="emailForm.email"
          placeholder="请输入邮箱"
          ref="inputEmail"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="sendEmailCodeTime !== 0">
        <el-input
          type="text"
          v-model="emailForm.code"
          autocomplete="off"
          placeholder="请输入邮箱验证码"
          ref="inputEmailCode"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" v-if="sendEmailCodeTime !== 0">
        <el-input
          v-model="emailForm.password"
          placeholder="请输入新密码"
          ref="inputEmailPassword"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="sendEmailCode"
          style="width: 100%"
          v-if="sendEmailCodeTime === 0"
          >发送邮件验证码</el-button
        >
        <el-button
          type="primary"
          @click="submitForm4()"
          style="width: 100%"
          v-else
          >修改</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-link :underline="false" type="primary" @click="changeLoginWay(3)"
          >手机重置密码</el-link
        >
        <el-link
          :underline="false"
          type="primary"
          style="float: right"
          @click="changeLoginWay(1)"
          >账密登录</el-link
        >
      </el-form-item>
    </el-form>

    <!-- 下方链接 -->
    <p class="user-private" v-if="loginWay < 3">
      <span>注册登录即表示同意&nbsp;</span>
      <span class="argument" @click="$router.push('/userAgreement')"
        >用户协议、隐私政策</span
      >
    </p>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "loginPage",
  props: ["loginWay"],
  data() {
    // 信息不合法命名规则
    return {
      passForm: {
        username: "jlh",
        password: "123",
        ip: "",
      },
      phoneForm: {
        phone: "",
        code: "",
        ip: "",
      },
      restoreForm: {
        phone: "",
        code: "",
        newPassword: "",
      },
      emailForm: {
        email: "",
        code: "",
        password: "",
      },
      phonePre: "",
      sendCodeTime: 0, //是否在一分钟内发送过验证码,验证码发送倒计时
      sendEmailCodeTime: 0,
    };
  },
  mounted() {
    this.getIPAddress();
  },
  methods: {
    ...mapMutations("user", ["UpdateUserInfo", "UpdateToken"]),
    ...mapActions("user", [ "getLoginByPass", "getLoginByPhone", "sendPhoneCode",
    "retrievePasswordByPhone", "retrievePasswordByEmail"]),
    ...mapActions('ip',['getUserIP']),

    
    // 切换登录方式
    changeLoginWay(type) {
      this.$emit("changeLoginWay", type);
    },
    // 请求：获取ip地址
    async getIPAddress() {
      try {
        const data = await this.getUserIP();
        //转js字符串
        const objStr = data.data.split("= ")[1].split(";")[0];
        //执行js代码
        const obj = eval("(" + objStr + ")");
        this.passForm.ip = obj.cip;
      } catch (e) {
        this.$message.error(e);
      }
    },
    // 请求：账密登录，并处理信息
    async loginByPass() {
      try {
        console.log(this.passForm);
      const { data: res } = await this.getLoginByPass(this.passForm);
      console.log(res);
      if (res.code === 200) {
        this.$message.success("登录成功！");
        this.UpdateUserInfo(res.data);
        this.UpdateToken(res.data.token);
        this.$emit("closeDialog");
        this.resetForm('passForm')
      }else{
        this.$message.warning(res.message);
      }
      } catch (e) {
        this.$message.error(e);
      }
      // this.$message.success("登录成功！"); 
      // this.UpdateToken('123');
      // this.UpdateUserInfo({
      //     userImage: 'https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg',
      //     username: '狂徒张三',
      //     level: 7,
      //     role: '法律从业者',
      //     phone: '15730363265',
      //     email: 'victinzhong@163.com'
      //   });
      // this.$emit("closeDialog");
      // this.resetForm('passForm')
      
    },
    submitForm() {
      if (this.passForm.username === "") {
        this.$notify({
          message: "请输入用户名",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputUsername.focus();
        return;
      }
      if (this.passForm.password === "") {
        this.$notify({
          message: "请输入密码",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputPassword.focus();
        return;
      }
      this.loginByPass();
    },
    // 请求：手机登录，并处理信息
    async loginByPhone() {
      this.phoneForm.ip = this.ip;
      const { data: res } = await this.getLoginByPhone(this.phoneForm);
      if (res.code === 200) {
        this.$message.success("登录成功！");
        this.UpdateUserInfo(res.data);
        this.UpdateToken(res.data.token);
        this.$emit("closeDialog");
        this.resetForm('phoneForm')
      }
      else this.$message.warning(res.msg);    
    },
    submitForm2() {
      if (this.phoneForm.phone === "" || this.phoneForm.phone.length !== 11) {
        this.$notify({
          message:
            this.phoneForm.phone === "" ? "请输入手机号" : "手机号位数不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputPhone.focus();
        return;
      }
      if (this.phoneForm.code === "" || this.phoneForm.code.length !== 6) {
        this.$notify({
          message:
            this.phoneForm.phone === "" ? "请输入验证码" : "验证码位数不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputCode.focus();
        return;
      }
      this.loginByPhone();
    },
    // 发送验证码
    async getPhoneCode(sendType) {
      if (this.sendCodeTime === 0) {
        if(this.phoneForm.phone.length !== 11 && sendType === 1) {
          this.submitForm2()
          return
        }
        if(this.restoreForm.phone.length !== 11 && sendType === 3) {
          this.submitForm3()
          return
        }
        const {data:res} = await this.sendPhoneCode({
          phone: this.restoreForm.phone,
          sendType
        }) 
        if(res.code !== 200) return this.$message.error(res.msg);
        this.$message.success("验证码已发送！");
        this.sendCodeTime = 60;
        const timer = setInterval(() => {
          this.sendCodeTime--;
          if (this.sendCodeTime === 0) clearInterval(timer);
        }, 1000);
      } else {
        this.$message.warning("操作过于频繁！");
      }
    },
    // 请求：手机重置密码
    async updateByPhone() {
      const {data: res} = await this.retrievePasswordByPhone(this.restoreForm)
      if(res.code !== 200) this.$message.error(res.msg);
      this.$message.success("重置成功！自动跳转到登录！");
      this.resetForm("restoreForm");
      setTimeout(() => {
        this.changeLoginWay(1);
      }, 1000);
    },
    submitForm3() {
      if (
        this.restoreForm.phone === "" ||
        this.restoreForm.phone.length !== 11
      ) {
        this.$notify({
          message:
            this.restoreForm.phone === "" ? "请输入手机号" : "手机号位数不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputRePhone.focus();
        return;
      }
      if (this.restoreForm.code === "" || this.restoreForm.code.length !== 6) {
        this.$notify({
          message:
            this.restoreForm.code === "" ? "请输入验证码" : "验证码位数不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputReCode.focus();
        return;
      }
      if (
        this.restoreForm.newPassword === "" ||
        this.restoreForm.newPassword.length < 6
      ) {
        this.$notify({
          message:
            this.restoreForm.newPassword === ""
              ? "请输入新密码"
              : "密码长度不低于6位",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputRePassword.focus();
        return;
      }
      this.updateByPhone();
    },
    // 请求：邮箱重置密码
    async updateByEmail() {
      this.$message.success("密码重置成功！自动跳转到登录！");
      this.resetForm("emailForm");
      setTimeout(() => {
        this.changeLoginWay(1);
      }, 1000);
    },
    submitForm4() {
      // const isEmail =
      if (this.emailForm.email === "") {
        this.$notify({
          message:
            this.emailForm.email === "" ? "请输入邮箱" : "邮箱格式不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputEmail.focus();
        return;
      }
      if (this.emailForm.code === "" || this.emailForm.code.length !== 6) {
        this.$notify({
          message:
            this.restoreForm.code === "" ? "请输入验证码" : "验证码位数不正确",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputEmailCode.focus();
        return;
      }
      if (
        this.emailForm.password === "" ||
        this.emailForm.password.length < 6
      ) {
        this.$notify({
          message:
            this.restoreForm.password === ""
              ? "请输入新密码"
              : "密码长度不低于6位",
          type: "warning",
          duration: 2000,
        });
        this.$refs.inputEmailPassword.focus();
        return;
      }
      this.updateByPhone();
    },
    // 发送邮箱验证码
    sendEmailCode() {
      if (this.sendEmailCodeTime === 0) {
        this.$message.success("邮件已发送，请到邮箱查看验证码后重置密码");
        this.sendEmailCodeTime = 60;
        const timer = setInterval(() => {
          this.sendEmailCodeTime--;
          if (this.sendEmailCodeTime === 0) clearInterval(timer);
        }, 1000);
      } else {
        this.$message.warning("操作过于频繁！");
      }
    },
    // 重置当前表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='scss' scoped>
.code {
  padding: 0 5px 0 10px;
  background-color: #fff;
  z-index: 2;
}

.code-link {
  color: #63b0ff;
  cursor: pointer;
  font-size: 15px;
}

.code-link:hover {
  color: skyblue;
}

.code-disabled {
  color: #777;
  cursor: default;
}

.user-private {
  .argument {
    color: #409eff;
    cursor: pointer;
  }
  .argument:hover {
    color: #66b1ff;
  }
}
</style>