
let score = 10;
let highScore = 0;

let message = document.querySelector('.p1');
message.style.color = 'red';

let changeMsg = function (msg) {
    message.textContent = msg;
};

let clickBtn = document.getElementById("check");
let inputUser1 = document.getElementById("userInput");



document.getElementById("check").disabled = true;
document.getElementById("userInput").disabled = true;


function start () {
    score = 10;
    document.querySelector('.score').innerHTML = score;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    console.log(secretNumber);
    changeMsg('Lets start Guessing...');

    document.getElementById("check").disabled = false;
    document.getElementById("userInput").disabled = false;
    document.querySelector('.page').style.background = "linear-gradient(to right, purple , red)";
    document.querySelector('.guessbox-container').style.background = 'blueviolet'; 
    document.querySelector('.guessbox').innerHTML ='?';


    }

    clickBtn.click(function(event) {
        event.preventDefault();
    });



function game (){

    if (inputUser1.value == '') {
        changeMsg('Please enter a valid number!');
    }

    else if (inputUser1.value > secretNumber){
        changeMsg('Too High');
        score--;
        document.querySelector('.score').innerHTML = score;

    }

    else if (inputUser1.value < secretNumber){
        changeMsg('Too Low');
        score--;
        document.querySelector('.score').innerHTML = score;


    }
    else if(inputUser1.value == secretNumber){
        changeMsg('Congrats! You got the number');

        document.querySelector('.page').style.background = "linear-gradient(to top, black, yellow)";
        document.querySelector('.guessbox-container').style.background = 'red'; 
        document.querySelector('.guessbox').innerHTML = secretNumber;

        document.getElementById("check").disabled = true;
        document.getElementById("userInput").disabled = true;
    }

    else {
        changeMsg('Please enter a valid number!');
    }

    if(score > highScore){
        highScore = score;
        document.querySelector('.score').innerHTML = score;
        document.querySelector('.highscore').innerHTML = highScore;
    }
    
    

    if (score < 1){
        changeMsg('Game Over! You Lost!');
        document.getElementById("check").disabled = true;
        document.getElementById("userInput").disabled = true;
    }
};


   




