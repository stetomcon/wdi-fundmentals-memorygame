var cards = [
{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
{rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
{rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
{rank: "king", suit: "diamons", cardImage: "images/king-of-diamonds.png"},
];
// prefer my var cards to be in this layout -sw
var cardsInPlay = [];

 function checkForMatch() {
 if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
 } else {
 alert("Sorry, try again");
};

}; // do I need this??? 


function flipCard() {
var cardId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);

 if (cardsInPlay.length === 2){
    checkForMatch();
 };
};

console.log(cardsInPlay);


 function createBoard() {
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);

  }
};

createBoard();