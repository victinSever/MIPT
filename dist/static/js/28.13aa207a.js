"use strict";(self["webpackChunkmipt"]=self["webpackChunkmipt"]||[]).push([[28],{64028:function(t,e,i){i.r(e),i.d(e,{default:function(){return A}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"scroll-lisener"}},[e("el-row",{staticClass:"header"},[e("div",{staticClass:"tag-list"},t._l(t.tags,(function(i){return e("span",{key:i.value,class:"tag-item"+(t.tagActive===i.value?" active":""),on:{click:function(e){return t.handleChangeTagActive(i.value)}}},[t._v(t._s(i.label))])})),0)]),e("el-row",{staticClass:"main"},[e("div",{staticClass:"main-inner"},[e("el-col",{staticClass:"message-left"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"order-list"},t._l(t.order,(function(i){return e("span",{key:i.value,class:"order-item"+(t.orderActive===i.value?" active":""),on:{click:function(e){return t.handleChangeOrderActive(i.value)}}},[t._v(t._s(i.label))])})),0),0!==t.passageList.length?e("div",{staticClass:"passage-list"},t._l(t.passageList,(function(t){return e("PassageItem",{key:t.id,attrs:{item:t}})})),1):t.isLoading?e("el-skeleton",{staticStyle:{"margin-top":"15px"}}):e("el-empty")],1)],1),e("el-col",{staticClass:"message-right"},[e("PassageSignIn"),e("RecomList",{attrs:{recomList:t.recomList}})],1)],1)])],1)},n=[],a=function(){var t=this,e=t._self._c;return e("div",{class:"passage-item"+(t.item.isView?" viewed":""),on:{click:function(e){return t.gotoPost(t.item)}}},[e("div",{staticClass:"item-top"},[e("span",{staticClass:"username"},[t._v(t._s(t.item.username))]),e("span",[t._v("|")]),e("span",[t._v(t._s(t.passTime))]),e("span",{class:"文章"==t.item.type?"type-passage":"type-topic",domProps:{textContent:t._s(t.item.type)}})]),e("div",{staticClass:"item-main"},[e("h4",{staticClass:"title",domProps:{innerHTML:t._s(t.highlight(t.item.title))}}),e("p",{staticClass:"discription",domProps:{innerHTML:t._s(t.highlight(t.item.discription))}})]),e("div",{staticClass:"item-bottom"},[e("span",{staticClass:"iconfont icon-view"},[t._v(" "+t._s(" "+(t.item.view||0)))]),e("span",{staticClass:"iconfont icon-31dianzan"},[t._v(" "+t._s(" "+(t.item.dianzan||0)))]),e("span",{staticClass:"iconfont icon-pinglun"},[t._v(" "+t._s(" "+(t.item.comment||0)))])])])},r=[],o=(i(57658),i(75588)),l={name:"passageItem",props:{item:{type:Object,default:{id:"",username:"xxx",userImage:"",publishImage:"",publishTime:"",title:"",discription:"",view:"",dianzan:"",comment:"",isview:!1}}},computed:{passTime(){return(0,o.Vb)(this.item.publishTime)},keyword(){return this.$route.query.query||""}},methods:{highlight(t){const e=t.split(this.keyword);return e.join(`<span style="color: red;">${this.keyword}</span>`)},gotoPost(t){"文章"==t.type?this.$router.push({name:"post",params:{...t}}):this.$router.push({name:"topic",params:{...t}})}}},c=l,u=i(1001),m=(0,u.Z)(c,a,r,!1,null,"d44e3128",null),p=m.exports,g=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"pass-signIn"},[e("div",{staticClass:"sigin-top"},[e("span",[e("span",{staticClass:"iconfont icon-rili"}),e("span",{staticClass:"welcome"},[t._v(t._s(t.welcome))])]),t.isLogin&&!t.isSignIn?e("el-button",{staticClass:"btn-sigin",attrs:{type:"primary",plain:"",round:""},on:{click:t.signIn}},[t._v("去签到")]):t._e(),t.isLogin&&t.isSignIn?e("el-tag",{attrs:{type:"primary"}},[t._v("签到成功！")]):t._e()],1),e("p",{staticClass:"text"},[t._v(t._s(t.isLogin?"把握每一天~~":"你还没有登录哦，登录可享更多权益"))])])},d=[],h={name:"passageSignIn",data(){return{isSignIn:!1}},computed:{welcome(){let t=(new Date).getHours();return t<=3||t>=22?"夜深了":t>3&&t<8?"早上好!":t>=8&&t<11?"上午好!":t>=11&&t<13?"中午好!":t>=13&&t<18?"下午好!":t>=18&&t<22?"晚上好!":""},isLogin(){let t=this.$store.state.user.token;return""!==t}},methods:{signIn(){this.$message.success("签到成功！天平 +5"),this.isSignIn=!0}}},v=h,w=(0,u.Z)(v,g,d,!1,null,"3d2956f7",null),f=w.exports,y=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"recom"},[e("h3",{staticClass:"recom-title"},[t._v(t._s(t.title||"优质博主"))]),e("div",{staticClass:"recom-list"},t._l(t.recomList,(function(i){return e("li",{key:i.id,staticClass:"recom-item",on:{click:function(e){return t.gotoLink(i.id)}}},[i.userImage?e("el-image",{attrs:{src:i.userImage}}):e("el-image",{attrs:{src:"https://tva2.sinaimg.cn/large/008cs7isly8h88i9ec08sj30u00u379u.jpg"}}),e("span",{staticClass:"username",domProps:{textContent:t._s(i.username)}})],1)})),0)])},C=[],_={name:"adverPage",props:{recomList:{type:Array,default:()=>[]},title:String},methods:{gotoLink(t){this.$message.warning("暂不支持访问他人主页！")}}},b=_,I=(0,u.Z)(b,y,C,!1,null,"0065dc0e",null),L=I.exports;const j=[{id:"12312",username:"法盲张三",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-11-1 19:00:00",title:"何劳荣一案，到底谁是真正的主谋？个人理解，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家",view:"6.1w",dianzan:"372",comment:"271",isview:!1,type:"文章"},{id:"21321312",username:"暴力美学",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"王大父杀人案   被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念:2002年3月18日晚8时资;被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往。被告人王大雷对被告人王卫等四人说:“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产。你们帮我教训他一顿。生意作成了一定给你们好处。”随后，王大雷让王卫等人听候消息。次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫。王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处。王大雷说:“我那位老乡9点多钟才回来，被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念：2002年年3月18日晚8时资；被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往.被告人王大雷对被告人王卫等四人说：“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产.你们帮我教训他一顿.生意作成了一定给你们好处.“随后，王大雷让王卫等人听候消息.次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫.王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处.王大雷说：我那位老乡9点多钟才回来",view:"10w",dianzan:"255",comment:"1000",isview:!1,type:"文章"},{id:"561651",username:"狂徒张三",userImage:"",publishTime:"2022-11-11 11:11:11",view:1111,type:"话题",title:"何劳荣一案，谁是最大的获益者？",discription:"合理化建议和技术改进奖励条例 （国发[1982]43号 一九八二年三月十六日国 务院颁布） 第一章 总 则 第一条 为了鼓励职工积极提合理化建议，努力进行技术革新，促进国 民经济的发展，加快社会主义现代化建设，制定本条例。 第二条 凡是职工（集体或个人）提出的有关改 进生产的合理化建议或技术改进，经过实验研究和实际应用，使某一单位的生产或工作取得显著效益的，均按 本条例给予奖励。 第三条 合理化建议和技术改进的内容包括以下各类： （一） 工业产品、建筑结 构的改进和质量的提高，生物品种的改良和发展，以及发展新产品。 ",category:"刑事案件",tags:["争议焦点","典型"],topics:[{id:"0",title:"谁是主谋？"},{id:"1",title:"既得利益者"},{id:"2",title:"反映社会现实"},{id:"3",title:"不同立场的社会观念不同"}]},{id:"4374376",username:"纸上阡陌",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-11-2 19:00:00",title:"CLF平台的搭建一体化流程文档",category:"类案",tags:["项目创建","CLF"],type:"文章",discription:"# CLF项目介绍\n一个专为法律人打造的社交、辩论，答疑平台，基于智能文本抽取算法，可以进行文本抽取，文案生成，法律辩论和信息检索\n\n## 业务架构\n![image](https://tva2.sinaimg.cn/large/008cs7isly8h868p6sbtoj313x0u0dja.jpg)\n\n\n## 技术架构\n前端技术架构主要为Vue2项目，具体技术栈如下：\n\n- Vue2（框架）\n- Vuex（状态管理）\n- Vue-router（路由管理）\n- ElementUI（组件库）\n- Sass（CSS语法扩展）\n- Axios（ajax请求封装库）\n\n优化技术：\n\n- NProgress（微进度条）\n- iconfont(阿里矢量图标库)\n- mavon-editor（markdown编辑器）\n\n工具：\n\n- VScode\n- [新浪图床](https://pic.gimhoy.com/)\n\n## 项目搭建\n\n- 依赖安装\n\n\n## 前端业务模块设计\n\n\n\n## 版本\n1.0.0\n\n## 部署\n\n部署链接：\n\nhttps://victinsever.github.io/MIPT/dist/index.html\n\n百度网盘链接：\n\n暂未上传\n",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"5646",username:"暴力美学",publishTime:"2022-11-2 20:20:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1,type:"话题"},{id:"4325435",username:"暴力美学",publishTime:"2022-11-2 20:37:30",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"35453425",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"2343432",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"34435435",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"5345",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1}],T=[{label:"全部",value:1},{label:"时事热议",value:2},{label:"经典案列",value:3},{label:"争议辩论",value:4}],k=[{label:"推荐",value:1},{label:"最新",value:2},{label:"热榜",value:3}],x=[{id:"1",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"},{id:"2",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"},{id:"3",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"}];var S={name:"passagePage",components:{PassageItem:p,PassageSignIn:f,RecomList:L},data(){return{tags:T,order:k,passageList:[],recomList:x,tagActive:1,orderActive:1,loadTimes:0,isLoading:!1,page:{pageSize:5,pageNum:1}}},mounted(){window.addEventListener("scroll",this.handleScroll,!0),this.getData()},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{getNewData(){this.isLoading=!0,this.passageList=[],setTimeout((()=>{this.passageList=j,this.isLoading=!1}),500)},async getData(){this.isLoading||(this.isLoading=!0,setTimeout((()=>{this.passageList=this.passageList.concat(j),this.isLoading=!1}),500))},handleScroll(){window.pageYOffset+window.innerHeight>=document.body.offsetHeight-150&&(this.loadTimes++,this.page.pageNum++,this.getData())},handleChangeTagActive(t){this.tagActive=t,this.getNewData()},handleChangeOrderActive(t){this.orderActive=t,this.getNewData()}}},D=S,z=(0,u.Z)(D,s,n,!1,null,"ca6668ea",null),A=z.exports},75588:function(t,e,i){i.d(e,{TM:function(){return d},Vb:function(){return g},Fs:function(){return p}});const s="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var n={randomUUID:s};let a;const r=new Uint8Array(16);function o(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const l=[];for(let h=0;h<256;++h)l.push((h+256).toString(16).slice(1));function c(t,e=0){return(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase()}function u(t,e,i){if(n.randomUUID&&!e&&!t)return n.randomUUID();t=t||{};const s=t.random||(t.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(let t=0;t<16;++t)e[i+t]=s[t];return e}return c(s)}var m=u;const p=function(){return m().replaceAll("-","")},g=function(t,e=new Date){let i=Date.parse(new Date(t)),s=Date.parse(new Date(e)),n=parseInt((s-i)/864e5);if(n>356)return n%356+"年前";if(n>30)return n%30+"月前";if(n>7)return n%7+"周前";if(n>1)return n+"天前";{let t=parseInt((s-i)/36e5);if(t>=1)return t+"小时前";{let t=parseInt((s-i)/6e4);return t>=1?t+"分钟前":"刚刚"}}},d=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`}}]);
//# sourceMappingURL=28.13aa207a.js.map