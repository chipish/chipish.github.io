let secretNumber = Math.trunc(Math.random()* 100)+ 1;
console.log(secretNumber);

let score = 10;
let highScore = 0;

const textElement = document.querySelector('.p1');
textElement.style.color = 'red';

const changeMsg = function (msg) {
    textElement.textContent = msg;
};
//changeMsg('Invalid');




document.getElementById('check').addEventListener('click', function(){
    let inputUser1 = Number(document.getElementById('.userInput').value);

    if (typeof inputUser1 !=="number") {
        changeMsg('Please enter a valid number!');
        //document.querySelector('.p1').textContect= 'Please enter a valid number!'
    }
    else if (inputUser1 < 1 || inputUser1 > 100 ){
        changeMsg('Please enter a number between 1 and 100!');


    }

    else if(inputUser1 === secretNumber){
        changeMsg('Congrats! You got the number');

        document.querySelector('page').style.background = 'powderblue';
        document.querySelector('guess-container').style.background = 'powerblue'; 
        document.querySelector('guessbox').value = secretNumber; 
        cument.querySelector('page').style.background = 'linear-gradient (to top right, blue, red)';
    }
});

if(score > highscore){
    highscore = score;
}
else if (inputUser1 !== secretNumber){
    if (score > 0){ changeMsg((inputUser1 > secretNumber) ? 'Too High' : 'Too Low')}

}

else if(score === 0){
    changeMsg('You lost the game!')
    //document.querySelector('check').disabled = true;
    break;
}

    score--;

    document.querySelector('score').value = score;
    document.querySelector('highscore').value = highScore;



document.getElementById('play').addEventListener('click', function () {

    let score = 10;
    let secretNumber = Math.trunc(Math.random() * 100) + 1;
    changeMsg('Lets start Guessing...');


});