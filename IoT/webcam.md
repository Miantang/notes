http://phoboslab.org/log/2013/09/html5-live-video-streaming-via-websockets

http://www.right.com.cn/forum/thread-35868-1-1.html

###openwrt 挂载摄像头
http://www.openwrt.org.cn/bbs/forum.php?mod=viewthread&tid=6105

mjpg_streamer -i "input_uvc.so -y -f 5 -r 320*240 -q 50 -d /dev/video0" -o "output_http.so -p 8081 -w /mnt/sda3/webcam"

摄像头页面。。嵌入一个iframe即可。

`<iframe xmlns="http://www.w3.org/1999/xhtml" align="middle" width="640" height="480" id="videoframe" scrolling="no" border="0" name="lantk" frameBorder="0" src="http://192.168.1.1:8081/javascript_simple.html"></iframe>`
 
-------

树莓派 挂载mjpg-streamer：
<http://bbs.ickey.cn/group-topic-id-35432.html>

<http://www.tuicool.com/articles/UzMbIb>


1. `sudo apt-get install libv4l-dev libjpeg8-dev imagemagick subversion`

2. `svn co https://svn.code.sf.net/p/mjpg-streamer/code/mjpg-streamer`

3. `make USE_LIBV4L2=true clean all`

遇到的问题： 
1. <http://www.thinksaas.cn/ask/question/18074/>
2. <http://stackoverflow.com/questions/13437244/mjpg-streaming-with-a-raspberry-pi-and-a-webcam>
```
/home/pi/mjpg-streamer/mjpg_streamer -i "/home/pi/mjpg-streamer/input_uvc.so -d /dev/video0 -y -n" -o "/home/pi/mjpg-streamer/output_http.so -p 8081 -w /home/pi/mjpg-streamer/www"
```

/home/pi/mjpg-streamer/mjpg_streamer -i "/home/pi/mjpg-streamer/input_uvc.so -d /dev/video0 -n" -o "/home/pi/mjpg-streamer/output_http.so -p 8081 -w /home/pi/mjpg-streamer/www"


```
#!/bin/sh /etc/rc.common  
# /init.d/startCamera  
START=50  
start()  
{  
/home/pi/mjpg-streamer/mjpg_streamer -i "/home/pi/mjpg-streamer/input_uvc.so -d /dev/video0 -y -n" -o "/home/pi/mjpg-streamer/output_http.so -p 8081 -w /home/pi/mjpg-streamer/www"
}  
stop()  
{  
killall startCamera  
} 
```


如果慢速运转，树莓派，摄像头只能15秒就crash了。

添加到 /etc/profile

export LD_LIBRARY_PATH=/home/pi/mjpg-streamer:$LD_LIBRARY_PATH

使用supervisor [supervisor学习](http://my.oschina.net/crooner/blog/395069)

[program:mjpg_streamer]
command=/home/pi/mjpg-streamer/mjpg_streamer -i "/home/pi/mjpg-streamer/input_uvc.so -d /dev/video0 -y -n" -o "/home/pi/mjpg-streamer/output_http.so -p 8081 -w /home/pi/mjpg-streamer/www" ; 被监控的进程路径
numprocs=1                    ; 启动几个进程
directory=/home/pi/mjpg-streamer              ; 执行前要不要先cd到目录去，一般不用
autostart=true                ; 随着supervisord的启动而启动
autorestart=true              ; 自动重启。。当然要选上了

[program:oraynewph]
command=sudo oraynewph start; 
numprocs=1                    ; 启动几个进程
;directory=/home/pi/mjpg-streamer              ; 执行前要不要先cd到目录去，一般不用
autostart=true                ; 随着supervisord的启动而启动
autorestart=true              ; 自动重启。。当然要选上了


摄像头控制软件方案二：motion

遇到问题：
1. cannot create process id file (pid file) /var/run/motion/motion.pid: No such file or directory

2. [0] Thread 1 - Watchdog timeout, trying to do a graceful restart

http://www.verydemo.com/demo_c167_i129267.html

http://www.lavrsen.dk/foswiki/bin/view/Motion/MotionGuideGettingItRunning