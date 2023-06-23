/** @format */

let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("cards-el");

function startGame() {
  //sumEl.innerText = "Sum: " + sum;
  cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
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

function newCard() {
  console.log("Drawing a new card from the deck!");
}
