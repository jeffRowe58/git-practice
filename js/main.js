"use strict"

function renderCoffee(coffee) {
    var html = '<ul id="myUL" class="coffee">';
    html += '<div class=eachCoffee>'
    // html += '<div>' + coffee.id + '</div>';
    html += '<li><a href="#">' + coffee.name + '</a></li>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if (selectedRoast === 'any') {
        for (var i = 0; i < coffees.length; i++) {
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, p, eachCoffee, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    p = document.getElementsByTagName('p');
    eachCoffee = document.getElementsByClassName('eachCoffee');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            p[i].style.display = "";
            eachCoffee[i].style.display = "";
        } else {
            li[i].style.display = "none";
            p[i].style.display = "none";
            eachCoffee[i].style.display = "none";
        }
    }
}

function createCoffee() {
    let cCoffee = {};
    cCoffee.id = (coffees.length + 1);
    cCoffee.name = (document.getElementById("coffee-name").value.trim());
    cCoffee.roast = (document.getElementById("coffee-roast").value.trim());
    coffees.push(cCoffee);

    if (localStorage) {
        localStorage.setItem("coffees", JSON.stringify(coffees));
    }
    document.getElementById("coffee-name").value = "";
    document.getElementById("coffee-roast").value = "";
    document.getElementById("cCoffee").disabled = true;
    tbody.innerHTML = renderCoffees(coffees);
}






// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitChange = document.querySelector('.submit');
var roastSelection = document.querySelector('#roast-selection');


tbody.innerHTML = renderCoffees(coffees);

submitChange.addEventListener('change', updateCoffees);
