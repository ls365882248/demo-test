FROM node:alpine as builder
ADD . /var/app
ENV TZ Asia/Shanghai
WORKDIR /var/app
RUN npm install
CMD npm start
EXPOSE 4001