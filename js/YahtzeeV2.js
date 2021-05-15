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
    html += `<td id="g1Ones"></td>`;
    html += `<td id="g2Ones"></td>`;
    html += `<td id="g3Ones"></td>`;
    html += `<td id="g4Ones"></td>`;
    html += `<td id="g5Ones"></td>`;
    html += `<td id="g6Ones"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Twos`
    html += `<td>Count and add only Twos</td>`;
    html += `<td id="g1Twos"></td>`;
    html += `<td id="g2Twos"></td>`;
    html += `<td id="g3Twos"></td>`;
    html += `<td id="g4Twos"></td>`;
    html += `<td id="g5Twos"></td>`;
    html += `<td id="g6Twos"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Threes</td>`;
    html += `<td>Count and add only Threes</td>`;
    html += `<td id="g1Threes"></td>`;
    html += `<td id="g2Threes"></td>`;
    html += `<td id="g3Threes"></td>`;
    html += `<td id="g4Threes"></td>`;
    html += `<td id="g5Threes"></td>`;
    html += `<td id="g6Threes"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Fours</td>`;
    html += `<td>Count and add only Fours</td>`;
    html += `<td id="g1Fours"></td>`;
    html += `<td id="g2Fours"></td>`;
    html += `<td id="g3Fours"></td>`;
    html += `<td id="g4Fours"></td>`;
    html += `<td id="g5Fours"></td>`;
    html += `<td id="g6Fours"></td>`;
    html += `</tr>`;
    html += `<td>Fives</td>`;
    html += `<td>Count and add only Fives</td>`;
    html += `<td id="g1Fives"></td>`;
    html += `<td id="g2Fives"></td>`;
    html += `<td id="g3Fives"></td>`;
    html += `<td id="g4Fives"></td>`;
    html += `<td id="g5Fives"></td>`;
    html += `<td id="g6Fives"></td>`;
    html += `</tr>`;
    html += `<td>Sixes</td>`;
    html += `<td>Count and add only Sixes</td>`;
    html += `<td id="g1Sixes"></td>`;
    html += `<td id="g2Sixes"></td>`;
    html += `<td id="g3Sixes"></td>`;
    html += `<td id="g4Sixes"></td>`;
    html += `<td id="g5Sixes"></td>`;
    html += `<td id="g6Sixes"></td>`;
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
    html += `<td id="Ls"></td>`;
    html += `<td id="g1Ls"></td>`;
    html += `<td id="g2Ls"></td>`;
    html += `<td id="g3Ls"></td>`;
    html += `<td id="g4Ls"></td>`;
    html += `<td id="g5Ls"></td>`;
    html += `<td id="g6Ls"></td>`;
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
    html += `<td class="g1TUS"></td>`;
    html += `<td class="g2TUS"></td>`;
    html += `<td class="g3TUS"></td>`;
    html += `<td class="g4TUS"></td>`;
    html += `<td class="g5TUS"></td>`;
    html += `<td class="g6TUS"></td>`;
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

    // Randomizer for dice



    $(document).ready(function (){
    var startGame = confirm("Are you ready to begin?");
        if(startGame === true){
            firstRoll();
        }
    });



var dice = [];

function firstRoll (){
    for(var i = 0; i < 5; i++) {
        dice.push(Math.floor(Math.random() * (6-0) + 1));
    }
}
console.log(dice);