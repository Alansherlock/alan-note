let fs = require('fs');
let http = require('http');

http.createServer(function(res,req){
    console.log(res,req);
}).listen(3000);