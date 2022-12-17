import { v4 as uuid } from 'uuid';

/**
 * 返回一个不重复随机值
 * 
 * @returns {String}
 */
const getUUID = function () {
    return uuid().replaceAll('-', '')
}

/**
 * 得到距离当前时间的差距时间字符串
 * 
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns {String}
 */
const getNumberOfDays = function (date1, date2 = new Date()) {
    //获得天数
    //date1：开始日期，date2结束日期
    let a1 = Date.parse(new Date(date1));
    let a2 = Date.parse(new Date(date2));
    let day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)); //核心：时间戳相减，然后除以天数
    if (day > 356) return (day % 356) + '年前'
    else if (day > 30) return (day % 30) + '月前'
    else if (day > 7) return (day % 7) + '周前'
    else if (day > 1) return day + '天前'
    else {
        let hour = parseInt((a2 - a1) / (1000 * 60 * 60))
        if (hour >= 1) return hour + '小时前'
        else {
            let minite = parseInt((a2 - a1) / (1000 * 60))
            if (minite >= 1) return minite + '分钟前'
            else return '刚刚'
        }
    }
}

/**
 * 生成随机颜色
 * @returns 
 */
const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

/**
 * 节流器
 * @param {} fun 
 * @param {*} delay 
 * @returns 
 */
function throttle(fun, delay) {
    let last, deferTimer
    return function (args) {
        let that = this;
        let _args = arguments;

        let now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fun.apply(that, _args);
            }, delay)
        } else {
            last = now;
            fun.apply(that, _args);
        }
    }
}


export {
    getUUID, getNumberOfDays, generateRandomHexColor, throttle
}
