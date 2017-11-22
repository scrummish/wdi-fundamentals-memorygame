let cards = ["queen","queen","king","king"];

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
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);