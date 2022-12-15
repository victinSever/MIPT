<template>
  <div>
    <div>
      <div class="session">
        <div class="session-title">
          <span v-text="'数据概览'"></span>
        </div>
        <div class="session-content">
          <div class="session-list">
            <div class="session-item">
              <span class="label" v-text="'总访问量'"></span>
              <span class="count" v-text="data.viewedAmount"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'文章总数'"></span>
              <span class="count" v-text="data.blogAmount"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'热度排名'"></span>
              <span class="count" v-text="data.ranking"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'粉丝数'"></span>
              <span class="count" v-text="data.fans"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'总访问量'"></span>
              <span class="count" v-text="data.likedAmount"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'总评论数'"></span>
              <span class="count" v-text="data.commmentAmount"></span>
            </div>
            <div class="session-item">
              <span class="label" v-text="'总收藏数'"></span>
              <span class="count" v-text="data.collectedAmount"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="session echats">
        <div class="session-title">
          <span v-text="'数据视图'"></span>
        </div>

        <div class="session-content">
          <el-empty />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "creatorHomePage",
  data() {
    return {
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
  methods: {},
};
</script>

<style scoped lang='scss'>
.session {
  width: 100%;

  .session-title {
    margin-bottom: 1rem;
    color: var(--bgc-clr6);
    font-size: 1.2em;
    font-weight: bold;
    padding-left: 2rem;
    margin-top: 1rem;
    position: relative;
    height: 1.5rem;
    padding-bottom: 0.2rem;
  }

  .session-title::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    width: 0.8rem;
    height: 100%;
    background-color: var(--bgc-clr1);
    border-top-left-radius: 1rem;
  }

  .session-content {
    width: 100%;
  }
  .session-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .session-item {
    width: calc(100% / 3 - 2rem);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bgc-clr8);
    margin: 1rem 0;
    padding: 0.5rem 0;
    border-radius: 0.5rem;

    .label {
      line-height: 1.5;
    }

    .count {
      font-size: 2rem;
      line-height: 2;
      font-weight: bolid;
    }
  }
}

.echats {
  margin-top: 5rem;
}
</style>