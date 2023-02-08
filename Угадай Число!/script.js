'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click' ,
function() {
    const guessingNumber = Number(document.querySelector('.number-input').value );
    console.log(guessingNumber, typeof guessingNumber);

    //NO input
    if(!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';

    }
    //Player won
    else if(guessingNumber === randomNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'chartreuse';
        document.querySelector('.question').style.width = '50rem';
    
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
    //Too high
    else if(guessingNumber > randomNumber){
        if(score > 1){
         document.querySelector('.guess-message').textContent = 'Слишком много';
         score--;
         document.querySelector('.score').textContent = score;   
        }
    else {
        document.querySelector('.guess-message').textContent = 'Вы Проиграли';
        document.querySelector('.score').textContent = 0;
    }
    }
    //Too low
    else if(guessingNumber < randomNumber) {
        if(score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком мало';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', 
function() {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.number-input').textContent = '';
})