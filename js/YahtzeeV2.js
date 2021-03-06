'use strict';
// Build card for use with additional players later

var html = "<table class='container m-0 p-0'>";
    html += "<tr>";
    html += `<th>UPPER SECTION</th>`;
    html += `<th>HOW TO SCORE</th>`;
    html += `<th>GAME 1</th>`;
    html += `<th>GAME 2</th>`;
    html += `<th>GAME 3</th>`;
    html += `<th>GAME 4</th>`;
    html += `<th>GAME 5</th>`;
    html += `<th>GAME 6</th>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Aces</td>`;
    html += `<td>Count and add only Aces</td>`;
    html += `<td id="g1Ones" value='1'></td>`;
    html += `<td id="g2Ones" value='1'></td>`;
    html += `<td id="g3Ones" value='1'></td>`;
    html += `<td id="g4Ones" value='1'></td>`;
    html += `<td id="g5Ones" value='1'></td>`;
    html += `<td id="g6Ones" value='1'></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Twos`
    html += `<td>Count and add only Twos</td>`;
    html += `<td id="g1Twos" value="2"></td>`;
    html += `<td id="g2Twos" value="2"></td>`;
    html += `<td id="g3Twos" value="2"></td>`;
    html += `<td id="g4Twos" value="2"></td>`;
    html += `<td id="g5Twos" value="2"></td>`;
    html += `<td id="g6Twos" value="2"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Threes</td>`;
    html += `<td>Count and add only Threes</td>`;
    html += `<td id="g1Threes" value="3"></td>`;
    html += `<td id="g2Threes" value="3"></td>`;
    html += `<td id="g3Threes" value="3"></td>`;
    html += `<td id="g4Threes" value="3"></td>`;
    html += `<td id="g5Threes" value="3"></td>`;
    html += `<td id="g6Threes" value="3"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Fours</td>`;
    html += `<td>Count and add only Fours</td>`;
    html += `<td id="g1Fours" value="4"></td>`;
    html += `<td id="g2Fours" value="4"></td>`;
    html += `<td id="g3Fours" value="4"></td>`;
    html += `<td id="g4Fours" value="4"></td>`;
    html += `<td id="g5Fours" value="4"></td>`;
    html += `<td id="g6Fours" value="4"></td>`;
    html += `</tr>`;
    html += `<td>Fives</td>`;
    html += `<td>Count and add only Fives</td>`;
    html += `<td id="g1Fives" value="5"></td>`;
    html += `<td id="g2Fives" value="5"></td>`;
    html += `<td id="g3Fives" value="5"></td>`;
    html += `<td id="g4Fives" value="5"></td>`;
    html += `<td id="g5Fives" value="5"></td>`;
    html += `<td id="g6Fives" value="5"></td>`;
    html += `</tr>`;
    html += `<td>Sixes</td>`;
    html += `<td>Count and add only Sixes</td>`;
    html += `<td id="g1Sixes" value="6"></td>`;
    html += `<td id="g2Sixes" value="6"></td>`;
    html += `<td id="g3Sixes" value="6"></td>`;
    html += `<td id="g4Sixes" value="6"></td>`;
    html += `<td id="g5Sixes" value="6"></td>`;
    html += `<td id="g6Sixes" value="6"></td>`;
    html += `</tr>`;
    html += `<td>Total SCORE</td>`;
    html += `<td>---></td>`;
    html += `<td id="g1Ts"></td>`;
    html += `<td id="g2Ts"></td>`;
    html += `<td id="g3Ts"></td>`;
    html += `<td id="g4Ts"></td>`;
    html += `<td id="g5Ts"></td>`;
    html += `<td id="g6Ts"></td>`;
    html += `</tr>`;
    html += `<td>BONUS If total score is 63 or over</td>`;
    html += `<td>SCORE: 35</td>`;
    html += `<td id="g1Bs"></td>`;
    html += `<td id="g2Bs"></td>`;
    html += `<td id="g3Bs"></td>`;
    html += `<td id="g4Bs"></td>`;
    html += `<td id="g5Bs"></td>`;
    html += `<td id="g6Bs"></td>`;
    html += `</tr>`;
    html += `<td>TOTAL of Upper Section</td>`;
    html += `<td>---></td>`;
    html += `<td id="g1TUS"></td>`;
    html += `<td id="g2TUS"></td>`;
    html += `<td id="g3TUS"></td>`;
    html += `<td id="g4TUS"></td>`;
    html += `<td id="g5TUS"></td>`;
    html += `<td id="g6TUS"></td>`;
    html += `</tr>`;
    html += `<td>LOWER SECTION</td>`;
    html += `<td id="LS"></td>`;
    html += `<td id="g1LS"></td>`;
    html += `<td id="g2LS"></td>`;
    html += `<td id="g3LS"></td>`;
    html += `<td id="g4LS"></td>`;
    html += `<td id="g5LS"></td>`;
    html += `<td id="g6LS"></td>`;
    html += `</tr>`;
    html += `<td>3 of a kind</td>`;
    html += `<td>Add Total of All Dice</td>`;
    html += `<td id="g13K"></td>`;
    html += `<td id="g23K"></td>`;
    html += `<td id="g33K"></td>`;
    html += `<td id="g43K"></td>`;
    html += `<td id="g53K"></td>`;
    html += `<td id="g63K"></td>`;
    html += `</tr>`;
    html += `<td>4 of a kind</td>`;
    html += `<td>Add Total of All Dice</td>`;
    html += `<td id="g14K"></td>`;
    html += `<td id="g24K"></td>`;
    html += `<td id="g34K"></td>`;
    html += `<td id="g44K"></td>`;
    html += `<td id="g54K"></td>`;
    html += `<td id="g64K"></td>`;
    html += `</tr>`;
    html += `<td>Full House</td>`;
    html += `<td>Score 25</td>`;
    html += `<td id="g1Fh"></td>`;
    html += `<td id="g2Fh"></td>`;
    html += `<td id="g3Fh"></td>`;
    html += `<td id="g4Fh"></td>`;
    html += `<td id="g5Fh"></td>`;
    html += `<td id="g6Fh"></td>`;
    html += `</tr>`;
    html += `<td>Sm. Straight Sequence of 4</td>`;
    html += `<td>Score 30</td>`;
    html += `<td id="g1Ss"></td>`;
    html += `<td id="g2Ss"></td>`;
    html += `<td id="g3Ss"></td>`;
    html += `<td id="g4Ss"></td>`;
    html += `<td id="g5Ss"></td>`;
    html += `<td id="g6Ss"></td>`;
    html += `</tr>`;
    html += `<td>Lg. Straight Sequence of 5</td>`;
    html += `<td>Score 40</td>`;
    html += `<td id="g1Ls"></td>`;
    html += `<td id="g2Ls"></td>`;
    html += `<td id="g3Ls"></td>`;
    html += `<td id="g4Ls"></td>`;
    html += `<td id="g5Ls"></td>`;
    html += `<td id="g6Ls"></td>`;
    html += `</tr>`;
    html += `<td>Yahtzee 5 of a kind</td>`;
    html += `<td>Score 50</td>`;
    html += `<td id="g1Y"></td>`;
    html += `<td id="g2Y"></td>`;
    html += `<td id="g3Y"></td>`;
    html += `<td id="g4Y"></td>`;
    html += `<td id="g5Y"></td>`;
    html += `<td id="g6Y"></td>`;
    html += `</tr>`;
    html += `<td>Chance</td>`;
    html += `<td>Score Total Of All 5 Dice</td>`;
    html += `<td id="g1C"></td>`;
    html += `<td id="g2C"></td>`;
    html += `<td id="g3C"></td>`;
    html += `<td id="g4C"></td>`;
    html += `<td id="g5C"></td>`;
    html += `<td id="g6C"></td>`;
    html += `</tr>`;
    html += `<td>YAHTZEE BONUS</td>`;
    html += `<td><i class="fa fa-check"></i>FOR EACH BONUS</td>`;
    html += `<td id="g1Yb"></td>`;
    html += `<td id="g2Yb"></td>`;
    html += `<td id="g3Yb"></td>`;
    html += `<td id="g4Yb"></td>`;
    html += `<td id="g5Yb"></td>`;
    html += `<td id="g6Yb"></td>`;
    html += `</tr>`;
    html += `<td></td>`;
    html += `<td>SCORE 100 PER<i class="fa fa-check"></i></td>`;
    html += `<td id="g1YBS"></td>`;
    html += `<td id="g2YBS"></td>`;
    html += `<td id="g3YBS"></td>`;
    html += `<td id="g4YBS"></td>`;
    html += `<td id="g5YBS"></td>`;
    html += `<td id="g6YBS"></td>`;
    html += `</tr>`;
    html += `<td>Total of LOWER SECTION</td>`;
    html += `<td>---></td>`;
    html += `<td id="g1TLS"></td>`;
    html += `<td id="g2TLS"></td>`;
    html += `<td id="g3TLS"></td>`;
    html += `<td id="g4TLS"></td>`;
    html += `<td id="g5TLS"></td>`;
    html += `<td id="g6TLS"></td>`;
    html += `</tr>`;
    html += `<td>Total of UPPER SECTION</td>`;
    html += `<td>---></td>`;
    html += `<td id="g1TUSB"></td>`;
    html += `<td id="g2TUSB"></td>`;
    html += `<td id="g3TUSB"></td>`;
    html += `<td id="g4TUSB"></td>`;
    html += `<td id="g5TUSB"></td>`;
    html += `<td id="g6TUSB"></td>`;
    html += `</tr>`;
    html += `<td>Grand Total</td>`;
    html += `<td>---></td>`;
    html += `<td id="g1GT"></td>`;
    html += `<td id="g2GT"></td>`;
    html += `<td id="g3GT"></td>`;
    html += `<td id="g4GT"></td>`;
    html += `<td id="g5GT"></td>`;
    html += `<td id="g6GT"></td>`;
    html += `</tr>`;
    html +=`</table>`;

    $('#html').html(html);

    // Dice image object

var diceImages = [
    {die: "img/dice.jpg"},
    {die: "img/dice2.jpg"},
    {die: "img/dice3.jpg"},
    {die: "img/dice4.jpg"},
    {die: "img/dice5.jpg"},
    {die: "img/dice6.jpg"}
];


    // Start round
var turnCount = 1;
console.log(turnCount);
var rollCount = 0;

    $(document).ready(function (){
    var startGame = confirm("Are you ready to begin?");
        if(startGame === true){
            firstRoll();
        }
    });

// First roll

var dice = [];

function firstRoll (){
    for(var i = 0; i < 5; i++) {
        dice.push(Math.floor(Math.random() * (6-0) + 1));
    }
    matchDie();
    rollCount++
    $('#rollButton').prop('disabled', true);
}

function matchDie (){
    for(var i = 0; i < dice.length; i++){
        $("#slot" + (i + 1)).attr("src", diceImages[(dice[i]-1)].die);
    }
}
var selected = [];
function getSelected() {
    for (var i = 1; i < 6; i++) {
        selected.push($("#die" + i + ":checked").val());
    }
    translate(selected);
}

var keptDice = [];
var diceToReroll = [];
function translate(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "on") {
            keptDice.push(dice[i]);
        }
    }
    keptDice.sort();
    diceToReroll.push(5 - (keptDice.length));
    $('#rollButton').prop('disabled', false);
}
function userPress(){
    reroll(diceToReroll);
}
var newDie = [];
function reroll(x) {
    for (var i = 0; i < x; i++) {
        newDie.push(Math.floor(Math.random() * (6 - 0) + 1));
    }
    rollCount++
    $('#rollButton').prop('disabled', true);
    swap();
}

function swap(){
    for(var i = 0; i < keptDice.length; i++){
        $("#slot"+[i + 1]).attr('src', diceImages[(keptDice[i]-1)].die);
        $("#die"+ [i + 1]).prop('checked', false);
    }
    for(var j = (keptDice.length); j < 5; j++) {
        $("#slot" + [j + 1]).attr('src', diceImages[(newDie[(j-keptDice.length)] - 1)].die);
        $("#die" + [j + 1]).prop('checked', false);
    }
    if(rollCount === 3) {
        $('#rollButton').prop('disabled', true);
        $('#lock').prop('disabled', true);
        alert("Please choose where you would like to score your dice.")
    }
    $('form').children().prop('checked', false);
    dice = keptDice.concat(newDie);
    keptDice.length = [];
    selected.length = [];
    diceToReroll.length = [];
    newDie.length = [];
}

$('td').click(function (){
    var check = $(this).html();
    var secondCheck = $(this).attr('id');
    var counts = {};
    var count = 0;
    var destination = $(this).attr('id');
    if(check !== "") {
        return false;
    }else if(check === "" && secondCheck === 'g1Ones' || secondCheck === 'g1Twos' || secondCheck === 'g1Threes' || secondCheck === 'g1Fours' || secondCheck === 'g1Fives' || secondCheck === 'g1Sixes'){
        $('#postRoll').prop('disabled', false);
        for(var i = 0; i < dice.length; i++){
            if((parseInt($(this).attr('value'))) === dice[i]){
                count++;
            }
            $('#postRoll').click(function (){
                var please = document.getElementById(destination).innerHTML = count * (parseInt(document.getElementById(destination).getAttribute('value')));
                dice = [];
                rollCount = 0;
                keptDice = [];
                selected = [];
                diceToReroll =[];
                newDie = [];
                $('#postRoll').prop('disabled', true);
                $('#lock').prop('disabled', false);
                firstRoll();
                addTop();

            });

        }
    } else if(check === "" && secondCheck === 'g13K' || secondCheck === 'g14K' || secondCheck === 'g1Fh' || secondCheck === 'g1Ss' || secondCheck === 'g1Ls' || secondCheck === 'g1Y' || secondCheck === 'g1C'){
        $('#postRoll').prop('disabled', false);
        for(let i = 0; i < dice.length; i++){
            counts[dice[i]] = 1 + (counts[dice[i]] || 0);

        }
        if(document.getElementById(destination).getAttribute('id').toString() === 'g13K'){
            let objCount = Object.keys(counts).length
            for(var h = 0; h < objCount; h++){
                if(Object.values(counts)[h] >= 3){
                    var res = Object.keys(counts)[h] * 3;
                    $('#postRoll').click(function (){
                        let please = document.getElementById(destination).innerHTML = res;
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll =[];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
            }
        }else if(document.getElementById(destination).getAttribute('id').toString() === 'g14K'){
            let objCount = Object.keys(counts).length
            for(var j = 0; j < objCount; j++){
                if(Object.values(counts)[j] >= 4){
                    var res = Object.keys(counts)[j] * 4;
                    $('#postRoll').click(function (){
                        let please = document.getElementById(destination).innerHTML = res;
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll =[];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
            }
        }else if(document.getElementById(destination).getAttribute('id').toString() === 'g1Fh'){
                if(Object.values(counts)[0] === 2 || Object.values(counts)[0] === 3 && Object.values(counts)[1] === 3 || Object.values(counts[1] === 2)){
                    $('#postRoll').click(function (){
                        let please = document.getElementById(destination).innerHTML = '25';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll =[];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
            }else if(document.getElementById(destination).getAttribute('id').toString() === 'g1Ss'){
            let objCount = Object.keys(counts).length
            var sSKArray = [];
            for(var k = 0; k < 4; k++){
                sSKArray.push(parseInt(Object.keys(counts)[k]));
                sSKArray.sort();
                if(JSON.stringify(sSKArray) === JSON.stringify([1, 2, 3, 4]) || JSON.stringify(sSKArray) === JSON.stringify([2, 3, 4, 5]) || JSON.stringify(sSKArray === [3, 4, 5, 6])){
                    $('#postRoll').click(function (){
                        let please = document.getElementById(destination).innerHTML = '30';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll =[];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
            }
        }else if(document.getElementById(destination).getAttribute('id').toString() === 'g1Ls'){
            let objCount = Object.keys(counts).length
            var sSKArray = [];
            for(var k = 0; k < 5; k++){
                sSKArray.push(parseInt(Object.keys(counts)[k]));
                sSKArray.sort();
                if(JSON.stringify(sSKArray) === JSON.stringify([1, 2, 3, 4, 5]) || JSON.stringify(sSKArray) === JSON.stringify([2, 3, 4, 5, 6])){
                    $('#postRoll').click(function (){
                        let please = document.getElementById(destination).innerHTML = '40';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll =[];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
            }
        }else if(document.getElementById(destination).getAttribute('id').toString() === 'g1Y'){
            let objCount = Object.keys(counts).length
                if(objCount === 1){
                    if(check === "") {
                        $('#postRoll').click(function () {
                            let please = document.getElementById(destination).innerHTML = '50';
                            dice = [];
                            rollCount = 0;
                            keptDice = [];
                            selected = [];
                            diceToReroll = [];
                            newDie = [];
                            $('#postRoll').prop('disabled', true);
                            $('#lock').prop('disabled', false);
                            firstRoll();
                            addBottom();

                        });
                    }else {
                        document.getElementById('g1YBS').innerHTML += '<i class="fa fa-check"></i>';
                }
            }else{
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = '0';
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }
        }else if(document.getElementById(destination).getAttribute('id').toString() === 'g1C'){
            let objCount = Object.keys(counts).length
            var chanceNums = [];
            var chanceSum;
            for(var l = 0; l < objCount; l++){
                chanceNums.push(parseInt(Object.keys(counts)[l]) * Object.values(counts)[l]);
            }
            chanceSum = chanceNums.reduce((a, b) => a + b);
                    $('#postRoll').click(function () {
                        let please = document.getElementById(destination).innerHTML = chanceSum;
                        dice = [];
                        rollCount = 0;
                        keptDice = [];
                        selected = [];
                        diceToReroll = [];
                        newDie = [];
                        $('#postRoll').prop('disabled', true);
                        $('#lock').prop('disabled', false);
                        firstRoll();
                        addBottom();

                    });
                }

        }
});
var topArray = ['g1Ones', 'g1Twos', 'g1Threes', 'g1Fours', 'g1Fives', 'g1Sixes'];
var sum = [];
var sumB = [];
function addTop() {
    var nums = [];
    for (var i = 0; i < topArray.length; i++) {
        if (document.getElementById(topArray[i]).innerHTML === '' || document.getElementById(topArray[i]).innerHTML === null) {
            nums.push(0);
        } else {
            nums.push(parseInt(document.getElementById(topArray[i]).innerHTML));
        }
        sum = nums.reduce((a,b) => a+b);
        $('#g1Ts').html(sum);
        upperTsWithBonus();

    }
}
function upperTsWithBonus(){
    if(sum >= 63){
        sum = sum + 35;
        $('#g1Bs').html(35);
    }
    $('#g1TUS').html(sum);
    $('#g1TUSB').html(sum);
}
var bottomArray = ['g13K', 'g14K', 'g1Fh', 'g1Ss', 'g1Ls', 'g1Y', 'g1C'];
function addBottom() {
    var numsB = [];
    for (var i = 0; i < topArray.length; i++) {
        if (document.getElementById(bottomArray[i]).innerHTML === '' || document.getElementById(bottomArray[i]).innerHTML === null) {
            numsB.push(0);
        } else {
            numsB.push(parseInt(document.getElementById(bottomArray[i]).innerHTML));
        }
        sumB = numsB.reduce((a,b) => a+b);
        $('#g1TLS').html(sumB);
        var topSec = parseInt(document.getElementById('g1TUS').innerHTML);
        var bottomSec = parseInt(document.getElementById('g1TLS').innerHTML);
        var GT = topSec + bottomSec;
        $('#g1GT').html(GT);
        // YahtzeeBonus();
    }
}

// FIGURE OUT TURN COUNT AND YAHTZEE BONUS