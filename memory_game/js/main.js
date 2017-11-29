let cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

let checkForMatch = function (){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        } else alert("Sorry, try again.");
    }
}

let flipCard = function (){
    let cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
}

let createBoard = function (){
    for (var i = 0; i < cards.length; i++) {
            let cardElement = document.createElement('img');
            cardElement.setAttribute('src', 'images/back.png');
            cardElement.setAttribute('data-id', i);
            cardElement.addEventListener('click', flipCard);
            document.getElementById('game-board').appendChild(cardElement);
        }
}
createBoard();



/* Bonus

We've done it! Think about how you could take this game even further. It might be useful to add a "Reset" button to the HTML and set up an event in the JavaScript file so that the user can reset the game after playing.

For an extra challenge, consider how you could keep track of and display the user's score. */