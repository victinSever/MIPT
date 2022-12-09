<template>
  <div>
    <div class="header">
      <div class="header-menu">
        <div class="menu-item" v-for="item in menu" :key="item.id">
          <el-link
            :type="activeManu === item.id ? 'primary' : ''"
            :underline="false"
            @click="handleChangeMenu(item.id)"
          >
            <span v-text="item.label"></span>
            <span v-text="'(' + item.num + ')'"></span>
          </el-link>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="passage-list" v-if="passageList.length !== 0">
        <div
          class="passage-item"
          v-for="item in passageList"
          :key="item.id"
          @click="handleGotoPassage(item)"
        >
          <div class="left">
            <h2 class="title" v-text="item.title"></h2>
            <p class="info">
              <span class="publishTime" v-text="item.publishTime"></span>
              <span class="view" v-text="item.view + '浏览'"></span>
              <span class="comment" v-text="item.comment + '评论'"></span>
              <span class="dianzan" v-text="item.dianzan + '点赞'"></span>
              <span class="colloct" v-text="item.colloct + '收藏'"></span>
            </p>
          </div>
          <div class="right">
            <span
              class="iconfont icon-shanchu"
              @click.stop="handleDelete(item.id)"
            ></span>
          </div>
        </div>
      </div>

      <div class="drafts-loading" v-else-if="isLoading">
        <el-skeleton />
      </div>
      <div class="drafts-empty" v-else>
        <el-empty :image-size="150" description="内容空空如也！"></el-empty>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "essaysPage",
  data() {
    const menu = [
      { label: "全部", id: 0, num: 0 },
      { label: "已发布", id: 1, num: 0 },
      { label: "审核中", id: 2, num: 0 },
      { label: "未通过", id: 3, num: 0 },
    ];
    return {
      menu,
      activeManu: 0,

      isLoading: false,
      passageList: [],
    };
  },
  mounted() {
    let { title, content, publishTime } = this.$route.params;
    if (!title) return;
    this.passageList.push({
      id: 1,
      title,
      content,
      publishTime,
    });
  },
  methods: {
    //删除文章
    handleDelete(id) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.passageList.splice(id, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    //跳转到文章详情
    handleGotoPassage(item) {
      this.$router.push({
        name: "post",
        params: { ...item },
      });
    },

    // 获取数据
    async getData() {
      this.isLoading = true;
      this.passageList = [];
      setTimeout(() => {
        this.isLoading = false;
        this.passageList = [
          {
            id: 2,
            title: "人之初，性本善",
            publishTime: "2022-11-21 20:08:26",
            view: 0,
            comment: 0,
            dianzan: 0,
            colloct: 0,
          },
        ];
      }, 500);
    },

    // 改变菜单
    handleChangeMenu(id) {
      this.activeManu = id;
      this.getData();
    },
  },
};
</script>

<style scoped lang='scss'>
.header-menu {
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .menu-item {
    padding: 0 1rem;
    border-right: 1px solid #ccc;
  }

  .menu-item:last-child {
    border-right: none;
  }

  .menu-item:hover .el-link {
    color: skyblue;
  }
}

.main {
  .passage-list {
    .passage-item {
      padding: 1rem 0;
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      border-bottom: 1px solid #e4dfdf;
    }

    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        font-weight: normal;
        font-size: 1.2rem;
      }

      .info {
        color: #777;

        span {
          padding-right: 1rem;
        }

        .publishTime {
          border-right: 1px solid #ccc;
        }

        .view {
          margin-left: 1rem;
        }
      }
    }

    .right .iconfont {
      font-size: 1.5rem;
    }
  }

  .passage-item:hover {
    background-color: #fcfcfc;
  }
}
</style>