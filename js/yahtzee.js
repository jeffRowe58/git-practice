"use strict";
(function() {
    var playerNumber = parseInt(prompt("How many Player?"))

    var playerNames = [];

    while (playerNames.length < playerNumber) {
        playerNames.push(prompt("Player Name"));
    }
    document.getElementById("name1").value = playerNames[0];
})();