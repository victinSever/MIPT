<template>
  <ul class="recom">
    <h3 class="recom-title">{{ title || "优质博主" }}</h3>
    <div class="recom-list">
      <li
        class="recom-item"
        v-for="item in recomList"
        :key="item.id"
        @click="gotoLink(item.id)"
      >
        <el-image v-if="item.userImage" :src="item.userImage"></el-image>
        <el-image
          v-else
          src="https://tva2.sinaimg.cn/large/008cs7isly8h88i9ec08sj30u00u379u.jpg"
        ></el-image>
        <span v-text="item.username" class="username"></span>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: "adverPage",
  props: {
    recomList: {
      type: Array,
      default: () => [],
    },
    title: String,
  },
  methods: {
    gotoLink(id) {
      this.$message.warning("暂不支持访问他人博客主页！");
    },
  },
};
</script>

<style scoped lang='scss'>
$bgc: blue;

.recom {
  margin: 1rem 0;
  background-color: #fff;
  padding: 1rem 0;

  .recom-title {
    background: #fcfcfc;
    font-weight: normal;
    border-bottom: 1px solid var(--bgc-clr7);
    padding: 0 1rem;
    padding-bottom: 0.5rem;
  }
  .recom-list {
    min-height: 3rem;
  }
  .recom-item {
    padding: 0 1rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    cursor: pointer;
    // color: $color;

    .el-image {
      height: 100%;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  .recom-item:hover {
    .username {
      // color: $bgc;
    }
  }
}
</style>