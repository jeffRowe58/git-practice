"use strict";
// const shoppingCart = {
//     "tax": .08,
//     "items": [
//         {
//             "title": "orange juice",
//             "price": 3.99,
//             "quantity": 1
//         },
//         {
//             "title": "rice",
//             "price": 1.99,
//             "quantity": 3
//         },
//         {
//             "title": "beans",
//             "price": 0.99,
//             "quantity": 3
//         },
//         {
//             "title": "chili sauce",
//             "price": 2.99,
//             "quantity": 1
//         },
//         {
//             "title": "chocolate",
//             "price": 0.75,
//             "quantity": 9
//         }
//     ]
// };
//
// // Exercise 101
// // Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// // Be sure to do this as programmatically as possible.
// // Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// // Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
//
// function mostSpentOnItem(x) {
//     var res = [];
//     for(var i = 0; i < x.items.length; i++){
//       res.push(parseFloat(x.items[i].price * x.items[i].quantity));
//     }
//     return x.items[(res.indexOf(Math.max(...res)))];
// }
//
// console.log(mostSpentOnItem(shoppingCart));
//
//
//
//
// var test = [1,2,3,4,5,6,7,8,9];
//
// function removeAtIndex(array, index) {
//     var arr1 = array.slice(0, index);
//     var arr2 = array.slice(index + 1);
//     return arr1.concat(arr2);
// }
//console.log(removeAtIndex(test, test.indexOf(5)));

//function allIndexesOf
// var fruits = ['apple', 'banana', 'orange', 'apple', 'pineapple'];
// function allIndexesOf(x,y){
//     var res = [];
//     x.forEach(function(element, index)
//     {
//         if (element === y) {
//             res.push(index);
//         }
//     })
//     return "Fruit array contains " + y + " in the " + res + " index/es.";
// }
// console.log(allIndexesOf(fruits,"apple"));
// console.log(allIndexesOf(fruits,"guava"));
// console.log(allIndexesOf(fruits, "pineapple"));


// var bugs = ['mosquito', 'ant', 'scorpion', 'ant', 'ant','mosquito', 'typo', 'reference error', 'type error'];
// function removeAll(x,y){
//     for(var i = 0; i < x.length; i++){
//         if(x[i] === y){
//             x.splice(i, 1);
//             i--;
//         }
//
//     }
//     return x;
// }
// console.log(removeAll(bugs,'ant'));
// console.log(removeAll(bugs, "mosquito"));
// console.log(bugs, "roach");

// var theTruck = {
//     make: "Toyota",
//     model: "Tacoma",
//     truck: true,
//     seats: 5,
//     color: "Red",
//     milage: 10,
//     drive: function () {
//         console.log("vroom vroom")
//         var newMiles = (parseFloat(prompt("Please input miles driven.")));
//         theTruck.milage = theTruck.milage + newMiles;
//         console.log(theTruck.milage);
//     }
// }
// theTruck.drive();
// theTruck.drive();
// theTruck.drive();
// theTruck.drive();
// theTruck.drive();

// function twoDice(x) {
//     var res = [];
//     while (res.length < x) {
//         var die1 = Math.floor(Math.random() * (6) + 1);
//         var die2 = Math.floor(Math.random() * (6) + 1);
//         res.push(die1 + die2);
//     }
//     return res;
// }
// //twoDice(9);
//
// function twentySideDie(x){
//     var res = [];
//     while(res.length < x) {
//         var twentyDie = Math.floor(Math.random() * (20) + 1);
//         res.push(twentyDie);
//     }
//     return res;
// }
// //(twentySideDie(9));
//
// function twelveSidedDie(x){
//     var res = [];
//     while(res.length < x) {
//         var twelveDie = Math.floor(Math.random() * (12) + 1);
//         res.push(twelveDie);
//     }
//     return res;
// }
// //(twelveSidedDie(7));
//
// function tetrahedron(x) {
//     var res = [];
//     while(res.length < x) {
//     var tetrahDie = Math.floor(Math.random() * (4) + 1);
//     res.push(tetrahDie);
// }
//     return res;
// }
// //tetrahedron(7);
//
// function rollDie(x) {
//     var res = [];
//     while(res.length < x) {
//         var Onedie = Math.floor(Math.random() * (6) + 1);
//         res.push(Onedie);
//     }
//     return res;
// }
//rollDie(12);

// function listOfRolls(){
//     var userCount = parseFloat(prompt("How many die would you like to roll?"));
//     var die = [];
//     while(die.length < userCount) {
//         die.push(Math.floor(Math.random() * (6 - 0) + 1));
//     }
//     return die;
// }
// console.log(listOfRolls());

// var funArray = [twoDice, twentySideDie, twelveSidedDie, tetrahedron, rollDie];
// function listOfRollsFromDieFunction(x,y){
//     var die = [];
//     die.push(y(x));
//
//     return console.log("The dice you rolled were " + die);
// }

//var userCount = parseFloat(prompt("How many die would you like to roll?"));
//var userDie = parseFloat(prompt("Which type of dice would you like to roll?" + "\n" + "1) For two dice" + "\n" + "2) For twenty sided die" + "\n" + "3) For twelve sided die" + "\n" + "4) tetrahedron die" + "\n" + "5) For a single die"));
//var uDConvert = userDie - 1;
//listOfRollsFromDieFunction(userCount,(funArray[(uDConvert)]));

//Additional function exercises
// var array = [1,2,3,4,5,6,7,8,9];
// var stringArray = ["Jeff", "'Merica", "Watermellon", "no"];
// function first(x){
//     return x[0];
// }
// first(array);
//
// function secondToLast(x) {
//     return x[(x.length - 2)];
// }
// console.log(secondToLast(array));
//
// function rest(x){
//     x.shift();
//     return x;
// }
// console.log(rest(array));

// function getLongestString(x){
//     var res = [];
//     for(var i = 0; i < x.length; i++){
//         res.push(x[i].length);
//     }
//     return x[(res.indexOf(Math.max(...res)))];
// }
// console.log(getLongestString(stringArray));
//
// function getShortestArray(x){
//     var res = [];
//     for(var i = 0; i < x.length; i++){
//         res.push(x[i].length);
//     }
//     return x[(res.indexOf(Math.min(...res)))];
// }
// console.log(getShortestArray(stringArray));
//
// function addTwoArrays(x,y) {
//     return x.concat(y);
// }
// console.log(addTwoArrays([1,2,3],[4,5,6]));
//
// function getUniqueValues(x) {
//    return x.filter((item, index) => x.indexOf(item) === index);
// }
// console.log(getUniqueValues(["a",'b','a','b','c','c']));
//
// function reverseArray (x) {
//     return x.reverse();
// }
// console.log(reverseArray(stringArray));
//
// var inspirationQuotes = ["Lead, follow, or get out my way.", "Say what you mean and mean what you say.", "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.", "If everyone is thinking alike, then someone isn't thinking.", "Take not counsil of your fears"];
// function getRandomQuote(x) {
//     return x[(Math.floor(Math.random() * (x.length -1)))];
// }
// console.log(getRandomQuote(inspirationQuotes));
//
// function getIndexesOf(x,y){
//     var res = [];
//     for(var i = 0; i < y.length; i++) {
//         if(y[i] === x){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(getIndexesOf(2, [1,2,3,4,2,5,6,2,5,2]));

// function removeAll(x,y){
//    for(var i = 0; i < x.length; i++) {
//        if(x[i] === y){
//            ;
//        }
//    }
//    return res;
// }
// console.log(removeAll([1,2,3,4,2,5,6,2,5,2],2));
//
//
//
//EXTRA PRACTICE ARRAY AND OBJECTS
// function filterNumbers(x) {
//     var res = [];
//     for(var i = 0; i < x.length; i++){
//         if(!isNaN((parseFloat(x[i])))){
//             res.push(x[i]);
//         }
//     }
// return res;
// }
// console.log(filterNumbers(["fred", true, 5, 3]));
//
// //Get Older Object
// var dog = [
//
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
// // getOlder Function
// function getOlder(x){
//     x.forEach(function(dogs){
//          dogs.age++
//     })
// return x;
// }
// console.log(getOlder(dog));
//
// //washCars object array
// var car = [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: '1996',
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ];
// //function washCars
// function washCars(x){
//     x.forEach(function(cars) {
//         if (cars.isDirty === true) {
//             console.log("Your " + cars.make + " is dirty and will be washed" );
//             cars.isDirty = false;
//             console.log(cars)
//         } else {
//             console.log('Your ' + cars.make + ' is already clean');
//         }
//     })
// }
// washCars(car);
//
// //adminList object
//
// var users = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];
//
// //function
// function adminList(x){
//     var res = 0;
//     x.forEach(function(user){
//         if(user.isAdmin === true){
//             res++;
//         }
//     })
//     return res;
// }
// console.log(adminList(users));

// function adminList(x){
//     var res = [];
//     x.forEach(function(user){
//         if(user.isAdmin === true){
//             res.push(user.email);
//         }
//     })
//     return res;
// }
// console.log(adminList(users));

// function adminList(x){
//     var res = [];
//     x.forEach(function(user){
//         if(user.isAdmin === true){
//             res.push(user);
//         }
//     })
//     return res;
// }
// console.log(adminList(users));

//makeSandwichObjects object arrays
// var breads = [
//     'white',
//     'wheat',
//     'rhy',
//     'white'
// ];
// var fillings = [
//     'pb&j',
//     'ham',
//     'cheese steak',
//     'tuna'
// ];
//
// //function
// function makeSandwichObjects(x,y){
//     var sandwich = [
//         {
//             bread:"",
//             fillings:""
//         }
//     ];
//     for(var i = 0; i < x.length; i++){
//         sandwich[i].bread = x[i];
//         sandwich[i].fillings = y[i].toString();
//         var arrayMake = i + 1;
//         sandwich[arrayMake] = {};
//     }
//     sandwich.pop();
//     return sandwich;
// }
// console.log(makeSandwichObjects(breads, fillings))

var array = [1, 2, 3, 4, 5, 7]
var target = 12;

function indices(array, target){
    for(var i = 0; i < array.length; i++){
        for(var j = 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return i + " and " + j;
            }
        }
    }
}

console.log(indices(array, target));

var stringArray = ["smart", "lift", "tat", "bat"];

function commonChar (A){
    const [first, ...rest] = A.sort((a,b) => -(a.length - b.length));
    const duplicates = [];
    [...first].forEach(e => {
        let isDuplicate = true;
        for(let x = 0, len = rest.length; x < len; x++){
            let letters = rest[x];
            const i = letters.search(e);
            if(i !== -1){
                letters = letters.slice(0, i) + letters.slice(i+1);
                rest[x] = letters;
            }else{
                isDuplicate = false;
            }
        }
        if(isDuplicate){
            duplicates.push(e);
        }
    });
    return duplicates;
}

console.log(commonChar(stringArray));