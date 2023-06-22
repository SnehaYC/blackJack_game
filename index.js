/** @format */

let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function startGame() {
  //sumEl.innerText = "Sum: " + sum;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohooo! You've got Blackjack!";
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
