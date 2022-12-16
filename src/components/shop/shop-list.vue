<template>
  <div>
    <div class="shop-list">
      <div class="shop-item" v-for="item in shopList" :key="item.id">
        <div class="inner-box">
          <div class="image">
            <el-image :src="item.imageUrl" alt=""></el-image>
          </div>
          <div class="shop-info">
            <div class="title">{{ item.title }}</div>
            <div class="price">￥ {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "shopListCompontent",
  props: {
    shopList: {
        type: Array,
        default: () => []
    }
  },
};
</script>

<style scoped lang='scss'>
.shop-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .shop-item {
    width: 30%;
    height: 12rem;
    background-color: var(--bgc-clr8);
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 0.1rem solid transparent;
    overflow: hidden;
    padding: 0.5rem 0;
    cursor: pointer;

    .inner-box {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      display: flex;
      .image {
        width: 40%;
        margin-right: 0.5rem;

        .el-image {
          height: 100%;
          width: 100%;
        }
      }

      .shop-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
            font-size: 1.5rem;
            color: var(--grey-font-1);
        }

        .price{
            color: #ff5000;
            font-size: 1.6rem;
        }
      }
    }
  }

  .shop-item:hover {
    border: 0.1rem solid #ff5000;
    background-color: #fff;
  }
}
</style>