var httpProxy = require('http-proxy'),
    http  = require('http'),
    fs    = require('fs'),
    srv   = require('node-static')

var filesrv = new srv.Server('./')
var proxy = httpProxy.createProxyServer({ target: 'http://trivago.de' });

http.createServer(function(req, res) {
    if(req.url.match(/^\/search/) || req.headers['x-requested-with'] === 'XMLHttpRequest') {
        proxy.web(req, res, function() { console.log(arguments) })
    } else {
        filesrv.serve(req, res)
    }
}).listen(9000)
