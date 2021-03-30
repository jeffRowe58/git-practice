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

//function removeAll(array, value)
var bugs = ['mosquito', 'ant', 'scorpion', 'ant', 'mosquito', 'ant', 'typo', 'reference error', 'type error'];
function removeAll(x,y){
    x.forEach(function (element, index) {
        if(element === y){
            x.splice(index, 1);
        }
    })
    return x;
}
console.log(removeAll(bugs,'ant'));
console.log(removeAll(bugs, "mosquito"));
console.log(bugs, "roach");

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

