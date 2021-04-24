var startBtn = document.getElementById("startBtn");
var userHand = document.getElementById("userHand");
var aiHand = document.getElementById("aiHand");


function startGame(){
    userHand.src = '../graphic/userScissors.png';
}

startBtn.addEventListener('click', startGame);



