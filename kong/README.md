REST编程
###
       1. REST即表述性状态传递是Roy Fielding博士在博士论文中提出来的一种软件架构风格。
       2. 表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。
		**（REST是设计风格而不是标准）**
       3. REST通常基于使用HTTP，URI，和XML以及HTML等这些现有的广泛流行的协议和标准。
       4. REST 通常使用 JSON 数据格式。
       5. HTTP 方法（REST 基本架构的四个方法）：
        	1. GET - 用于获取数据。
       		2. PUT - 用于更新或添加数据。
       3. DELETE - 用于删除数据。
       4. POST - 用于添加数据。

RESTful Web Services
###
       1. Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序。
       2. 可使用开放的XML标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。
       3. 基于 REST 架构的 Web Services 即是 RESTful。
       4. 由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。
       5. 可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客户端。
       6. RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。
       7. 这种服务的简便性让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。

安装部署kong、kong-ui
###
       1. sudo docker run -d --name kong-database -p 9042:9042 cassandra:3

       2. sudo docker run -d --name kong  --link kong-database:kong-database \
       	        -e "KONG_DATABASE=cassandra" -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
    		-e "KONG_PG_HOST=kong-database" -p 8000:8000 -p 8443:8443 \
   	        -p 8001:8001 -p 7946:7946 -p 7946:7946/udp kong:latest

       3. sudo docker run -d --name kong-ui --restart=always \ 
    		--link kong:kong -p 8002:8080 pgbi/kong-dashboard

参考文档
###

[点击URL链接](http://www.cnblogs.com/SummerinShire/category/861287.html)

案例介绍：
###
	1. 客户端与服务端连接，服务端负责具体的服务功能，将认证等功能转移给中间的kong组件。
	2. 本案例只提供模板功能，具体的复杂的功能在本案例上进行扩充

环境介绍：
###
	1. Ubuntu 16.10
	2. NodeJs
	3. emacs
	4. Redis数据库

流程介绍：
###
	__________         __________		___________
	|	 |	   |        |		|	  |
	| client | ------> |  kong  |  ------>  | RESTful |
	|        | 	   |        |  		|	  |
	——————————	   ——————————		———————————
   	请求		      认证                  服务

特点：
###
	1. kong使用Docker部署，不推荐手动安装kong组件
	2. 使用kong-ui，直观显示api等信息
	3. 使用Redis数据库（正好看到了一本Redis数据库的书，就用吧，Redis数据库使用Docker部署）REST介绍：
