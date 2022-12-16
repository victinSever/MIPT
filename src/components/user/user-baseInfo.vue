<template>
  <div class="root">
    <div class="user-title">
      <el-image :src="data.userImage" class="title-image"></el-image>
      <div class="title-box">
        <span class="title">{{ data.username }}</span>
        <p>
          <span>天平：{{ data.tianping }}</span>
          <span class="iconfont icon-arrow-right"></span>
        </p>
      </div>
    </div>
    <div class="user-level"></div>
    <div class="user-info">
      <span>
        <span>{{ data.concern }}</span>
        <span>关注</span>
      </span>
      <span>
        <span>{{ data.zan }}</span>
        <span>赞过</span>
      </span>
      <span>
        <span>{{ data.collect }}</span>
        <span>收藏</span>
      </span>
    </div>
    <div class="user-menu">
      <div
        class="menu-item"
        v-for="item in menus"
        :key="item.id"
        @click="handleGoto(item)"
      >
        <span :class="'iconfont ' + item.icon">
          <span v-if="item.message !== 0" class="message"></span>
        </span>
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
    <div class="user-signOut">
      <span class="setting">个人设置</span>
      <span class="signOut" @click="signOut">退出登录</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "userBaseInfo",
  data() {
    const menus = [
      {
        icon: "icon-person",
        title: "我的主页",
        url: "/user",
        urlname: "user",
        id: 1,
        message: 0,
      },
      {
        icon: "icon-gift",
        title: "成长福利",
        url: "/group",
        id: 2,
        message: 0,
      },
      {
        icon: "icon-bijiben",
        title: "话题笔记",
        url: "/notebook",
        id: 3,
        message: 2,
      },
      {
        icon: "icon-VIP",
        title: "会员中心",
        url: "/vip",
        id: 4,
        message: 0,
      },
      {
        icon: "icon-coursera",
        title: "课程中心",
        urlname: "my-course",
        id: 5,
        message: 0,
      },
      {
        icon: "icon-vipcard",
        title: "我的优惠",
        id: 6,
        message: 0,
      },
      {
        icon: "icon-flag",
        title: "我的报名",
        id: 7,
        message: 0,
      },
      {
        icon: "icon-track",
        title: "我的足迹",
        id: 8,
        message: 0,
      },
    ];
    return {
      menus,
      data: {
        userImage:
          "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
        username: "victin",
        tianping: 0,
        level: 2,
        concern: 0,
        zan: 2,
        collect: 0,
      },
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

    handleGoto(item) {
      if (this.$route.path !== item.path) {
        if (item.urlname) {
          this.$router.push({
            name: item.urlname,
          });
        }
      }
    },

    // 退出登录
    signOut() {
      let con = window.confirm(
        "确认退出吗，每个经典法律案列都是法律者们辛勤讨论的结果~~"
      );
      if (con) {
        this.SignOut();
        this.$message.success("退出成功！");
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  cursor: pointer;
}
.user-title {
  display: flex;
  align-items: center;

  .title-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .title-box {
    .title {
      font-size: 16px;
    }

    p {
      margin-top: 5px;
    }

    p,
    .iconfont {
      font-size: 12px;
    }

    p:hover {
      color: rgb(141, 138, 138);
    }
  }
}

.user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(204, 201, 201, 0.3);

  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.user-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid rgba(204, 201, 201, 0.3);

  .menu-item {
    width: 40%;
    line-height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .iconfont {
      padding-left: 5px;
      font-size: 20px;
      position: relative;

      .message {
        position: absolute;
        top: 8px;
        right: 0;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: red;
        z-index: 2;
      }
    }

    .title {
      font-size: 14px;
      margin-left: 5px;
    }
  }

  .menu-item:hover {
    background-color: #eee;
  }
}

.user-signOut {
  padding-top: 10px;
  color: rgb(161, 157, 157);
  font-size: 12px;

  .signOut {
    float: right;
  }
}
</style>