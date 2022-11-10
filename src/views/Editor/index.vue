<template>
  <div class="root">
    <mavon-editor v-model="value" class="mavon-editor"/>
  </div>
</template>

<script>
export default {
    name: 'editorPassage',
    data() {
      return {
        value: ''
      }
    }
}
</script>

<style scoped lang='scss'>
.root {
  height: 100%;

  .mavon-editor{
    height: 92vh;
  }
}
</style>