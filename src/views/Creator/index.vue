<template>
  <div class="root">
    <div class="inbox">
      <div class="inbox-left">
        <div class="card">
          <!-- 用户信息 -->
          <div class="session userInfo" ref="haha">
            <el-image :src="userInfo.userImage"></el-image>
            <div class="userInfo-text">
              <p class="userInfo-username">
                {{ userInfo.username }}
                <i
                  @click="copyToCutting(userInfo.username)"
                  class="iconfont icon-copy"
                ></i>
              </p>
              <p class="userInfo-role">{{ userInfo.role }}</p>
            </div>
          </div>

          <!-- 写文章按钮 -->
          <div class="session">
            <el-button
              type="primary"
              class="btn-create"
              @click="gotoWritePassage"
              >创作</el-button
            >
          </div>

          <div class="session">
            <el-menu
              default-active="content"
              :collapse="false"
              class="el-menu-vertical"
              @select="handleSelect"
              @close="handleClose"
              router
            >
              <el-menu-item index="/creator/home">
                <i class="el-icon-s-flag"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>内容管理</span>
                </template>
                <el-menu-item index="/creator/content">文章管理</el-menu-item>
              </el-submenu>
              <el-submenu index="">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>数据中心</span>
                </template>
                <el-menu-item index="/creator/dataCenter">内容数据</el-menu-item>
              </el-submenu>
              <el-menu-item index="/creator/groupUp">
                <i class="el-icon-document"></i>
                <span slot="title">创作成长</span>
              </el-menu-item>
              <el-menu-item index="/creator/activityCenter">
                <i class="el-icon-s-flag"></i>
                <span slot="title">活动中心</span>
              </el-menu-item>
              <el-menu-item index="/creator/helpCenter">
                <i class="el-icon-setting"></i>
                <span slot="title">帮助中心</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
      <div class="inbox-right">
        <div class="card">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getUUID} from '@/utils/index';
export default {
  name: "createCenter",
  data() {
    const menu = [
      {
        text: '首页',
        icon: 'el-icon-location',
      },
      {
        text: '内容管理',
        icon: 'el-icon-location',
        children: [
          {
            text: '文章管理',
          }
        ]
      },
      {
        text: '数据中心',
        icon: 'el-icon-menu',
        children: [
          {
            text: '内容数据',
          }
        ]
      },
      {
        text: '创作成长',
        icon: 'el-icon-document',
        index: ''
      },
      {
        text: '活动中心',
        icon: 'el-icon-s-flag',
        index: ''
      },
      {
        text: '帮助中心',
        icon: 'el-icon-setting',
        index: ''
      },
    ]
    return {
      menu,
      userInfo: {
        userImage:
          "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
        username: "victin",
        role: "法学博士",
      },
    };
  },
  methods: {
    copyToCutting(text) {
      const copyToClipboard = (text) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)

      copyToClipboard(text)
      this.$message.success('复制成功')
    },

    // 前往写作页面
    gotoWritePassage: function() {
      if(this.$route.path === '/editor') return
      let routeData = this.$router.resolve({
        name: "editor",
        params: {id: getUUID()}
      });
      window.open(routeData.href, '_blank');
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  margin-top: 20px;
}
.inbox {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .inbox-left,
  .inbox-right {
    background-color: #fff;
  }

  .inbox-left {
    width: 20%;
    min-width: 250px;
    height: 80vh;

    .card {
      padding: 20px;

      .session {
        margin-bottom: 20px;
      }

      .userInfo {
        display: flex;

        .el-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .userInfo-text {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          i {
            cursor: pointer;
          }

          .userInfo-role {
            font-size: 14px;
            color: #777;
          }
        }
      }

      .btn-create {
        width: 100%;
        margin: 10px 0;
      }
    }
  }

  .inbox-right {
    width: 78%;
    min-width: 500px;
    height: 120vh;
  }
}

.inbox-right .card {
  padding: 2rem;
}

@media screen and (max-width: 1350px) {
  .inbox {
    width: 80%;
  }
}

@media screen and (max-width: 1050px) {
  .inbox {
    width: 95%;
  }
}
</style>