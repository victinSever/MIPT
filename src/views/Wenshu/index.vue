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
import {mapActions} from 'vuex';

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
    ...mapActions('law',['getlaw']),
    async getData() {
      try{
        const {data:res} = await this.getlaw(this.id)
        this.data = res.data
      }catch(e){
        this.$message.error(e)
      }
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
      padding-bottom: 5rem;
    }
  }
}
</style>