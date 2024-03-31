var i = 1 + Math.floor((Math.random() * 6));
var j = 1 + Math.floor((Math.random() * 6));

var randomDiceImage1 = "./images/dice" + i + ".png";
var randomDiceImage2 = "./images/dice" + j + ".png";

document.querySelector('.pic1').src = randomDiceImage1;
document.querySelector('.pic2').src = randomDiceImage2;




var winner = document.querySelector("h1");
if(i > j){
    winner.innerHTML = "🚩 Player 1 Wins!";
}
else if(j > i){
    winner.innerHTML = "🚩 Player 2 Wins!";
}
else{
    winner.innerHTML = "Draw!";
}