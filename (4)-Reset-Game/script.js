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
// score0El.textContent = 0 // Here we are specifying numbers
// score1El.textContent = 0 // But JS convert them into strings to display them on the page
// diceEl.classList.add('hidden')

// const scores = [0, 0] // Big scores
// let currentScore = 0 // Current score should be decleared outside. We need this variable because we do not want it only extinct in DOM.
// let activePlayer = 0 // Will be used which player actually playing at that moment
// let playing = true // we will use this whether game is still playing or not // called state variable

let scores, currentScore, activePlayer, playing

const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}
init()

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

// Rolling Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer()
      //   document.getElementById(`current--${activePlayer}`).textContent = 0
      //   currentScore = 0
      //   activePlayer = activePlayer === 0 ? 1 : 0
      //   player0El.classList.toggle('player--active') // it will add the class if it is nit there and if it is there, it will remove it.
      //   player1El.classList.toggle('player--active')
    }
  }
})
btnHold.addEventListener('click', function () {
  if (playing) {
    // added whether game is continue or ended
    // 1. Add current score to the active player
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]
    // 2. Check if players sccore >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false
      diceEl.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    } else {
      // Switch to the next player
      switchPlayer()
    }
  }
})
btnNew.addEventListener('click', init)
// If any class already added and we said add nothing change we will not get a error
// Also if any classes did not exist and we said remove nothing will change and we will not get an error
