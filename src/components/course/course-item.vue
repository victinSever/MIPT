<template>
  <div class="courseItem">
    <div class="left">
      <el-image :src="data.courseImage"></el-image>
    </div>
    <div class="right">
      <h2 class="title" v-text="data.courseTitle"></h2>
      <p class="discrip" v-text="data.courseDiscription"></p>
      <p class="user">
        <el-image class="userImage" :src="data.userInfo.userImage"></el-image>
        <span class="username" v-text="data.userInfo.username"></span>
        <el-link class="userLevel" v-text="'Level' + data.userInfo.userLevel" :underline="false"></el-link>
      </p>
      <p class="info">
        <span v-if="data.salePrice !== 0" class="price">
          <span class="salePirce-unit">￥</span>
          <span class="salePrice" v-text="data.salePrice"></span>
        </span>
        <span class="update" v-text="data.isFinish ? '已完结' : '已更新' + data.vedioCount + '小节'"></span>
        ·
        <span class="salePerson" v-text="data.salePersonCount + '人已购买'"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courseItem',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style scoped lang='scss'>
.courseItem {
  display: flex;
  height: 10rem;
  margin: 1rem 0;
  cursor: pointer;

  .left {
    width: 8rem;
    margin-right: 1rem;

    .el-image {
      height: 100%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.3rem;
      font-weight: normal;
      margin-bottom: 0.5rem;
    }

    .discrip{
      color: rgb(63, 62, 62);
      margin-bottom: 1rem;
    }

    .user {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      .userImage {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        margin-right: 0.5rem;
      }

      .username{
        margin-right: 0.5rem;
      }

      .userLevel{
        font-size: 1rem;
        font-family: '华文行楷';
        color: orange;
      }
    }

    .info{
      color: #777;
      .price{
      display: inline-block;
      margin-right: 1rem;

      .salePirce-unit {
        color: #f64242;
      }
      .salePrice {
        color: #f64242;
        font-size: 1.3rem;
      }
    }

      .update, .salePerson {        
        font-size: 0.8rem;
        margin-right: 0.5rem;
      }
    }
  }
}

.courseItem:hover{
  background-color: #f8f8f8;
}
</style>