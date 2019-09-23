const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'https://localhost:8080/api',
    changeOrigin: true,
  }));
}
