<<<<<<< HEAD
var carClass = function(name, company, doors, price) {
 this.name = name
 this.company = company
 this.doors = doors
 this.price = price
 this.grettings = function() {
  console.log('Hi Welcome to the subie fest of cars, would you like to drive a ' + this.name + 'its a brand new ' + this.company + 'for the price of ' + this.price)
 }
}

var wrx = new carClass('wrx', 'subaru', 4, '$30,000')
var sti = new carClass('sti', 'subaru', 4, '$35,000')
var forester = new carClass('forester', 'subaru', 5, '$20,000')
var outback = new carClass('outback', 'subaru', 5, '$25,000')

// arrow functions
var a = () => {

}

// template strings
const store = (name, address, state, zipcode) => {
  return `${name} is located at ${address} in ${state} with zipcode of ${zipcode}`
}
store('bob', '221 muffin rd', 'CO', 80509)

// default parameters 
const dealer = (name, totalCars=3000) => {
  return `${name} has a minimum of ${name} available cars at all times`
}
dealer('subies')

// rest operator
const userNames = function(...names) {
  // var names = [every argument in this function]
  console.log(names)
}
userNames('joe', 'ethan', 'katie', 'jerry', 'bob', 'sandy')

// spread operator 
const clients = ['google', 'facebook', 'twitter']
const friends = ['ethan', 'joe', 'jimmy']

const listOfNames = [...clients, ...friends]

// destructuring objects 
var cars = ['honda', 'subaru']

var userInfo = {
  name: 'ethan',
  lastName: 'Beauregard',
  age: 20
  cars
}

var {name, lastName, age cars} = userInfo
console.log(userInfo.cars)

var userData = function({name, lastName, age}) {
  console.log(`User: ${name} ${lastName} is ${age} years old`)
}

userData(userInfo)

// destructuring arrays
var cars = ['honda', 'subaru', 'toyota']

var jamesCar = cars[2]

var [bobCar, jimmyCar, jamesCar] = cars
console.log(jamesCar)

// forEach method
var users = ['ethan', 'bobby', 'jimmy', 'jose']

// for(var i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

users.forEach((user)) => console.log(user)

// map method
var users = [
  {name: 'ethan', age: 20},
  {name: 'jimmy', age: 34},
  {name: 'james', age: 16},
]
var userNames = users.map((user) => {
  return user.name
})
console.log(userNames)

// filter 
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.filter((users) => {
  return users.age >= 18
})
console.log(newData)

// find
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.find((users) => {
  return users.name == 'ethan'
})
console.log(newData)

// every and some
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.every((users) => {
  return users.age >= 21
})
console.log(newData)

var newData2 = users.some((users) => {
  return users.age <= 16
})
=======
var carClass = function(name, company, doors, price) {
 this.name = name
 this.company = company
 this.doors = doors
 this.price = price
 this.grettings = function() {
  console.log('Hi Welcome to the subie fest of cars, would you like to drive a ' + this.name + 'its a brand new ' + this.company + 'for the price of ' + this.price)
 }
}

var wrx = new carClass('wrx', 'subaru', 4, '$30,000')
var sti = new carClass('sti', 'subaru', 4, '$35,000')
var forester = new carClass('forester', 'subaru', 5, '$20,000')
var outback = new carClass('outback', 'subaru', 5, '$25,000')

// arrow functions
var a = () => {

}

// template strings
const store = (name, address, state, zipcode) => {
  return `${name} is located at ${address} in ${state} with zipcode of ${zipcode}`
}
store('bob', '221 muffin rd', 'CO', 80509)

// default parameters 
const dealer = (name, totalCars=3000) => {
  return `${name} has a minimum of ${name} available cars at all times`
}
dealer('subies')

// rest operator
const userNames = function(...names) {
  // var names = [every argument in this function]
  console.log(names)
}
userNames('joe', 'ethan', 'katie', 'jerry', 'bob', 'sandy')

// spread operator 
const clients = ['google', 'facebook', 'twitter']
const friends = ['ethan', 'joe', 'jimmy']

const listOfNames = [...clients, ...friends]

// destructuring objects 
var cars = ['honda', 'subaru']

var userInfo = {
  name: 'ethan',
  lastName: 'Beauregard',
  age: 20
  cars
}

var {name, lastName, age cars} = userInfo
console.log(userInfo.cars)

var userData = function({name, lastName, age}) {
  console.log(`User: ${name} ${lastName} is ${age} years old`)
}

userData(userInfo)

// destructuring arrays
var cars = ['honda', 'subaru', 'toyota']

var jamesCar = cars[2]

var [bobCar, jimmyCar, jamesCar] = cars
console.log(jamesCar)

// forEach method
var users = ['ethan', 'bobby', 'jimmy', 'jose']

// for(var i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

users.forEach((user)) => console.log(user)

// map method
var users = [
  {name: 'ethan', age: 20},
  {name: 'jimmy', age: 34},
  {name: 'james', age: 16},
]
var userNames = users.map((user) => {
  return user.name
})
console.log(userNames)

// filter 
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.filter((users) => {
  return users.age >= 18
})
console.log(newData)

// find
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.find((users) => {
  return users.name == 'ethan'
})
console.log(newData)

// every and some
var users = [
  {name: 'ethan', age: 43},
  {name: 'joe', age: 23},
  {name: 'beth', age: 15},
  {name: 'sandy', age: 76}
]

var newData = users.every((users) => {
  return users.age >= 21
})
console.log(newData)

var newData2 = users.some((users) => {
  return users.age <= 16
})
>>>>>>> 46250f15bb75e263a058c10290033524f7d15025
console.log(newData2)