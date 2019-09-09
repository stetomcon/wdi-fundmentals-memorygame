const cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped queen");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped king");

if (cardsInPlay.length === 2 && cardOne === cardTwo){
		alert("you found a match!");
	} else {
		alert("Sorry, try again.");
	}



