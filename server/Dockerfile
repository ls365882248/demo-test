FROM node:alpine as builder
ADD . /var/app
ENV TZ Asia/Shanghai
ARG registry=https://registry.npm.taobao.org
ARG disturl=https://npm.taobao.org/dist
WORKDIR /var/app
RUN npm install
CMD npm start
EXPOSE 5000