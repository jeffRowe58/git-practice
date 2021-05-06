"use strict";

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



var diceArray = [];
var diceRoleCounter = 0;
function initRoll(){
    for(var i = 0; i <= 4; i++){
        var firstRoll = Math.floor(Math.random() * (7-1) + 1);
        diceArray.push(firstRoll);
    }
    diceRoleCounter++;
    render();
}

let nextRoll = [];
function reRoll(x) {
    if(diceRoleCounter === 3){
        $('#rollButton').prop('disabled', true);
    }else {
        for (var i = 0; i < x; i++) {
            var roll = Math.floor(Math.random() * (7 - 1) + 1);
            nextRoll.push(roll);
        }
        diceRoleCounter++;
    }
}
var roundAnnounce = confirm("Round 1, ready to roll");
if (roundAnnounce === true) {
    initRoll();
}

function render(){
    for(var i = 0; i < diceArray.length; i++){
        $("#slot"+[i + 1]).attr('src', diceObject[(diceArray[i]-1)].pic);
    }
}

var indexOfReroll = [];
var selected = [];
function selectedList (){
    for(var i = 1; i < 6; i++) {
        selected.push($("#die" + i + ":checked").val());
        if (typeof (selected[i - 1]) === "undefined") {
            indexOfReroll.push(i);
        }
    }
    translate(selected);
}
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
    reRoll(rere);
    // swap1(indexOfReroll);
    swap();
}

function swap(){
    for(var i = 0; i < keptDice.length; i++){
        $("#slot"+[i + 1]).attr('src', diceObject[(keptDice[i]-1)].pic);
        $("#die"+ [i + 1]).prop('checked', true);
    }
    for(var j = (keptDice.length); j < 5; j++){
        $("#slot"+[j + 1]).attr('src', diceObject[(nextRoll[i]-1)].pic);
        $("#die"+[j + 1]).prop('checked', false);
    }
}
// function swap1(x) {
//     for (var i = 0; i < x.length; i++) {
//         $("#slot" + x[i]).attr('src', diceObject[(nextRoll[i] - 1)].pic);
//     }
// }

// need to figure out how to setup third roll

