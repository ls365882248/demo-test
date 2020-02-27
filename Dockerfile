FROM node:alpine as builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY src /app/src

ADD build/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80