// Playing Card Constructor
function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}

var aceOfSpades = new Card('Spades', 'Ace');
console.log(aceOfSpades);

// Six-sided Die Constructor

function SixSidedDie () {
	this.faceNumber = Math.floor(Math.random()*6) + 1;
	this.rollDie = function() {
		this.faceNumber = Math.floor(Math.random()*6) + 1;
		return this.faceNumber;
		//console.log(this.faceNumber);
	};
}

function getProbabilities() {
	//Make 2 dice.
	var die1 = new SixSidedDie();
	var	die2 = new SixSidedDie();
	//Rolls 2 dice 1000 times each.
	var possibleSums = {};
	for (var i = 0; i < 1000; i++) {
		var nthRole1= die1.rollDie();
		var nthRole2= die2.rollDie();
		//Add the sum of EACH roll together.
		var rolls = (nthRole1 + nthRole2);
		//Keeps track of the sum occurences.
		if(rolls in possibleSums) {
			possibleSums[rolls]++;
		} else {
			possibleSums[rolls] = 1;
		}
	}	
	//Returns a list of the occurences.
	return possibleSums;
}

var result = getProbabilities();
console.log(result);


