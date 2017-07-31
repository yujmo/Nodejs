Node.js事件循环
===
	1. Node.js：单进程单线程应用程序，通过事件和回调支持并发，性能高。
	2. Node.js：每一个API都异步，并作为独立进程运行，使用异步函数调用。
	3. 事件发生，调用回调函数。

事件驱动程序
===
	1. 当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
	2. 当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
	3. 注意：webserver一直接受请求而不等待任何读写操作。

	# 在事件驱动模型中，生成一个主循环来监听事件，当检测到事件时出发回调函数。
![event_loop](./images/event_loop.jpg)

观察者模式
===
	1. 事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。
	2. 观察者观察者观察到事件，观察者就做出相应的措施。

Node.js EventEmitter
===
	1. Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
	2. Node.js里面的许多对象都会分发事件：
	   1. 一个net.Server对象会在每次有新连接时分发一个事件，
	   2. 一个fs.readStream对象会在文件被打开的时候发出一个事件。
	   3. 所有这些产生事件的对象都是events.EventEmitter的实例。 

EventEmitter 类
===
	1. events模块只提供了一个对象：events.EventEmitter。
	2. EventEmitter的核心就是事件触发与事件监听器功能的封装。
	3. EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
	4. 当添加新的监听器时，newListener 事件会触发。
	5. 当监听器被移除时，removeListener 事件被触发。

	![代码1]：(./event.js)
