
//s数据库配置
const MysqlSession = require('koa-mysql-session');
let store = new  MysqlSession({
    user:'root',
    password:'root',
    database:'test',
    host:'127.0.0.1'
});

module.exports = store;