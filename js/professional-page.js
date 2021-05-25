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
                                    <input type="text" id="email" name="email" placeholder="Enter Your E-Mail Address"><br>
                                    <fieldset class="rating">
                                        <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                        <input type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                        <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                        <input type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                        <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                        <input type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                        <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                        <input type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                        <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                        <input type="radio" id="starhalf" name="rating" value=".5" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset><br>
                                    <label for="comment">Comment</label>' 
                                    <textarea id="comment" class="mt-2" name="comment" placeholder="Tell Us What You Think"></textarea>
                                    <button type="submit" value="Clear"  onmouseenter="setKeys()" id="sendIt">Send It</button>
                                    
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









function setKeys () {
   var newComment = {
        "email": $('#email').val(),
        "comments": $('#comment').val(),
        "rating": "5"
    }

        var postOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newComment)
        }
        fetch("https://steel-torch-cobweb.glitch.me/comments", postOptions)
            .then(getPoll);
}







    var getOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

function getPoll(){
    fetch("https://steel-torch-cobweb.glitch.me/comments", getOptions)
        .then(resp => resp.json())
        .then(comments => {
            for (let comment of comments) {
                console.log(comment);
                let htmlStr = `<div id="commentContainer" class="d-flex flex-column col-4"><h1 class="d-flex">Comments</h1><p>Email: : ${comment.email}<p>Comment: ${comment.comments}</p><p><strong>Rating:</strong> ${comment.rating}</div>`;


                $('#container').append(htmlStr);
            }
        });
}
