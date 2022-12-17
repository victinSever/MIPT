<template>
  <div class="tool">
    <div class="centerBox">
      <!-- 头部 -->
      <div class="header">
        <div class="header-left">
          <span
            class="header-title"
            v-text="'CLF工具箱'"
            @click="$router.push('/')"
          ></span>
          <span
            class="header-introduce"
            v-text="'基于模型学习的机器智能抽取，以精准而优雅'"
          ></span>
        </div>
        <div class="header-right">
          <div class="user" v-if="isLogin">
            <div class="userImage">
              <el-image :src="userImage"></el-image>
            </div>
            <span class="username" v-text="username"></span>
          </div>
          <el-link
            v-text="user ? '退出' : '登录'"
            :type="user ? 'danger' : 'warning'"
            @click="handleLoginOrLoginOut"
          ></el-link>
          <el-link v-text="'返回主页'" @click="$router.push('/')"></el-link>
        </div>
      </div>

      <!-- 按钮区 -->
      <div class="content-menu">
        <el-button
          :class="'btn-item' + (activeTag === item.id ? ' active' : '')"
          size="medium"
          v-text="item.label"
          v-for="item in fucTags"
          :key="item.id"
          round
          @click="handleChange(item.id)"
        ></el-button>
      </div>

      <router-view></router-view>
    </div>

    <footer>
      <div>
        注：本接口功能还处在一定的实践阶段，此处只作为工具接口使用，如需进一步接触，请以邮箱联系。
      </div>
      <div>@copyright 2022-12-17 重庆理工大学计算机工程学院A&C实验室</div>
      <div class="link">
        <p>邮箱： <span>victinzhong@163.com</span></p>
        <p>QQ: <span>1845739645</span></p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "toolPage",
  data() {
    const fucTags = [
      { label: "实体提取", id: 0 },
      { label: "信息抽取", id: 1 },
      // { label: "文书匹配", id: 2 },
    ];

    return {
      fucTags,
      activeTag: 0,
      userImage:
        "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
      username: "就以废旧",
      isLogin: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user.token
        ? this.$store.state.user.userInfo
        : false;
    },
  },

  methods: {
    ...mapMutations("user", ["SignOut"]),
    // 登录或者退出登录
    handleLoginOrLoginOut() {
      if (!this.user) {
        this.$bus.$emit("handleLogin", true);
      } else {
        let con = window.confirm(
          "确认退出吗，每个经典法律案列都是法律者们辛勤讨论的结果~~"
        );
        if (con) {
          this.SignOut();
          this.$message.success("退出成功！");
        }
      }
    },

    // 切换工具菜单
    handleChange(id) {
      this.activeTag = id;
      let targetName = "";
      switch (id) {
        case 0:
          targetName = "entity";
          break;
        case 1:
          targetName = "info";
          break;
      }
      if (this.$route.name !== targetName)
        this.$router.push({ name: targetName });
    },
  },
};
</script>

<style scoped lang='scss'>
.tool {
  width: 100%;
  // background-color: #33566a;

  .centerBox {
    width: 70rem;
    margin: 0 auto;
    min-height: 90vh;
    // background-color: #33566a;

    .header {
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-left {
        .header-title {
          font-size: 2rem;
          font-family: "华文行楷";
          color: #33566a;
          cursor: pointer;
        }

        .header-introduce {
          margin-left: 3rem;
          font-size: 0.9rem;
          color: #33566a;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10rem;

        .user {
          display: flex;
          align-items: center;
          cursor: pointer;

          .userImage {
            overflow: hidden;
            width: 2rem;
            height: 2rem;
            margin-right: 0.3rem;
            border-radius: 1rem;
          }

          .el-image {
            width: 100%;
            height: 100%;
            transition: 0.4s;
          }

          .username {
            color: #33566a;
          }
        }

        .user:hover {
          .el-image {
            transform: scale(110%);
          }
          .username {
            color: #417a9b;
          }
        }
      }
    }

    .content-menu {
      margin-bottom: 1rem;

      .btn-item {
        background-color: rgb(153, 149, 149);
        color: #fff;
        transition: 0.4s;
      }

      .btn-item:hover {
        background-color: #3a6e8d;
      }

      .active {
        background-color: #33566a;
        padding: 0.7rem 4rem;
      }
    }
  }
}

footer {
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
  color: var(--grey-font-2);

  &>div{
    line-height: 2rem;
  }

  .link{
    display: flex;

    p{
      margin: 0 1rem;
    }
  }
}
</style>