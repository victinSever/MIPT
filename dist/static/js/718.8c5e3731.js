"use strict";(self["webpackChunkmipt"]=self["webpackChunkmipt"]||[]).push([[718],{9718:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var i=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"scroll-lisener"}},[s("el-row",{staticClass:"header"},[s("el-col",{staticClass:"tag-list",attrs:{span:12,offset:6}},e._l(e.tags,(function(t){return s("span",{key:t.value,class:"tag-item"+(e.tagActive===t.value?" active":""),on:{click:function(s){return e.handleChangeTagActive(t.value)}}},[e._v(e._s(t.label))])})),0)],1),s("el-row",{staticClass:"main"},[s("el-col",{staticClass:"main-inner",attrs:{span:12,offset:6}},[s("el-col",{staticClass:"message-left"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"order-list"},e._l(e.order,(function(t){return s("span",{key:t.value,class:"order-item"+(e.orderActive===t.value?" active":""),on:{click:function(s){return e.handleChangeOrderActive(t.value)}}},[e._v(e._s(t.label))])})),0),0!==e.passage.length?s("div",{staticClass:"passage-list"},e._l(e.passage,(function(e){return s("PassageItem",{key:e.id,attrs:{item:e}})})),1):s("el-skeleton",{staticStyle:{"margin-top":"15px"}})],1)],1),s("el-col",{staticClass:"message-right"},[s("PassageSignIn"),e._l(e.advers,(function(e){return s("PassageAdver",{key:e.id,attrs:{data:e}})}))],2)],1)],1)],1)},a=[],n=function(){var e=this,s=e._self._c;return s("div",{class:"passage-item"+(e.item.isView?" viewed":"")},[s("div",{staticClass:"item-top"},[s("span",{staticClass:"username"},[e._v(e._s(e.item.username))]),s("span",[e._v("|")]),s("span",[e._v(e._s(e.passTime))])]),s("div",{staticClass:"item-main"},[s("h4",{staticClass:"title"},[e._v(e._s(e.item.title))]),s("p",{staticClass:"discription"},[e._v(e._s(e.item.discription))])]),s("div",{staticClass:"item-bottom"},[s("span",{staticClass:"iconfont icon-view"},[e._v(" "+e._s(" "+e.item.record.views))]),s("span",{staticClass:"iconfont icon-31dianzan"},[e._v(" "+e._s(" "+e.item.record.zan))]),s("span",{staticClass:"iconfont icon-pinglun"},[e._v(" "+e._s(" "+e.item.record.comments))])])])},l=[],r={name:"passageItem",props:["item"],computed:{passTime(){return this.getNumberOfDays(this.item.publishTime,new Date)}},methods:{getNumberOfDays(e,s){let t=Date.parse(new Date(e)),i=Date.parse(new Date(s)),a=parseInt((i-t)/864e5);if(a>356)return a%356+"年前";if(a>30)return a%30+"月前";if(a>7)return a%7+"周前";if(a>1)return a+"天前";{let e=parseInt((i-t)/36e5);if(e>=1)return e+"小时前";{let e=parseInt((i-t)/6e4);return e>=1?e+"分钟前":"刚刚"}}}}},c=r,o=t(1001),m=(0,o.Z)(c,n,l,!1,null,"69d8d799",null),d=m.exports,u=function(){var e=this,s=e._self._c;return s("el-card",{staticClass:"pass-signIn"},[s("div",{staticClass:"sigin-top"},[s("span",[s("span",{staticClass:"iconfont icon-rili"}),s("span",{staticClass:"welcome"},[e._v(e._s(e.welcome))])]),e.isLogin&&!e.isSignIn?s("el-button",{staticClass:"btn-sigin",attrs:{type:"primary",plain:"",round:""},on:{click:e.signIn}},[e._v("去签到")]):e._e(),e.isLogin&&e.isSignIn?s("el-tag",{attrs:{type:"primary"}},[e._v("签到成功！")]):e._e()],1),s("p",{staticClass:"text"},[e._v(e._s(e.isLogin?"把握每一天~~":"你还没有登录哦，登录可享更多权益"))])])},p=[],v={name:"passageSignIn",data(){return{isSignIn:!1}},computed:{welcome(){let e=(new Date).getHours();return e<=3||e>=22?"夜深了":e>3&&e<8?"早上好!":e>=8&&e<11?"上午好!":e>=11&&e<13?"中午好!":e>=13&&e<18?"下午好!":e>=18&&e<22?"晚上好!":""},isLogin(){let e=this.$store.state.user.token;return""!==e}},methods:{signIn(){this.$message.success("签到成功！天平 +5"),this.isSignIn=!0}}},g=v,h=(0,o.Z)(g,u,p,!1,null,"3d2956f7",null),w=h.exports,f=function(){var e=this,s=e._self._c;return s("div",{staticClass:"adver",on:{click:function(s){return e.gotoLink(e.data.link)}}},[s("el-image",{attrs:{src:e.data.imageUrl,fit:"contain"}}),s("span",{staticClass:"categoryName"},[e._v(e._s(e.categoryName))]),s("span",{staticClass:"el-icon-close"})],1)},_=[],b={name:"adverPage",props:["data"],computed:{categoryName(){switch(this.data.type){case 1:return"广告";case 2:return"活动";case 3:return"热点案例"}return""}},methods:{gotoLink(e){window.open(e,"_blank")}}},C=b,k=(0,o.Z)(C,f,_,!1,null,"0c3e7df6",null),T=k.exports,y={name:"passagePage",components:{PassageItem:d,PassageSignIn:w,PassageAdver:T},data(){const e=[{label:"全部",value:1},{label:"时事热议",value:2},{label:"经典案列",value:3},{label:"争议辩论",value:4}],s=[{label:"推荐",value:1},{label:"最新",value:2},{label:"热榜",value:3}],t=[{id:"12312",username:"法盲张三",publishTime:"2022-11-1 19:00:00",title:"何劳荣一案，到底谁是真正的主谋？个人理解，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家",record:{views:"6.1w",zan:"372",comments:"271"},isview:!1},{id:"21321312",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"王大父杀人案   被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念:2002年3月18日晚8时资;被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往。被告人王大雷对被告人王卫等四人说:“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产。你们帮我教训他一顿。生意作成了一定给你们好处。”随后，王大雷让王卫等人听候消息。次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫。王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处。王大雷说:“我那位老乡9点多钟才回来，被贵人王大霞因丕满李良才与其争变瓷砖生意:产生杀人恶念：2002年年3月18日晚8时资；被告人王大雷把雇请的丢卫、马本全召到其在四川省成都市的住处，被告人米军、付强受被告人王卫的邀约也一同前往.被告人王大雷对被告人王卫等四人说：“我有个老乡在跟我争夺销售瓷砖生意，这笔生意关系到我一辈子的命运，做不成我就要破产.你们帮我教训他一顿.生意作成了一定给你们好处.“随后，王大雷让王卫等人听候消息.次日晚8时许，王大雷探明了李良才的行踪，即挂电话告知王卫.王卫约上马本全、米军、付强，分别携带长刀、菜刀、木工锯、匕首来到王大雷住处.王大雷说：我那位老乡9点多钟才回来",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"264556",username:"文武双全",publishTime:"2022-10-03 19:00:00",title:"类案匹配模糊，如何扩大精准范围？",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"4374376",username:"暴力美学",publishTime:"2022-11-2 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"5646",username:"暴力美学",publishTime:"2022-11-2 20:20:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"4325435",username:"暴力美学",publishTime:"2022-11-2 20:37:30",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"35453425",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"2343432",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"34435435",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1},{id:"5345",username:"暴力美学",publishTime:"2022-10-25 19:00:00",title:"这里有一个简单辩论，大家交流一下",discription:"何劳荣， 山东人， 爱吃河粉，爱吃蔬菜，多运动，邵淑华，山西二年，杀害李某某一家321321311231321312",record:{views:"10w",zan:"255",comments:"1000"},isview:!1}],i=[{imageUrl:"https://tva4.sinaimg.cn/large/008cs7isly8h7u3052ugij30i20bj0ti.jpg",type:1,isView:!0,link:"http://www.baidu.com",id:"1"},{imageUrl:"https://himg2.huanqiucdn.cn/attachment2010/2018/1220/20181220083449260.jpg",type:2,isView:!0,link:"http://www.baidu.com",id:"2"},{imageUrl:"https://filekp.ccwb.cn/api/file/201912131733397R4WLUw.jpg",type:3,isView:!0,link:"http://www.baidu.com",id:"3"}];return{tags:e,order:s,passage:t,advers:i,tagActive:1,orderActive:1,loadTimes:0}},mounted(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,s=Math.floor(e/screen.height);console.log(e,screen.height,s),s>this.loadTimes&&(this.loadTimes++,console.log("临界次数+1"))},handleChangeTagActive(e){this.tagActive=e},handleChangeOrderActive(e){this.orderActive=e;let s=this.passage;this.passage=[],setTimeout((()=>{this.passage=s}),500)}}},I=y,z=(0,o.Z)(I,i,a,!1,null,"9ceb76bc",null),A=z.exports}}]);
//# sourceMappingURL=718.8c5e3731.js.map