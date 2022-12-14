<template>
  <div>
    <PassageList :passageList="PassageLists" />
  </div>
</template>

<script>
import PassageList from '@/components/passage/passage-list.vue'

      const PassageLists = [
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
          isview: false,
        },
        {
          id: "21321312",
          username: "暴力美学",
          userImage:
            "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
          publishImage:
            "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
          publishTime: "2022-10-25 19:00:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "王大父杀人案   被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念:2002年3月18日晚8时资;" +
            "被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告" +
            "人王卫的邀约也一同前往。被告人王大雷对被告人王卫等四人说:“我有个老乡在跟我争夺销售" +
            "瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产。你们帮我教训他一顿。生意作成" +
            "了一定给你们好处。”随后，王大雷让王卫等人听候消息。次日晚8时许，王大雷探明了李良才的" +
            "行踪，即挂电话告知王卫。王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首" +
            "来到王大雷住处。王大雷说:“我那位老乡9点多钟才回来，被贵人王大霞因丕满李良才与其争" +
            "变瓷砖生意:产生杀人恶念：2002年年3月18日晚8时资；被告人王大雷把雇请的丢卫、马本全" +
            "召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往.被告人王" +
            "大雷对被告人王卫等四人说：“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈" +
            "子的命运，做不成我就要破产.你们帮我教训他一顿.生意作成了一定给你们好处.“随后，王" +
            "大雷让王卫等人听候消息.次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫.王" +
            "卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处.王大雷说：" +
            "我那位老乡9点多钟才回来",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "264556",
          username: "文武双全",
          userImage: "",
          publishImage: "",
          publishTime: "2022-10-03 19:00:00",
          title: "类案匹配模糊，如何扩大精准范围？",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "4374376",
          username: "纸上阡陌",
          userImage:
            "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
          publishImage:
            "https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",
          publishTime: "2022-11-2 19:00:00",
          title: "CLF平台的搭建一体化流程文档",
          category: "类案",
          tags: ["项目创建", "CLF"],
          content: `# CLF项目介绍
一个专为法律人打造的社交、辩论，答疑平台，基于智能文本抽取算法，可以进行文本抽取，文案生成，法律辩论和信息检索

## 业务架构
![image](https://tva2.sinaimg.cn/large/008cs7isly8h868p6sbtoj313x0u0dja.jpg)


## 技术架构
前端技术架构主要为Vue2项目，具体技术栈如下：

- Vue2（框架）
- Vuex（状态管理）
- Vue-router（路由管理）
- ElementUI（组件库）
- Sass（CSS语法扩展）
- Axios（ajax请求封装库）

优化技术：

- NProgress（微进度条）
- iconfont(阿里矢量图标库)
- mavon-editor（markdown编辑器）

工具：

- VScode
- [新浪图床](https://pic.gimhoy.com/)

## 项目搭建

- 依赖安装


## 前端业务模块设计



## 版本
1.0.0

## 部署

部署链接：

https://victinsever.github.io/MIPT/dist/index.html

百度网盘链接：

暂未上传
`,
          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "5646",
          username: "暴力美学",
          publishTime: "2022-11-2 20:20:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "4325435",
          username: "暴力美学",
          publishTime: "2022-11-2 20:37:30",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "35453425",
          username: "暴力美学",
          publishTime: "2022-10-25 19:00:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "2343432",
          username: "暴力美学",
          publishTime: "2022-10-25 19:00:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "34435435",
          username: "暴力美学",
          publishTime: "2022-10-25 19:00:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
        {
          id: "5345",
          username: "暴力美学",
          publishTime: "2022-10-25 19:00:00",
          title: "这里有一个简单辩论，大家交流一下",
          content:
            "何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",

          view: "10w",
          dianzan: "255",
          comment: "1000",
          isview: false,
        },
      ];
export default {
  name: 'passagePage',
  components: {PassageList},
  data() {
    return {
      PassageLists
    };
  },

  methods: {

  },
};
</script>

<style scoped lang='scss'>

</style>