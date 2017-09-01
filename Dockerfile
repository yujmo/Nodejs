FROM centos:latest
MAINTAINER yujmo yujmo94@gmail.com
RUN rm -rf /etc/yum.repos.d/CentOS-[DSfCMV]* \
     && yum clean all && yum update -y && yum install wget -y \
     && wget https://npm.taobao.org/mirrors/node/v8.4.0/node-v8.4.0-linux-x64.tar.xz \
     && xz -d node-v8.4.0-linux-x64.tar.xz && tar -xvf node-v8.4.0-linux-x64.tar \
     && ln -s /node-v8.4.0-linux-x64/bin/* /usr/sbin/ &&  cp /node-v8.4.0-linux-x64/lib/node_modules/npm/package.json /package.json
COPY run.sh /run.sh
RUN chmod +x /run.sh
CMD ["/run.sh"]
