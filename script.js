function roll(){

var randomnumber= Math.floor((Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber+".png");
var randomnumber2= Math.floor((Math.random()*6))+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");
if(randomnumber>randomnumber2){
  if(document.getElementById("name1").value===""){
    document.querySelector("h1").innerHTML="Player1 Wins !";
  }
  else{
    document.querySelector("h1").innerHTML=document.getElementById("name1").value+" Wins !";
  }

}
else if(randomnumber2>randomnumber){
  if(document.getElementById("name2").value===""){
    document.querySelector("h1").innerHTML="Player2 Wins !";
  }
  else{
    document.querySelector("h1").innerHTML=document.getElementById("name2").value+" Wins !";
  }
}
else if(randomnumber=randomnumber2){
  document.querySelector("h1").innerHTML="It's a draw";
}

}
