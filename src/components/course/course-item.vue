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
        <el-link class="userLevel" v-text="data.userInfo.userLevel"></el-link>
      </p>
      <p class="price">
        <span class="salePrice" v-text="data.salePrice"></span>
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
  mounted() {
    console.log(this.data);
  }
}
</script>

<style scoped lang='scss'>
.courseItem {
  display: flex;
  height: 12rem;
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
      font-size: 1.4rem;
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
    }

    .price{
      .salePrice {
        color: #f64242;
        font-size: 1.3rem;
      }
    }
  }
}

.courseItem:hover{
  background-color: #f8f8f8;
}
</style>