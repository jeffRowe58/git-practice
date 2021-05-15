"use strict";
// Dice object
let diceObject = [
    {
        value: 1,
        pic: "img/oneDice.png"
    },
    {
        value: 2,
        pic: "img/twoDice.png"
    },
    {
        value: 3,
        pic: "img/threeDice.png"
    },
    {
        value: 4,
        pic: "img/fourDice.png"
    },
    {
        value: 5,
        pic: "img/fiveDice.png"
    },
    {
        value: 6,
        pic: "img/sixDice.png"
    }
];

// Getting player names
var playerName = prompt("What is your name?")

// Placing Player names
document.getElementById("name1").value = playerName;


// initial roll and setting array and roll counter call for render
var diceArray = [];
var diceRoleCounter = 1;
function initRoll(){
    for(var i = 0; i <= 4; i++){
        var firstRoll = Math.floor(Math.random() * (7-1) + 1);
        diceArray.push(firstRoll);
    }
    diceRoleCounter++;
    render();
}
// Setup of the second roll and disable roll button on third turn
let nextRoll = [];
function reRoll(x) {
    if(diceRoleCounter === 3){
        $('#rollButton').prop('disabled', true);
    }else {
        for (var i = 0; i < x; i++) {
            var roll = Math.floor(Math.random() * (7 - 1) + 1);
            nextRoll.push(roll);
            console.log(nextRoll);
        }
        diceRoleCounter++;
    }
}
// Setting confirm and calling initial roll, need to see where it can move. Top errored out due to early call of initRoll
var roundAnnounce = confirm("Round 1, ready to roll");
if (roundAnnounce === true) {
    initRoll();
}
// Assigns dice images to slots
function render(){
    for(var i = 0; i < diceArray.length; i++){
        $("#slot"+[i + 1]).attr('src', diceObject[(diceArray[i]-1)].pic);
    }
}
// Possibly don't need indexOfReroll anymore, identifies dice selected by user and pushes to array, and calls translate
var indexOfReroll = [];
var selected = [];
function selectedList (){
    for(var i = 1; i < 6; i++) {
        selected.push($("#die" + i + ":checked").val());
        if (typeof (selected[i - 1]) === "undefined") {
            indexOfReroll.push(i);
        }
    }
    console.log(selected);
    translate(selected);
}
// Iterates through the selected and pushes those that were. Sorts the numbers. Pushes number of rerolls and calls swap.
var keptDice = [];
var rere =[];

function translate(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] === "on"){
            keptDice.push(diceArray[i]);
            }
        }
    keptDice.sort();
    rere.push(5 - (keptDice.length));
    console.log(rere);
    reRoll(rere)
    swap();

}

// First swaps dice images and checks to the front and then renders the newly rolled dice. Lastly clears array for new array
function swap(){
    for(var i = 0; i < keptDice.length; i++){
        $("#slot"+[i + 1]).attr('src', diceObject[(keptDice[i]-1)].pic);
        $("#die"+ [i + 1]).prop('checked', true);
    }
    console.log(i);
    for(var j = (keptDice.length); j < 5; j++) {
            $("#slot" + [j + 1]).attr('src', diceObject[(nextRoll[(j-keptDice.length)] - 1)].pic);
            $("#die" + [j + 1]).prop('checked', false);
            console.log(j);
    }
    diceArray = keptDice.concat(nextRoll);
    console.log(diceArray);
    keptDice.length = 0;
    selected.length = 0;
    rere.length = 0;
    nextRoll.length = 0;
}
if(diceRoleCounter === 3){
    $("#die"+/[1-5]/).click(selectedList);
}
$('#g1Ones').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 1) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Ones').innerHTML = counter * 1;
    });
});
$('#g1Twos').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 2) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Twos').innerHTML = counter * 2;
    });
});
$('#g1Threes').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 3) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Threes').innerHTML = counter * 3;
    });
});
$('#g1Fours').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 4) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Fours').innerHTML = counter * 4;
    });
});
$('#g1Fives').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 5) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Fives').innerHTML = counter * 5;
    });
});
$('#g1Sixes').click(function (){
    $('#postRoll').prop('disabled', false);
    var counter = 0
    for(var i = 0; i < diceArray.length; i++){
        if (diceArray[i] === 6) {
            counter++
        }
    }
    $('#postRoll').click(function (){
        document.getElementById('g1Sixes').innerHTML = counter * 6;
    });
});
//Resolve why arrays stay blank
// need to figure out how to setup third roll

