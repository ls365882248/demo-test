FROM node:alpine as builder
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"
ENV TZ Asia/Shanghai
ARG registry=https://registry.npm.taobao.org
ARG disturl=https://npm.taobao.org/dist
RUN npm install
RUN npm run build
# CMD serve -s build
CMD npm start
EXPOSE 3000