var http = require('http');
var evalute = require('./evalute');

function onrequest(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("hello harshit from nodejs");
    res.write("\n" + evalute.sum(10,20));
    res.write("\n"+ evalute.str)
    res.write("\n"  + evalute.myfun());
    res.end();
}
http.createServer(onrequest).listen(4500);

console.log("server created!!");

