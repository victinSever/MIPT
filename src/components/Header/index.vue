<template>
  <div>
    <!-- 头部 -->
    <el-row class="header" v-if="isHidden">
      <el-row class="header-top">
        <el-col :span="18" :offset="3" class="header-top-in">
          <div class="header-top-left">
            <div class="header-logo"><span>CLF</span></div>
            <ul class="header-menu">
              <li
                v-for="item in menus"
                :key="item.label"
                :class="
                  'menu-item' + (item.id === activeIndex ? ' active' : '')
                "
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
              :placeholder="
                selectActive == '1' ? '输入案由、关键词、法院、当事人、律师' : '输入关键词'
              "
              v-model="keyword"
              size="medium"
              class="user-input"
              @focus="isInputFocus = true"
              @blur="isInputFocus = false"
              @keyup.enter.native="HandleSearch"
            >
              <el-select
                v-model="selectActive"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="item in selectList"
                  :key="item.id"
                ></el-option>
              </el-select>
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="HandleSearch"
              ></el-button>
            </el-input>

            <el-button
              class="user-create"
              type="primary"
              size="medium"
              icon="el-icon-user-solid"
              @click="gotoCreator"
              >创作者中心</el-button
            >
            <el-button
              class="user-message"
              icon="el-icon-bell"
              circle
              v-if="user"
            ></el-button>

            <el-popover
              placement="bottom-end"
              width="250"
              trigger="click"
              v-if="user"
            >
              <BaseInfo />
              <div class="user-img" slot="reference">
                <el-image :src="user.userImage" alt="" />
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
const menus = [
  { label: "首页", urlname: "home", id: 0 },
  { label: "工具箱", urlname: "tool", id: 1 },
  { label: "案例大厅", urlname: "arguments", id: 2 },
  { label: "课程学习", urlname: "course", id: 3 },
  { label: "周边商城", urlname: "shop", id: 4 },
];
const selectList = [
  { id: "0", label: "默认检索", value: "0" },
  { id: "1", label: "法条检索", value: "1" },
  // { id: "2", label: "文章检索", value: "2" },
  // { id: "3", label: "案列检索", value: "3" },
];
import Login from "@/components/user/user-login.vue";
import BaseInfo from "@/components/user/user-baseInfo.vue";
export default {
  name: "headerCom",
  components: { Login, BaseInfo },
  data() {
    return {
      selectActive: "",
      selectList,
      menus,
      activeIndex: 1,
      messageNum: 1,
      keyword: "",
      dialogVisible: false, //是否显示登录组件
      loginWay: 1, //登录方式，1账密登录，2手机号登录,3重置密码
      isInputFocus: false,
    };
  },
  created() {
    this.selectActive = "0";
    // 挂载一个bus，触发登录组件的出现
    let that = this;
    this.$bus.$on("handleLogin", function (type = true) {
      that.dialogVisible = type;
    })
  },
  beforeDestroy() {
    this.$bus.$off("handleLogin");
  },
  computed: {
    user() {
      return this.$store.state.user.token
        ? this.$store.state.user.userInfo
        : false;
    },
    // 是否隐藏头部
    isHidden() {
      return !this.$route.meta.hiddenHeader;
    },
  },
  methods: {
    // 搜索事件-
    HandleSearch() {
      const keyword = this.keyword.trim();

      const { query } = this.$route;

      if(!keyword) return

      let same = query.key === keyword || !keyword //节流

      if (this.selectActive == "1") {
        if(this.$route.path.includes('law') && same) return
        this.$router.push(`/law?key=${keyword}`);
      } else if(!this.$route.path.includes('search')){
        if(this.$route.path.includes('search') && same) return
        this.$router.push(`/search?key=${keyword}`);
      }
    },

    gotoCreator: function () {
      if (!this.user) {
        this.handleLogin();
        return;
      }
      if (this.$route.path.includes("/creator")) return;
      this.$router.push("/creator/home");
    },

    // 切换菜单
    handleSelect(item) {
      const {name} = this.$route;
      if(name && name.includes(item.urlname)) return
      this.activeIndex = item.id
      this.$router.push({name: item.urlname})
    },

    // 点击登录按钮
    handleLogin() {
      this.dialogVisible = true;
    },

    closeDialog() {
      this.dialogVisible = false;
    },

    //改变登录方式时，调整dialog的高度
    changeLoginWay(type) {
      this.loginWay = type;
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
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

    // 输入框

    .user-input {
      width: 20rem;
      transition: all 0.6s ease-in-out;

      /deep/.el-select .el-input {
        width: 7rem;
      }
      /deep/.input-with-select .el-input-group__prepend {
        background-color: #fff;
      }
    }

    .user-input:focus-within {
      width: 25rem;
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

@media screen and (max-width: 1200px) {
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
    .user-input {
      width: 80%;
      // height: 25px;
    }

    .user-message {
      display: none;
    }
  }
}
</style>