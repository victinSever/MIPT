<template>
  <div class="commentComponent">
    <div class="comment">
      <div class="input-header header">
        <h3>评论</h3>
      </div>
      <div class="input-box">
        <div class="left-box">
          <el-image :src="user.userImage" v-if="user.userImage"></el-image>
          <div class="empty" v-else>
            <span class="iconfont icon-person"></span>
          </div>
        </div>
        <div class="right-box" v-if="user">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="输入评论，发表自己的见解（Enter换行）"
            v-model="commentText"
          >
          </el-input>
          <div class="edit-btns">
            <el-button
              :class="commentText ? '' : 'unpublish'"
              size="medium"
              round
              type="primary"
              >发表评论</el-button
            >
          </div>
        </div>
        <div class="right-box-empty" @click="handleLogin" v-else>
          <p><el-link type="primary">登录</el-link> 后发表自己的看法！</p>
        </div>
      </div>
    </div>
    <div class="allComment">
      <div class="comment-header header">
        <h3>全部评论</h3>
      </div>
      <div class="comment-list" v-if="comments.length !== 0">
        <CommentItem :data="item" v-for="item in comments" :key="item.id" />
      </div>
      <div class="comment-empty" v-else>
        <el-empty :image-size="150" description="该文章暂未有评论，快去发表自己的看法吧！"></el-empty>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/post/post-comment-item.vue";
export default {
  name: "commentComponent",
  components: { CommentItem },
  data() {
    const comments = [
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
    return {
      imageUrl:
        "https://tva3.sinaimg.cn/large/008cs7isly8h7u5on9iu5j30u00u0q5i.jpg",
      commentText: "",
      comments: comments,
    };
  },
  computed: {
    user() {
      return this.$store.state.user.token ? this.$store.state.user.userInfo : false;
    },
  },
  methods: {
    handleLogin() {
      console.log(1);
      this.$bus.$emit('handleLogin', true)
    }
  }
};
</script>

<style scoped lang='scss'>
.commentComponent {
  .header {
    margin-bottom: 2rem;

    h3 {
      color: #252933;
    }
  }

  .comment {
    margin-bottom: 2rem;
    .input-box {
      display: flex;
      justify-content: space-between;

      .left-box {
        width: 4rem;

        .el-image, .empty{
          height: 3rem;
          width: 3rem;
          border-radius: 1.5rem;
          
        }

         .empty{
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: #eff0f3;

          span{
            font-size: 2.8rem;
            color: #c7c8ca;
          }
         }
      }

      .right-box {
        width: 90%;
        // background-color: #f2f3f5;

        /deep/.el-textarea__inner {
          background-color: #f2f3f5;
          border: 1px solid transparent;
          color: #252933;
          font-family: "微软雅黑";
        }

        /deep/.el-textarea__inner::placeholder {
          color: #8a919f;
        }

        /deep/.el-textarea__inner:focus {
          background-color: #fff;
          border: 1px solid #409eff;
        }

        .edit-btns {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;

          .unpublish {
            background-color: #ccc;
            border: #ccc;
          }
        }
      }

      .right-box-empty{
        cursor: pointer;
        background-color: #f2f3f5;
        width: 90%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
      }
    }
  }
}
</style>