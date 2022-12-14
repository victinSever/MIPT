<template>
  <div class="root">
    <div class="container">
      <div class="left-box">
        <div class="user-info card">
          <div class="user-top">
            <!-- 信息区 -->
            <div class="user-data">
              <el-image
                :src="user.userImage"
                alt=""
                class="userImage"
              ></el-image>
              <div class="user-base">
                <div class="userrname">
                  <span v-text="user.username"></span>
                </div>
                <div class="level">
                  <span class="iconfont icon-flag"></span>
                  <span v-text="'LV' + user.level"></span>
                </div>
                <div class="role">
                  <span class="iconfont icon-VIP"></span>
                  <span v-text="user.role"></span>
                </div>
                <div class="discription">
                  <span class="iconfont icon-blog"></span>

                  <span
                    v-text="
                      user.discription
                        ? user.discription
                        : '这个人很懒，什么也没有留下~'
                    "
                  ></span>
                </div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="user-btn">
              <!-- 链接 -->
              <div class="user-link">
                <div class="link-item">
                  <span class="iconfont icon-weibo1"></span>
                </div>
                <div class="link-item">
                  <span class="iconfont icon-github-fill"></span>
                </div>
                <div class="link-item">
                  <span class="iconfont icon-gitee-fill-round"></span>
                </div>
              </div>
              <!-- 编辑按钮 -->
              <div class="btn-edit">
                <el-button v-text="'编辑信息'" type="primary" plain @click="handleGotoSetting"></el-button>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="rank" style="margin-bottom: 1rem">
            <span class=""></span>
            <span v-text="'持续输出中~'"></span>
          </div>
        </div>
        <div class="content card">
          <div class="user-menu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-user"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item
                :index="item.pathname"
                :route="item.pathname"
                v-for="item in menuList"
                :key="item.id"
                v-text="item.label"
              ></el-menu-item>
            </el-menu>
          </div>
          <div class="user-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="right-box">
       <div class="info card">
         <div class="info-title">
          <span v-text="'活跃信息'"></span>
        </div>
        <div class="info-list">
          <div class="info-item">
              <span class="label" v-text="'关注了'"></span>
              <span class="count" v-text="data.likedAmount"></span>
            </div>
            <div class="info-item">
              <span class="label" v-text="'被关注'"></span>
              <span class="count" v-text="data.commmentAmount"></span>
            </div>
            <div class="info-item">
              <span class="label" v-text="'被点赞'"></span>
              <span class="count" v-text="data.collectedAmount"></span>
            </div>
            <div class="info-item">
              <span class="label" v-text="'被收藏'"></span>
              <span class="count" v-text="data.collectedAmount"></span>
            </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
const menuList = [
  { id: "1", label: "文章", pathname: "passage" },
  { id: "2", label: "动态", pathname: "active" },
  { id: "3", label: "专栏", pathname: "columns" },
  { id: "4", label: "收藏", pathname: "collect" },
  { id: "5", label: "关注", pathname: "concern" },
  { id: "6", label: "数据", pathname: "data" },
];

export default {
  naem: "userHomePage",
  data() {
    return {
      menuList,
      activeIndex: "active",
      data: {
        viewedAmount: 32131,
        blogAmount: 2,
        ranking: 1760000,
        fans: 0,
        concerAmount: 0,
        likedAmount: 25,
        commmentAmount: 8,
        collectedAmount: 17,
      },
    };
  },
  computed: {
    user() {
      return JSON.parse(sessionStorage.getItem("userInfo")) || false;
    },
  },
  methods: {
    handleGotoSetting() {
      this.$router.push({name: 'setting'})
    },
    handleSelect(key) {
      if(this.$route.name.includes(key)) return
      this.$router.push({name: key})
    },
  },
};
</script>

<style scoped lang='scss'>
.card {
  background-color: #fff;
}
.root {
  width: 100%;

  .container {
    width: 70rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .left-box {
      width: calc(100% - 16rem);

      .user-info {
        .user-top {
          display: flex;
          justify-content: space-between;
          padding: 2rem 2rem 0 2rem;
          height: 9rem;

          .user-data {
            display: flex;
            align-items: center;

            .el-image {
              width: 6rem;
              height: 6rem;
              border-radius: 50%;
              margin-right: 2rem;
            }

            .user-base {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              height: 100%;

              .userrname {
                font-size: 1.5rem;
              }

              .level {
                font-style: italic;
                font-size: 0.8rem;
                color: var(--tag-1);

                :not(.iconfont) {
                  font-weight: bold;
                }
              }

              .iconfont {
                margin-right: 0.5rem;
              }

              .role,
              .discription {
                color: var(--grey-font-1);
              }
            }
          }

          .user-btn {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .user-link {
              display: flex;
              .link-item {
                margin-right: 1rem;
                cursor: pointer;

                .iconfont {
                  font-size: 1.5rem;
                  color: var(--grey-font-1);
                }
              }

              .link-item:hover .iconfont {
                color: var(--grey-font-2);
              }
            }
          }
        }
        .rank {
          padding: 0 2rem;
          padding-bottom: 1rem;
        }
      }

      .content {
        // margin-top: 0.5rem;
        .el-menu-user li {
          font-size: 1.1rem;
        }

        .user-content{
          width: 100%;
        }
      }
    }

    .right-box {
      width: 15rem;
      .info{

        .info-title{
          height: 3rem;
          line-height: 3rem;
          padding: 0 1rem;
          border-bottom: 1px solid var(--bgc-clr6);
        }

        .info-list {
          padding: 0 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .info-item {
            width: calc(40%);
            height: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 0;
            cursor: pointer;

            .count {
              margin-top: 0.5rem;
              font-weight: bold;
            }
          }

          .info-item:hover {
            color: var(--grey-font-1);
          }
        }
      }
    }
  }
}
</style>