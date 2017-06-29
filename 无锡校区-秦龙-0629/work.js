var fs=require('fs');
var http=require('http');
http.createServer(function(req,res){
    var url=req.url;
    switch (url){
        case '/':
            fs.readFile('a/a.html','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/html'});
                    res.end(data)
                }
            });
            break;
        case '/a.html':
            fs.readFile('a/a.html','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/html'});
                    res.end(data)
                }
            });
            break;
        case '/a.css':
            fs.readFile('a/a.css','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/css'});
                    res.end(data)
                }
            });
            break;
        case '/a.js':
            fs.readFile('a/a.js','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/javascript'});
                    res.end(data)
                }
            });
            break;
        case '/b.html':
            fs.readFile('a/b.html','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/html'});
                    res.end(data)
                }
            });
            break;
        case '/c.html':
            fs.readFile('a/c.html','utf-8',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'text/html'});
                    res.end(data)
                }
            });
            break;
        case '/a.jpg':
            fs.readFile('a/a.jpg',function(err,data){
                if(err){
                    res.end('404');
                    res.end(err)
                }else{
                    res.writeHead(200, {'Content-type' : 'image/jpeg'});
                    res.end(data)
                }
            });
            break;
        default:
            res.end('<h1 style="text-align: center">404 not fond</h1>')
    }

}).listen(3000);