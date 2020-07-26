var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile('./user.json',"UTF-8",function(error,data){
        res.writeHead("200", { "Content-Type": "application/json" });
        data = JSON.parse(data);
        res.end(JSON.stringify(data));
    })
    // res.writeHead("200", { "Content-Type": "application/json" });
    // var obj = {id:1,name:"harshit",age:21};
    // res.end(JSON.stringify(obj));
  }).listen(4500);
  console.log("server created");
