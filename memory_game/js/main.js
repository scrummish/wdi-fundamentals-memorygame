let cards = ["queen","queen","king","king"];

let cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

switch(cardsInPlay.length === 2) {
    case cardsInPlay[0] === cardsInPlay[1]:
        alert("You found a match!")
        break;
    default:
        alert("Sorry, try again.")
}