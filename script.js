'use strict';

// document.querySelector('string').textContent = 'string';
// document.querySelector('string').addEventListener('click' function() {});

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '23';

// game logic
const randomNumber = Math.random() * 10;
const truncatedNumber = Math.trunc(randomNumber);
console.log(truncatedNumber);




// the addEventListener() method attaches an event handler to the specified element
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 Enter a Number!';
    } else {
        document.querySelector('.message').textContent = '👍 Correct Number!';
    }
}) 