var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  console.log('The request url'+ req.url);
//res.writeHead(200,{'Content-Type':'text/plain'});
//res.end('Hey yoho');
if(req.url==='/home' || req.url==='/')
{
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname + '/MyWebsite.htm').pipe(res);
}
else{
  res.writeHead(404,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname + '/404.htm').pipe(res);
}
}); //this methos helps us to create a server
//header -content type,status(e.g 404 not found error) tells more about the request/response.
//to create a port number for listening
server.listen(3000,'127.0.0.1');
console.log("Yhoh listening to the port");
