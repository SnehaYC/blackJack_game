/** @format */

let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]; // Arrays - ordered lists of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}
function renderGame() {
  //sumEl.innerText = "Sum: " + sum;
  //cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
  let card = 7;
  sum += card;
  renderGame();
}
