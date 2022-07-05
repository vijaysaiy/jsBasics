'use strict';

//  selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//  initial conditions
let currentScore, activePlayer, scores, isPlaying;
function initGame() {
  currentScore = 0;
  isPlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.getElementById('score--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
}

initGame();

function getActivePlayerEl(player) {
  return document.getElementById(`current--${player}`);
}
//  roll dice function

newBtn.addEventListener('click', initGame);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);

function rollDice() {
  // generate random dice roll
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // switch player when rolled dice is 1 otherwise add score to current score
    if (dice !== 1) {
      currentScore += dice;
      getActivePlayerEl(activePlayer).textContent = currentScore;
    } else {
      //  switch player
      switchPlayer();
    }
  }
}

function holdScore() {
  if (isPlaying) {
    //  first add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //  check if score is >=100
    if (scores[activePlayer] >= 100) {
      //  finish the game
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //  switch player
      switchPlayer();
    }
  }
}

function switchPlayer() {
  getActivePlayerEl(activePlayer).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
