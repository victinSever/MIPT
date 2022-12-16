<template>
  <div class="post">
    <div class="post-innerbox">
      <div class="post-left">
        <div class="article card">
          <!-- 文章标题 -->
          <h1 v-text="'话题：' + data.title"></h1>

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

          <div class="discription" v-if="data.discription">
              <span v-text="'概览'" class="discription-title"></span>
              {{data.discription}}
          </div>

          <!-- 话题内容 -->
          <div class="topic-main">
            <div class="topic-label">
              <span class="order" v-text="activeIndex + 1"></span>
              <span class="label" v-text="activeTopic.title"></span>
            </div>
          </div>
          <div class="comment-main">
            <Comment />
          </div>

          <!-- 文章分类 -->
          <div class="article-sort">
            <!-- 分类 -->
            <div class="category">
              <span class="article-cate">分类：</span>
              <el-tag
                v-if="data.category"
                v-text="data.category"
                type="danger"
              ></el-tag>
              <el-tag v-else v-text="'暂无'"></el-tag>
            </div>
            <div class="tags">
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
        </div>
        <div class="comment card">
          
        </div>
      </div>
      <div class="post-right">
        <div class="dir card">
          <div class="topic-title">
            <h3 v-text="'争论点目录'"></h3>
          </div>
          <div class="topic-list" v-if="data.topics.length !== 0">
            <div
              :class="'topic-item' + (activeIndex == index ? ' active' : '')"
              v-for="(item, index) in data.topics"
              :key="item.id"
              @click="handleChangeActive(item,index)"
            >
              <h3 class="title">
                <span class="order">
                  <el-tag
                    type="danger"
                    size="small"
                    v-text="'论点' + (index + 1)"
                  ></el-tag>
                </span>
                <span class="label" v-text="item.title"></span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="article-suspended-panel">
        <CommentBtns />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/post/post-comment.vue";
import CommentBtns from "@/components/post/post-btns.vue";
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
   const commentList = [
      {
        id: "1",
        userInfo: {
          userImage:
            "https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",
          username: "逐光而行",
          level: 2,
        },
        content: "大佬好强！",
        dianzan: 0,
        comment: 0,
        publishTime: "2022-11-17 20:21:20",
      },
      {
        id: "2",
        userInfo: {
          userImage:
            "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
          username: "user1245632",
          level: 1,
        },
        content: "哈哈！",
        dianzan: 2,
        comment: 1,
        publishTime: "2022-11-12 20:21:20",
        children: [
          {
            id: "2-2",
            userInfo: {
              userImage:
                "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
              username: "逐光而行",
              level: 2,
            },
            content: "可以哈fgdsayh封神榜，。水电费2才对吧士大夫2得分的违法，3121发算法，21被怒重复的时刻！，打撒付会计师客服部vadjsf",
            dianzan: 2,
            comment: 0,
            publishTime: "2022-11-12 20:21:20",
          },
          {
            id: "225",
            userInfo: {
              userImage:
                "https://tva3.sinaimg.cn/large/008cs7isly8h88fjfp7lzj30730730sv.jpg",
              username: "梦的方向",
              level: 2,
            },
            content: "大佬好强！23333333333333333333333333333333333333333333333",
            dianzan: 23,
            comment: 1,
            publishTime: "2022-11-17 20:21:20",
            children: [
              {
                id: "2-2-2",
                userInfo: {
                  userImage:
                    "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
                  username: "三人行",
                  level: 2,
                },
                content: "有点东西，但不多",
                dianzan: 2,
                comment: 0,
                publishTime: "2022-11-12 20:21:20",
              },
            ],
          },
        ],
      },
    ];
export default {
  naem: "topicPage",
  components: { Comment,CommentBtns },
  data() {
    return {
      data: {},
      activeTopic: {},
      activeIndex: 0,
      commentList:commentList
    };
  },
  created() {
    this.data = topicData;
    this.activeTopic = topicData.topics.length !== 0 ? topicData.topics[0] : {};
    this.activeIndex = 0
  },
  methods: {
    handleChangeActive(item, index) {
      this.activeIndex = index
      this.activeTopic = item
    }
  }
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

        .discription{
          margin-bottom: 2rem;
          line-height: 1.5;

          .discription-title{
            color: var(--grey-font-1);
          }
        }

        .topic-main{
          margin-bottom: 2rem;
          .topic-label{
            height: 2.5rem;
            line-height: 2.5rem;

            .order{
              display: inline-block;
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              background: linear-gradient(90deg, var(--bgc-clr2), var(--bgc-clr1));
              margin-right: 1rem;
              text-align: center;   
              border: 0.1rem solid var(--pink-1);     
              color: #fff;
              font-size: 1.5rem;
            }

            .label{
              font-size: 1.3rem;
            }
          }
        }

        .comment{
        }

        .article-sort {
          font-size: 0.8rem;
          margin: 1rem 0;
          display: flex;

          .el-tag {
            margin-right: 0.5rem;
          }

          .category {
            margin-right: 1rem;
          }
        }
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

.dir {
  padding: 1rem 0;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem var(--box-bg-shadow);

  .topic-title {
    line-height: 2rem;
    padding: 0 1rem;
    border-bottom: 0.1rem solid var(--bgc-clr6);
  }

  .topic-list {
    padding: 0 1rem;

    .topic-item {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      .order {
        margin-right: 0.5rem;
      }

      .label {
        font-weight: normal;
        font-size: 1rem;
      }
    }

    .topic-item:hover {
      background-color: var(--bgc-clr8);
      .label {
        color: var(--bgc-clr2);
      }
    }

    .active{
      .label{
        color: var(--pink-1);
      }
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