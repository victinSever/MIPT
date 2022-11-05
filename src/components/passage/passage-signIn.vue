<template>
  <el-card class="pass-signIn">
    <div class="sigin-top">
      <span>
        <span class="iconfont icon-rili"></span>
        <span class="welcome">{{welcome}}</span>
      </span>
      <el-button class="btn-sigin" type="primary" plain round v-if="isLogin && !isSignIn"
      @click="signIn">去签到</el-button>
      <el-tag  type="primary" v-if="isLogin && isSignIn">签到成功！</el-tag>
    </div>
    <p class="text">{{isLogin ? '把握每一天~~' : '你还没有登录哦，登录可享更多权益'}}</p>
  </el-card>
</template>

<script>
export default {
    name: 'passageSignIn',
    data() {
      return {
        isSignIn: false
      }
    },
    computed: {
      welcome() {
        let hour = new Date().getHours()
        if(hour <= 3 || hour >= 22) return '夜深了'
        else if(hour > 3 && hour < 8) return '早上好!'
        else if(hour >= 8 && hour < 11) return '上午好!'
        else if(hour >= 11 && hour < 13) return '中午好!'
        else if(hour >= 13 && hour < 18) return '下午好!'
        else if(hour >= 18 && hour < 22) return '晚上好!'
        else return ''
      },
      isLogin() {
        let token = this.$store.state.user.token
        return token !== ''
      }
    },
    methods: {
      signIn() {
        this.$message.success('签到成功！天平 +5')
        this.isSignIn = true
      }
    }
}
</script>

<style scoped lang='scss'>
.pass-signIn{
  height: 100px;
  margin-bottom: 10px;

  .sigin-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-rili {
    font-size: 25px;
    color: #ffcf8b;
    margin-right: 5px;
  }

  .welcome{
    font-size: 18px;
  }

  .btn-sigin{
    font-size: 16px;
    padding: 10px 15px;
  }
}

.text{
  text-align: center;
  margin-top: 5px;
  color: silver;
  font-size: 14px;
}
</style>