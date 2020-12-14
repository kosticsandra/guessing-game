'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = randomNumber();

let score = 20;
let highscore = 0;

function display_message(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  display_message('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there's no input
  if (!guess) {
    display_message('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    display_message('Correct number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      display_message(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display_message('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
