<template>
  <div :class="'passage-item' + (item.isView ? ' viewed' : '')">
    <div class="item-top">
      <span class="username">{{ item.username }}</span>
      <span>|</span>
      <span>{{ passTime }}</span>
    </div>

    <div class="item-main">
      <h4 class="title">{{ item.title }}</h4>
      <p class="discription">{{ item.discription }}</p>
    </div>
    <div class="item-bottom">
      <span class="iconfont icon-view"> {{ " " + item.record.views }}</span>
      <span class="iconfont icon-31dianzan"> {{ " " + item.record.zan }}</span>
      <span class="iconfont icon-pinglun">
        {{ " " + item.record.comments }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "passageItem",
  props: ["item"],
  computed: {
    passTime() {
      return this.getNumberOfDays(this.item.publishTime, new Date())
    }
  },
  methods: {
    // 日期相减得到天数
    getNumberOfDays(date1, date2) {
      //获得天数
      //date1：开始日期，date2结束日期
      let a1 = Date.parse(new Date(date1));
      let a2 = Date.parse(new Date(date2));
      let day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)); //核心：时间戳相减，然后除以天数
      if(day > 356) return (day % 356) + '年前'     
      else if(day > 30) return (day % 30) + '月前'
      else if(day > 7) return (day % 7) + '周前'
      else if(day > 1) return day + '天前'
      else {
        let hour = parseInt((a2 - a1) / (1000 * 60 * 60))
        if(hour >= 1) return hour + '小时前'
        else {
          let minite = parseInt((a2 - a1) / (1000 * 60))
          if(minite >= 1) return minite + '分钟前'
          else return '刚刚'
        }
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

  .item-top,
  .item-bottom {
    margin-bottom: 5px;
    color: #71777c;

    .username {
      color: #2f3133;
    }

    span {
      padding-right: 10px;
    }
  }

  .item-main {
    margin-bottom: 10px;

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .discription {
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