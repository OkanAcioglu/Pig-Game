'use strict'

// Selecting elements
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
let currentScore = 0 // Current score should be decleared outside. We need this variable because we do not want it only extinct in DOM.
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
    current0El.textContent = currentScore // Will be changed later
  } else {
  }
})
