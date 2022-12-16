<template>
  <div>
    <!-- 操作区 -->
    <div class="content-box">
      <div class="box-top">
        <el-input
          type="textarea"
          placeholder="输入类案/文书/词句"
          :rows="12"
          ref="textareaTool"
          v-model="content"
        ></el-input>
      </div>
      <div class="box-bottom">
        <el-button
          type="primary"
          :loading="isloading"
          v-text="isloading ? '正在提取中，长文本需要稍加等待···' : '开始提取'"
          @click="handleSave"
          round
        ></el-button>
      </div>
    </div>

    <div class="main">
      <div class="sides card">
        <div class="title">
          <span class="iconfont icon-typeofentity"></span>
          <span v-text="'文书实体抽取结果'"></span>
        </div>
        <div class="content sides-list">
          <div class="side-item" v-for="item in entry" :key="item.entityId">
            <div
              class="entity-item"
              v-if="item.entities && item.entities.length !== 0"
            >
              <div class="entity-class">
                <span class="iconfont icon-deng"></span>
                <span v-text="item.entityClass"></span>
              </div>
              <div class="entity-box" v-if="item.entities">
                <div
                  class="entity"
                  v-for="(item1, index) in item.entities"
                  :key="index"
                >
                  <el-tag
                    size="samll"
                    :style="'color: #fff; background: ' + getColor()"
                    round
                    v-text="item1"
                  ></el-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="feature card">
          <div class="title">
            <span class="iconfont icon--in--feature"></span>
            <span v-text="'文书特征'"></span>
          </div>
          <div class="content sides-list">
            <div
              class="feature-item"
              v-for="(item, index) in feature"
              :key="index"
            >
              <el-tag
                size="medium"
                v-text="item"
                :style="'color: ' + getColor()"
              ></el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区 -->
    <!-- <div class="echarts">
        <span class="echart-title">实体关系图（测试）</span>
      <div
        class="entity-echarts"
        style="width: 500px; height: 500px"
        ref="entityEcharts"
      ></div>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { generateRandomHexColor } from "@/utils";
export default {
  data() {
    return {
      cateTags: [],
      content: "",
      entry: [],
      feature: [],
      isloading: false,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.token;
    },
  },
  mounted() {
    console.log(generateRandomHexColor());
    // this.createEntityEcharts();
    this.$refs.textareaTool.focus();
  },
  methods: {
    ...mapActions("tool", ["getEntity"]),

    // 获取随机颜色
    getColor() {
      return generateRandomHexColor();
    },

    async getData() {
      const formdata = new FormData();
      formdata.append("instrument", this.content);
      try {
        this.$nprogress.start();
        this.isloading = true;
        const { data: res } = await this.getEntity(formdata);
        this.isloading = false;
        this.$nprogress.done();
        this.entry = res.data.entry;
        this.feature = res.data.feature;
        console.log(this.entry, this.feature);
      } catch (e) {
        this.$message.error(e);
      }
    },

    // 引入根据实体生成图表
    createEntityEcharts() {
      //创建节点
      var nodes = [
        {
          name: "韦小宝",
          id: "1",
          x: 200,
          y: 200,
          symbolSize: 60, //节点大小
          symbol: "circle", //节点形状，'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'也可'image://url'设置节点图片
        },
        {
          name: "方怡",
          id: "2",
          x: 500,
          y: 200,
          symbolSize: 60,
        },
        {
          name: "双儿",
          id: "3",
          symbolSize: 60,
        },
        {
          name: "茅十八",
          id: "4",
          symbolSize: 60,
        },
        {
          name: "吴六奇",
          id: "5",
          symbolSize: 60,
        },
      ];

      //创建关系
      var links = [
        {
          source: "1",
          target: "2",
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1",
          target: "3",
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1",
          target: "4",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "4",
          target: "1",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "3",
          target: "5",
          relation: {
            name: "义妹",
            id: "1",
          },
        },
      ];

      //初始化
      const mainDom = this.$refs.entityEcharts; //设置dom
      this.myEcharts = this.$echarts.init(mainDom); //初始化echarts
      let option = {
        series: [
          {
            type: "graph",
            layout: "force",
            nodes: nodes,
            links: links,
            itemStyle: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3dd67a", // 0% 处的颜色
                  },
                  {
                    offset: 0.7,
                    color: "#3dd67a", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#95dcb2", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              show: true,
              position: "bottom",
              distance: 5,
              fontSize: 18,
              align: "center",
            },
            autoCurveness: 0.01, //多条边的时候，自动计算曲率
            edgeLabel: {
              //边的设置
              show: true,
              position: "middle",
              fontSize: 12,
              formatter: (params) => {
                return params.data.relation.name;
              },
            },
            edgeSymbol: ["circle", "arrow"], //边两边的类型
            force: {
              repulsion: 100,
              gravity: 0.01,
              edgeLength: 200,
            },
          },
        ],
      };
      this.myEcharts.setOption(option);
    },

    // 提取事件
    handleSave(e) {
      if (this.isloading) return;
      if (!this.content.trim())
        return this.$message.warning("你还没有输入内容！");

      this.getData();

      this.cateTags = [
        {
          id: 1,
          label: "案由",
          tags: [{ id: 11, label: "选举权纠纷案", hidden: false }],
        },
        {
          id: 2,
          label: "案件类型",
          tags: [{ id: 21, label: "民事", hidden: false }],
        },
        {
          id: 3,
          label: "案件特征",
          tags: [
            { id: 31, label: "请求财产损失", hidden: false },
            { id: 32, label: "财产损害", hidden: false },
            { id: 33, label: "请求停止侵害", hidden: false },
            { id: 34, label: "侵犯肖像权", hidden: false },
          ],
        },
        {
          id: 4,
          label: "争议焦点",
          tags: [{ id: 31, label: "一般人格权争议", hidden: false }],
        },
      ];
      // this.createEntityEcharts();
    },
  },
};
</script>

<style scoped lang='scss'>
.content-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .box-top {
    width: 100%;

    /deep/.el-textarea__inner {
      // background-color: #f2f3f5;
      // border: 1px solid transparent;
      // color: #252933;
      font-family: "微软雅黑";
    }
  }

  .box-bottom {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}

.tags {
  font-size: 0.8rem;

  .tagRow-item {
    margin: 1rem 0;

    .tagRow-title {
      display: inline-block;
      width: 5rem;
    }
    .tagRow-label {
      margin-right: 1rem;
      cursor: pointer;
    }
  }
}

.echarts {
  margin-top: 2rem;

  .entity-echarts {
    padding: 2rem;
    background-color: #fcfcfc;
  }
}

.card {
  background-color: #fff;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);
  border-radius: 1rem;
  padding: 1rem 0;
}
.main {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  min-height: 20rem;

  .title {
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #a34440;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--bgc-clr5);

    .iconfont {
      font-size: 1.3rem;
      margin-right: 0.5rem;
    }
  }

  .content {
    padding: 0 1rem;
  }

  .sides {
    width: 65%;
    overflow: hidden;

    .entity-item {
      margin: 1rem 0;

      .entity-class {
        width: 5rem;
        margin-right: 1rem;
        font-size: 1.2rem;
        color: var(--grey-font-1);
        margin-bottom: 0.5rem;

      }

      .entity-box {
        display: flex;
        flex-wrap: wrap;

        .entity {
          margin-right: 0.8rem;
          margin-bottom: 0.5rem;
          color: var(--grey-font-2);
        }
      }
    }
  }

  .main-right {
    width: 32%;

    .feature {
      min-height: 20rem;
      overflow: hidden;

      .content {
        display: flex;
        flex-wrap: wrap;

        .feature-item {
          margin: 0.5rem;
        }
      }
    }
  }
}
</style>