// initilize express
// 
// $ npm install express 

// require express
const express = require("express");

// using app is best practice and will be what you target to use express
const app = express();

// what happens when the server makes a request to the home root "/" using a callback function
// req = request, res = response

// home page
app.get("/", function (req, res) {
    // even though the page still doesnt load anything it will show the console log
    console.log(req);
    // send data to server with response
    res.send("<h1> hello, I'm Mr. Nodemon<h1>");

});

// contact page
app.get("/contact", function (req, res) {
    res.send("contact route");

});

// about page

app.get("/about", function (req, res) {
    res.send("hi welcome to my server. my name is Zach")
})



//  tuned into port 3000
app.listen(3000, function () {
    console.log("server started on port 3000");
});

// nodemon utility moniters for changes of source code and refreshes servern