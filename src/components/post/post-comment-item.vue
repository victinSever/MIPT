<template>
  <div class="commentItem">
    <div class="left-box">
      <el-image :src="data.userInfo.userImage"></el-image>
    </div>
    <div class="right-box">
      <!-- 一般信息 -->
      <div class="top">
        <span v-text="data.userInfo.username"></span>
      </div>
      <div class="main">
        <p v-text="data.content"></p>
      </div>
      <div class="bottom">
        <span class="iconfont icon-31dianzan">{{' ' + (data.dianzan ? data.dianzan : '点赞')}}</span>
        <span class="iconfont icon-pinglun">{{' ' + (data.comment ? data.comment : '回复')}}</span>
      </div>

      <!-- 子评论 -->
      <div class="reply-list" :style="'backgroundColor: ' + (bgcColor ? '#fff' : '#f9fafb')" v-if="data.children">
        <commentItem :data="item" :bgcColor="!bgcColor" v-for="item in data.children" :key="item.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import commentItem from '@/components/post/post-comment-item.vue';
export default {
  name: "commentItem",
  components: { commentItem },
  props: {
    data: Object || null,
    bgcColor: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped lang='scss'>
.commentItem {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .left-box {
        width: 3rem;

        .el-image {
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 1.5rem;
        }
      }

      .right-box {
        width: 92%;
        font-size: 0.9rem;
        color: #8a919f;

        .top {
          height: 2.2rem;
          font-size: 1rem;
          color: #252933;
        }

        .main{
          line-height: 1.5rem; 
          overflow: hidden;      
        }

        .bottom {
          margin-top: .5rem;

          .iconfont {         
            font-size: 0.9rem;
            margin-right: 1rem;
          }
        }

        .reply-list{
          margin-top: 1rem;
          padding: 1.5rem;
          border-radius: 1rem;
        }
      }
}
</style>