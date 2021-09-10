var string = "";
var array = [];
var results = [];
$("#sendIt").click(function (){
    string = $("#words").val();
    string = string.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    console.log(string);
    array = string.split(" ");
    results = getWordCntRd(array);
    tableGenerator();
})






function getWordCntRd() {
    return array.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
    }, {});
}



function tableGenerator(){
Object.keys(results).forEach((key) => {
    $("#words").append("<tr><td>" + key + "</td><td>" + results[key] + "</td></tr>");
})}



