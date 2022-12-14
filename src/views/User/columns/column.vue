<template>
  <div>


    <div class="container">
      <div class="main" v-if="column">
        <div class="header">
          <div class="header-left">
            <el-image
              :src="column.publishImage"
              alt=""
              style="height: 100%"
            ></el-image>
          </div>
          <div class="header-right">
            <h2 class="column-title" v-text="column.title"></h2>
            <p class="column-title" v-text="column.disription"></p>
            <div class="info">
              <span
                class="publishTime"
                v-text="'创建于' + column.publishTime"
              ></span>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="tip">
            <span class="tip-title" v-text="'收录文章'"></span>
          </div>
          <div class="column-list" v-if="column.passageList.length !== 0">
            <UserPassageList :passageList="column.passageList" />
          </div>
          <el-skeleton class="loading" v-else-if="isLoading" />
          <el-empty class="empty" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPassageList from "@/components/passage/passage-list.vue";
const column = {
  id: 0,
  title: "web开发",
  disription: "web开发",
  publishTime: "2022-11-20 10:20:20",
  publishImage:
    "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
  passageList: [
    {
      id: "12312",
      username: "法盲张三",
      userImage:
        "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
      publishImage:
        "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
      publishTime: "2022-11-1 19:00:00",
      title: "何劳荣一案，到底谁是真正的主谋？个人理解，大家交流一下",
      content:
        "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家",
      view: "6.1w",
      dianzan: "372",
      comment: "271",
    },
  ],
};

export default {
  name: "columnDetailPage",
  data() {
    return {
      column: {},
      isLoading: false,
    };
  },
  components: { UserPassageList },
  created() {
    this.getData();
    console.log(this.column);
  },
  methods: {
    async getData() {
      this.isLoading = true;
      this.column = column;
    },
  },
};
</script>

<style scoped lang='scss'>
.breadcrumb-title {
  color: var(--bgc-clr6);
  font-size: 1.5em;
  font-weight: bold;
  transition: 0.4s;
}

.session-title:hover {
  color: var(--bgc-clr5);
}

.main {
  width: 100%;

  .header {
    border-radius: 0.5rem;
    display: flex;
    padding: 1rem;
    box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
    margin-bottom: 2rem;

    .header-left {
      width: 15rem;
      margin-right: 1rem;

      .el-image {
        border-radius: 0.5rem;
      }
    }

    .header-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .column-title {
        margin-bottom: 1rem;
      }

      .info {
        margin-bottom: 1rem;
        .publishTime {
        }
      }
    }
  }

  .content {
    box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
    padding: 1rem;
    min-height: 75vh;

    .tip {
      padding-left: 2rem;
      border-bottom: 1px solid var(--bgc-clr6);
      color: var(--bgc-clr6);


      .tip-title {
        height: 100%;
        display: inline-block;
        padding: 0.5rem 0;
        font-size: 1.2rem;

        border-bottom: 0.15rem solid var(--bgc-clr2);
      }
    }
  }
}
</style>