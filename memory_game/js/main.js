




var cards = [
{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
{rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
{rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
{rank: "king", suit: "diamons", cardImage: "images/king-of-diamonds.png"},
];

var cardsInPlay = [];

function checkForMatch() {
	setAttribute(cards[cardId].cardImage) // I thin'k this part is wrong.
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}	
}


function flipCard() {
var carId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardid].rank);

console.log("user flipped " + cards[cardId].rank);
console.log("user flipped" + cards[cardId].cardImage);
console.log("user flipped" + caeds[cardId].suit);

checkForMatch();
}



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