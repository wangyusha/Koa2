const Koa = require('koa');
const session = require('koa-session-minimal');
const  store = require('./config/store');
const  cookie = require('./config/cookie')
const app = new Koa();

//使用session中间件
app.use(session({
    key:'SESSION_ID',
    store:store,
    cookie:cookie
}));

app.use(async (ctx) => {
    //设置session
    if(ctx.url === '/set') {
        ctx.session = {
            user_id:Math.random().toString(36).substr(2),
            count:0
        }
        ctx.body = ctx.session
    }else if( ctx.url === '/') {
        //读取session
        ctx.session.count = ctx.session.count + 1;
        ctx.body = ctx.session
    }
});

app.listen(3000, () => {
    console.log('successfuly')
})