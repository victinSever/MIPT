<template>
  <div class="root">
    <div class="sides">
      <div class="executive table">
        <h3 v-text="'执行机关'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.executive"
            class="infinite-list-item"
            @click="handleSelectTag(item, 'executive')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="timeliness table">
        <h3 v-text="'时效性'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.timeliness"
            class="infinite-list-item"
            :key="index"
            @click="handleSelectTag(item, 'timeliness')"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="category table">
        <h3 v-text="'种类'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.category"
            class="infinite-list-item"
            @click="handleSelectTag(item, 'category')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="legalDepartment table">
        <h3 v-text="'法务部'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.legalDepartment"
            class="infinite-list-item"
            @click="handleSelectTag(item, 'legalDepartment')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="right-box">
      <div class="banner">
        <div class="banner-top">
          <div class="tag-title">
            <span v-text="'已选条件'"></span>
          </div>
          <div class="tag-btns">
            <el-link
              type="danger"
              v-text="'清空搜索条件'"
              @click="handleClearTag"
              :underline="false"
            ></el-link>
          </div>
        </div>
        <div class="tag-list">
          <div class="tag-item" v-for="item in selectTags" :key="item.label">
            <span class="label" v-text="item.type + '：' + item.label"></span>
            <span
              class="iconfont icon-quxiao"
              @click="handleQvxiao(item)"
            ></span>
          </div>
        </div>
      </div>

      <div class="main">
        <!-- 筛选 -->
        <div class="header">
          <div class="total-dis">
            共搜索到 <span class="total">{{ total }}</span> 条信息
          </div>
          <div class="top-divider"></div>
        </div>

        <LawList :lawList="lawList" :keyword="paramMap.keyword" />
        <div class="pagination-box">
          <el-pagination
            background
            :page-size="pageMap.size"
            :current-page="pageMap.page"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :page-sizes="[5, 8, 10, 15, 20]"
            @current-change="handleChangePageNum"
            @size-change="handleChangePageSize"
            class="pagination"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LawList from "@/components/law/law-list.vue";

export default {
  name: "lawPage",
  components: { LawList },
  data() {
    return {
      paramMap: {
        key: "",
        executive: "",
        timeliness: "",
        category: "",
        legalDepartment: "",
      },

      searchObj: {}, //搜索

      cateObj: {}, //左侧待选择标签栏

      selectTags: [], //已选择的标签

      lawList: [], //搜索结果
      total: 0,
      pageMap: {
        size: 5,
        page: 1,
      },
    };
  },
  mounted() {
    this.getCateObj();
    this.getLawList();
  },
  watch: {
    $route: {
      handler() {
        this.paramMap.key = this.$route.query.key
          ? this.$route.query.key
          : "";
        this.selectTags = this.selectTags.filter((item) => {
          return item.type !== "关键词";
        });
        this.selectTags.push({ type: "关键词", label: this.paramMap.key, key:'keyword' });
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions("law", ["getlawCategory", "getlawList"]),

    // 取消选择
    handleQvxiao(obj) {
      this.selectTags = this.selectTags.filter((item) => {
        return obj.type !== item.type;
      });
      this.paramMap[obj.key] = ''
      this.getCateObj()
      this.getLawList()
    },
    //选择标签：同类型标签只能有一种
    handleSelectTag(item, type) {
      let value = "";
      switch (type) {
        case "executive":
          value = "执行机关";
          break;
        case "timeliness":
          value = "时效性";
          break;
        case "category":
          value = "种类";
          break;
        case "legalDepartment":
          value = "法务部";
          break;
      }
      this.selectTags = this.selectTags.filter((item) => {
        return value !== item.type;
      });

      this.selectTags.push({
        label: item,
        type: value,
        key: type
      });
      this.paramMap[type] = item;
      this.getCateObj();
      this.getLawList();
    },
    // 清空搜索条件
    handleClearTag() {
      this.selectTags = [];
      this.paramMap = {
        keyword: "",
        executive: "",
        timeliness: "",
        category: "",
        legalDepartment: "",
      };
    },
    // 改变页面大小
    handleChangePageNum(num) {
      this.pageMap.page = num;
      this.getLawList();
    },
    handleChangePageSize(num) {
      this.pageMap.size = num;
      this.getLawList();
    },
    // 获取种类
    async getCateObj() {
      try {
        const { data: res } = await this.getlawCategory(this.paramMap);
        this.cateObj = res.data;
      } catch (e) {
        this.$message.error(e);
      }
    },
    // 分页查询
    async getLawList() {
      try {
        console.log({
          ...this.paramMap,
          ...this.pageMap,
        });
        const { data: res } = await this.getlawList({
          ...this.paramMap,
          ...this.pageMap,
        });
        this.lawList = res.data.records;
        this.total = res.data.total;
      } catch (e) {
        this.$message.error(e);
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  width: 80rem;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
}

.sides {
  width: 18rem;

  .table {
    width: 100%;
    margin-bottom: 2rem;
    border: 1px solid var(--bgc-clr4);
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);

    h3 {
      margin-bottom: 0.5rem;
      line-height: 2rem;
      padding-left: 0.5rem;
    }

    .infinite-list {
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      // background-color: #ccc;
      height: 10rem;

      .infinite-list-item {
        line-height: 2rem;
        cursor: pointer;
        padding: 0 0.5rem;
      }

      .infinite-list-item:hover {
        background-color: var(--bgc-clr5);
      }
    }
  }

  /*滚动条样式*/
  .infinite-list::-webkit-scrollbar {
    width: 0.5rem;
    cursor: pointer;
    /*height: 4px;*/
  }
  .infinite-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 2rem;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: var(--bgc-clr4);
  }
  .infinite-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: var(--bgc-clr6);
  }
}

.right-box {
  width: calc(100% - 20rem);
  .banner {
    height: 8rem;
    padding: 1rem;

    .banner-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .tag-title {
        color: var(--law-main);
        font-size: 1rem;
      }
    }

    .tag-list {
      .tag-item {
        display: inline-block;
        margin-right: 1rem;
        border: 1px solid var(--bgc-clr4);
        padding: 0.1rem 0.75rem;
        margin-bottom: 0.5rem;

        .label {
          margin-right: 0.5rem;
        }

        .icon-quxiao {
          cursor: pointer;
          font-weight: bold;
          color: var(--bgc-clr4);
        }
      }
    }
  }

  .main {
    .header {
      .total-dis {
        text-align: right;
        font-size: 1.2rem;

        .total {
          color: var(--pink-2);
        }
      }
      .top-divider {
        width: 100%;
        height: 0.2rem;
        background-color: var(--law-main);
        margin: 1rem 0;
      }
    }
    .pagination-box {
      display: flex;
      justify-content: center;
    }
  }
}
</style>