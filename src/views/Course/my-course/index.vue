<template>
  <div class="root">
    <div class="course-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-user"
        mode="horizontal"

        router=""
      >
        <el-menu-item
          :index="item.index"
          :route="item.index"
          v-for="item in menuList"
          :key="item.id"
          v-text="item.label"
        ></el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <div class="my-course" v-if="isMyCourse">
        <div class="course-list" v-if="couresList">
        <div class="course-item" v-for="item in couresList" :key="item.id">
          <el-image :src="item.imageUrl" alt=""></el-image>
          <div class="course-info">
            <div class="title">
              <p v-text="item.title"></p>
            </div>
             <div class="progress">
              <p v-text="'已学习' + item.progress * 100 + '%'"></p>
            </div>
          </div>
        </div>
      </div>
      <el-empty v-else></el-empty>
      </div>
      <div class="history" v-else>
        <el-empty></el-empty>
      </div>
    </div>
  </div>
</template>

<script>
const menuList = [
  { id: "1", label: "我的课程", index: "/my-course" },
  { id: "2", label: "浏览记录", index: "/my-course?tableType=1" },
];

const couresList = [
  {id: '21', imageUrl: 'https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg',
  title: 'ClF', progress: 0.01}
]

export default {
  name: "myCourse",
  data() {
    return {
      menuList,
      activeIndex: "/my-course",
      couresList
    };
  },

  computed: {
    isMyCourse() {
      return !this.$route.query.tableType
    }
  },
  handleSelect(key) {
    if (this.$route.name.includes(key)) return;
    this.$router.push({ name: key });
  },
};
</script>

<style scoped lang='scss'>
.root {
  width: 60rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.main{
  min-height: 90vh;
  background-color: #fff;
  padding: 1rem 2rem;

  .course-list{
    display: flex;
    flex-wrap: wrap;

    .course-item {
      width: 12rem;
      justify-content: flex-start;
      background-color: var(--bgc-clr8);
      border-radius: 1rem;

      .el-image{
        width: 100%;
        cursor: pointer;
      }

      .course-info{
        margin-top: 1rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        .title{
          font-size: 1.2rem;
          cursor: pointer;
        }

        .title:hover{
          color: var(--bgc-clr2);
        }

        .progress{
          color: var(--grey-font-1);
          margin: 0.5rem 0;
        }
      }
    }
  }
}
</style>