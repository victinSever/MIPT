<template>
  <div>
    <el-row class="header">
      <el-col class="tag-list" :span="12" :offset="6">
        <span
          v-for="item in tags"
          :key="item.value"
          :class="'tag-item' + (tagActive === item.value ? ' active' : '')"
          @click="handleChangeTagActive(item.value)"
          >{{ item.label }}</span
        >
      </el-col>
    </el-row>
    <el-row class="main">
      <el-col class="main-inner" :span="12" :offset="6">
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
            <div class="passage-list">
              <PassageItem v-for="item in passage" :key="item.id" :item="item"/>
            </div>
          </el-card>
        </el-col>
        <el-col class="message-right">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PassageItem from '@/components/passage/passage-item.vue'
export default {
  name: "passagePage",
  components: {PassageItem},
  data() {
    const tags = [
      { label: "全部", value: 1 },
      { label: "时事热议", value: 2 },
      { label: "经典案列", value: 3 },
      { label: "争议辩论", value: 4 },
    ];
    const order = [
      { label: "推荐", value: 1 },
      { label: "最新", value: 2 },
      { label: "热榜", value: 3 },
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
      {
        id: "21321312",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "264556",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "4374376",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "5646",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "4325435",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "35453425",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "2343432",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "34435435",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },

      {
        id: "5345",
        username: "暴力美学",
        publishTime: "2022-10-25 19:00:00",
        title: "这里有一个简单辩论，大家交流一下",
        discription:
          "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
    ];

    return {
      tags,
      order,
      passage,
      tagActive: 1,
      orderActive: 1,
    };
  },
  methods: {
    handleChangeOrderActive(id) {
      this.orderActive = id;
    },
    handleChangeTagActive(id) {
      this.tagActive = id;
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #eeecec;
  box-shadow: 2px 2px 2px #ccc;
  font-size: 14px;
  color: #71777c;

  .tag-list {
    height: 100%;
    display: flex;
    align-items: center;

    .tag-item {
      padding: 0 10px;
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
  background-color: #f4f5f5;

  .main-inner {
    margin-top: 20px;

    .message-left {
      width: 68%;
    }

    .message-right{
      float: right;
      width: 30%;
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

.passage-list {
  padding-top: 5px;
}

@media screen and (max-width: 1350px) {
 .main .main-inner {
    .message-left{
      width: 100%;
    }
    .message-right {
      display: none;
    }
  }
}
</style>