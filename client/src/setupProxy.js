const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/graph',
    createProxyMiddleware({
      target: 'http://127.0.0.1:4001/',
      changeOrigin: true,
    })
  );
};