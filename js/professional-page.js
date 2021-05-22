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
        document.getElementById('section').innerHTML = '<div class="container"><div><p><a href="#"><i class="fa fa-envelope"></i></a>&nbsp;Email: jeffrey.rowe58@gmail.com</p><br><p><i class="fa fa-phone"></i>&nbsp;Cellphone: (719)-761-2638</p><br><p><a href="https://github.com/jeffRowe58" target="_blank"><i class="fa fa-github"></i></a>&nbsp;Github: jeffRowe58</p><br><p><a href="https://www.linkedin.com/in/jeff-rowe-971b99144/" target="_blank"><i class="fa fa-linkedin"></i></a>&nbsp;LinkedIn: jeff-rowe-971b99144 </p></div></div>'
        }
    if(nameOption === 'New Projects'){
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0"><a href="#" class="d-flex p-0"><img src="img/Weatherapp.png" alt="weatherapp"></a><a href="#" class="d-flex p-0"><img src="img/Yahtzee.png" alt="somePic"></a><a href="#" class="d-flex p-0"><img src="img/mobileView.png" alt="anotherPics"></a><a href="#" class="d-flex p-0"><img src="img/coffeeProject.png" alt="and another"></a></div>'
    }
    if(nameOption === 'Old Projects') {
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0"><h2 class="text-center">Check Back Soon</h2></div>'
    }
    if(nameOption === 'Collaborations') {
        $('#modalButton').css('display', 'none')
        document.getElementById('section').innerHTML = '<div id="nPdiv" class="container d-flex justify-content-between p-0"><h2 class="text-center">Check Back Soon</h2></div>'
    }
    });
