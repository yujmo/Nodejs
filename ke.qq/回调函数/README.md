	NodeJs异步编程的最直接体现就是回调

	回调函数，在完成任务之后被调用

	一边读取文件，一边执行其他的命令，在文件读取完了后，讲文件的内容作为回调函数的参数返回。

	没有阻塞或等待i/o操作，提升了性能

	1. 阻塞
	2. 非阻塞
