<template>
  <div class="passage-list" v-if="passageList && passageList.length !== 0">
    <div
      v-for="item in passageList"
      :key="item.id"
      class="passage-item"
      @click="gotoPost(item)"
    >
    
      <!-- 信息 -->
      <div :class="'publishInfo ' + (item.publishImage ? '' : 'full')">
        <div class="item-top">
          <span v-if="item.userImage">
            <el-image :src="item.userImage"></el-image>
          </span>    
          <span>{{item.username}}</span>
          <span>|</span>
          <span>{{ passTime(item.publishTime) }}</span>
        </div>

        <div class="item-main">
          <h4 class="title" v-html="highlight(item.title)"></h4>
          <p class="discription" v-html="highlight(item.content)"></p>
        </div>
        <div class="item-bottom">
          <span class="iconfont icon-view"> {{ " " + item.view || 0 }}</span>
          <span class="iconfont icon-31dianzan"> {{ " " + item.dianzan  || 0}}</span>
          <span class="iconfont icon-pinglun"> {{ " " + item.comment || 0 }}</span>
        </div>
      </div>

      <!-- 封面 -->
      <div class="publishImage" v-if="item.publishImage">
        <el-image :src="item.publishImage" alt=""></el-image>
      </div>
    </div>
  </div>
</template>

<script>
import { getNumberOfDays } from '@/utils/index';
export default {
  name: "passageList",
  props: {
    passageList: {
      type: Array,
      default: []
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  methods: {
    passTime(time) {
      return getNumberOfDays(time)
    },
    // 添加高亮
    highlight(str) {
      if(!this.keyword) return str
      const arr = str.split(this.keyword)
      return arr.join(`<span style="color: red;">${this.keyword}</span>`)
    },

    // 跳转到文章详情
    gotoPost(item) {
      this.$router.push({
        name: 'post',
        params: {
          ...item
        }
      })
    },
  },
};
</script>

<style scoped lang='scss'>
.passage-item {
  cursor: pointer;
  display: flex;
  border-radius: 1rem;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
  align-items: center;

  .publishImage {
    width: 20rem;
    height: 40%;
    border-radius: 0.25rem;
    overflow: hidden;

    .el-image {
      height: 100%;
      transition: .4s;
    }

    .el-image:hover {
      transform: rotate(5deg) scale(115%);
    }
  }

  .publishInfo {
    width: calc(100% - 300px);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .item-top,
  .item-bottom {
    span {
      padding-right: 10px;
    }
  }

  .item-top {
    color: var(--bgc-clr4);
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    .el-image {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    }

    span{
      display: block;
    }
  }

  .item-main {
    margin-bottom: 1rem;

    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--bgc-clr2);
    }

    .discription {
      color: var(--bgc-clr4);
      max-height: 4rem;
      // 多行文字超出
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  .item-bottom {
    color: #2f3133;
    display: flex;
    align-items: flex-end;

    .iconfont {
      font-size: 14px;
    }
  }
}


.passage-item .full {
    width: 100%;

}

.passage-item:hover {
  box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow-hover);
}
</style>