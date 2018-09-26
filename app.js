setTimeout(function(){
  console.log("Heyo world");
},3000);//this function will show its content after 3 seconds

setInterval(function(){},2000)/*this will display the contents of the function after every two seconds,so we can make
                                it a part of something we want to update*/
//setInterval runs infinetely and we can make it stop by typing ctrl +c inn terminal
//function expression
var randommy=function(){
  console.log('heyo again');
}// no function name as such just the name of the variable is the function
randommy(); //calling the function
