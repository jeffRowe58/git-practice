"use strict";
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
}
var roundAnnounce = confirm("Round 1, ready to roll");
if (roundAnnounce === true) {
    initRoll();
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

$('#slot1').attr('src', diceObject[(diceArray[0] - 1)].pic);
$('#slot2').attr('src', diceObject[(diceArray[1] - 1)].pic);
$('#slot3').attr('src', diceObject[(diceArray[2] - 1)].pic);
$('#slot4').attr('src', diceObject[(diceArray[3] - 1)].pic);
$('#slot5').attr('src', diceObject[(diceArray[4] - 1)].pic);

var indexOfReroll = [];
let selected = [];
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
    swap1(indexOfReroll);
}
function swap1(x) {
    for (var i = 0; i < x.length; i++) {
        $("#slot" + x[i]).attr('src', diceObject[(nextRoll[i] - 1)].pic);
    }
}

// need to figure out how to setup third roll
// refigure original dice post
