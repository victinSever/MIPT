<template>
  <div class="root">
    <header>
      <div class="inner">
        <div class="header-left">
          <div class="left-session" @click="$router.push({ name: 'home' })">
            <span class="iconfont icon-home"></span>
            <span class="home">首页</span>
          </div>
          <div class="left-session">
            <span class="iconfont icon-gouwuchekong"></span>
            <span>购物车</span>
          </div>
        </div>
        <div class="header-right">
          <div class="user">
            <el-image
              :src="user.userImage"
              alt=""
              v-if="user.userImage"
              @click="$router.push({ name: 'user' })"
            />
            <el-button
              type="primary"
              plain
              size="small"
              class="user-login-register"
              @click="handleLogin"
              v-else
            >
              <span>登录</span>
              <span>|</span>
              <span>注册</span>
            </el-button>
          </div>
        </div>
      </div>
    </header>

    <div class="banner">
      <div class="inner">
        <div class="search-box">
          <div class="logo-box">
            <span class="logo">CLF</span>
          </div>
          <div class="input-box">
            <el-input placeholder="输入商品宝贝" v-model="keyword">
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="HandleSearch"
              ></el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <main>
      <div class="inner">
        <div class="category">
          <div class="category-title">
            <span v-text="'分类'"></span>
          </div>
          <div class="category-list">
            <div
              class="category-item"
              v-for="item in categoryList"
              :key="item.id"
            >
              <span v-text="item.label" class="category-header"></span>
              <div class="category-content" v-if="item.children">
                <span
                  v-text="item1.label"
                  v-for="item1 in item.children"
                  :key="item1.id"
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div class="shop">
          <ShopList :shopList="shopList" v-if="shopList.length !== 0" />
          <el-skeleton v-else-if="isloading"></el-skeleton>
          <el-empty v-else description="商品正在陆续上架中"></el-empty>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import ShopList from "@/components/shop/shop-list.vue";
const categoryList = [
  {
    id: "1",
    label: "书籍",
    children: [
      { id: "11", label: "文书" },
      { id: "12", label: "法考" },
    ],
  },
  {
    id: "2",
    label: "课程",
    children: [
      { id: "21", label: "完结" },
      { id: "22", label: "更新中" },
    ],
  },
];
const shopList = [
  {
    id: "0",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "1",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "2",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "3",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "4",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "5",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
    {
    id: "6",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "7",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
  {
    id: "8",
    imageUrl:
      "https://gw.alicdn.com/bao/uploaded/i3/1780469908/O1CN01g7RwvA2N3v1IGO8MA_!!0-item_pic.jpg_300x300q90.jpg",
    title: "xxxxx",
    price: 39.8,
  },
];
export default {
  name: "AroundShop",
  components: { ShopList },
  data() {
    return {
      keyword: "",
      categoryList,
      total: 10,
      page: {
        pageSize: 5,
        pageNum: 1,
      },
      isloading: false,
      shopList: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user.token
        ? this.$store.state.user.userInfo
        : false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.getData();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getData() {
      if(this.isloading) return
      this.isloading = true;
      setTimeout(() => {
        this.isloading = false;
        this.shopList = this.shopList.concat(shopList);
      }, 500);
    },
    handleScroll() {
      let move = window.pageYOffset
      let screen = window.innerHeight 
      let maxScreen = document.body.offsetHeight      
      const left =  maxScreen - screen - move
      if (left < 50) {
        this.page.pageNum++;
        this.getData();
      }
    },
    handleLogin() {
      this.$bus.$emit("handleLogin", true);
    },
    HandleSearch() {},
  },
};
</script>

<style scoped lang='scss'>
.inner {
  width: 80rem;
  margin: 0 auto;
}

header {
  height: 3rem;
  background-color: #fff;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header-left {
    display: flex;

    .left-session {
      margin-right: 2rem;
      cursor: pointer;

      .iconfont {
        margin-right: 0.5rem;
      }
    }

    .left-session:hover {
      color: var(--bgc-clr1);
    }
  }

  .header-right {
    height: 100%;

    .user {
      display: flex;
      height: 100%;
      align-items: center;
    }
    .el-image {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}

.banner .inner {
  margin-top: 1rem;
  border-radius: 1rem;

  .search-box {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;

    .logo-box {
      width: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        font-family: "华文行楷";
        color: #1e80ff;
        font-size: 3rem;
        cursor: pointer;
        transition: 0.4s;
      }
    }

    .input-box {
      .el-input {
        width: 40rem;

        /deep/input {
          border-radius: 1rem 0 0 1rem;
        }

        /deep/.el-input-group__append {
          border-radius: 0 1rem 1rem 0;
        }
      }
    }
  }
}

main .inner {
  min-height: 90vh;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;

  .category {
    width: 70%;
    margin: 0 auto;
    padding-top: 3rem;
    margin-bottom: 2rem;

    .category-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .category-list {
      display: flex;
      flex-direction: column;

      .category-item {
        display: flex;
        margin: 1rem 0;

        .category-header {
          margin-right: 2rem;
          color: var(--grey-font-1);
        }

        .category-content {
          span {
            margin-right: 2rem;
            cursor: pointer;
          }

          span:hover {
            color: var(--pink-1);
          }
        }
      }
    }
  }
}
</style>