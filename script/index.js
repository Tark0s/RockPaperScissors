const startBtn = document.getElementById("startBtn");
const userHand = document.getElementById("userHand");
const aiHand = document.getElementById("aiHand");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let userChoice;
let aiChoice;

function activeWeapon(weapon) {

    if (weapon == 'rock') {
        rock.classList.add('panel__right__weapons__item--active');
        rock.classList.remove('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--passive');

        userChoice = 1;
    }
    if (weapon == 'paper') {
        rock.classList.add('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--active');
        paper.classList.remove('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--passive');

        userChoice = 2;
    }
    if (weapon == 'scissors') {
        rock.classList.add('panel__right__weapons__item--passive');
        paper.classList.add('panel__right__weapons__item--passive');
        scissors.classList.add('panel__right__weapons__item--active');
        scissors.classList.remove('panel__right__weapons__item--passive');

        userChoice = 3;
    }
    startBtn.classList.remove('panel__right__startbtn--not_ready');
}
function whoWon(aiweapon, userweapon){

    if(aiweapon == userweapon){
        return 'draw';
    }else if(aiweapon == 1){
        if(userweapon == 2){
            return 'YOU';
        }
        return 'AI'
    }else if(aiweapon == 2){
        if(userweapon == 3){
            return 'YOU';
        }
        return 'AI'
    }else{
        if(userweapon == 1){
            return 'YOU';
        }
        return 'AI';
    }

}

function startGame() {

    aiChoice = Math.floor(Math.random() * 3) + 1;

    userHand.classList.add('panel__left__userHand--animation');
    aiHand.classList.add('panel__left__aiHand--animation');

    setTimeout(
        function setWeapone() {
            switch (aiChoice) {
                case 1:
                    break;
                case 2:
                    aiHand.src = './graphic/aiPaper.png';
                    break;
                case 3:
                    aiHand.src = './graphic/aiScissors.png';
                    break;
            }
            switch (userChoice) {
                case 1:
                    break;
                case 2:
                    userHand.src = './graphic/userPaper.png';
                    break;
                case 3:
                    userHand.src = './graphic/userScissors.png';
                    break;
            }
        }, 2150);

        

    setTimeout( function(){

    let result = whoWon(aiChoice, userChoice);

        switch (result) {
            case 'draw':
                alert('SCORE: DRAW')
                break;
            default:
                alert('SCORE: ' + result + " WON!");

        }

        window.location.reload(true);
        
    },4000 );

    
}

startBtn.addEventListener('click', startGame);


