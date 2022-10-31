
// 随机数字
function r() {
    return parseInt(Math.random() * num + '')
}

// 随机颜色2：rgb
function rColor() {
    return 'rgb(' + r(255) + ',' + r(255) + ',' + r(255) + ')'
}

// 画文字
function drawText(ctx, text, x, y, font = '20px 微软雅黑') {
    ctx.font = font
    ctx.textAlign = 'top'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, x, y)
}

//画圆
function drawCircle(ctx, x, y, r, color = '#000') {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

//画线
function drawLine(ctx, x1, y1, x2, y2, color = 'black') {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.stroke()
}

export {
    r,
    rColor,
    drawText,
    drawCircle,
    drawLine
}