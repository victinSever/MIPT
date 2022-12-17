<template>
  <div class="container">
    <div class="law-list" v-if="lawList.length !== 0">
      <div class="law-item" v-for="item in lawList" :key="item.id">
        <div class="category">
          <span v-text="item.category"></span>
        </div>
        <div class="info-main">
          <!-- <div class="left-main">
                    <el-checkbox v-model="checked"></el-checkbox>
                </div> -->
          <div class="right-main">
            <h3
              class="title"
              v-html="highlight(item.title)"
              @click="handleGotoLawContent(item.id)"
            ></h3>
            <div class="base">
              <span class="excetive" v-text="item.executive"></span>
              <span class="outgoing" v-text="item.outgoing"></span>
              <span
                class="publishDate"
                v-text="spliceDate(item.publishDate)"
              ></span>
            </div>
            <div class="display">
              <div class="display-item" @click="handleTip">
                <span class="iconfont icon-like"></span>
                <span>收藏</span>
              </div>
              <div class="display-item" @click="handleTip">
                <span class="iconfont icon-clouddownload"></span>
                <span>下载</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lawListCompontent",
  props: {
    lawList: {
      type: Array,
      default: () => [],
    },
    keyword: String,
  },
  methods: {
    // 跳转到法律详情页面
    handleGotoLawContent(id) {
      let routeData = this.$router.resolve({
        path: "/wenshu",
        query: { id },
      });
      window.open(routeData.href, "_blank");
    },
    handleTip() {
      this.$message.warning("敬请期待！");
    },
    spliceDate(date) {
      return date.includes("T") ? date.split("T")[0] : date;
    },
    // 添加高亮
    highlight(str) {
      if (!this.keyword) return str;
      const arr = str.split(this.keyword);
      return arr.join(`<span style="color: red;">${this.keyword}</span>`);
    },
  },
};
</script>

<style scoped lang='scss'>
.law-list {
  .law-item {
    height: 13rem;
    border: 1px solid var(--bgc-clr5);
    margin-bottom: 1.5rem;

    position: relative;

    .category {
      margin-top: 1rem;
      height: 2rem;
      background-color: var(--law-main);
      display: inline-block;
      color: #fff;
      line-height: 2rem;
      padding: 0 1rem 0 1.5rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      position: relative;
      margin-bottom: 1rem;
    }

    .category::before {
      content: "";
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #fff;
    }

    .info-main {
      padding-left: 1rem;

      .right-main {
        .title,
        .base,
        .reason,
        .display {
          margin: 1rem 0;
        }

        .title:hover {
          cursor: pointer;
          color: var(--law-main);
        }

        .base {
          color: var(--grey-font-1);

          span {
            margin-right: 3rem;
          }
        }

        .reason {
          color: var(--grey-font-1);

          .reason-content {
            margin-top: 0.5rem;
          }
        }

        .display {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;

          .display-item {
            margin: 0 1rem;
            color: var(--grey-font-1);
            cursor: pointer;

            .iconfont {
              color: var(--grey-font-1);
            }
          }

          .display-item:hover {
            color: var(--grey-font-2);
          }
        }
      }
    }
  }

  .law-item:hover {
    background-color: var(--bgc-clr8);
  }
}
</style>