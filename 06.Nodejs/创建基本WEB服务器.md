创建最基本的web服务器

```js
//1.导入http核心模块
const http = require('http');

//2.调用http.creatServe方法,创建一个web服务器对象
//通过 第二步 创建的serve服务器,并不能监听任何的 客户端请求,同时 它也没被启动
const serve = http.creatServe();

//3.为serve服务器 绑定 监听函数,通过 on 方法,绑定 request 事件,来监听 客户端的请求
serve.on('request',function(req,res){
    //可以通过 request 事件,来监听并处理客户端的请求;
    //req 表示 客户端 相关的参数
    //res 表示  和 服务器相关的参数 和 方法
    res.end('hello world')
})
//4.serve.listen 来启动服务器
serve.listen(3000,'127.0.0.1',function(){
    
})
```

