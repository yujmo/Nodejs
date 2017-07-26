NodeJs简介：
###	
	1. Node.js 就是运行在服务端的 JavaScript。
	2. Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
	3. Node.js 是运行在服务端的 JavaScript，如果你熟悉Javascript，那么你将会很容易的学会Node.js。

环境搭建：
###
	1. mo@mo:~$ sudo apt-get update
	2. mo@mo:~$ sudo apt-get upgrade -y
	3. mo@mo:~$ sudo apt-get install vim -y #安装vim编辑器
	4. mo@mo:~$ touch test #新建文件test
	5. mo@mo:~$ vim test #编辑文件test

[URL]http://nodejs.cn/
	6. mo@mo:/tmp$ wget http://cdn.npm.taobao.org/dist/node/v8.2.1/node-v8.2.1-linux-x64.tar.xz #下载node
	7. mo@mo:/tmp$ xz -d node-v8.2.1-linux-x64.tar.xz
	8. mo@mo:/tmp$ tar -xvf node-v8.2.1-linux-x64.tar
	9. mo@mo:/tmp/node-v8.2.1-linux-x64$ sudo ln -s /tmp/node-v8.2.1-linux-x64/bin/n* /usr/sbin/
	10.mo@mo:/tmp/node-v8.2.1-linux-x64$ node -v
	11.mo@mo:/tmp/node-v8.2.1-linux-x64$ npm -v
	
	> console.log("hello");
	
	12.mo@mo:/tmp/node-v8.2.1-linux-x64$ npm install express
	
	



