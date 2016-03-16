// Playing Card Constructor
function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}

var aceOfSpades = new Card('Spades', 'Ace');
console.log(aceOfSpades);

// Six-sided Die Constructor
function SixSidedDie (number, roll) {
	this.number = number;
	this.roll = roll;
	this.rollDie = function(dieNumber) {
		return(Math.floor(Math.random()*((6-1) + 1)) + 1)
	}
}