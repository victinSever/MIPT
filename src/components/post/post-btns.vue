<template>
  <div class="postBtns">
    <div 
    :class="'item' + (item.isClick ? ' active' : '')" 
    v-for="item in btns" 
    :key="item.id" 
    @click="handleClick(item.id)">
        <span :class="'iconfont ' + item.icon"></span>
        <span class="bar" v-if="item.num" v-text="item.num"></span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'postBtns',
    data() {
        const btns = [
            { icon: 'icon-31dianzan', id: 0, isClick: false, num: 20 },
            { icon: 'icon-pinglun', id: 1, isClick: false, num: 5 },
            { icon: 'icon-shoucang', id: 2, isClick: false, },
            { icon: 'icon-jubao', id: 3, isClick: false, }
        ]
        return {
            btns
        }
    },
    methods: {
        handleClick(id) {
            switch(id) {
                case 0: this.handleDianZanChange(); break
            }            
        },

        handleDianZanChange() {
            const status = this.btns[0].isClick
            this.btns[0].num += status ? -1 : 1
            this.btns[0].isClick = !status          
        }
    }
}
</script>

<style scoped lang='scss'>
.postBtns{
    // width: 100px;
    display: flex;
    flex-direction: column;

    .item{
        padding: .8rem 1rem;
        border-radius: 50%;     
        background-color: #fff;
        cursor: pointer;
        margin-bottom: 20px;
        position: relative;
        transition: .4s;

        .iconfont{
            color: rgb(175, 170, 170);
            transition: .4s;
        }

        .bar{
            position: absolute;
            top: 0;
            right: -10px;
            height: 15px;
            width: 15px;
            text-align: center;
            line-height: 15px;
            border-radius: 10px;
            padding: 0 5px;
            font-size: 0.6rem;
            background-color: #c2c8d1;
            color: #fff;
        }
    }

    .item:hover .iconfont {
        color: rgb(26, 23, 23);
    }

    .active{
        .iconfont{
            color: #1e80ff;
        }

        .bar{
            background-color: #1e80ff;
        }
    }
}
</style>