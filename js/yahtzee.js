"use strict";
(function() {
    // Getting player names
    var playerNumber = parseInt(prompt("How many Player?"))

    var playerNames = [];

    // Placing Player names
    while (playerNames.length < playerNumber) {
        playerNames.push(prompt("Player Name"));
    }
    document.getElementById("name1").value = playerNames[0];

    //Gathering Scores
    var game1ones = document.getElementById("g1Ones");
    var game1twos = document.getElementById("g1Twos");
    var game1threes = document.getElementById("g1Threes");
    var game1fours = document.getElementById("g1Fours");
    var game1fives = document.getElementById("g1Fives");
    var game1sixes = document.getElementById("g1Sixes");

    //Total before bonus
    var game1BbArray = [];
    game1BbArray.push(game1ones);
    game1BbArray.push(game1twos);
    game1BbArray.push(game1threes);
    game1BbArray.push(game1fours);
    game1BbArray.push(game1fives);
    game1BbArray.push(game1sixes);
    var game1BbTotal = game1BbArray.reduce((a,b) => a + b, 0);
    console.log(game1BbTotal);
})();

