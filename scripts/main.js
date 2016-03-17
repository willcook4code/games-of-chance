// Playing Card Constructor
function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}

var aceOfSpades = new Card('Spades', 'Ace');
console.log(aceOfSpades);

// Six-sided Die Constructor

function SixSidedDie () {
	this.faceNumber = Math.floor(Math.random()*6 + 1);
	this.rollDie = function() {
		var newNumber = Math.floor(Math.random()*6 + 1);
		return newNumber;
		//console.log(newNumber);
	}
}

// var sumDie = {};

// var firstDie = die1.rollDie(6);
// var secondDie = die2.rollDie(6);

function getProbabilities() {
	var die1 = new SixSidedDie();
	var	die2 = new SixSidedDie();
	for (var i = 0; i < 1000; i++) {
		
		var possibleSums = [2,3,4,5,6,7,8,9,10,11,12];
		var nthRole1= die1.rollDie();
		var nthRole2= die2.rollDie();
		var rolls = [nthRole1 + nthRole2];
	
		for (var j=0; j < rolls.length; j++) {
		
		var sum = possibleSums[j];
			
			if(sum in rolls) {
				rolls[sum]++;
			} else {
				rolls[sum] = 1;
			}
			return rolls;
		}
	}
	
}

console.log(getProbabilities());



