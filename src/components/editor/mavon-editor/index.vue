<template>
  <div>
    <mavon-editor
      v-model="editorContent"
      @imgAdd="imgAdd"
      @imgDel="imgDel"
      class="mavon-editor"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容..",
    },
  },
  data() {
    return {
      editorContent: this.content,
      imgFile: [],
    };
  },
  methods: {
    ...mapActions("image", ["getImageUrl"]),
    // 绑定@imgAdd event
    async imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      this.imgFile[pos] = $file;
      try {
        const res = await this.getImageUrl(formdata);
        console.log(res);
        // .then((res) => {
        //   let _res = res.data;
        //   // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        //   this.$refs.md.$img2Url(pos, _res.url);
        // });
      } catch (err) {
        this.$message.error(err);
      }
    },
    imgDel(pos) {
      delete this.imgFile[pos];
    },
  },
};
</script>

<style scoped lang='scss'>
.mavon-editor {
    height: 92vh;
  }
</style>