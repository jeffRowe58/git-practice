"use strict";

function renderDice(die){
var html = '<div class="container">';
html += '<div class="card bg-transparent border-0">';
html += '<div class="card-body  border-0">';
html += '<form>';
html += '<label for="diceObject.id" class="die border-0"><img src="diceObject.src" class="die" alt="diceObject.id" id="diceObject.id"></label>';
html += '<input type="checkbox" name="die" class="die" id="diceObject.id">';
html += '</form>';
html += '</div>';
return html;
}
function renderDie(diceObject) {
    var html = '';
    for(var i = 0; i < diceObject.length; i++) {
        html += renderDice(diceObject[i]);
    }
    return html;
}

var diceArray = [];
var diceRoleCounter = 0;
function initRoll(){
    for(var i = 0; i <= 4; i++){
        var firstRoll = Math.floor(Math.random() * (7-1) + 1)
        diceArray.push(firstRoll);
    }
    diceRoleCounter++;
}
var roundAnnounce = confirm("Round 1, ready to roll");
if (roundAnnounce === true) {
    initRoll();
}
var diceObject = [
    {id: "oneDice", src: "img/oneDice.png"},
    {id: "twoDice", src: "img/twoDice.png"},
    {id: "threeDice", src: "img/threeDice.png"},
    {id: "fourDice", src: "img/fourDice.png"},
    {id: "fiveDice", src: "img/fiveDice.png"},
    {id: "sixDice", src: "img/sixDice.png"},

];


    // Getting player names
//     var playerNumber = parseInt(prompt("How many Player?"))
//
//     var playerNames = [];
//
//     // Placing Player names
//     while (playerNames.length < playerNumber) {
//         playerNames.push(prompt("Player Name"));
//     }
//     document.getElementById("name1").value = playerNames[0];
//     document.getElementById("name2").value = playerNames[1];
//
// if(playerNumber > 1) {
//     var cardTwo = document.getElementById("player2").style["display"] = "block";
// }


    //Gathering Scores
// var ArrayTop = function() {
//     var game1ones = parseInt(document.getElementById('g1Ones').innerHTML);
//     var game1twos = parseInt(document.getElementById("g1Twos").innerHTML);
//     var game1threes = parseInt(document.getElementById("g1Threes").innerHTML);
//     var game1fours = parseInt(document.getElementById("g1Fours").innerHTML);
//     var game1fives = parseInt(document.getElementById("g1Fives").innerHTML);
//     var game1sixes = parseInt(document.getElementById("g1Sixes").innerHTML);
// };
// console.log("game1ones");
// console.log(document.getElementById("g1Ones").innerHTML);
// ArrayTop;
//     //Total before bonus
// var tallyTop = function() {
//     var game1BbArray = [];
//     game1BbArray.push(game1ones);
//     game1BbArray.push(game1twos);
//     game1BbArray.push(game1threes);
//     game1BbArray.push(game1fours);
//     game1BbArray.push(game1fives);
//     game1BbArray.push(game1sixes);
//     console.log(game1BbArray);
//     var game1BbTotal = game1BbArray.reduce((a, b) => a + b, 0);
//     console.log(game1BbTotal);
//     document.getElementById("g1Ts").innerHTML = game1BbTotal;
//
// };
// tallyTop();

var body = document.getElementById("body")
body.innerHTML = renderDice(diceObject);