"use strict";(self["webpackChunkmipt"]=self["webpackChunkmipt"]||[]).push([[769],{2088:function(t,s,e){e.d(s,{Z:function(){return r}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"postBtns"},t._l(t.btns,(function(e){return s("div",{key:e.id,class:"item"+(e.isClick?" active":""),on:{click:function(s){return t.handleClick(e.id)}}},[s("span",{class:"iconfont "+e.icon}),e.num?s("span",{staticClass:"bar",domProps:{textContent:t._s(e.num)}}):t._e()])})),0)},i=[],n={name:"postBtns",data(){const t=[{icon:"icon-31dianzan",id:0,isClick:!1,num:20},{icon:"icon-pinglun",id:1,isClick:!1,num:5},{icon:"icon-shoucang",id:2,isClick:!1},{icon:"icon-jubao",id:3,isClick:!1}];return{btns:t}},methods:{handleClick(t){switch(t){case 0:this.handleDianZanChange();break}},handleDianZanChange(){const t=this.btns[0].isClick;this.btns[0].num+=t?-1:1,this.btns[0].isClick=!t}}},o=n,c=e(1001),l=(0,c.Z)(o,a,i,!1,null,"50b08900",null),r=l.exports},35933:function(t,s,e){e.d(s,{Z:function(){return C}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"commentComponent"},[s("div",{staticClass:"comment"},[s("div",{staticClass:"input-box"},[s("div",{staticClass:"left-box"},[t.user.userImage?s("el-image",{attrs:{src:t.user.userImage}}):s("div",{staticClass:"empty"},[s("span",{staticClass:"iconfont icon-person"})])],1),t.user?s("div",{staticClass:"right-box"},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"输入评论，发表自己的见解（Enter换行）"},model:{value:t.commentText,callback:function(s){t.commentText=s},expression:"commentText"}}),s("div",{staticClass:"edit-btns"},[s("el-button",{class:t.commentText?"":"unpublish",attrs:{size:"medium",round:"",type:"primary"}},[t._v("发表评论")])],1)],1):s("div",{staticClass:"right-box-empty",on:{click:t.handleLogin}},[s("p",[s("el-link",{attrs:{type:"primary"}},[t._v("登录")]),t._v(" 后发表自己的看法！")],1)])])]),s("div",{staticClass:"allComment"},[t._m(0),0!==t.comments.length?s("div",{staticClass:"comment-list"},t._l(t.comments,(function(t){return s("CommentItem",{key:t.id,attrs:{data:t}})})),1):s("div",{staticClass:"comment-empty"},[s("el-empty",{attrs:{"image-size":150,description:"该文章暂未有评论，快去发表自己的看法吧！"}})],1)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"comment-header header"},[s("h3",[t._v("全部评论")])])}],n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"commentItem"},[s("div",{staticClass:"left-box"},[s("el-image",{attrs:{src:t.data.userInfo.userImage}})],1),s("div",{staticClass:"right-box"},[s("div",{staticClass:"top"},[s("span",{domProps:{textContent:t._s(t.data.userInfo.username)}})]),s("div",{staticClass:"main"},[s("p",{domProps:{textContent:t._s(t.data.content)}})]),s("div",{staticClass:"bottom"},[s("span",{staticClass:"iconfont icon-31dianzan"},[t._v(t._s(" "+(t.data.dianzan?t.data.dianzan:"点赞")))]),s("span",{staticClass:"iconfont icon-pinglun"},[t._v(t._s(" "+(t.data.comment?t.data.comment:"回复")))])]),t.data.children?s("div",{staticClass:"reply-list",style:"backgroundColor: "+(t.bgcColor?"#fff":"#f9fafb")},t._l(t.data.children,(function(e){return s("commentItem",{key:e.id,attrs:{data:e,bgcColor:!t.bgcColor}})})),1):t._e()])])},o=[],c={name:"commentItem",components:{commentItem:d},props:{data:Object||null,bgcColor:{type:Boolean,default:!1}}},l=c,r=e(1001),m=(0,r.Z)(l,n,o,!1,null,"014cc3ea",null),d=m.exports,u={name:"commentComponent",components:{CommentItem:d},data(){const t=[{id:"1",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",username:"逐光而行",level:2},content:"大佬好强！",dianzan:0,comment:0,publishTime:"2022-11-17 20:21:20"},{id:"2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"user1245632",level:1},content:"哈哈！",dianzan:2,comment:1,publishTime:"2022-11-12 20:21:20",children:[{id:"2-2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"逐光而行",level:2},content:"可以哈fgdsayh封神榜，。水电费2才对吧士大夫2得分的违法，3121发算法，21被怒重复的时刻！，打撒付会计师客服部vadjsf",dianzan:2,comment:0,publishTime:"2022-11-12 20:21:20"},{id:"225",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",username:"梦的方向",level:2},content:"大佬好强！23333333333333333333333333333333333333333333333",dianzan:23,comment:1,publishTime:"2022-11-17 20:21:20",children:[{id:"2-2-2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"三人行",level:2},content:"有点东西，但不多",dianzan:2,comment:0,publishTime:"2022-11-12 20:21:20"}]}]}];return{commentText:"",comments:t}},computed:{user(){return!!this.$store.state.user.token&&this.$store.state.user.userInfo}},methods:{handleLogin(){console.log(1),this.$bus.$emit("handleLogin",!0)}}},p=u,v=(0,r.Z)(p,a,i,!1,null,"1d63570e",null),C=v.exports},90451:function(t,s,e){e.r(s),e.d(s,{default:function(){return p}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"post"},[s("div",{staticClass:"post-innerbox"},[s("div",{staticClass:"post-left"},[s("div",{staticClass:"article card"},[s("h1",{domProps:{textContent:t._s("话题："+t.data.title)}}),s("div",{staticClass:"publishInfo"},[s("div",{staticClass:"left-box"},[t.data.userImage?s("el-image",{attrs:{src:t.data.userImage}}):s("el-image",{attrs:{src:"https://tva2.sinaimg.cn/large/008cs7isly8h88i9ec08sj30u00u379u.jpg"}})],1),s("div",{staticClass:"right-box"},[s("div",{staticClass:"top"},[s("span",{domProps:{textContent:t._s(t.data.username)}})]),s("div",{staticClass:"bottom"},[s("span",{staticClass:"publishTime",domProps:{textContent:t._s(t.data.publishTime)}}),t.data.view?s("span",{domProps:{textContent:t._s(" · 阅读")}}):t._e(),t.data.view?s("span",{staticClass:"views",domProps:{textContent:t._s(t.data.view)}}):t._e()])])]),t.data.discription?s("div",{staticClass:"discription"},[s("span",{staticClass:"discription-title",domProps:{textContent:t._s("概览")}}),t._v(" "+t._s(t.data.discription)+" ")]):t._e(),s("div",{staticClass:"topic-main"},[s("div",{staticClass:"topic-label"},[s("span",{staticClass:"order",domProps:{textContent:t._s(t.activeIndex+1)}}),s("span",{staticClass:"label",domProps:{textContent:t._s(t.activeTopic.title)}})])]),s("div",{staticClass:"comment-main"},[s("Comment")],1),s("div",{staticClass:"article-sort"},[s("div",{staticClass:"category"},[s("span",{staticClass:"article-cate"},[t._v("分类：")]),t.data.category?s("el-tag",{attrs:{type:"danger"},domProps:{textContent:t._s(t.data.category)}}):s("el-tag",{domProps:{textContent:t._s("暂无")}})],1),s("div",{staticClass:"tags"},[s("span",{staticClass:"article-tags"},[t._v("标签：")]),t.data.tags?s("span",t._l(t.data.tags,(function(e){return s("el-tag",{key:e,domProps:{textContent:t._s(e)}})})),1):s("el-tag",{domProps:{textContent:t._s("暂无")}})],1)])]),s("div",{staticClass:"comment card"})]),s("div",{staticClass:"post-right"},[s("div",{staticClass:"dir card"},[s("div",{staticClass:"topic-title"},[s("h3",{domProps:{textContent:t._s("争论点目录")}})]),0!==t.data.topics.length?s("div",{staticClass:"topic-list"},t._l(t.data.topics,(function(e,a){return s("div",{key:e.id,class:"topic-item"+(t.activeIndex==a?" active":""),on:{click:function(s){return t.handleChangeActive(e,a)}}},[s("h3",{staticClass:"title"},[s("span",{staticClass:"order"},[s("el-tag",{attrs:{type:"danger",size:"small"},domProps:{textContent:t._s("论点"+(a+1))}})],1),s("span",{staticClass:"label",domProps:{textContent:t._s(e.title)}})])])})),0):t._e()])]),s("div",{staticClass:"article-suspended-panel"},[s("CommentBtns")],1)])])},i=[],n=e(35933),o=e(2088);const c={username:"狂徒张三",userImage:"",publishTime:"2022-11-11 11:11:11",view:1111,title:"何劳荣一案，谁是最大的获益者？",discription:"合理化建议和技术改进奖励条例 （国发[1982]43号 一九八二年三月十六日国 务院颁布） 第一章 总 则 第一条 为了鼓励职工积极提合理化建议，努力进行技术革新，促进国 民经济的发展，加快社会主义现代化建设，制定本条例。 第二条 凡是职工（集体或个人）提出的有关改 进生产的合理化建议或技术改进，经过实验研究和实际应用，使某一单位的生产或工作取得显著效益的，均按 本条例给予奖励。 第三条 合理化建议和技术改进的内容包括以下各类： （一） 工业产品、建筑结 构的改进和质量的提高，生物品种的改良和发展，以及发展新产品。 ",category:"刑事案件",tags:["争议焦点","典型"],topics:[{id:"0",title:"谁是主谋？"},{id:"1",title:"既得利益者"},{id:"2",title:"反映社会现实"},{id:"3",title:"不同立场的社会观念不同"}]},l=[{id:"1",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",username:"逐光而行",level:2},content:"大佬好强！",dianzan:0,comment:0,publishTime:"2022-11-17 20:21:20"},{id:"2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"user1245632",level:1},content:"哈哈！",dianzan:2,comment:1,publishTime:"2022-11-12 20:21:20",children:[{id:"2-2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"逐光而行",level:2},content:"可以哈fgdsayh封神榜，。水电费2才对吧士大夫2得分的违法，3121发算法，21被怒重复的时刻！，打撒付会计师客服部vadjsf",dianzan:2,comment:0,publishTime:"2022-11-12 20:21:20"},{id:"225",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",username:"梦的方向",level:2},content:"大佬好强！23333333333333333333333333333333333333333333333",dianzan:23,comment:1,publishTime:"2022-11-17 20:21:20",children:[{id:"2-2-2",userInfo:{userImage:"https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",username:"三人行",level:2},content:"有点东西，但不多",dianzan:2,comment:0,publishTime:"2022-11-12 20:21:20"}]}]}];var r={naem:"topicPage",components:{Comment:n.Z,CommentBtns:o.Z},data(){return{data:{},activeTopic:{},activeIndex:0,commentList:l}},created(){this.data=c,this.activeTopic=0!==c.topics.length?c.topics[0]:{},this.activeIndex=0},methods:{handleChangeActive(t,s){this.activeIndex=s,this.activeTopic=t}}},m=r,d=e(1001),u=(0,d.Z)(m,a,i,!1,null,"618ff3ee",null),p=u.exports}}]);
//# sourceMappingURL=769.d89024fd.js.map