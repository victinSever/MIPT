<template>
  <div id="ykEditor">
    <ckeditor
      id="ckeditor"
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";

export default {
  name: "ClassicEditor",

  components: {
    //局部注册方式
    ckeditor: CKEditor.component,
  },

  props: {
    content: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
  },

  data() {
    return {
      // Use the <ckeditor> component in this view.
      editor: ClassicEditor,
      editorData: this.content,
      editorConfig: {
        placeholder: this.placeholder,
        language: "zh-cn",
        //该方式本人没有使用过,使用ckfinder上传时要注意返回的格式
        //应该是{"uploaded":1,"url":"/"}
        //或者{"uploaded":true,"url":"/"}
        ckfinder: {
          uploadUrl: "/",
          options: {
            resourceType: "Images",
          },
        },
      },
    };
  },

  methods: {
    getContent() {
      return this.editorData;
    },

    setContent(val) {
      this.editorData = val;
    },
  },
};
</script>

<style>
.ck-editor__editable {
  min-height: 85vh;
}
</style>

