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
        <el-col class="message-right">
          <!-- <el-card class="box-card"> -->
            <PassageSignIn/>
            <PassageAdver v-for="item in advers" :key="item.id" :data="item"/>
          <!-- </el-card> -->
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PassageItem from "@/components/passage/passage-item.vue";
import PassageSignIn from "@/components/passage/passage-signIn.vue";
import PassageAdver from '@/components/passage/passage-adver.vue'
export default {
  name: "passagePage",
  components: { PassageItem,PassageSignIn, PassageAdver },
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
          "王大父杀人案   被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念:2002年3月18日晚8时资;"
          +"被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告"
          +"人王卫的邀约也一同前往。被告人王大雷对被告人王卫等四人说:“我有个老乡在跟我争夺销售"
          +"瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产。你们帮我教训他一顿。生意作成"
          +"了一定给你们好处。”随后，王大雷让王卫等人听候消息。次日晚8时许，王大雷探明了李良才的"
          +"行踪，即挂电话告知王卫。王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首"
          +"来到王大雷住处。王大雷说:“我那位老乡9点多钟才回来，被贵人王大霞因丕满李良才与其争"
          +"变瓷砖生意:产生杀人恶念：2002年年3月18日晚8时资；被告人王大雷把雇请的丢卫、马本全"
          +"召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往.被告人王"
          +"大雷对被告人王卫等四人说：“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈"
          +"子的命运，做不成我就要破产.你们帮我教训他一顿.生意作成了一定给你们好处.“随后，王"
          +"大雷让王卫等人听候消息.次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫.王"
          +"卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处.王大雷说："
          +"我那位老乡9点多钟才回来",
        record: {
          views: "10w",
          zan: "255",
          comments: "1000",
        },
        isview: false,
      },
      {
        id: "264556",
        username: "文武双全",
        publishTime: "2022-10-03 19:00:00",
        title: "类案匹配模糊，如何扩大精准范围？",
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
        publishTime: "2022-11-2 19:00:00",
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
        publishTime: "2022-11-2 20:20:00",
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
        publishTime: "2022-11-2 20:37:30",
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
    const advers = [
      {imageUrl: 'https://tva4.sinaimg.cn/large/008cs7isly8h7u3052ugij30i20bj0ti.jpg',
      type: 1,
      isView: true,
      link: 'http://www.baidu.com',
      id: '1'},
      {imageUrl: 'https://himg2.huanqiucdn.cn/attachment2010/2018/1220/20181220083449260.jpg',
      type: 2,
      isView: true,
      link: 'http://www.baidu.com',
      id: '2'},
      {imageUrl: 'https://filekp.ccwb.cn/api/file/201912131733397R4WLUw.jpg',
      type: 3,
      isView: true,
      link: 'http://www.baidu.com',
      id: '3'}
    ]

    return {
      tags,
      order,
      passage,
      advers,
      tagActive: 1,
      orderActive: 1,
    };
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
  min-height: 90vh;

  .main-inner {
    margin-top: 20px;

    .message-left {
      width: 68%;
      background-color: #fff;
    }

    .message-right {
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

.passage-list,
.el-skeleton {
  padding-top: 5px;
}

@media screen and (max-width: 1350px) {
  .main .main-inner {
    .message-left {
      width: 100%;
    }
    .message-right {
      display: none;
    }
  }
}
</style>