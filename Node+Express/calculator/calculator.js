// require packages
const express = require("express");
const bodyParser = require("body-parser");

// make the packages start running
const app = express();

// use bodyparser to get form data
app.use(bodyParser.urlencoded({
    extended: true
}));

// sends index file when as a response to the user
app.get("/", function (req, res) {
    // sends file to user
    // dirname makes so this file path would work anywhere
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function (req, res) {
    // must have number or it will become a string
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = (num1 + num2);

    res.send("the result of the calculation is somewhere between " + (result - 3) + " and " + (result + 3));

});

// makes the site run on local host 3000
app.listen(3000, function () {
    console.log("server is running on port 3000")

});

// ----------------------


// bmi-calculator

app.get("/bmi-calculator", function (req, res) {
    res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmi-calculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    // bmi calculation
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});