var events=require('events'); //inbuild module events
var myEmitter=new events;//this is an object to make our own event later
myEmitter.on('myEvent',function(mssg){
  console.log(mssg);
});//here the custom event myEvent will power up function when the object myEmitter is on
myEmitter.emit('myEvent','The event was emitted');
/* inbuilt modules used util,events,fs;*/
