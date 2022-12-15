<template>
  <div :class="'root' + (!isMDEditor ? ' midium' : '')">
    <div class="header">
      <div class="left">
        <input placeholder="输入标题..." class="title-input" v-model="title" />
      </div>
      <div class="right">
        <div class="session">
          <el-popover
            placement="bottom-start"
            trigger="click"
            :offset="-450"
          >
            <el-button
              type="primary"
              v-text="'发布'"
              round
              @click="getContent()"
              slot="reference"
            ></el-button>
            <EditPublish :content="content" :title="title"/>
          </el-popover>
        </div>
        <div class="session">
          <el-tooltip
            class="item"
            effect="dark"
            :content="isMDEditor ? '转为富文本编辑器' : '转为markdown编辑器'"
            placement="top-end"
          >
            <span
              class="iconfont icon-change"
              @click="handleChangeEditor"
            ></span>
          </el-tooltip>
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
      <MavonEditor v-if="isMDEditor"  :content="content" ref="md" />
      <YkEditor v-else :content="content" ref="yk" />
    </div>
  </div>
</template>

<script>
import YkEditor from "@/components/editor/yk-editor";
import MavonEditor from "@/components/editor/mavon-editor";
import EditPublish from "@/components/editor/edit-publish";
// import Upload from '@/components/upload/singleUpload';
export default {
  name: "editorPassage",
  components: { YkEditor, MavonEditor, EditPublish },
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
        this.getContent() 
        this.isMDEditor = !this.isMDEditor;
      }
    },

    //获取子组件编辑器的的文章内容
    getContent() {
      if (this.isMDEditor) this.content = this.$refs.md.editData;
      else this.content = this.$refs.yk.editorData;
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

    .left {
      width: calc(50% - 2rem);
      padding-left: 2rem;

      .title-input {
        height: 4rem;
        border: none;
        outline: none;
        font-size: 1.8rem;
        width: 100%;
      }
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