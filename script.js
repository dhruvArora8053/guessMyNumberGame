'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener(
  'click',
  function () {
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

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    //When guess is different
    else if (guess !== secretNumber) {
      if (score > 1)
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
);

//Again button implementation
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
