let secretNumber = Math.trunc(Math.random()* 100)+ 1;
console.log(secretNumber);

let score = 10;
let highScore = 0;

let message = document.querySelector('.p1');
message.style.color = 'red';

let changeMsg = function (msg) {
    message.textContent = msg;
};

let clickBtn = document.querySelector('.check');
let inputUser1 = document.querySelector('.userInput');

if (score < 1){
    changeMsg('Game Over! You Lost!');
    document.querySelector('.check').disabled = true;

}

clickBtn.addEventListener('click', function(){
    

    if (inputUser1 == '') {
        changeMsg('Please enter a valid number!');
    }

    else if ((inputUser1 < 1 )|| (inputUser1 > 100)){
        changeMsg('Please enter a number between 1 and 100!');
        
    }

    else if (inputUser1 > secretNumber){
        changeMsg('Too High');
        score--;
        document.querySelector('.score').innerHTML = score;

    }

    else if (inputUser1 < secretNumber){
        changeMsg('Too Low');
        score--;
        document.querySelector('.score').innerHTML = score;

    }
    else if(inputUser1 === secretNumber){
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
});

if(score > highScore){
    highscore = score;
}


    document.querySelector('.score').innerHTML = score;
    document.querySelector('.highscore').innerHTML = highScore;



document.querySelector('.play').addEventListener('click', function () {

    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    changeMsg('Lets start Guessing...');


});