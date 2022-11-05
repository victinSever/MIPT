<template>
  <div class="adver" @click="gotoLink(data.link)">
    <el-image :src="data.imageUrl" fit="contain">     
    </el-image>
    <span class="categoryName">{{categoryName}}</span>
    <span class="el-icon-close"></span>
  </div>
</template>

<script>
export default {
    name: 'adverPage',
    props: ['data'],
    computed: {
      categoryName() {
        switch(this.data.type) {
          case 1: return '广告'
          case 2: return '活动'
          case 3: return '热点案例'
        }
        return ''
      }
    },
    methods: {
      gotoLink(link) {
        window.open(link, '_blank')
      }
    }
}
</script>

<style scoped lang='scss'>
.adver{
    width: 100%;
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
    overflow: hidden;

    .categoryName, .el-icon-close{
      position: absolute;
      padding: 0 3px;
      border-radius: 2px;     
      z-index: 5;      
    }

    .categoryName{
      bottom: 10px;  
      right: 10px;
      background-color: transparent;
      color: #fff;    
      font-size: 12px;   
      border: 1px solid #fff;
    }

    .el-icon-close{
      top: 5px;
      right: 5px;
      display: none;
      color: #4c5159;  
      font-weight: bold;    
    }

    .el-icon-close:hover {
      color: #ddd;
    }

    .el-image{
      transition: 1s;
    }

    .el-image:hover{
      transform: scale(110%);
    }
}

.adver:hover{     
    .el-icon-close{
      display: inline;
    }
}
</style>