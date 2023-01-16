const http=require("http");
http.createServer(function(req,res){
    console.log("Sever running in port 8080");
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Request server output');
    res.end();
}).listen(8080);