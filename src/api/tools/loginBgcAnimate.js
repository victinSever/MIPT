executeLinearAnimate()

function executeLinearAnimate() {
    let canvas = document.getElementById('loginBGC')
    let canvas2 = document.querySelector('canvas')
    console.log(canvas, canvas2);
    if (canvas === null) return;
    let ctx = canvas.getContext('2d')

    // 获取屏幕大小
    let w = document.documentElement.clientWidth - 6 //画布大小
    let h = document.documentElement.clientHeight - 6

    //更新宽高
    canvas.width = w
    canvas.height = h
    let speed = 15 //速度
    let ballNum = 15 //小球个数
    let lineColor = '#ccc' //线的颜色

    //文字
    let titleArr = ("JavaScript HTML5前端 JAVA PHP jQuery Canvas" +
        " CSS CSS3 Angular Bootstrap LayUI 全栈工程师 NodeJS React Vue.js").split(' ')


    let ballArr = [] //小球数组
    for (let i = 0; i < ballNum; i++) {
        // 当前小球
        let ball = new Ball(titleArr[i])
        ballArr.push(ball)
    }

    setInterval(() => {
        //清除画布
        ctx.clearRect(0, 0, w, h)

        for (let i = 0; i < ballArr.length; i++) {
            ballArr[i].show()

            // 小球连线
            for (let j = 0; j < i; j++) {
                //取出当前小球前面的小球
                let preBall = ballArr[j]
                drawLine(ballArr[i].x, ballArr[i].y, preBall.x, preBall.y, lineColor)
            }
        }
    }, speed)

    //创建小球类
    function Ball(text) {
        this.width = w
        this.height = h //盒子宽高

        this.r = r(30) + 10
        this.x = r(this.width - 2 * this.r) + this.r
        this.y = r(this.height - 2 * this.r) + this.r

        this.color = rColor2()

        this.xSpeed = r(5) + 2
        this.ySpeed = r(3) + 1

        this.text = text
    }

    Ball.prototype.show = function () {
        this.run()

        drawCircle(this.x, this.y, this.r, this.color)
        drawText(this.text, this.x + this.r, this.y)
    }

    Ball.prototype.run = function () {
        if (this.x - this.r <= 0 || this.x + this.r >= this.width) {
            this.xSpeed = -this.xSpeed
        }
        this.x += this.xSpeed
        if (this.y - this.r <= 0 || this.y + this.r >= this.height) {
            this.ySpeed = -this.ySpeed
        }
        this.y += this.ySpeed
    }

    // 随机颜色2：rgb
    function rColor2() {
        return 'rgb(' + r(255) + ',' + r(255) + ',' + r(255) + ')'
    }

    // // 随机颜色#ffffff
    // function rColor() {
    //     return '#' + parseInt(Math.random() * 0xffffff).toString(16)
    // }


    // 随机数字
    function r(num) {
        return parseInt(Math.random() * num)
    }

    // 画文字
    function drawText(text, x, y, font = '20px 微软雅黑') {
        ctx.font = font
        ctx.textAlign = 'top'
        ctx.textBaseline = 'middle'
        ctx.fillText(text, x, y)
    }

    //画圆
    function drawCircle(x, y, r, color = '#000') {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
    }

    //画线
    function drawLine(x1, y1, x2, y2, color = 'black') {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.stroke()
    }
}

