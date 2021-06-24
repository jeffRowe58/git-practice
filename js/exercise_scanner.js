var exerciseArray = ["welcome.html", "github.html", "forms.html", "css_selectors.html", "selectors.css", "login.css", "messages.html", "twitter.html", "twitter.css", "flexbox-fundamentals-exercise.html", "flexbox-fundamentals-exercise.css", "flexbox-form.html", "flexbox-form.css", "flexbox-cards.css", "flexbox-cards.html", "flexbox-nav-exercise.html", "flexbox-nav-exercise.css", "media-queries.html", "media-queries.css", "order-pizza.html", "t-block-resume.html", "inline_js.html", "external_js.html", "external.js", "functions.js", "functions_js.html", "conditionals.js", "conditionals.html", "loops.html", "for_loops.js", "break_and_continue.js", "while.js", "iterating.js", "iterating_arrays_js.html", "planets-array.js", "planets-js.html", "planets-string.js", "split-join.html", "objects.js", "objects.html", "circle.js", "math-js.html", "defuse-the-bom.html", "dom-query-js.html", "jquery_exercises.html", "konami.html", "jquery_faq.html", "ajax-store.html", "inventory.json", "ajax-blog.html", "blog.json", "mapbox_maps_api.html", "weather_map.html", "es6.js", "map-filter-reduce.js", "promises.js", "promises.html", "HelloWorld.java", "ConsoleExercises.java", "ControlFlowExercises", "StringExercises.java", "Bob.java", "MethodsExercises.java", "HighLow.java", "Person.java", "Input.java", "Circle.java"]

var projectArray = ['codeup-web-exercise', 'codeup-java-exercises', 'intro-to-testing-js']
var myData = [];
var date;



// let getOptions = {
//     method: 'GET',
//     headers: {
//         'Authorization': GITHUB_API_TOKEN,
//         'Content-Type': 'application/json',
//         'Accept': 'application/vnd.github.inertia-preview+json'
//     }
// };
//
// // gives each movie a container,
// var dataARR = [];
// function getData(x) {
//     for (var i = 0; i < projectArray.length; i++) {
//         fetch(`https://api.github.com/repos/${x}/${projectArray[i]}/projects`, getOptions)
//             .then(resp => resp.json())
//             .then(data => {
//                     dataARR += data;
//                 }
//             )
//     }
// }

// function getUserRepos(x) {
//     for(var i = 0; i < projectArray.length; i++) {
//         $.ajax({
//             url: "https://api.github.com/repos/" + x + "/" + projectArray[i] + "/projects",
//             jsonp: true,
//             method: "GET",
//             dataType: "json",
//             success: function (res) {
//                 myData += res;
//             }
//         });
//     }
// }
// function pullInfo(){
//     date = new Date(myData[0].created_at).toLocaleDateString("en-US").split(/:| /);
//     $('#userInput').val("");
//     postDate();
// }
// function postDate(){
//     document.getElementById('dateOfLast').innerHTML = userName +"'s last Push was on: " + date;
// }