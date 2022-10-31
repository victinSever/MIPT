<template>
  <div>
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

            <el-popover placement="bottom-end" width="200" trigger="click" v-if="isLogin">
              <baseInfo />
              <div class="user-img" slot="reference">
                <img :src="url" />
              </div>
            </el-popover>
            <el-button type="primary" plain size="medium" class="user-login-register" @click="handleLogin" v-else>
              <span>登录</span>
              <span>|</span>
              <span>注册</span>
            </el-button>
          </dir>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="main">
      <el-col :span="12" :offset="6"> haha </el-col>
    </el-row>

    <el-row class="footer"> </el-row>

    <el-dialog :visible.sync="centerDialogVisible" width="300px" top="25vh">
      <template slot="title">
        <h3>账密登录</h3>
      </template>
      <login/>
    </el-dialog>
  </div>
</template>

<script>
import login from "@/components/user/user-login.vue";
import baseInfo from "@/components/user/user-baseInfo.vue";
export default {
  name: "homePage",
  components: { login, baseInfo },
  data() {
    let menus = [
      {
        label: "首页",
        select: true,
      },
      {
        label: "类案匹配",
        select: false,
      },
      {
        label: "文书抽取",
        select: false,
      },
      {
        label: "案情辩论",
        select: false,
      },
      {
        label: "课程学习",
        select: false,
      },
      {
        label: "周边商城",
        select: false,
      },
    ];
    return {
      menus,
      activeIndex: "1",
      url: require("@/assets/logo.png"),
      messageNum: 1,
      keyword: "",
      isLogin: false, //是否登录
      centerDialogVisible: false, //是否显示登录组件
    };
  },
  methods: {
    // 切换菜单
    handleSelect(target) {
      this.menus = this.menus.map((item) => {
        item.select = target.label === item.label ? true : false;
        return item;
      });
    },
    // 点击登录按钮
    handleLogin() {
      this.centerDialogVisible = true
    }
  },
};
</script>

<style lang='scss' scoped>

.header {
  height: 120px;

  .header-top,
  .header-banner {
    height: 50%;
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

@media screen and (max-width: 1300px) {
  .header .header-menu {
    display: none;
  }

  .header .header-menus2 {
    display: inline-block;
  }
}

@media screen and (max-width: 750px) {
  .header.user-input .el-input__inner {
    height: 30px;
    width: 80%;
  }
}
</style>