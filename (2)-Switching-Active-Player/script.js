'use strict'

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') // another way of selecting element
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// Starting conditions
score0El.textContent = 0 // Here we are specifying numbers
score1El.textContent = 0 // But JS convert them into strings to display them on the page
diceEl.classList.add('hidden')

const scores = [0, 0] // Big scores
let currentScore = 0 // Current score should be decleared outside. We need this variable because we do not want it only extinct in DOM.
let activePlayer = 0 // Will be used which player actually playing at that moment

// Rolling Dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1

  // 2. Display dice
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png` // changing image acoording to dice

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active') // it will add the class if it is nit there and if it is there, it will remove it.
    player1El.classList.toggle('player--active')
  }
})
