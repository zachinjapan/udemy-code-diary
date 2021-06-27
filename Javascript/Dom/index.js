// looks inside document for input and clicks it
document.querySelector("input").click();

// properties
// changes look of element no ()

// method
// makes the elment do something uses ()


// selects the third list and changes the inner html to Zach
var thirdList = document.querySelector("body > ul > li:nth-child(3)");
thirdList.innerHTML = "Zach";

// fetch all of the elements then selects the second item in array
document.getElementsByTagName("li")[1].style.color = "blue";

// always gets back an array! you must select first item with [0]
document.getElementsByClassName("btn")[0].style.color = "red";

// selects just one element
document.getElementById("title").innerHTML = "Goodbye";

// you can also use the querySelector to search the document
document.querySelector("#title").style.color = "blue";

// you can also use the querySelector to combine selectors
document.querySelector("li a").innerHTML = "ABC "