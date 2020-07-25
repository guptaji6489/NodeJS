var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    fs.readFile('./index.html',function(error,data){
        if(error)
        {
            res.writeHead(404);
            res.write("Page Not Found");
        }
        else{
            res.writeHead('200',{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
    });

}).listen(4500);
console.log("server created");