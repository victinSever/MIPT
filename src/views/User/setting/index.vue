<template>
  <div class="root">
    <div class="container">
      <div class="header card" @click="handleGoBack">
        <span class="iconfont icon-arrow-left"></span>
        <span class="title" v-text="'返回'"></span>
      </div>

      <div class="main card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "changePage",
  data() {
    return {};
  },
  methods: {
    handleGoBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  width: 100%;

  .container {
    width: 70rem;
    margin: 0 auto;

    .card{
      background-color: #fff;
      box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
    }

    .header {
      margin-top: 2rem;     
      height: 3rem;
      line-height: 3rem;
      padding-left: 1rem;

      span {
        color: var(--grey-font-1);
        cursor: pointer;
      }
    }

    .main {
    }
  }
}
</style>