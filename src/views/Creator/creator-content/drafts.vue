<template>
  <div class="drafts">
    <div class="drafts-list" v-if="draftsList.length !== 0">
      <div class="drafts-item" v-for="item in draftsList" :key="item.id" @click="handleGotoEditor(item)">
        <div class="left">
          <h2 class="title" v-text="item.title"></h2>
          <p class="publishTime" v-text="item.publishTime"></p>
        </div>
        <div class="right">
          <span class="iconfont icon-shanchu" @click="handleDelete(item)"></span>
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
</template>

<script>
export default {
  name: "draftsPage",
  data() {
    return {
      draftsList: [],
      isLoading: false
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 点击进入指定编辑文章
    handleGotoEditor(obj) {
      if(this.$route.path === '/editor') return
      let routeData = this.$router.resolve({
        name: "editor",
        params: {id: obj.id}
      });
      window.open(routeData.href, '_blank');
    },

    // 删除草稿
    handleDelete(obj) {
      this.draftsList = this.draftsList.filter(item => {
        return item.id != obj.id
      })
      this.$message.success('删除成功！')
    },

    // 获取数据
    getData() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.draftsList = [
          { id: "1", title: "123", publishTime: "2022-11-20 16:52:01" },
        ];
      }, 500)
     
    },
  },
};
</script>

<style scoped lang='scss'>
.drafts {
  .drafts-list{
    .drafts-item{
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

      .publishTime{
        color: #777;
      }
    }

    .right .iconfont {
      font-size: 1.5rem;
    }
  }

  .drafts-item:hover {
    background-color: #fcfcfc;
  }
}
</style>