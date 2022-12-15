<template>
  <div class="post">
    <div class="post-innerbox">
      <div class="post-left">
        <div class="article card">
          <!-- 文章标题 -->
          <h1 v-text="data.title"></h1>

          <!-- 发布信息 -->
          <div class="publishInfo">
            <div class="left-box">
              <el-image :src="data.userImage" v-if="data.userImage"></el-image>
              <el-image
                src="https://tva2.sinaimg.cn/large/008cs7isly8h88i9ec08sj30u00u379u.jpg"
                v-else
              ></el-image>
            </div>
            <div class="right-box">
              <!-- 一般信息 -->
              <div class="top">
                <span v-text="data.username"></span>
              </div>
              <div class="bottom">
                <span class="publishTime" v-text="data.publishTime"></span>
                <span v-if="data.view" v-text="' · 阅读'"></span>
                <span class="views" v-if="data.view" v-text="data.view"></span>
              </div>
            </div>
          </div>

          <!-- 话题内容 -->
          <div class="article-content markdown-body" v-if="data.topics.length !== 0">
            <div class="topic-item" v-for="(item, index) in data.topics" :key="item.id">
                <h3 class="title">
                    <span class="order" v-text="'争论点' + (index + 1)"></span>
                    <span class="label" v-text="item.title"></span>
                </h3>
            </div>
          </div>

          <!-- 文章分类 -->
          <div class="article-sort">
            <!-- 分类 -->
            <span class="article-cate">分类：</span>
            <el-tag
              v-if="data.category"
              v-text="data.category"
              type="danger"
            ></el-tag>
            <el-tag v-else v-text="'暂无'"></el-tag>
            <span class="article-tags">标签：</span>
            <span v-if="data.tags">
              <el-tag
                v-for="item in data.tags"
                :key="item"
                v-text="item"
              ></el-tag>
            </span>
            <el-tag v-else v-text="'暂无'"></el-tag>
          </div>
        </div>
        <div class="comment card">
          <PostComment />
        </div>
      </div>
      <div class="post-right card"></div>

      <div class="article-suspended-panel">
        <PostBtns />
      </div>
    </div>
  </div>
</template>

<script>
import PostComment from "@/components/post/post-comment.vue";
import PostBtns from "@/components/post/post-btns.vue";
const topicData = {
  username: "狂徒张三",
  userImage: "",
  publishTime: "2022-11-11 11:11:11",
  view: 1111,
  title: "何劳荣一案，谁是最大的获益者？",
  discription:
    "合理化建议和技术改进奖励条例 （国发[1982]43号 一九八二年三月十六日国 务院颁布） 第一章 总 则 第一条 为了鼓励职工积极提合理化建议，努力进行技术革新，促进国 民经济的发展，加快社会主义现代化建设，制定本条例。 第二条 凡是职工（集体或个人）提出的有关改 进生产的合理化建议或技术改进，经过实验研究和实际应用，使某一单位的生产或工作取得显著效益的，均按 本条例给予奖励。 第三条 合理化建议和技术改进的内容包括以下各类： （一） 工业产品、建筑结 构的改进和质量的提高，生物品种的改良和发展，以及发展新产品。 ",
  category: "刑事案件",
  tags: ["争议焦点", "典型"],
  topics: [
    { id: "0", title: "谁是主谋？" },
    { id: "1", title: "既得利益者" },
    { id: "2", title: "反映社会现实" },
    { id: "3", title: "不同立场的社会观念不同" },
  ],
};
export default {
  naem: "topicPage",
  components: { PostBtns, PostComment },
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.data = topicData
  },
};
</script>

<style scoped lang='scss'>



.post {
  width: 100%;

  .post-innerbox {
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    .card {
      border-radius: 0.5rem;
      background-color: #fff;
    }

    .post-left {
      width: 75%;
      overflow: hidden;

      .article {
        padding: 2.67rem;

        .publishInfo {
          display: flex;
          justify-content: space-between;
          margin: 1rem 0;

          .left-box {
            width: 3rem;

            .el-image {
              height: 2.5rem;
              width: 2.5rem;
              border-radius: 1.5rem;
            }
          }

          .right-box {
            width: 92%;
            font-size: 0.9rem;
            color: #8a919f;

            .top {
              height: 1.2rem;
              font-size: 1rem;
              color: #252933;
            }

            .bottom {
              margin-top: 0.5rem;

              .iconfont {
                font-size: 0.9rem;
                margin-right: 1rem;
              }
            }

            .reply-list {
              margin-top: 1rem;
              padding: 1.5rem;
              border-radius: 1rem;
            }
          }
        }

        .article-image {
          margin-bottom: 1rem;
        }

        .article-sort {
          font-size: 0.8rem;
          margin: 1rem 0;

          .el-tag {
            margin-right: 0.5rem;
          }
        }
      }

      .comment {
        min-height: 20vh;
        margin-top: 20px;
        padding: 2.67rem;
      }
    }

    .post-right {
      width: 23%;
      border-radius: 0.5rem;
    }

    .article-suspended-panel {
      position: fixed;
      margin-left: -7rem;
      top: 140px;
      z-index: 2;
    }
  }
}

@media screen and (max-width: 1180px) {
  .post .post-innerbox {
    width: 95%;

    .post-left {
      width: 100%;
    }
    .post-right {
      display: none;
    }
  }
}
</style>