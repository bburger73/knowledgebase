const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/php/', {
      target: "http://192.168.0.88:9999/", // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/php/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/python/', {
      target:  "http://192.168.0.88:9998/", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/python/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/go/', {
      target:  "http://192.168.0.88:9997/", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/go/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/node/', {
      target:  "http://192.168.0.88:9996/", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/node/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/rust/', {
      target:  "http://192.168.0.88:9995/", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/rust/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}