'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //when we get something from the input, it's always a string
});
//functions are values that we can use as an argument because as said above they are values
//javascript will call this function as soon as the event happens
