var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var path = url.parse(req.url).pathname;
    console.log(path);

    switch(path)
    {
        case '/':
            renderHTML('./home.html',res);
            break;
        case '/about':
                renderHTML('./about.html',res);
                break;
        case '/contact':
                renderHTML('./contact.html',res);
                break;
        default:
            res.writeHead(404);
            res.write("Page nOT Found");
            res.end();
    }


}).listen(4500);

function renderHTML(path,res)
{
    fs.readFile(path,"UTF-8",function(err,data)
    {
        if(err)
        {
            res.writeHead(404);
            res.write("Page nOT Found");
        }
        else
        {
            res.writeHead('200',{'Content-Type':'text/html'});
            res.write(data);
            
        }
        res.end();
    })
}