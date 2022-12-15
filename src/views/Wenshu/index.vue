<template>
  <div class="root">
    <div class="main">
      <div class="header">
        <h2 class="title" v-text="data.title"></h2>
        <div class="base">
            <div class="session-item"  v-if="data.executive">
                <span class="item-title">执行机关</span>
                <span class="item-content" v-text="data.executive"></span>
            </div>
            <div class="session-item"  v-if="data.outgoing">
                <span class="item-title">发行字号</span>
                <span class="item-content" v-text="data.outgoing"></span>
            </div>
            <div class="session-item"  v-if="data.publishDate">
                <span class="item-title">发布日期</span>
                <span class="item-content" v-text="spliceDate(data.publishDate)"></span>
            </div>
            <div class="session-item"  v-if="data.timeliness">
                <span class="item-title">时效信息</span>
                <span class="item-content" v-text="data.timeliness"></span>
            </div>
            <div class="session-item"  v-if="data.category">
                <span class="item-title">隶属种类</span>
                <span class="item-content" v-text="data.category"></span>
            </div>
            <div class="session-item" v-if="data.legalDepartment">
                <span class="item-title">法律部门</span>
                <span class="item-content" v-text="data.legalDepartment"></span>
            </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="content" v-html="data.contentCode"></div>
    </div>
  </div>
</template>

<script>
const data = {
  code: 200,
  msg: "",
  data: {
    id: "636e8efad21eb61f445f7d79",
    title: "合理化建议和技术改进奖励条例已被修改",
    executive: "国务院",
    outgoing: "国发〔1982〕43号",
    publishDate: "1982-03-15T16:00:00.000+00:00",
    effectiveDate: "1982-03-15T16:00:00.000+00:00",
    timeliness: "已被修改",
    category: "行政法规",
    legalDepartment: "",
    contentCode: `合理化建议和技术改进奖励条例\n（国发[1982]43号 一九八二年三月十六日国
务院颁布）\n第一章 总 则\r 第一条 为了鼓励职工积极提合理化建议，努力进行技术革新，促进国
民经济的发展，加快社会主义现代化建设，制定本条例。 第二条 凡是职工（集体或个人）提出的有关改
进生产的合理化建议或技术改进，经过实验研究和实际应用，使某一单位的生产或工作取得显著效益的，均按
本条例给予奖励。 第三条 合理化建议和技术改进的内容包括以下各类： （一） 工业产品、建筑结
构的改进和质量的提高，生物品种的改良和发展，以及发展新产品。 （二） 工艺方法，试验、检验方
法，栽培技术、植物保护技术，养殖技术，安全技术，医疗、卫生、劳动保护技术及物资储藏、养护、运输技
术等的改进。 （三） 工具、设备、仪器、装置的改进。 （四） 更有效地利用原料、材料、燃料、
动力、设备及自然条件的技术措施。 （五） 设计、统计、计算技术及其他技术的改进。 第四条 本
条例适用于全民所有制的企、事业单位。非全民所有制单位可参照本条例执行。第二章 奖 励 第五
条 合理化建议和技术改进的奖励，应当贯彻精神鼓励与物质鼓励相结合，以精神鼓励为主的原则。对合理化
建议或技术改进作出贡献者，给予表扬，发给奖状和奖金。 第六条 被采用的合理化建议或技术改进的奖
励，按年经济效果大小分为四等： 奖励等级 年经济效果 奖金 荣誉奖
一 一百万元以上 一千元至二千元 奖状 二 十万元以上 五百
元至一千元 奖状 三 一万元以上 二百元至五百元 奖状 四
不满一万元 二百元以下 表扬 被采用的合理化建议或技术改进的年经济效果，从采用时
起，按一年的经济效果计算。 第七条 对改善劳动条件、保证安全生产、消除公害污染等不能直接以经济
效果计算的合理化建议或技术改进，按其作用意义大小评定奖励等级。 第八条 集体完成项目的奖金，按
贡献大小合理分配。 第九条 奖励的审批权限：合理化建议和技术改进的奖励，由采用单位审查批准，报
上级主管部门备案。 第十条 奖金由采用单位支付。生产单位支付的奖金计入生产成本费，非生产单位支
付的奖金在事业费中列报。第三章 审查和处理 第十一条 企、事业单位应有相应的机构或人员负责合理
化建议和技术改进的审查、实施、奖励等工作。建议人和审查单位之间发生争议时，可提请上级主管部门处
理。 第十二条 重大的和本单位无法处理的合理化建议或技术改进，应报请上级主管部门处理。采用后由
采用单位给予奖励。 第十三条 合理化建议和技术改进必须经过试验或鉴定，成功之后才能采用。 第
十四条 对弄虚作假骗取荣誉的， 要进行批评教育， 并扣回已发的奖金，情节严重的，还要给以纪律处分。
第四章 附 则 第十五条 本条例由国家经济委员会负责解释。 第十六条 各省、市、自治区人民
政府和国务院各部门可根据本条例，结合具体情况，制定实施细则。 第十七条 本条例自发布之日起施
行。一九六三年发布的《技术改进奖励条例》同时废止。`,
  },
};
export default {
  name: "wenshuPage",
  data() {
    return {
      id: "",
      data: "",
    };
  },
  mounted() {
    this.id = this.$route.query.id || "";
    this.getData();
  },
  methods: {
    async getData() {
      this.data = data.data;
    },
    spliceDate(date) {
      return date.includes("T") ? date.split("T")[0] : date;
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  width: 70rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 1rem;
  min-height: 100vh;

  .main {
    padding: 1rem 2rem;

    .header {
        margin-bottom: 1rem;
        .title {
            text-align: center;
            margin: 2rem 0;
            font-weight: normal;
        }

        .base {
            display: flex;
            flex-wrap: wrap;
            

            .session-item {
                width: 50%;
                line-height: 3rem;

                .item-title {
                    margin-right: 1rem;
                    color: var(--grey-font-1);
                }
            }
        }
    }

    .divider {
        width: 100%;
        border-bottom: 0.1rem dotted var(--grey-font-1);
        margin-bottom: 1rem;
    }

    .content {
      font-size: 1.3rem;
      font-family: "宋体";
      line-height: 1.8;
    }
  }
}
</style>