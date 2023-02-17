let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector("#card-el");
// let playerName = "Jocel";
// let playerChips = 145;
// let playerEl = document.getElementById("player-el");

// playerEl.innerHTML = playerName + ": $" + playerChips;

function getRandomCard() {
     let randomNum = Math.floor(Math.random() * 13) + 1;
     if(randomNum > 10) {
        return 10;
    }

    else if (randomNum === 1) {
        return 11;
    }

    else {
        return randomNum
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
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
cardEl.innerHTML = "Cards: "
for(let i=0; i < cards.length; i++) {
    cardEl.innerHTML += cards[i] + " ";
}
messageEl.innerHTML = message;
}

function getNewCard() {
    if (hasBlackJack === false && isAlive === true) {
        let anotherCard = getRandomCard();
        sum = sum + anotherCard;
        cards.push(anotherCard)
        renderGame()
    }
    
}

// 3:21:00


