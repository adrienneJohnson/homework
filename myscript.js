// variables

var x = 10;
var y = 5;
var z = x + y;

console.log(z);

var name = "Adrienne";
var sentence = "My name is ";
var greeting = (sentence + name);

console.log(greeting);

//alerts 

alert("Hi there!");

console.log("Hi there!");

/* data type
string */

var trees = ["pine", "maple", "birch"];
console.log(trees[0]); //pine

/*data type
number */

var quantity = [1, 7, 3];
console.log(quantity[2]); //3

/*data type
boolean */

var fruitissweet = true;
console.log(fruitissweet);

//arrays

var flowers = ["rose", "tulip", "lily"];
var plants = [trees, flowers];

console.log(plants[1][0]); //rose

//testing

1 === 2;
console.log(1===2)

"apple" === "orange";
console.log("apple"==="orange");

console.log(5+5===10);

console.log("up"==="down");

console.log(10<20);

//logic

if(x>5) {
	console.log("You are greater than 5.")
} else {
	console.log("You are less than 5.")
}

if(plants[1][0] === flowers[0]) {
	console.log("A rose is a rose.")
} else {
	console.log("You are not a rose.")
}

//functions
function alertName(aname) {
	return alert(aname);
}
alertName("Adrienne")

function pickAdoor(door) {
	if (door === 1) {
		console.log("You've won a new car!");
	} else if (door === 2) {
		console.log("You won a goat!");
	} else if (door === 3) {
		console.log("You get nothing!");
	}
}

pickAdoor(3)
pickAdoor(2)

function whatDayisit(day) {
	if (day === "Friday") {
		console.log("TGIF.");
	} else if (day === "Monday") {
		console.log("Bummer.");
	} else if (day === "Tuesday") {
		console.log("Still kind of a bummer.");
	} else if (day === "Wednesday") {
		console.log("Still kind of a bummer.");
	} else if (day === "Thursday") {
		console.log("Still kind of a bummer.");
	} else if (day === "Saturday") {
		console.log("Lucky you.")
	} else if (day === "Sunday") {
		console.log("Lucky you.") 
	} else {
		console.log("That's not a day.")
	}
}

whatDayisit("Wednesday")

// for loop
for(var i = 0; i<plants.length; i++) {
	console.log(plants[i])
}












