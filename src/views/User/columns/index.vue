<template>
  <div>
        <div class="columns-list">
      <div class="columns-item" v-for="item in columnList" :key="item.id" @click="gotoColumn(item.id)" >
        
        <div class="publishImage-box">
          <el-image class="publishImage" :src="item.publishImage"></el-image>
        </div>
        <div class="content">
          <h2 class="title" v-text="item.label"></h2>
          <p class="discription" v-text="item.discription"></p>
          <div class="base">
            <span class="publishTime" v-text="item.publishTime"></span>
            <span class="pass-totle" v-text="'文章数：' + (item.total ? item.tatol : 0)"></span>
          </div>
        </div>
        <div class="display">
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const columnList = [
  {
    id: 0,
    label: "web开发",
    color: '#ff0f5b',
    discription: 'web开发的流程化控制过程',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
  {
    id: 1,
    label: "flutter生态",
    color: '#01b4ff',
    discription: 'flutter从0构建andrio APP',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
  {
    id: 3,
    label: "中后台应用",
    color: '#be01fe',
    discription: '面向企业级的中后台配置方案',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
  {
    id: 4,
    label: "测试1",
    color: '#777',
    discription: '面向企业级的中后台配置方案',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
  {
    id: 5,
    label: "测试2",
    color: '#000',
    discription: '面向企业级的中后台配置方案',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
  {
    id: 6,
    label: "测试3",
    color: 'green',
    discription: '面向企业级的中后台配置方案',
    publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
        publishTime: '2022:11:20 08:20:10'
  },
];
export default {
  name: "columnPage",
  data() {
    return {
      columnList,
    };
  },
  methods: {
    // 跳转到文章详情
    gotoColumn(id) {
      this.$router.push(`/user/column/${id}`);
    },
  }
};
</script>

<style scoped lang='scss'>
.columns-list {
  padding: 1rem 0;

  .columns-item {
    height: 6rem;
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;
    padding: 0 1rem;

    .publishImage-box {
      height: 100%;
      width: 10rem;
      margin-right: 1rem;

      .publishImage{
        height: 100%;
        width: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-weight: normal;
        font-size: 1.2rem;
      }

      .discription, .base {
        color: var(--grey-font-1);
      }
    }

    .display {
      position: absolute;
      top: 0;
      right: 2rem;

      .iconfont {
        font-size: 1.5rem;
        color: var(--grey-font-1);
      }
    }
  }
}
</style>