<template>
  <div>
    <!-- 头部 -->
    <el-row class="header">
      <el-row class="header-top">
        <el-col :span="18" :offset="3" class="header-top-in">
          <div class="header-top-left">
            <div class="header-logo"><span>MIPT</span></div>
            <ul class="header-menu">
              <li
                v-for="item in menus"
                :key="item.label"
                :class="'menu-item' + (item.select ? ' active' : '')"
                @click="handleSelect(item)"
              >
                <span>{{ item.label }}</span>
              </li>
            </ul>
            <el-dropdown class="header-menus2">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in menus" :key="item.label">{{
                  item.label
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <dir class="header-top-right">
            <el-input
              class="user-input"
              v-model="keyword"
              size="medium"
              placeholder="检索法律信息"
              >
              <div slot="suffix" class="user-input-suffix el-icon-search"></div
            ></el-input>
            <el-button
              class="user-create"
              type="primary"
              size="medium"
              icon="el-icon-user-solid"
              >创作者中心</el-button
            >
            <el-button
              class="user-message"
              icon="el-icon-bell"
              circle
              v-if="isLogin"
            ></el-button>

            <el-popover
              placement="bottom-end"
              width="200"
              trigger="click"
              v-if="isLogin"
            >
              <BaseInfo />
              <div class="user-img" slot="reference">
                <img :src="url" />
              </div>
            </el-popover>
            <el-button
              type="primary"
              plain
              size="medium"
              class="user-login-register"
              @click="handleLogin"
              v-else
            >
              <span>登录</span>
              <span>|</span>
              <span>注册</span>
            </el-button>
          </dir>
        </el-col>
      </el-row>
    </el-row>

    <!-- 主页面 -->
    <el-row class="main">
      <router-view> </router-view>
    </el-row>

    <!-- 登录 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="300px"
      :top="(this.isPassLogin ? 25 : 32) + 'vh'"
    >
      <template slot="title">
        <h3>{{ isPassLogin ? "账密登录" : "手机登录" }}</h3>
      </template>
      <Login
        :isPassLogin="isPassLogin"
        @closeDialog="closeDialog"
        @changeLoginWay="changeLoginWay"
      />
    </el-dialog>
  </div>
</template>

<script>
import Login from "@/components/user/user-login.vue";
import BaseInfo from "@/components/user/user-baseInfo.vue";
export default {
  name: "homePage",
  components: { Login, BaseInfo },
  data() {
    let menus = [
      {
        label: "首页",
        select: true,
        url: "/",
        id: 1,
      },
      {
        label: "类案匹配",
        select: false,
        url: "/caseMatch",
        id: 2,
      },
      {
        label: "文书抽取",
        select: false,
        url: "/paperwork",
        id: 3,
      },
      {
        label: "案情辩论",
        select: false,
        url: "/arguments",
        id: 4,
      },
      {
        label: "课程学习",
        select: false,
        url: "/courseLearn",
        id: 5,
      },
      {
        label: "周边商城",
        select: false,
        url: "/aroundShop",
        id: 6,
      },
    ];
    return {
      menus,
      activeIndex: "1",
      url: require("@/assets/logo.png"),
      messageNum: 1,
      keyword: "",
      dialogVisible: false, //是否显示登录组件
      isPassLogin: true, //登录方式
    };
  },
  computed: {
    //是否登录
    isLogin() {
      return this.$store.state.user.token !== "";
    },
  },
  methods: {
    //改变登录方式时，调整dialog的高度
    changeLoginWay() {
      this.isPassLogin = !this.isPassLogin;
    },
    // 切换菜单
    handleSelect(target) {
      if (this.$route.path !== target.url) {
        this.$router.push(target.url);
        this.menus = this.menus.map((item) => {
          item.select = target.label === item.label ? true : false;
          return item;
        });
      }
    },
    // 点击登录按钮
    handleLogin() {
      this.dialogVisible = true;
    },
    //关闭菜单
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  height: 60px;

  .header-top {
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeecec;
  }

  .header-top-in {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header-top-left {
    display: flex;
    align-items: center;
    height: 100%;

    .header-logo {
      margin-right: 60px;
      font-family: "kaiti";
      color: #1e80ff;
      font-size: 40px;
      cursor: pointer;
      transition: 0.4s;
    }

    .header-logo:hover {
      transform: translateX(5px);
    }

    .header-menu {
      height: 100%;
      box-sizing: border-box;
      color: #515767;

      .menu-item {
        float: left;
        height: 100%;
        padding: 0px 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .menu-item:hover {
        color: rgb(97, 92, 92);
        border-bottom: 2px solid #1e80ff;
      }

      .active {
        color: #1e80ff;
      }
    }

    .header-menus2 {
      cursor: pointer;
      display: none;
      min-width: 100px;
    }
  }

  .header-top-right {
    display: flex;
    align-items: center;

    .user-input,
    .user-create,
    .user-message {
      margin-right: 20px;
    }

    .user-input {
      border: 1px solid #dcdfe6;
      border-radius: 5px;

      .el-icon-search {
          font-size: 25px;
          height: 100%;
          text-align: center;
          transform: translateY(5px); 
          cursor: pointer;
        }
    }

    .user-input:hover {
      border: 1px solid #409eff;

      .el-icon-search {
        color: #a1a1a7;
      }
    }

    .user-message {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .user-img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        transition: 0.8s;
      }

      border: 1px solid #efefef;
      cursor: pointer;
    }

    .user-img img:hover {
      transform: scale(130%);
    }

    .user-login-register {
      display: flex;
      align-items: center;
      span:nth-child(2) {
        margin: 5px;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .header .header-top-right .user-create {
    display: none;
  }
}

@media screen and (max-width: 1350px) {
  .header .header-top-left {
    .header-logo {
      font-size: 30px;
      margin-right: 30px;
    }

    .header-menu {
      display: none;
    }

    .header-menus2 {
      display: inline-block;
    }
  }
}

@media screen and (max-width: 750px) {
  .header .header-top-left {
    .header-logo {
      font-size: 20px;
    }
  }
  .header .header-top-right {
    .user-input{
      width: 80%;
      // height: 25px;
    }
    
    .user-message{
      display: none;
    }
  }
}
</style>