<template>
  <div class="course">
    <div class="innerBox">
      <!-- 左侧 -->
      <div class="main-content card">
        <div class="content">
          <!-- 标签选择区 -->
          <div class="content-btns">
            <!-- 课程种类标签 -->
            <div class="cate-tags">
              <span class="tag-title" v-text="'分类：'"></span>
              <el-tag 
              plain size="medium" 
              v-for="item in courseCategoryTags" 
              :class="'tag-item' + (activeCategoryTag == item.id ? ' active' : '')"              
              :key="item.id" 
              v-text="item.label"
              @click="handleChangeCategoryTags(item.id)"
              ></el-tag>
            </div>

            <el-divider></el-divider>
            <!-- 课程排序类型标签 -->
            <div class="order-tags">
              <el-link 
              :underline="false"
              v-for="item in orderTags" 
              :class="'tag-item' + (activeOrderTag == item.id ? ' active' : '')"              
              :key="item.id" 
              v-text="item.label"
              @click="handleChangeOrderTags(item.id)"
              ></el-link>
            </div>
          </div>
          <!-- 内容区 -->
          <div class="content-list" v-if="courseList.length !== 0">
            <CourseItem v-for="item in courseList" :key="item.id" :data="item"/>
          </div>
          <div class="content-empty" v-else>
            <el-empty :image-size="150" description="暂时没有课程上架哦！"></el-empty>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="sides card">213</div>
    </div>
  </div>
</template>

<script>
import CourseItem from '@/components/course/course-item.vue';
export default {
  name: "CourseLearn",
  components: {CourseItem},
  data() {
    const courseCategoryTags = [
      { label: '全部', id: 0 },
      { label: '种类1', id: 1 },
      { label: '种类2', id: 2 },
      { label: '种类3', id: 3 },
      { label: '种类4', id: 4 },
      { label: '种类5', id: 5 },
    ]
    const orderTags = [
      { label: '全部', id: 0 },
      { label: '最新', id: 1 },
      { label: '最热', id: 2 },
      { label: '价格', id: 3 },
    ]
    const courseList = [
      {
        id: 0,
        courseImage: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40499743ab5642eba9c777bb809aaa73~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp?',
        courseTitle: '法律文书校验一站通关',
        courseDiscription: '文书生成，如何文书生成，手把手教你怎么打造一个文书系统',
        userInfo: {
          userImage: 'https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg',
          username: '狂徒张三',
          userLevel: 7,
        },
        salePrice: 79, //售卖价
        isDiscont: 1, //是否打折,1是，0不是
        discont: 0.7, //若打折，折扣
        salePersonCount: 423, //购买人数 ,
        vedioCount: 23, //章节数
        isFinish: false, //是否完结
        isBook: false //是否是book类型
      },
      {
        id: 1,
        courseImage: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40499743ab5642eba9c777bb809aaa73~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp?',
        courseTitle: '法律文书校验一站通关',
        courseDiscription: '文书生成，如何文书生成，手把手教你怎么打造一个文书系统',
        userInfo: {
          userImage: 'https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg',
          username: '狂徒张三',
          userLevel: 7,
        },
        salePrice: 79, //售卖价
        isDiscont: 1, //是否打折,1是，0不是
        discont: 0.7, //若打折，折扣
        salePersonCount: 423, //购买人数 ,
        vedioCount: 23, //章节数
        isFinish: false, //是否完结
        isBook: false //是否是book类型
      }
    ]
    return {
      courseCategoryTags,
      activeCategoryTag: 0,
      orderTags,
      activeOrderTag: 0,
      courseList
    }
  },
  methods: {
    handleChangeCategoryTags(id) {
      this.activeCategoryTag = id
    },
    handleChangeOrderTags(id) {
      this.activeOrderTag = id
    }
  }
};
</script>

<style scoped lang='scss'>
.course {
  .innerBox {
    width: 55%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    .main-content {
      width: 75%;

      .content {
        margin: 1.2rem 1rem;

        .content-btns{
          font-size: 0.9rem;
          padding-bottom: 1rem;

          .cate-tags{
            .tag-title{
              color: #777;
              // margin-right: 1.5rem;
            }

            .el-tag {
              margin: 0 0.5rem;
              font-size: 0.9rem;
              color: #777;
              cursor: pointer;
            }

            .el-tag:hover {
              color: #000;
            }

            .active {
              color: #fff;
              background-color: skyblue;
              pointer-events: none;
            }
          }

          .el-divider {
            margin: 1rem 0;
          }

          .order-tags {
            .el-link {
              margin-right: 1rem;
            }

            .active {
              color: #409eff;
            }
          }
        }
        
      }
    }

    .sides {
      width: 23%;
    }
  }

  .card {
    background-color: #fff;
    border-radius: .3rem;
  }
}
</style>