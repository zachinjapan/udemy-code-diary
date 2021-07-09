var randomNumber1 = Math.floor((Math.random() * 6) + 1); // math random = 0 -1 + * 6 makes it between 0 and 5 and math.floor rounds it down to a whole number and +1 makes it between 1 and 6 

// makes so we dont have to write out dice4.png every time dice1.png -> dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

// makes a var for the source of the images /images/
var randomImageSource = "images/" + randomDiceImage;

// gets both imgs and assigns the first to a variable
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// second dice 'simplified' 
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// removes the need for the var of the png 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


// h1 
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 1 Wins!!";

} else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerText = "Player 2 Wins!!";

} else {
    document.querySelector("h1").innerHTML = "DRAW!!";
}