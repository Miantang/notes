###http

1. 加入基础服务器
```js
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('show this in the html');
}).listen(3001, '127.0.0.1');
```

2. 重定向 301
```js
res.writeHead(301, {
    'Location': 'http://www.baidu.com/'
});
```

url.parse(requestURL).hostname/ .host / .pathname

3. Node.js HTTP 客户端
```js
http.get(
    {
        host: 'www.baidu.com',
        port: 80,
        path: '/'
    }, function (res) {
        if(res.statusCode == 200) {
        }
    }
).on('error',  function(err){});
```

###Express

1. app.js 

用来启动应用程序的应用文件夹。包含应用程序的配置信息

2. ndoe_modules

用来保存在对package.json中定义并且已经安装的Node模块

###Jade
简洁，缩进，抽象

###MongoGB
###调试
`console.log console.error console.warn`
`node debug app.js`打断点

###测试

1. assert模块
```js
assert.strictEqual("he", "she");
```
2. BDD Mocha

###部署

1. Heroku
2. CLoud Foundry
3. Nodester

## 中间件 socket.io



