var input = "";
var array = [];
var results = [];
var testCorrect = [];
var res = $("#userInput").keyup(function (e) {
    var pressedKey = e.which;
    if (pressedKey === 32) {
        array = [];
        results = [];
        testCorrect = [];
        input = $("#userInput").val();
        input = input.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        array = input.split(" ");
        testCorrect = array.filter(word => (word.length > 3));
        results = getWordCntRd(testCorrect);

        Object.keys(results).forEach((key, index) => {
            if (results[key] > 2) {
                console.log(key + " " + results[key]);
                $('#postResults').html(key + " " + results[key] + " " + index);

                $.ajax({
                    method: "GET",
                    url: `https://thesaurus.altervista.org/thesaurus/v1?word=${key} &language=en_US&output=json&key=${THESAURUS_API_TOKEN}`,
                    success: function (data) {
                        output = "";
                        outputArray = [];
                        for (dataIn in data.response) {
                            output = data.response[dataIn].list.synonyms;
                            outputArray = output.split("|")
                            outputArray.forEach((e) => {
                                $("#div1").append("<p>" + e + "</p>");
                            })
                            outputArray = [];
                            output = "";
                        }
                    },
                    error: function (xhr, status, error) {
                        $("#div1").html("An error occured: " + status + " " + error);
                    }
                })
            }
        })


    }
})

function getWordCntRd() {
    return testCorrect.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
    }, {});
}
