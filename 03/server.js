var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("hello harshit from nodejs");
    res.end();
}).listen(4500);

console.log("server created!!");