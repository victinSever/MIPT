"use strict";(self["webpackChunkmipt"]=self["webpackChunkmipt"]||[]).push([[394],{88394:function(e,t,i){i.r(t),i.d(t,{default:function(){return A}});var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"scroll-lisener"}},[t("el-row",{staticClass:"header"},[t("div",{staticClass:"tag-list"},e._l(e.tags,(function(i){return t("span",{key:i.value,class:"tag-item"+(e.tagActive===i.value?" active":""),on:{click:function(t){return e.handleChangeTagActive(i.value)}}},[e._v(e._s(i.label))])})),0)]),t("el-row",{staticClass:"main"},[t("div",{staticClass:"main-inner"},[t("el-col",{staticClass:"message-left"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"order-list"},e._l(e.order,(function(i){return t("span",{key:i.value,class:"order-item"+(e.orderActive===i.value?" active":""),on:{click:function(t){return e.handleChangeOrderActive(i.value)}}},[e._v(e._s(i.label))])})),0),0!==e.passageList.length?t("div",{staticClass:"passage-list"},e._l(e.passageList,(function(e){return t("PassageItem",{key:e.id,attrs:{item:e}})})),1):e.isLoading?t("el-skeleton",{staticStyle:{"margin-top":"15px"}}):t("el-empty")],1)],1),t("el-col",{staticClass:"message-right"},[t("PassageSignIn"),t("RecomList",{attrs:{recomList:e.recomList}})],1)],1)])],1)},n=[],a=function(){var e=this,t=e._self._c;return t("div",{class:"passage-item"+(e.item.isView?" viewed":""),on:{click:function(t){return e.gotoPost(e.item)}}},[t("div",{staticClass:"item-top"},[t("span",{staticClass:"username"},[e._v(e._s(e.item.username))]),t("span",[e._v("|")]),t("span",[e._v(e._s(e.passTime))])]),t("div",{staticClass:"item-main"},[t("h4",{staticClass:"title",domProps:{innerHTML:e._s(e.highlight(e.item.title))}}),t("p",{staticClass:"discription",domProps:{innerHTML:e._s(e.highlight(e.item.content))}})]),t("div",{staticClass:"item-bottom"},[t("span",{staticClass:"iconfont icon-view"},[e._v(" "+e._s(" "+e.item.view))]),t("span",{staticClass:"iconfont icon-31dianzan"},[e._v(" "+e._s(" "+e.item.dianzan))]),t("span",{staticClass:"iconfont icon-pinglun"},[e._v(" "+e._s(" "+e.item.comment))])])])},r=[],o=(i(57658),i(75588)),l={name:"passageItem",props:{item:{type:Object,default:{id:"",username:"xxx",userImage:"",publishImage:"",publishTime:"",title:"",content:"",view:"",dianzan:"",comment:"",isview:!1}}},computed:{passTime(){return(0,o.V)(this.item.publishTime)},keyword(){return this.$route.query.query||""}},methods:{highlight(e){const t=e.split(this.keyword);return t.join(`<span style="color: red;">${this.keyword}</span>`)},gotoPost(e){this.$router.push({name:"post",params:{...e}})}}},c=l,u=i(1001),m=(0,u.Z)(c,a,r,!1,null,"141b3f9a",null),g=m.exports,p=function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"pass-signIn"},[t("div",{staticClass:"sigin-top"},[t("span",[t("span",{staticClass:"iconfont icon-rili"}),t("span",{staticClass:"welcome"},[e._v(e._s(e.welcome))])]),e.isLogin&&!e.isSignIn?t("el-button",{staticClass:"btn-sigin",attrs:{type:"primary",plain:"",round:""},on:{click:e.signIn}},[e._v("去签到")]):e._e(),e.isLogin&&e.isSignIn?t("el-tag",{attrs:{type:"primary"}},[e._v("签到成功！")]):e._e()],1),t("p",{staticClass:"text"},[e._v(e._s(e.isLogin?"把握每一天~~":"你还没有登录哦，登录可享更多权益"))])])},d=[],h={name:"passageSignIn",data(){return{isSignIn:!1}},computed:{welcome(){let e=(new Date).getHours();return e<=3||e>=22?"夜深了":e>3&&e<8?"早上好!":e>=8&&e<11?"上午好!":e>=11&&e<13?"中午好!":e>=13&&e<18?"下午好!":e>=18&&e<22?"晚上好!":""},isLogin(){let e=this.$store.state.user.token;return""!==e}},methods:{signIn(){this.$message.success("签到成功！天平 +5"),this.isSignIn=!0}}},v=h,w=(0,u.Z)(v,p,d,!1,null,"3d2956f7",null),f=w.exports,y=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"recom"},[t("h3",{staticClass:"recom-title"},[e._v(e._s(e.title||"优质博主"))]),t("div",{staticClass:"recom-list"},e._l(e.recomList,(function(i){return t("li",{key:i.id,staticClass:"recom-item",on:{click:function(t){return e.gotoLink(i.id)}}},[i.userImage?t("el-image",{attrs:{src:i.userImage}}):t("el-image",{attrs:{src:"https://tva2.sinaimg.cn/large/008cs7isly8h88i9ec08sj30u00u379u.jpg"}}),t("span",{staticClass:"username",domProps:{textContent:e._s(i.username)}})],1)})),0)])},C=[],b={name:"adverPage",props:{recomList:{type:Array,default:()=>[]},title:String},methods:{gotoLink(e){this.$message.warning("暂不支持访问他人博客主页！")}}},_=b,I=(0,u.Z)(_,y,C,!1,null,"0ac62916",null),L=I.exports;const j=[{id:"12312",username:"法盲张三",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-11-1 19:00:00",title:"何劳荣一案，到底谁是真正的主谋？个人理解，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家",view:"6.1w",dianzan:"372",comment:"271",isview:!1},{id:"21321312",username:"暴力美学",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",content:"王大父杀人案   被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念:2002年3月18日晚8时资;被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往。被告人王大雷对被告人王卫等四人说:“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产。你们帮我教训他一顿。生意作成了一定给你们好处。”随后，王大雷让王卫等人听候消息。次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫。王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处。王大雷说:“我那位老乡9点多钟才回来，被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念：2002年年3月18日晚8时资；被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往.被告人王大雷对被告人王卫等四人说：“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产.你们帮我教训他一顿.生意作成了一定给你们好处.“随后，王大雷让王卫等人听候消息.次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫.王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处.王大雷说：我那位老乡9点多钟才回来",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"264556",username:"文武双全",userImage:"",publishImage:"",publishTime:"2022-10-03 19:00:00",title:"类案匹配模糊，如何扩大精准范围？",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"4374376",username:"纸上阡陌",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",publishImage:"https://tva1.sinaimg.cn/large/008cs7isly8h88hfgvz1qj31ao0t6n3x.jpg",publishTime:"2022-11-2 19:00:00",title:"CLF平台的搭建一体化流程文档",category:"类案",tags:["项目创建","CLF"],content:"# CLF项目介绍\n一个专为法律人打造的社交、辩论，答疑平台，基于智能文本抽取算法，可以进行文本抽取，文案生成，法律辩论和信息检索\n\n## 业务架构\n![image](https://tva2.sinaimg.cn/large/008cs7isly8h868p6sbtoj313x0u0dja.jpg)\n\n\n## 技术架构\n前端技术架构主要为Vue2项目，具体技术栈如下：\n\n- Vue2（框架）\n- Vuex（状态管理）\n- Vue-router（路由管理）\n- ElementUI（组件库）\n- Sass（CSS语法扩展）\n- Axios（ajax请求封装库）\n\n优化技术：\n\n- NProgress（微进度条）\n- iconfont(阿里矢量图标库)\n- mavon-editor（markdown编辑器）\n\n工具：\n\n- VScode\n- [新浪图床](https://pic.gimhoy.com/)\n\n## 项目搭建\n\n- 依赖安装\n\n\n## 前端业务模块设计\n\n\n\n## 版本\n1.0.0\n\n## 部署\n\n部署链接：\n\nhttps://victinsever.github.io/MIPT/dist/index.html\n\n百度网盘链接：\n\n暂未上传\n",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"5646",username:"暴力美学",publishTime:"2022-11-2 20:20:00",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"4325435",username:"暴力美学",publishTime:"2022-11-2 20:37:30",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"35453425",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"2343432",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"34435435",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1},{id:"5345",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",content:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",view:"10w",dianzan:"255",comment:"1000",isview:!1}],T=[{label:"全部",value:1},{label:"时事热议",value:2},{label:"经典案列",value:3},{label:"争议辩论",value:4}],k=[{label:"推荐",value:1},{label:"最新",value:2},{label:"热榜",value:3}],x=[{id:"1",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"},{id:"2",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"},{id:"3",userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"法盲张三"}];var S={name:"passagePage",components:{PassageItem:g,PassageSignIn:f,RecomList:L},data(){return{tags:T,order:k,passageList:[],recomList:x,tagActive:1,orderActive:1,loadTimes:0,isLoading:!1,page:{pageSize:5,pageNum:1}}},mounted(){window.addEventListener("scroll",this.handleScroll,!0),this.getData()},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{async getData(){this.isLoading||(this.isLoading=!0,setTimeout((()=>{this.passageList=this.passageList.concat(j),this.isLoading=!1}),500))},handleScroll(){window.pageYOffset+window.innerHeight>=document.body.offsetHeight-150&&(this.loadTimes++,this.page.pageNum++,this.getData())},handleChangeTagActive(e){this.tagActive=e},handleChangeOrderActive(e){this.orderActive=e,this.getData()}}},z=S,D=(0,u.Z)(z,s,n,!1,null,"294398fd",null),A=D.exports},75588:function(e,t,i){i.d(t,{V:function(){return p},F:function(){return g}});const s="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var n={randomUUID:s};let a;const r=new Uint8Array(16);function o(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const l=[];for(let d=0;d<256;++d)l.push((d+256).toString(16).slice(1));function c(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}function u(e,t,i){if(n.randomUUID&&!t&&!e)return n.randomUUID();e=e||{};const s=e.random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=s[e];return t}return c(s)}var m=u;const g=function(){return m().replaceAll("-","")},p=function(e,t=new Date){let i=Date.parse(new Date(e)),s=Date.parse(new Date(t)),n=parseInt((s-i)/864e5);if(n>356)return n%356+"年前";if(n>30)return n%30+"月前";if(n>7)return n%7+"周前";if(n>1)return n+"天前";{let e=parseInt((s-i)/36e5);if(e>=1)return e+"小时前";{let e=parseInt((s-i)/6e4);return e>=1?e+"分钟前":"刚刚"}}}}}]);
//# sourceMappingURL=394.04343553.js.map