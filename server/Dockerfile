FROM node:alpine as builder
ADD . /var/app
WORKDIR /var/app
RUN npm install
CMD npm start
EXPOSE 5000