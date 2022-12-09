<template>
  <div :class="'root' + (!isMDEditor ? ' midium' : '')">
    <div class="header">
      <div class="left">
        <input placeholder="输入标题..." class="title-input" v-model="title" />
      </div>
      <div class="right">
        <div class="session">
          <el-button
            type="primary"
            v-text="'发布'"
            round
            @click="handlePublish"
          ></el-button>
        </div>
        <div class="session">
          <span class="iconfont icon-change" @click="handleChangeEditor"></span>
        </div>
        <div class="session userImage">
          <el-image
            :src="user.userImage"
            title="个人中心"
            @click="handleGotoPerson"
          ></el-image>
        </div>
      </div>
    </div>

    <!-- 编辑器 -->
    <div class="main">
      <MavonEditor v-if="isMDEditor" :content="content" ref="md" />
      <YkEditor v-else :getContent="getContent" :content="content" ref="yk" />
    </div>
  </div>
</template>

<script>
import YkEditor from "@/components/editor/yk-editor";
import MavonEditor from "@/components/editor/mavon-editor";
// import Upload from '@/components/upload/singleUpload';
export default {
  name: "editorPassage",
  components: { YkEditor, MavonEditor },
  data() {
    return {
      isMDEditor: true,
      content: "",
      title: "",
    };
  },
  computed: {
    user() {
      return JSON.parse(sessionStorage.getItem("userInfo")) || false;
    },
  },
  mounted() {
    //     ## promise浅析
    // ```javascript promise浅析
    // let a = async function() {
    //   return await new Promise(() => {
    //     resolve()
    //   )
    // }
  },
  methods: {
    // 进入个人页
    handleGotoPerson() {
      this.$router.push("/user");
    },

    // 切换编辑器
    handleChangeEditor() {
      let con = window.confirm(
        `确认将${this.isMDEditor ? "markdown" : "富文本"}编辑器转换为${
          !this.isMDEditor ? "markdown" : "富文本"
        }编辑器吗~~`
      );
      if (con) {
        this.isMDEditor = !this.isMDEditor;
      }
    },

    //发布
    handlePublish() {
      this.getContent();
      if (!this.isLegal()) return;

      this.$message.success("发布成功！文章正在审核中...");
      this.$nprogress.start();
      setTimeout(() => {
        this.$nprogress.done();
        this.$router.push({
          name: "essays",
          params: {
            title: this.title,
            content: this.content,
            publishTime: new Date().toLocaleDateString()
          },
        });
      }, 1000);
    },

    // 检验数据合法性
    isLegal() {
      if (!this.title || this.content.length < 10) {
        this.$notify({
          title: "警告",
          message: !this.title
            ? "你还没有输入文章标题"
            : "你的文章字数不足，继续丰富你的内容吧！",
          type: "warning",
          offset: 120,
          duration: 2000,
        });
        return false;
      }
      return true;
    },

    //获取子组件编辑器的的文章内容
    getContent() {
      if (this.isMDEditor) this.content = this.$refs.md.editorContent;
      else this.content = this.$refs.yk.editorContent;
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  height: 100%;

  .header {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title-input {
      height: 4rem;
      border: none;
      outline: none;
      font-size: 1.8rem;
      background-color: #f4f5f5;
      padding-left: 2rem;
    }

    .right {
      display: flex;
      align-items: center;

      .session {
        margin: 0 1rem;
        cursor: pointer;
      }

      .userImage {
        width: 3rem;
        overflow: hidden;
        border-radius: 50%;

        .el-image {
          transition: 0.4s;
          border-radius: 50%;
        }
      }

      .userImage:hover .el-image {
        transform: scale(130%);
      }
    }
  }
}

.midium {
  width: 50%;
  margin: 0 auto;
}
</style>