'use strict';

// document.querySelector('string').textContent = 'string';
// document.querySelector('string').addEventListener('click' function() {});

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '23';
// console.log(typeof guessNumber);

// game logic
const guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);
let score = 20;





// the addEventListener() method attaches an event handler to the specified element
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;

    // if (guess > 20) {
    //     document.querySelector('.message').textContent = '🚫 Enter a Number between 1 and 20!';
    // }
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 Enter a Number!';
    } else if (guess === guessNumber) {
        document.querySelector('.message').textContent = '👍 Correct Number!';
    } else if (guess > guessNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '👎 You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < guessNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '👎 You Lost!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
}) 