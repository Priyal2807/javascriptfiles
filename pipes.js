var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
  console.log('The request url'+ req.url);
res.writeHead(200,{'Content-Type':'application/json'});
/*var myReadStream = fs.createReadStream(__dirname + '/MyWebsite.htm', 'utf8');﻿

myReadStream.pipe(res);*/
var myObj = {
  name : 'Heyo',
  age : '67',
  job : 'Ninja'
}
res.end(JSON.stringify(myObj));
}); //this methos helps us to create a server
//header -content type,status(e.g 404 not found error) tells more about the request/response.
//to create a port number for listening
server.listen(3000,'127.0.0.1');
console.log("Yhoh listening to the port");
