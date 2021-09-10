var string = "";
var array = [];
var results = [];
var wordArray = [];

$('#sendIt').click(function (){
    string = $('#input').val();
    string = string.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    array = string.split(" ");
    wordArray = array.filter(word => word.length >= 4);
    results = getWordCntRd(wordArray);
    tableGenerator();
})

function getWordCntRd() {
    return wordArray.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
    }, {});
}

function tableGenerator(){
Object.keys(results).forEach((key) => {
        $("#words").append("<tr><td>" + key + "</td><td>" + results[key] + "</td></tr>");
})}



