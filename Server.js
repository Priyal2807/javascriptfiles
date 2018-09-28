var http=require('http');
var fs=require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');﻿
var myWriteStream=fs.createWriteStream(__dirname +'/writeme.txt');
myReadStream.on('data',function(chunk){
  console.log('New chunk received');
myWriteStream.write(chunk);
});


/*var server=http.createServer(function(req,res){
  console.log('The request url'+ req.url);
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hey yoho');
}); //this methos helps us to create a server
//header -content type,status(e.g 404 not found error) tells more about the request/response.
//to create a port number for listening
server.listen(3000,'127.0.0.1');
console.log("Yhoh listening to the port");*/
