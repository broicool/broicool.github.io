//sorry about the messness, my bad
let random = 0;
let usize = 0;
let thing = "🍀";
let c = 0;
let streak = 0;
let brandom = 0;
function reset(){
  c=0;
  draw(usize);
}
function win(){
  document.getElementById("page").innerHTML="";
  streak++;
  document.getElementById("page").innerHTML = '<h1>The Luck Game</h1><p>How to play<br>There is a 1/'+usize+' chance of winning<br>The higher the streak the lucker you are!</p>';
  document.getElementById("page").innerHTML += '<h2>You Win</h2><br><button onclick="reset();">Again?</button>';
  document.getElementById("page").innerHTML += '<br><br>Streak: '+streak;
  
}

function lose(){
  document.getElementById("page").innerHTML="";
  streak=0;
  document.getElementById("page").innerHTML = '<h1>The Luck Game</h1><p>How to play<br>There is a 1/'+usize+' chance of winning<br>The higher the streak the lucker you are!</p>';
  document.getElementById("page").innerHTML += '<h2>You Lose</h2><br><p>You should of chose '+brandom+'</p><br><button onclick="reset();">Again?</button>';
   document.getElementById("page").innerHTML += '<br><br>Streak: '+streak;
}
function test(button){
  if(button==random){
    win();
  }else{
    lose();
  }
};
function draw(size){
  document.getElementById("page").innerHTML = "";
  usize=size;
  random = Math.floor(Math.random() * usize);;
  brandom = random+1;
  document.getElementById("page").innerHTML = '<h1>The Luck Game</h1><p>How to play<br>There is a 1/'+usize+' chance of winning<br>The higher the streak the lucker you are!</p>';
  while(c<usize){

    document.getElementById("page").innerHTML += '<button onclick="test('+c+');">'+thing+'</button>';
    
    c++;
  }
  document.getElementById("page").innerHTML += '<br><br>Streak: '+streak;
  
}
function custom(){
  let number = prompt("What number?");
  draw(number);
}
function play(){
  document.getElementById("page").innerHTML = '<h1>What size?</h1><button onclick="draw(2);">2</button><button onclick="draw(3);">3</button><button onclick="draw(4);">4</button><button onclick="draw(5);">5</button><br><button onclick="custom();">Custom</button>';
}
let stuffrandom = Math.floor(Math.random() * 10);;
if(stuffrandom==1){
  document.getElementById("message").innerHTML = "🍀🍀🍀";
}else if(stuffrandom==2){
    document.getElementById("message").innerHTML = "Do you have luck?";
  }else if(stuffrandom==3){
  document.getElementById("message").innerHTML = "I forgot what I was supposed say";
}else if(stuffrandom==4){
  document.getElementById("message").innerHTML = "Try to get the highest streak";
}else if(stuffrandom==5){
  document.getElementById("message").innerHTML = "😆";
}else if(stuffrandom==6){
  document.getElementById("message").innerHTML = "Share this with a friend <a href='mail.google.com'>📧</a>";
}else if(stuffrandom==7){
  document.getElementById("message").innerHTML = "Isn't there something else you can do?";
}else if(stuffrandom==8){
  document.getElementById("message").innerHTML = "This game was made on 3/25/2024";
}else if(stuffrandom==9){
  document.getElementById("message").innerHTML = "Am I real?";
}
  
