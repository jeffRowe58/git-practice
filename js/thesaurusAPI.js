var res = $("#sendit").click(function(){
    var input = $("#userInput").val();
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

    console.log(input);
})
