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


