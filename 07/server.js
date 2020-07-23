var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    var write1 = "College name is University of petroleum and energy studies";
    var writer = fs.createWriteStream('abc.txt');
    writer.write(write1,'utf-8');
    writer.end();
    writer.on('finish',function()
    {
        console.log("wirting completed");
    }).on('error',function(error)
    {
        console.log('error');
    })

    var content = '';
    
    var reader = fs.createReadStream('abc.txt');
    reader.on('error',function(error){
        console.log(error);
    }).on('data',function(chunk){
        content += chunk;
    // }).on('end',function(){
    //     res.on('error',function(error){
    //         console.log(error);
    //     });
        res.setHeader('200',{'Content-Type':'plain/text'});
        res.write(content);
        res.end();

    });
}).listen(4500);