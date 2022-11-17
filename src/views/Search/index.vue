<template>
  <div>
    <el-row class="header">
      <div class="tag-list">
        <span
          v-for="item in tags"
          :key="item.value"
          :class="'tag-item' + (tagActive === item.value ? ' active' : '')"
          @click="handleChangeTagActive(item.value)"
          >{{ item.label }}</span
        >
      </div>
    </el-row>
    <el-row class="main">
      <div class="main-inner">
        <el-col class="message-left">
          <el-card class="box-card">
            <div class="order-list">
              <span
                v-for="item in order"
                :key="item.value"
                :class="
                  'order-item' + (orderActive === item.value ? ' active' : '')
                "
                @click="handleChangeOrderActive(item.value)"
                >{{ item.label }}</span
              >
            </div>
            <div class="passage-list" v-if="passage.length !== 0">
              <PassageItem
                v-for="item in passage"
                :key="item.id"
                :item="item"
              />
            </div>
            <el-skeleton style="margin-top: 15px" v-else />
          </el-card>
        </el-col>
        <el-col class="message-right"> </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import PassageItem from "@/components/passage/passage-item.vue";
export default {
  name: "SearchPages",
  components: { PassageItem },
  data() {
    const tags = [
      { label: "综合", value: 1 },
      { label: "类案", value: 2 },
      { label: "文书", value: 3 },
      { label: "文章", value: 4 },
      { label: "课程", value: 5 },     
    ];

    const order = [
      { label: "综合排序", value: 1 },
      { label: "最新优先", value: 2 },
      { label: "最热优先", value: 3 },
    ];

    const passage = [
      {
        id: "12312",
        username: "法盲张三",
        publishTime: "2022-11-1 19:00:00",
        title: "何劳荣一案，到底谁是真正的主谋？个人理解，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家",
        record: {
          views: "6.1w",
          zan: "372",
          comments: "271",
        },
        isview: false,
      },
    ];

    return {
        passage,
        order,
        tags,
        tagActive: 1,
        orderActive: 1
    };
  },
  mounted() {
    let keyword = this.$route.query.query;
    // this.$route.meta.title += " - " + keyword;
    // console.log(this.$route);
  },
  methods: {
     handleChangeTagActive(id) {
      this.tagActive = id;
    },
    handleChangeOrderActive(id) {
      this.orderActive = id;
      let p = this.passage;
      this.passage = [];
      setTimeout(() => {
        this.passage = p;
      }, 500);
    },
  }
};
</script>

<style scoped lang='scss'>
.header {
    width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeecec;
  box-shadow: 1px 1px 1px #ccc;
  font-size: 14px;
  color: #71777c;
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: #fff;

  .tag-list {
    width: 55%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;

    .tag-item {
      padding: 0 20px;
      cursor: pointer;
    }

    .tag-item:first-child {
      padding-left: 0;
    }

    .tag-item:hover {
      color: #1e80ff;
    }
  }
}

.active {
  color: #1e80ff;
}

.main {
    margin-top: 20px;

  .main-inner {
    
    width: 55%;
    margin: 0 auto;

    .message-left {
      width: 75%;
      background-color: #fff;
    }

    .message-right {
      float: right;
      width: 22%;
    }
  }
}

.order-list {
  font-size: 14px;
  color: #71777c;

  .order-item {
    margin-right: 15px;
    cursor: pointer;
  }

  .order-item:hover {
    color: #1e80ff;
  }
}

.passage-list,
.el-skeleton {
  padding-top: 5px;
}
</style>