<template>
  <div>
    <!-- 操作区 -->
    <div class="content-box">
      <div class="box-left">
        <el-input
          type="textarea"
          placeholder="输入类案/文书/词句   Enter换行，alt+Enter结束"
          :rows="4"
          ref="textareaTool"
          v-model="value"
          @keyup.enter.native="handleSave"
        ></el-input>
      </div>
      <div class="box-right">
        <el-button type="primary" v-text="'GO'" @click="handleSave"></el-button>
      </div>
    </div>

    <!-- 标签区 -->
    <div class="tags">
      <div class="tagRow-item" v-for="item in cateTags" :key="item.id">
        <span class="tagRow-title">{{ item.label }}：</span>
        <el-tag
          class="tagRow-label"
          v-text="item2.label"
          v-for="item2 in item.tags"
          :key="item2.id"
          :style="'visibility: ' + (item2.hidden ? 'hidden' : 'none')"
        ></el-tag>
      </div>
    </div>

    <!-- 图表区 -->
    <div class="echarts">
        <span class="echart-title">实体关系图（测试）</span>
      <div
        class="entity-echarts"
        style="width: 500px; height: 500px"
        ref="entityEcharts"
      ></div>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
export default {
  data() {
    return {
      cateTags: [],
      value: "",
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.token;
    },
  },
  mounted() {
    this.createEntityEcharts();
    this.$refs.textareaTool.focus();
  },
  methods: {
    // 引入根据实体生成图表
    createEntityEcharts() {
      //创建节点
         var nodes  = [
        {
          name: "韦小宝",
          id: "1",
          x: 200, y:200,
          symbolSize: 60,//节点大小
          symbol:'circle',//节点形状，'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'也可'image://url'设置节点图片
        },
        {
          name: "方怡",
          id: "2",
          x: 500, y:200,
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
            type: 'graph',
            layout: 'force',
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
            edgeLabel: {//边的设置
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
               gravity:0.01,
                edgeLength:200
           }
          },
        ],
      };
      this.myEcharts.setOption(option);
    },

    // 提取事件
    handleSave(e) {
      const isSave =
        (e.keyCode === 13 && e.altKey) || e.target.type === "button";
      if (isSave) {
        if (!this.value.trim())
          return this.$message.warning("你还没有输入内容！");
        NProgress.start();
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
        this.createEntityEcharts();
        NProgress.done();
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.content-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .box-left {
    width: 90%;

    /deep/.el-textarea__inner {
      // background-color: #f2f3f5;
      // border: 1px solid transparent;
      // color: #252933;
      font-family: "微软雅黑";
    }
  }

  .box-right {
    width: 10%;
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
</style>