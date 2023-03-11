'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //functions are values that we can use as an argument because as said above they are values
  //javascript will call this function as soon as the event happens

  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //when we get something from the input, it's always a string

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }
  //When guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too high';
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low';
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
