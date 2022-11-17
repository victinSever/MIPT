<template>
  <div>
    <!-- 头部 -->
    <el-row
      class="header"
    >
      <el-row class="header-top">
        <el-col :span="18" :offset="3" class="header-top-in">
          <div class="header-top-left">
            <div class="header-logo"><span>CLF</span></div>
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
            <transition name="el-fade-in-linear">
              <el-input
                :class="'user-input' + (isInputFocus ? ' focus' : '')"
                v-model="keyword"
                size="medium"
                placeholder="检索法律信息"
                @focus="isInputFocus = true"
                @blur="isInputFocus = false"
                @keyup.enter.native="searchHandler"
              >
                <div
                  slot="suffix"
                  class="user-input-suffix el-icon-search"
                  @click="searchHandler"
                ></div
              ></el-input>
            </transition>
            <transition name="el-fade-in-linear">
              <el-button
                class="user-create"
                type="primary"
                size="medium"
                icon="el-icon-user-solid"
                @click="gotoCreator"
                >创作者中心</el-button
              >
            </transition>
            <el-button
              class="user-message"
              icon="el-icon-bell"
              circle
              v-if="isLogin"
            ></el-button>

            <el-popover
              placement="bottom-end"
              width="250"
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

    <!-- 登录 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="300px"
      :top="(loginWay === 1 ? 25 : 26) + 'vh'"
    >
      <template slot="title">
        <h3>
          {{
            loginWay === 1
              ? "账密登录"
              : loginWay === 2
              ? "手机登录"
              : "手机重置密码"
          }}
        </h3>
      </template>
      <Login
        :loginWay="loginWay"
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
  name: "headerCom",
  components: { Login, BaseInfo },
  // props: ["isSticky"],
  data() {
    let menus = [
      {
        label: "首页",
        select: true,
        url: "/",
        id: 1,
      },
      {
        label: "工具箱",
        select: false,
        url: "/tool",
        id: 2,
      },
      {
        label: "案情辩论",
        select: false,
        url: "/arguments",
        id: 3,
      },
      {
        label: "课程学习",
        select: false,
        url: "/courseLearn",
        id: 4,
      },
      {
        label: "周边商城",
        select: false,
        url: "/aroundShop",
        id: 5,
      },
    ];
    return {
      menus,
      activeIndex: "1",
      url: "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
      messageNum: 1,
      keyword: "",
      dialogVisible: false, //是否显示登录组件
      loginWay: 1, //登录方式，1账密登录，2手机号登录,3重置密码
      isInputFocus: false,
    };
  },
  computed: {
    //是否登录
    isLogin() {
      return this.$store.state.user.token !== "";
    },
  },
  methods: {
    // 搜索事件- 
    searchHandler() {
      const keyword = this.keyword.trim()
      const { query } = this.$route
      if(query.query === keyword) return //节流

      this.$router.push({
        path: '/search',
        query: {
          query: keyword,
          type: 0
        }
      })
    },

     // 搜索框聚焦时
    inputFocus: function (e) {
      // console.log(e.target);
      // console.log(this.$refs.inputSearch);
      // e.target.style.background = '#777'
      // this.$refs.creatorButton.style.display = 'none'
      // console.log(this.$refs.inputSearch.focus());
      // // this.$refs.inputSearch.value = 'haha'
    },

    gotoCreator: function() {
        if (this.$route.path !== '/creator')
            this.$router.push('/creator/content')
    },

    //改变登录方式时，调整dialog的高度
    changeLoginWay: function (type) {
      this.loginWay = type;
    },

    // 切换菜单
    handleSelect: function (target) {
      if (this.$route.path !== target.url) {
        this.$router.push(target.url);
        this.menus = this.menus.map((item) => {
          item.select = target.label === item.label ? true : false;
          return item;
        });
      }
    },

    // 点击登录按钮
    handleLogin: function () {
      this.dialogVisible = true;
    },

    //关闭菜单
    closeDialog: function () {
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 60px; 
  position: sticky;
  top: 20px;
  z-index: 999;
  background-color: #fff;

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
      font-family: "华文行楷";
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
      transition: 0.4s;

      .el-icon-search {
        font-size: 25px;
        height: 100%;
        text-align: center;
        transform: translateY(5px);
        cursor: pointer;
      }
    }

    .user-input input:focus {
      width: 500px;
      background-color: #000;
      animation: inputFocusAnimate 1s linear 0s;
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

// 聚焦的动画
@keyframes inputFocusAnimate {
  from {
    background-color: #ccc;
  }
  to {
    background-color: #777;
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

    .user-login-register {

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