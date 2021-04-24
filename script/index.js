const startBtn = document.getElementById("startBtn");
const userHand = document.getElementById("userHand");
const aiHand = document.getElementById("aiHand");

const rock = document.getElementById("rock") ;
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

var userChoice;
var aiChoice;

function activeWeapon(weapon){

    if(weapon == 'rock'){
        rock.classList.add('panel__right__weapons__item--active');
        rock.classList.remove('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--passive');

        userChoice = 'rock';
    }
    if(weapon == 'paper'){
        rock.classList.add('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--active');
        paper.classList.remove('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--passive');

        userChoice = 'paper';

       
    }
    if(weapon == 'scissors'){
        rock.classList.add('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--active');
        scissors.classList.remove('panel__right__weapons__item--passive');

        userChoice = 'scissors';
    }

     startBtn.classList.remove('panel__right__startbtn--not_ready');
}

function whoWin(aiWeapon, userWeapon){
}

function startGame(){

    aiChoice = Math.floor(Math.random() * 3) + 1;

    switch(aiChoice){
        case 1 :
            aiChoice = 'rock';
            break;
        case 2 :
            aiChoice = 'paper';
            aiHand.src = './graphic/aiPaper.png';
            break;    
        case 3 :
            aiChoice = 'scissor';
            aiHand.src = './graphic/aiScissors.png';
            break;
    }
    switch(userChoice){
        case 'rock' :
            break;
        case 'paper' :
            userHand.src = './graphic/userPaper.png';
            break;    
        case 'scissors' :
            userHand.src = './graphic/userScissors.png';
            break;
    }

}

startBtn.addEventListener('click', startGame);


