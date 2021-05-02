"use strict";
function makeCar(make, model){
    var car = {};
    car.make = make;
    car.model = model;
    return car;
}
console.log(makeCar("VW", "Jetta"));

var salesReport = [
    {
        "title": "Monthly Sales Report",
        "date": "03-17-2015",
        "office": "Codeup",
        "employee": [
            {
            "employeeNum": "1",
            "firstName": "Jane",
            "lastName": "Janeway",
            "salesUnits": 3
        },
            {
        "employeeNum": "2",
        "firstName": "Tricia",
        "lastName": "Triciason",
        "salesUnits": 5
            },
            {
        "employeeNum": "3",
        "firstName": "Jeannette",
        "lastName": "Jeanson",
        "salesUnits": 4
            },
            {
        "employeeNum": "4",
        "firstName": "Charles Emerson III",
        "lastName": "Winchester",
        "salesUnits": 2
            },
            {
        "employeeNum": "5",
        "firstName": "Chet",
        "lastName": "Chedderson",
        "salesUnits": 8
            },
            {
        "employeeNum": "6",
        "firstName": "Chaiam",
        "lastName": "Chaiamson",
        "salesUnits": 12
            },
            {
        "employeeNum": "7",
        "firstName": "Dale",
        "lastName": "Dalesinger",
        "salesUnits": 1
            },
            {
        "employeeNum": "8",
        "firstName": "Zig",
        "lastName": "Ziglar",
        "salesUnits": 50
            },
            {
        "employeeNum": "9",
        "firstName": "Henry",
        "lastName": "Kissinger",
        "salesUnits": 1
            },
            {
        "employeeNum": "10",
        "firstName": "Arthur Herbert",
        "lastName": "Fonzarelli",
        "salesUnits": 23
            },
            {
        "employeeNum": "11",
        "firstName": "Betty",
        "lastName": "Boop",
        "salesUnits": 67
            }
            ]
}
];


console.log(salesReport.employee[0])