'use strict'

// Selecting elements
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') // another way of selecting element
const diceEl = document.querySelector('.dice')

// Starting conditions
score0El.textContent = 0 // Here we are specifying numbers
score1El.textContent = 0 // But JS convert them into strings to display them on the page
diceEl.classList.add('hidden')
