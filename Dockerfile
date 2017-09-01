FROM centos:latest
MAINTAINER yujmo yujmo94@gmail.com
RUN rm -rf /etc/yum.repos.d/CentOS-[DSfCMV]* \
     && yum install wget epel-release -y \
     && yum clean all && yum update -y \
     && yum install supervisor -y \
     && wget https://npm.taobao.org/mirrors/node/v8.4.0/node-v8.4.0-linux-x64.tar.xz \
     && xz -d node-v8.4.0-linux-x64.tar.xz && tar -xvf node-v8.4.0-linux-x64.tar \
     && ln -s /node-v8.4.0-linux-x64/bin/* /usr/sbin/
