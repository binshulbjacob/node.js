var http =require('http');
var uc = require('upper-Case');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(uc.upperCase('welcome to granny world'));
    res.end();


}).listen(9081);