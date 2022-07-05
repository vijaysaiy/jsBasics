'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore;
const scoreEl = document.querySelector('.score');
const resultEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('.guess');
const highscoreEl = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');

// set initial values
setInitials();

// event listeners
checkBtn.addEventListener('click', validateGuess);
resetBtn.addEventListener('click', resetGame);

// functions implementation

function setInitials() {
  scoreEl.textContent = 20;
  numberEl.textContent = '?';
  bodyEl.style.backgroundColor = '#222';
  resultEl.textContent = 'Start guessing...';
  inputEl.value = '';
  checkBtn.removeAttribute('disabled', '');
}

function validateGuess() {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    resultEl.textContent = '⛔️  No number';
    return;
  }

  // for correct answer
  if (guess === secretNumber) {
    score++;
    scoreEl.textContent = score;
    numberEl.textContent = secretNumber;
    highscoreEl.textContent = score;
    resultEl.textContent = '🎉  Correct number';
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    checkBtn.setAttribute('disabled', '');
    // TODO: prompt user to click on Again button to restart the game after winning
    return;
  }

  if (guess !== secretNumber) {
    wrongGuess(guess, secretNumber);
  }
}

function wrongGuess(guess, secretNumber) {
  if (score > 1) {
    score--;
    scoreEl.textContent = score;
    resultEl.textContent =
      guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
  } else {
    resultEl.textContent = '💥 You lost the game';
    scoreEl.textContent = 0;
  }
}

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setInitials();
}
