<template>
  <div
    :class="'passage-item' + (item.isView ? ' viewed' : '')"
    @click="gotoPost(item)"
  >
    <div class="item-left">
      <div class="item-top">
      <span class="username">{{ item.username }}</span>
      <span>|</span>
      <span>{{ passTime }}</span>
      <span v-text="item.type" :class="item.type == '文章' ? 'type-passage' : 'type-topic'"></span>
    </div>

    <div class="item-main">
      <h4 class="title" v-html="highlight(item.title)" :style="(item.isView ? 'color: var(--grey-font-1)' : '')"></h4>
      <p class="summarize" v-html="highlight(item.summarize)"></p>
    </div>
    <div class="item-bottom">
      <span class="iconfont icon-view"> {{ " " + (item.views || 0) }}</span>
      <span class="iconfont icon-31dianzan">
        {{ " " + (item.zan || 0) }}</span
      >
      <span class="iconfont icon-pinglun">
        {{ " " + (item.comments || 0) }}</span
      >
    </div>
    
    </div>

    <div class="item-right">
      <el-image :src="item.publishImage" alt=""></el-image>
    </div>
  </div>
</template>

<script>
import { getNumberOfDays } from "@/utils/index";
export default {
  name: "passageItem",
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  computed: {
    passTime() {
      return getNumberOfDays(this.item.publishTime);
    },
    keyword() {
      return this.$route.query.query || "";
    },
  },
  methods: {
    // 添加高亮
    highlight(str) {
      const arr = str.split(this.keyword);
      return arr.join(`<span style="color: red;">${this.keyword}</span>`);
    },

    // 跳转到文章详情
    gotoPost(item) {
      if (item.type == "文章") {
        this.$router.push({
          name: "post",
          params: {
            ...item,
          },
        });
      }else{
        this.$router.push({
          name: "topic",
          params: {
            ...item,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.passage-item {
  padding: 20px 0;
  border-bottom: 1px solid #ddd9d9;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item-left{
    width: 65%;
    display: flex;
    // justify-content: space-between;
    flex-direction: column;

    .item-top{
      margin-bottom: 1rem;
    }
  }

  .item-right{  
    width: 30%;

    .el-image{
      width: 100%;
    }
  }

  .item-top,
  .item-bottom {
    color: #71777c;

    .username {
      color: #2f3133;
    }

    span {
      padding-right: 10px;
    }

    .type-topic{
      color: var(--bgc-clr2);
    }

    .type-passage{
      color: var(--pink-1);
    }
  }

  .item-main {
    margin-bottom: 10px;

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .summarize {
      color: #86909c;
      line-height: 23px;
      max-height: 50px;
      // 多行文字超出
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .item-bottom {
    height: 1rem;
    color: #2f3133;

    .iconfont {
      font-size: 14px;
    }
  }
}

.passage-item:hover {
  background-color: #f8f8f8;
}
</style>