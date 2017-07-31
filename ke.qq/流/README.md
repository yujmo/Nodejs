Node.js Stream(流)
===
	1. Stream是一个抽象接口。例如：对http服务器发起请求的request对象就是一个stream，还有stdout标准输出）。

	2. Stream有四种流类型：
	      1. Readable  - 可读操作。
	      2. Writable  - 可写操作。
	      3. Duplex    - 可读可写操作.
	      4. Transform - 操作被写入数据，然后读出结果。

	3. 所有的Stream对象都是EventEmitter的实例。常用的事件有：
	       1. data   - 当有数据可读时触发。
	       2. end    - 没有更多的数据可读时触发。
	       3. error  - 在接收和写入过程中发生错误时触发。
	       4. finish - 所有数据已被写入到底层系统时触发。

从流中读取数据
===
	1. ![例1](./read_input.js)

