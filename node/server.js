var http = require('http');

http.createServer( function (request,response){

    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<html><body>Home, Url was: '+request.url+'</body></html>');

    console.log("request url " + request.url);

}).listen(3000,'localhost');


console.log('server running at http://localhost:3000');
