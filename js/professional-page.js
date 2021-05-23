'use strict';

var linkOption;
var nameOption;
$('ul').children().on('click', function(){
    linkOption = $(this).attr('id');
    nameOption = $(this).html();
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = "block";
    span.onclick = function (){
        modal.style.display = "none";
    }
    window.onclick = function (event){
        if(event.target === modal){
            modal.style.display = "none";
        }
    }
    $('#linkName').html(nameOption);
    if(nameOption === 'Contact'){
        $('#modalButton').css('display', 'block')
        document.getElementById('section').innerHTML =
            `<div class="container">
                <div class="card border-0">
                    <div class="flip-card border-0">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p class="m-0"><a href="#"><i class="fa fa-envelope"></i></a>&nbsp;Email: jeffrey.r.rowe58@gmail.com</p>
                                <p class="m-0"><i class="fa fa-phone"></i>&nbsp;Cellphone: (719)-761-2638</p>
                                <p class="m-0"><a href="https://github.com/jeffRowe58" target="_blank"><i class="fa fa-github"></i></a>&nbsp;Github: jeffRowe58</p>
                                <p class="m-0"><a href="https://www.linkedin.com/in/jeff-rowe-971b99144/" target="_blank"><i class="fa fa-linkedin"></i></a>&nbsp;LinkedIn: jeff-rowe-971b99144 </p>
                            </div>
                            <div class="flip-card-back">
                                <form id="commentForm">
                                    <label for="email"><i class="fas fa-envelope"></i>E-Mail:</label>
                                    <input type="text" id="email" name="email" placeholder="Enter Your E-Mail Address"><br>
                                    <label for="comment">Comment</label>' +
                                    <textarea id="comment" name="comment" placeholder="Tell Us What You Think"></textarea><br>
                                    <button type="submit" value="Clear" id="sendIt">Send It</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
    if(nameOption === 'New Projects'){
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0">' +
            '<a href="professional-page-newProjects.html" class="d-flex p-0"><img src="img/Weatherapp.png" alt="weatherapp"></a>' +
            '<a href="professional-page-newProjects.html" class="d-flex p-0"><img src="img/Yahtzee.png" alt="somePic"></a>' +
            '<a href="professional-page-newProjects.html" class="d-flex p-0"><img src="img/mobileView.png" alt="anotherPics"></a>' +
            '<a href="professional-page-newProjects.html" class="d-flex p-0"><img src="img/coffeeProject.png" alt="and another"></a>' +
            '</div>'
    }
    if(nameOption === 'Old Projects') {
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0"><h2 class="text-center">Check Back Soon</h2></div>'
    }
    if(nameOption === 'Collaborations') {
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0"><h2 class="text-center">Check Back Soon</h2></div>'
    professional-page-newProjects.html
    }});

function eraseText() {
    document.getElementById("comment").value = "";
    document.getElementById("email").value = "";
}
$('#modalButton').click(function(){
    $('.flip-card').toggleClass('flip');
});

var contact ={};

$('#sendIt').click(function() {
    contact += {
    "email": $('#email').val(),
    "comment": $('#comment').val()
}
    eraseText();
});