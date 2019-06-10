///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1995);
function calculateAge(year) {
 console.log(2019 - year);
}

// retirement(1995) not possible 

var retirement = function(year) {
 console.log(65 - (2019 - year));
}
retirement(1995);

// variables
console.log(age);
var age = 23;

function foo() {
 console.log(age);
 var age = 19;
 console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

var a = 'hello!';
first();
function first() {
 var b = 'hi!';
 second();
 function second() {
  var c = 'hey!';
  console.log(a + b + c);
 }
}

// Example to show the differece between execution stack and scope chain

var a = 'hello!';
first();
function first() {
 var b = 'hi!';
 second();
 function second() {
  var c = 'hey!';
  third();
 }
}
function third() {
 var d = 'john';
 console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword

var john = {
 name: 'john',
 yearOfBirth: 1998,
 calculateAge: function() {
  console.log(this);
  console.log(2019 - this.yearOfBirth);
  // function innerFunction() {
  //  console.log(this)
  // }
  // innerFunction();
 }
}
john.calculateAge();


var mike = {
 name: 'mike',
 yearOfBirth: 1992,
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();
