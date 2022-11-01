<template>
  <div :class="'passage-item' + (item.isView ? ' viewed' : '')">
    <div class="item-top">
      <span class="username">{{ item.username }}</span>
      <span>|</span>
      <span>{{ item.publishTime }}</span>
    </div>

    <div class="item-main">
      <h4 class="title">{{ item.title }}</h4>
      <p class="discription">{{ item.discription }}</p>
    </div>
    <div class="item-bottom">
      <span class="iconfont icon-view"> {{' ' + item.record.views }}</span>
      <span class="iconfont icon-31dianzan"> {{ ' ' + item.record.zan }}</span>
      <span class="iconfont icon-pinglun"> {{ ' ' + item.record.comments }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "passageItem",
  props: ['item']
};
</script>

<style scoped lang='scss'>
  .passage-item {
    padding: 20px 0;
    border-bottom: 1px solid #ddd9d9;
    cursor: pointer;
    font-size: 14px;

      .item-top, .item-bottom {
        margin-bottom: 5px;
        color: #71777c;

        .username{
          color: #2f3133;;
        }

        span{
          padding-right: 10px;
        }
      }

      .item-main {
        margin-bottom: 10px;

          .title{
            font-size: 18px;
            margin-bottom: 10px;          
          }

          .discription {
            color: #86909c;
            line-height: 23px;
          }
      }

      .item-bottom{
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