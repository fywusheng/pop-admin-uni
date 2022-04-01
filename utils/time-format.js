/**
 * 时间格式化组件
 * create by jianbing.wang
 * create time 2017-03-03
 */
'use strict';
export default {
    /**
     * 时间格式化
     * @param {Number} unixTime 当前时间，精确到毫秒
     * @param {Object} format 时间格式；例如：{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}
     *  年:YYYY或YY,例如：2016或16
     *  月:MM或M,例如：03或3
     *  日:DD或D,例如：06或6
     *  时:hh或h(12小时制)HH或H(24小时制),
     *  分:mm或m,
     *  秒:ss或s,
     *  星期：W，
     */
    fetch: function (unixTime, format) {
        if (!unixTime || isNaN(unixTime)) {
            return '';
        }
        let time = new Date(unixTime);
        let year = time.getFullYear(); //年
        let month = time.getMonth() + 1; //月
        let day = time.getDate(); //日
        let week = time.getDay(); //星期
        let hour = time.getHours(); //时
        let minute = time.getMinutes(); //分
        let second = time.getSeconds(); //秒
        let weekEnum = {
            '0': '日',
            '1': '一',
            '2': '二',
            '3': '三',
            '4': '四',
            '5': '五',
            '6': '六',
        };
        let result = format;
        result = result.replace(/\{YYYY\}/g, year);
        result = result.replace(/\{YY\}/g, year.toString().substr(2, 2));
        result = result.replace(/\{MM\}/g, month > 9 ? month : '0' + month);
        result = result.replace(/\{M\}/g, month);
        result = result.replace(/\{DD\}/g, day > 9 ? day : '0' + day);
        result = result.replace(/\{D\}/g, day);
        result = result.replace(/\{HH\}/g, hour > 9 ? hour : '0' + hour);
        result = result.replace(/\{H\}/g, hour);
        if (hour > 12) {
            hour = hour - 12;
        }
        result = result.replace(/\{hh\}/g, hour > 9 ? hour : '0' + hour);
        result = result.replace(/\{h\}/g, hour);
        result = result.replace(/\{mm\}/g, minute > 9 ? minute : '0' + minute);
        result = result.replace(/\{m\}/g, minute);
        result = result.replace(/\{ss\}/g, second > 9 ? second : '0' + second);
        result = result.replace(/\{s\}/g, second);
        result = result.replace(/\{W\}/g, weekEnum[ week ]);
        return result;
    },
    //时间戳转日期格式
    getDate: function (timestamp, hasTime) {
        timestamp = Number(timestamp);
        let d = new Date(timestamp);    //根据时间戳生成的时间对象
        let date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate());
        if (hasTime) {
            date += " " +
                (d.getHours()) + ":" +
                (d.getMinutes()) + ":" +
                (d.getSeconds());
        }
        return date
    },
    //获取时间对象
    getDateObject: function (timestamp) {
        timestamp = Number(timestamp);
        let d = new Date(timestamp);    //根据时间戳生成的时间对象
        let timeOject = {}
        timeOject.year = d.getFullYear();
        timeOject.month = d.getMonth() + 1; // 外国系统月份从0开始
        timeOject.day = d.getDate();
        timeOject.hour = d.getHours();
        timeOject.minute = d.getMinutes();
        timeOject.second = d.getSeconds();
        return timeOject
    },
    //时间戳转化为时间
    timeStampToTime: function (timestamp) {
        timestamp = Math.abs(parseInt(timestamp));
        let time = {};
        time.hours = parseInt(timestamp / (60 * 60));
        time.minutes = parseInt((timestamp - time.hours * 3600) / 60);
        time.seconds = timestamp - time.hours * 3600 - time.minutes * 60;
        return time;
    },
    //时间戳转化为时间
    timeStampToTimeStr: function (timestamp) {
        timestamp = Math.abs(parseInt(timestamp));
        let time = {};
        time.hours = parseInt(timestamp / (60 * 60));
        if (time.hours < 10) {
            time.hours = '0' + time.hours;
        }
        time.minutes = parseInt((timestamp - time.hours * 3600) / 60);
        if (time.minutes < 10) {
            time.minutes = '0' + time.minutes;
        }
        time.seconds = timestamp - time.hours * 3600 - time.minutes * 60;
        if (time.seconds < 10) {
            time.seconds = '0' + time.seconds;
        }
        return time;
    }
};