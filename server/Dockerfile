FROM node:alpine as builder
ADD . /var/app
ENV TZ Asia/Shanghai
ARG registry= https://registry.npmjs.org
WORKDIR /var/app
RUN npm install
CMD npm start
EXPOSE 5000