<template>
  <div class="root">
    <el-form :model="topicForm" ref="topicForm" :rules="topicRules" label-width="110">
      <el-form-item prop="title" label="话题标题">
        <el-input
          placeholder="输入话题标题"
          v-model="topicForm.title"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item prop="discription" label="话题描述">
        <el-input
          placeholder="输入话题、案件描述"
          v-model="topicForm.discription"
          type="textarea"
          :rows="8"
        ></el-input>
      </el-form-item>
      <el-form-item prop="category" label="话题分类">
        <el-select v-model="topicForm.category" placeholder="请选择分类">
          <el-option
            v-for="item in categoryList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="tags" label="话题标签">
        <el-select
          v-model="topicForm.tags"
          multiple
          placeholder="请选择或输入话题标签"
        >
          <el-option
            v-for="item in tagsList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        v-for="(topic, index) in topicForm.topics"
        :label="'争论点' + (index + 1)"
        :key="topic.id"
        :rules="{
          required: true,
          message: '争论点不能为空',
          trigger: 'blur',
        }"
      >
        <div class="topic-input-box">
            <el-input v-model="topic.title"></el-input
        ><el-button @click.prevent="removeTopic(topic)" type="danger" plain>删除</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="topics">
        <el-button type="primary" @click="submitForm('topicForm')"
          >提交</el-button
        >
        <el-button @click="addTopic">新增争论点</el-button>
        <el-button @click="resetForm('topicForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const categoryList = [{ label: "刑事案件", value: "刑事案件" }];

const tagsList = [
  { label: "争议焦点", value: "争议焦点" },
  { label: "典型", value: "典型" },
];
export default {
  name: "topicEditCompontent",
  data() {
    return {
      categoryList,
      tagsList,
      topicForm: {
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
      },
      topicRules: {
        title: [
          { required: true, message: "请输入话题标题", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "长度在 2 到 50 个字符",
            trigger: "blur",
          },
        ],
        category: [
          { required: true, message: "请选择分类", trigger: "change" },
        ],
        tags: [
          { required: true, message: "请选择或输入标签", trigger: "change" },
        ],
        topics: [
          { required: true, message: "请添加一个标签", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$message.success('发布成功！')
            this.$emit('handleCloseDrawer')
            this.$router.push({name: 'topic'})
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeTopic(item) {
      var index = this.topicForm.topics.indexOf(item);
      if (index !== -1) {
        this.topicForm.topics.splice(index, 1);
      }
    },
    addTopic() {
      this.topicForm.topics.push({
        title: "",
        id: Date.now(),
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.root {
  padding: 0 1rem;

  .topic-input-box {
    display: flex;
    justify-content: space-between;

    /deep/.el-button {
        width: 5rem;
        margin-left: 1rem;
    }
  }
}
</style>