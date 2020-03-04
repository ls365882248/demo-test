FROM node:alpine as builder
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"
ENV TZ Asia/Shanghai
RUN npm install
RUN npm run build
# CMD serve -s build
CMD npm start
# COPY /build /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000