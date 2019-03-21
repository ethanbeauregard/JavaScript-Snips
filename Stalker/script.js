// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("what is your age?");
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old")

// // Get age and convert it to a Number (prompt always returns a String)
// var age = Number(prompt("What is your age?"));
 
// // If age is negative
// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }
 
// // If age is 21  
// if(age === 21) {
//  console.log("Happy 21st Birthday!");
// }
 
// // If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }
 
// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }

// var secretNumber = 10;
// var strNumber = prompt("Guess a number");
// var guess = Number(strNumber);

// if (guess === secretNumber) {
// 	alert("You guessed correctly!")
// }
// else if (guess > secretNumber) {
// 	alert("You guessed too high")
// }
// else {
// 	alert("you guessed too low")
// }

// //Prints numbers from -10 to 19
// var num = -10
// while (num <= 19) {
// 	console.log(num);
// 	num++;
// }

for (i = -10; i <= 19; i++) {
	console.log(i);
}

// // Prints even numbers from 10 to 40
// var num = 10;
// while (num <=40) {
// 	console.log(num);
// 	num+=2;
// }

for (i=10; i<=40; i+=2) {
	console.log(i);
}

// //Prints all odd numbers from 300 to 333
// var num = 301;
// while (num <= 333 && num >=301) {
// 	console.log(num);
// 	num+=2;
// }

for (i=301; i<=333 && i>=301; i+=2){
	console.log(i);
}

// //Prints all numbers divisible by 3 and 5 between 5 and 50
// var num = 5
// while (num < 50){
// 	if (num % 5 === 0 && num % 3 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

for (i = 5; i < 50; i++){
	if (i%5 === 0 && i%3 ===0) {
		console.log(i);
	}
}


while (answer !== "yes") {
	var answer = prompt("Are we there yet? ");
}

alert("Yay we made it!!");



//isEven
function isEven(num) {
	return num % 2===0;
}	

function fact(num){
	//result variable
	var result = 1;
	//calculate fact and store in result
	for (var i = 2; i < num; i++) {
		result *= i;
	}
	//return result variable 
	return result;
}

function dashed(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}

function sing() {
	console.log("WEEEEEEE");
}

setInterval(sing, 10000);

// todo app

var todos = [];

var input = prompt("what would you like to do?");



while (input !== quit) {
	if (input === list) {
		console.log(todos);
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		})
	} else if (input === "new") {
	var newTodos = prompt("Enter a new todo");
		var push = todos.push(newTodos);
		console.log(push);
	} else if (input === "delete") {
		var index = prompt("Enter the index of the item you want to be deleted.");
		var splice = todos.splice(index, 1);
		console.log(splice);
	}
}

console.log("You quit the app, thanks for playing!")






