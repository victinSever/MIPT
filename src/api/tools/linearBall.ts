import {r,
    rColor,
    drawText,
    drawCircle,
    drawLine} from './drawTools';

export default class Ball {
    // 小球活动画布大小
    private width: number;
    private height: number;

    // 小球定义
    private r: number;
    private x: number;
    private y: number;

    // 小球颜色
    private color: String;

    // 速度控制
    private xSpeed: number;
    private ySpeed: number;

    // 文本
    private text: String;

    // 初始化构造
    constructor(w: number, h: number, text: String = '') {
        this.width = w
        this.height = h //盒子宽高

        this.r = r(30) + 10
        this.x = r(this.width - 2 * this.r) + this.r
        this.y = r(this.height - 2 * this.r) + this.r 

        this.color = rColor()

        this.xSpeed = r(5) + 2
        this.ySpeed = r(3) + 1

        this.text = text
    }

    //展示
    show(): void {
        drawCircle(this.x, this.y, this.r, this.color)
        drawText(this.text, this.x + this.r, this.y)
    }
}


let speed = 15 //速度
let ballNum = 15 //小球个数
let lineColor = '#ccc' //线的颜色

//文字
let titleArr = ("JavaScript HTML5前端 JAVA PHP jQuery Canvas" +
" CSS CSS3 Angular Bootstrap LayUI 全栈工程师 NodeJS React Vue.js").split(' ')




// Ball.prototype.show = function() {
//     this.run()

//     drawCircle(this.x, this.y, this.r, this.color)
//     drawText(this.text, this.x + this.r, this.y)
// }

// Ball.prototype.run = function() {
//     if(this.x - this.r <= 0 || this.x + this.r >= this.width) {
//         this.xSpeed = -this.xSpeed
//     } 
//     this.x += this.xSpeed            
//     if(this.y - this.r <= 0 || this.y + this.r >= this.height) {
//         this.ySpeed = -this.ySpeed
//     }                    
//     this.y += this.ySpeed
// }



// // 随机颜色#ffffff
// function rColor() {
//     return '#' + parseInt(Math.random() * 0xffffff).toString(16)
// }




