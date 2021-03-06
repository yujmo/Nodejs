//========================================================================================================
//创建Buffer类

/*
var buf1 = new Buffer(10);

var buf2 = new Buffer([10, 20, 30, 40, 50]);

var buf3 = new Buffer("www.runoob.com","utf-8");
*/

//========================================================================================================

//写入缓冲区

/*
var buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数：" + len);
*/

//========================================================================================================

//从缓冲区读取数据

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));   // 输出: abcde
console.log(buf.toString('utf8',0,5));    // 输出: abcde
console.log(buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//========================================================================================================
