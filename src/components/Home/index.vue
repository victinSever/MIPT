<template>
  <div>
    <!-- 头部 -->
    <Header :isSticky="isSticky"></Header>

    <!-- 主页面 -->
    <el-row class="main">
      <router-view> </router-view>
    </el-row>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "homePage",
  components: {Header},
  data() {    
    return {
      isSticky: true
    };
  },
};
</script>

<style lang='scss' scoped>
.main {
  background-color: #f4f5f5;
  min-height: calc(100vh - 60px);
}
</style>