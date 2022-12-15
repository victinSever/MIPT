<template>
  <div class="root">
    <div class="sides">
      <div class="executive table">
        <h3 v-text="'地域及法院'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.executive"
            class="infinite-list-item"
            @click="handleSelectTag(item, '地域及法院')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="timeliness table">
        <h3 v-text="'有效期'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.timeliness"
            class="infinite-list-item"
            :key="index"
            @click="handleSelectTag(item, '有效期')"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="category table">
        <h3 v-text="'法规类型'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.category"
            class="infinite-list-item"
            @click="handleSelectTag(item, '类型')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="legalDepartment table">
        <h3 v-text="'部门'"></h3>
        <ul class="infinite-list">
          <li
            v-for="(item, index) in cateObj.legalDepartment"
            class="infinite-list-item"
            @click="handleSelectTag(item, '部门')"
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
            <span class="iconfont icon-quxiao"></span>
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

        <LawList :lawList="lawList" :keyword="keyword" />
        <div class="pagination-box">
          <el-pagination
            background
            :page-size="page.pageSize"
            :current-page="page.pageNum"
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
import LawList from "@/components/law/law-list.vue";
const cateObj = {
  code: 200,
  msg: "",
  data: {
    executive: [
      "机构沿革",
      "贵州省人大(含常委会)",
      "江苏省人大(含常委会)",
      "重庆市人大(含常委会)",
      "黑龙江省人大(含常委会)",
      "浙江省人大(含常委会)",
    ],
    timeliness: ["现行有效", "已被修改", "失效", "部分失效", "尚未生效"],
    category: [
      "省级地方性法规",
      "设区的市地方性法规",
      "法律",
      "地方政府规章",
      "经济特区法规",
      "行政法规",
      "自治条例和单行条例",
    ],
    legalDepartment: [
      "",
      "行政法",
      "民法商法",
      "经济法",
      "社会法",
      "刑法",
      "宪法相关法",
      "诉讼与非诉讼程序法",
    ],
  },
};

const lawObj = {
  code: 200,
  msg: "",
  data: {
    total: 10000,
    records: [
      {
        id: "636e8efad21eb61f445f7d79",
        title: "合理化建议和技术改进奖励条例已被修改",
        executive: "国务院",
        outgoing: "国发〔1982〕43号",
        publishDate: "1982-03-15T16:00:00.000+00:00",
        effectiveDate: "1982-03-15T16:00:00.000+00:00",
        timeliness: "已被修改",
        category: "行政法规",
        legalDepartment: "",
        contentCode: "",
      },
      {
        id: "636e8efa2641149fffcde681",
        title: "征收排污费暂行办法失效",
        executive: "国务院",
        outgoing: "国发〔1982〕21号",
        publishDate: "1982-02-04T16:00:00.000+00:00",
        effectiveDate: "1982-06-30T16:00:00.000+00:00",
        timeliness: "失效",
        category: "行政法规",
        legalDepartment: "",
        contentCode: "",
      },
    ],
  },
};

export default {
  name: "lawPage",
  components: { LawList },
  data() {
    return {
      keyword: "",

      searchObj: {}, //搜索

      cateObj: {}, //左侧待选择标签栏

      selectTags: [], //已选择的标签

      lawList: [], //搜索结果
      total: 0,
      page: {
        pageSize: 5,
        pageNum: 1,
      },
    };
  },
  mounted() {
    this.getCateObj();
    this.getLawList();
  },
  watch: {
    '$route': {
      handler() {
        this.keyword = this.$route.query.key ? this.$route.query.key : "";
        this.selectTags = this.selectTags.filter((item) => {
          return item.type !== "关键词";
        });
        this.selectTags.push({ type: "关键词", label: this.keyword });
      },
      immediate: true,
    },
  },
  methods: {
    //选择标签：同类型标签只能有一种
    handleSelectTag(item, type) {
      this.selectTags = this.selectTags.filter((item) => {
        return type !== item.type;
      });

      this.selectTags.push({
        label: item,
        type: type,
      });
    },
    // 清空搜索条件
    handleClearTag() {
      this.selectTags = [];
    },

    // 改变页面大小
    handleChangePageNum(num) {
      this.page.pageNum = num;
    },
    handleChangePageSize(num) {
      this.page.pageSize = num;
    },
    async getCateObj() {
      this.cateObj = cateObj.data;
    },
    async getLawList() {
      this.lawList = lawObj.data.records;
      this.total = lawObj.data.total;
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  width: 70%;
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