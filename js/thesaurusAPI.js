var input = "";
var array = [];
var results = [];
var testCorrect = [];
var res = $("#userInput").keyup(function(e){
    var pressedKey = e.which;
    if(pressedKey === 32){
    input = $("#userInput").val();
    input = input.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    array = input.split(" ");
    testCorrect = array.filter( word => (word.length > 3));
    results = getWordCntRd(testCorrect);

   Object.keys(results).forEach((key) => {
       if(results[key] > 2){
           console.log(key + " " + results[key]);
           $('#postResults').append("<p>" + key + " " + results[key] + "</p>")
       }
   })
    // $.ajax({
    //     method: "GET",
    //     $curl: "https://projects.propublica.org/nonprofits/api/v2/organizations/" + input + ".json",
    //     success: function(data){
    //             output = "";
    //             for (dataIn in data.response) {
    //                 console.log(dataIn);
    //                 output = dataIn;
    //                 console.log(output);
    //                 $("#div1").html(output);
    //                 input = "";
    //             }
    //     },
    //         error: function(xhr, status, error){
    //         $("#div1").html("An error occured: " + status + " " + error);
    //     }
    // });

}})

function getWordCntRd() {
    return testCorrect.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
    }, {});
}
