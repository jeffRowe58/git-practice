var res = $("#sendit").click(function(){
    var input = $("#userInput").val();
    $.ajax({
        url: "https://thesaurus.altervista.org/thesaurus/v1?word=" + input + "&language=en_US&output=json&key=" + THESAURUS_API_TOKEN +"", // NOTE: replace test_only with your own KEY
        success: function(data){
            if (data.length != 0) {
                output = "";
                for (key in data.response) {
                    output += data.response[key].list.synonyms+"<br>";
                }
                $("#div1").html(output);
                input = "";
            } else $("#div1").html("empty data");
        },
        error: function(xhr, status, error){
            $("#div1").html("An error occured: " + status + " " + error);
        }
    });
})
