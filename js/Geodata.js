var lonLat;
var zip;
var city;
var county;
var state;
var country;
var address;
var cat;
var maki;
var actual;


function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            lonLat = data.features[0].center;
            zip = data.features[0].context[0].text;
            city = data.features[0].context[1].text;
            county = data.features[0].context[2].text;
            state = data.features[0].context[3].text;
            country = data.features[0].context[4].text;
            address = data.features[0].properties.address;
            cat = data.features[0].properties.category;
            maki = data.features[0].properties.maki;
            actual = data.features[0].text;

            return data;
        });
}