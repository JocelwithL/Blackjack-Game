let firstCard = 11;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector("#card-el");




function startGame() {
if (sum < 21) {
    message = "Want another card?";
}
else if (sum===21) {
   message = "You got blackjack!";
    hasBlackJack = true;
}
else {
    message = "You're out!";
    isAlive = false;
}
sumEl.innerHTML = "Sum: " + sum;
cardEl.innerHTML = "Cards: " + firstCard + " - " + secondCard;
messageEl.innerHTML = message;
console.log(message)
}


