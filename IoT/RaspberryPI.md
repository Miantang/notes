在树莓派上安装Node.js

http://www.cnblogs.com/Dn9x/p/3576309.html

去官网下载最新版的nodejs(v0.12.7). <https://nodejs.org/download/>

 或者下载已经编译好的arm版的nodejs。**node-v0.11.9-linux-arm-pi.tar.gz**（但是不是最新版v0.11.9）<https://nodejs.org/dist/v0.11.9/>

 遇到问题：

 1. 部分node_modules无法npm。
 （树莓派里，多试几次就可以了。。直接复制过去解决的，问题应该出在node-gyp）
 2. 树莓派设定固定IP：
 <http://blog.csdn.net/jdh99/article/details/22096479>

 3. 添加开机自启nodejs
`/etc/rc.local`

 `/home/pi/node-v0.11.9-linux-arm-pi/bin/node`

 4. nodejs 模块化管理
 <http://blog.fens.me/nodejs-server-forever/>

 5. 树莓派开机自启

 <http://www.arroyocode.com/raspberry-pi-nodejs-web-server-with-pm2/>

 RAPIb8087cace09c90a4