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
    switch(cardsInPlay.length === 2) {
        case cardsInPlay[0] === cardsInPlay[1]:
            alert("You found a match!")
            break;
        default:
            alert("Sorry, try again.")
    }
}

let flipCard = function (cardId){
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
}

flipCard(0);
flipCard(2);