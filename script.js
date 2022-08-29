'use strict';





let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);



if(!guess) {displayMessage(' ⛔️ No Number')}


//When you win.

else if(guess === randomNumber) {displayMessage(' You are right!');
document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').textContent = randomNumber;
if(score > highscore) {
    highscore = score;
}
}

//When its too high or low


else if(guess !== randomNumber) {
    if(score > 1) {
        document.querySelector('.message').textContent = guess > randomNumber ? 'It is too high' : 'It is too low';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {displayMessage(" You lost the game!");
document.querySelector('.score').textContent = 0;}
}


// else if (guess > randomNumber) {
//     if(score > 1) {
//         document.querySelector('.message').textContent = ' It is too high';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {document.querySelector('.message').textContent = " You lost the game!";}
// }


// //When its too low.

// else if (guess < randomNumber) {
//     if(score > 1) {
//         document.querySelector('.message').textContent = ' Its too low';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {document.querySelector('.message').textContent = " You Lost the game!";}
// }

})



document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').textContent = '?';
document.querySelector('body').style.backgroundColor = '#222';
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = '';
document.querySelector('.highscore').textContent = highscore;

})



