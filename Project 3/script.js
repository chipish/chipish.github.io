let secretNumber = Math.trunc(Math.random()* 100)+ 1;
console.log(secretNumber);

let score = 10;
let highScore = 0;

let message = document.querySelector('.p1');
message.style.color = 'red';

let changeMsg = function (msg) {
    message.textContent = msg;
};

let clickBtn = document.getElementById("check");
let inputUser1 = document.getElementById("userInput");

if (score < 1){
    changeMsg('Game Over! You Lost!');
    document.getElementById("check").disabled = true;

}


function start () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    changeMsg('Lets start Guessing...');
    document.querySelector('.check').disabled = false;

};

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

        document.querySelector('.page').style.background = 'powderblue';
        document.querySelector('.guess-container').style.background = 'red'; 
        document.querySelector('.guessbox').value = secretNumber; 
        document.querySelector('.page').style.background = 'linear-gradient (to top right, blue, red)';

        document.querySelector('.check').disabled = true;

    }

    else {
        changeMsg('Please enter a valid number!');
    }
};

if(score > highScore){
    highscore = score;
}


    document.querySelector('.score').innerHTML = score;
    document.querySelector('.highscore').innerHTML = highScore;




