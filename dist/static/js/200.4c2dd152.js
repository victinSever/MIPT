"use strict";(self["webpackChunkmipt"]=self["webpackChunkmipt"]||[]).push([[200],{80200:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},[e("div",{staticClass:"sides"},[e("div",{staticClass:"executive table"},[e("h3",{domProps:{textContent:t._s("地域及法院")}}),e("ul",{staticClass:"infinite-list"},t._l(t.cateObj.executive,(function(s,a){return e("li",{key:a,staticClass:"infinite-list-item",on:{click:function(e){return t.handleSelectTag(s,"地域及法院")}}},[t._v(" "+t._s(s)+" ")])})),0)]),e("div",{staticClass:"timeliness table"},[e("h3",{domProps:{textContent:t._s("有效期")}}),e("ul",{staticClass:"infinite-list"},t._l(t.cateObj.timeliness,(function(s,a){return e("li",{key:a,staticClass:"infinite-list-item",on:{click:function(e){return t.handleSelectTag(s,"有效期")}}},[t._v(" "+t._s(s)+" ")])})),0)]),e("div",{staticClass:"category table"},[e("h3",{domProps:{textContent:t._s("法规类型")}}),e("ul",{staticClass:"infinite-list"},t._l(t.cateObj.category,(function(s,a){return e("li",{key:a,staticClass:"infinite-list-item",on:{click:function(e){return t.handleSelectTag(s,"类型")}}},[t._v(" "+t._s(s)+" ")])})),0)]),e("div",{staticClass:"legalDepartment table"},[e("h3",{domProps:{textContent:t._s("部门")}}),e("ul",{staticClass:"infinite-list"},t._l(t.cateObj.legalDepartment,(function(s,a){return e("li",{key:a,staticClass:"infinite-list-item",on:{click:function(e){return t.handleSelectTag(s,"部门")}}},[t._v(" "+t._s(s)+" ")])})),0)])]),e("div",{staticClass:"right-box"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-top"},[e("div",{staticClass:"tag-title"},[e("span",{domProps:{textContent:t._s("已选条件")}})]),e("div",{staticClass:"tag-btns"},[e("el-link",{attrs:{type:"danger",underline:!1},domProps:{textContent:t._s("清空搜索条件")},on:{click:t.handleClearTag}})],1)]),e("div",{staticClass:"tag-list"},t._l(t.selectTags,(function(s){return e("div",{key:s.label,staticClass:"tag-item"},[e("span",{staticClass:"label",domProps:{textContent:t._s(s.type+"："+s.label)}}),e("span",{staticClass:"iconfont icon-quxiao"})])})),0)]),e("div",{staticClass:"main"},[e("div",{staticClass:"header"},[e("div",{staticClass:"total-dis"},[t._v(" 共搜索到 "),e("span",{staticClass:"total"},[t._v(t._s(t.total))]),t._v(" 条信息 ")]),e("div",{staticClass:"top-divider"})]),e("LawList",{attrs:{lawList:t.lawList,keyword:t.keyword}}),e("div",{staticClass:"pagination-box"},[e("el-pagination",{staticClass:"pagination",attrs:{background:"","page-size":t.page.pageSize,"current-page":t.page.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:t.total,"page-sizes":[5,8,10,15,20]},on:{"current-change":t.handleChangePageNum,"size-change":t.handleChangePageSize}})],1)],1)])])},i=[],n=(s(57658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[0!==t.lawList.length?e("div",{staticClass:"law-list"},t._l(t.lawList,(function(s){return e("div",{key:s.id,staticClass:"law-item"},[e("div",{staticClass:"category"},[e("span",{domProps:{textContent:t._s(s.category)}})]),e("div",{staticClass:"info-main"},[e("div",{staticClass:"right-main"},[e("h3",{staticClass:"title",domProps:{innerHTML:t._s(t.highlight(s.title))},on:{click:function(e){return t.handleGotoLawContent(s.id)}}}),e("div",{staticClass:"base"},[e("span",{staticClass:"excetive",domProps:{textContent:t._s(s.executive)}}),e("span",{staticClass:"outgoing",domProps:{textContent:t._s(s.outgoing)}}),e("span",{staticClass:"publishDate",domProps:{textContent:t._s(t.spliceDate(s.publishDate))}})]),e("div",{staticClass:"display"},[e("div",{staticClass:"display-item",on:{click:t.handleTip}},[e("span",{staticClass:"iconfont icon-like"}),e("span",[t._v("收藏")])]),e("div",{staticClass:"display-item",on:{click:t.handleTip}},[e("span",{staticClass:"iconfont icon-clouddownload"}),e("span",[t._v("下载")])])])])])])})),0):t._e()])}),l=[],o={name:"lawListCompontent",props:{lawList:{type:Array,default:()=>[]},keyword:String},methods:{handleGotoLawContent(t){let e=this.$router.resolve({path:"/wenshu",query:{id:t}});window.open(e.href,"_blank")},handleTip(){this.$message.warning("敬请期待！")},spliceDate(t){return t.includes("T")?t.split("T")[0]:t},highlight(t){if(!this.keyword)return t;const e=t.split(this.keyword);return e.join(`<span style="color: red;">${this.keyword}</span>`)}}},c=o,r=s(1001),d=(0,r.Z)(c,n,l,!1,null,"996216de",null),p=d.exports;const g={code:200,msg:"",data:{executive:["机构沿革","贵州省人大(含常委会)","江苏省人大(含常委会)","重庆市人大(含常委会)","黑龙江省人大(含常委会)","浙江省人大(含常委会)"],timeliness:["现行有效","已被修改","失效","部分失效","尚未生效"],category:["省级地方性法规","设区的市地方性法规","法律","地方政府规章","经济特区法规","行政法规","自治条例和单行条例"],legalDepartment:["","行政法","民法商法","经济法","社会法","刑法","宪法相关法","诉讼与非诉讼程序法"]}},u={code:200,msg:"",data:{total:1e4,records:[{id:"636e8efad21eb61f445f7d79",title:"合理化建议和技术改进奖励条例已被修改",executive:"国务院",outgoing:"国发〔1982〕43号",publishDate:"1982-03-15T16:00:00.000+00:00",effectiveDate:"1982-03-15T16:00:00.000+00:00",timeliness:"已被修改",category:"行政法规",legalDepartment:"",contentCode:""},{id:"636e8efa2641149fffcde681",title:"征收排污费暂行办法失效",executive:"国务院",outgoing:"国发〔1982〕21号",publishDate:"1982-02-04T16:00:00.000+00:00",effectiveDate:"1982-06-30T16:00:00.000+00:00",timeliness:"失效",category:"行政法规",legalDepartment:"",contentCode:""}]}};var h={name:"lawPage",components:{LawList:p},data(){return{keyword:"",searchObj:{},cateObj:{},selectTags:[],lawList:[],total:0,page:{pageSize:5,pageNum:1}}},mounted(){this.getCateObj(),this.getLawList()},watch:{$route:{handler(){this.keyword=this.$route.query.key?this.$route.query.key:"",this.selectTags=this.selectTags.filter((t=>"关键词"!==t.type)),this.selectTags.push({type:"关键词",label:this.keyword})},immediate:!0}},methods:{handleSelectTag(t,e){this.selectTags=this.selectTags.filter((t=>e!==t.type)),this.selectTags.push({label:t,type:e})},handleClearTag(){this.selectTags=[]},handleChangePageNum(t){this.page.pageNum=t},handleChangePageSize(t){this.page.pageSize=t},async getCateObj(){this.cateObj=g.data},async getLawList(){this.lawList=u.data.records,this.total=u.data.total}}},C=h,m=(0,r.Z)(C,a,i,!1,null,"54e001f5",null),v=m.exports}}]);
//# sourceMappingURL=200.4c2dd152.js.map