var http = require('http');
var fs = require('fs');


http.createServer(function(req,res){

    var content = "<h1>Hello GuptaJi</h1>";
    fs.writeFile('abc.txt',content,function(error){
        if(error) throw error;
        console.log("data saved!");
    })
    res.write(content);

    fs.readFile('abc.txt',function(error,data){
        if(error) throw error;
        res.write(data);
    })

}).listen(4500);