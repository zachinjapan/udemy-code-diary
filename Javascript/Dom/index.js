// properties
// changes look of element no ()

// method
// makes the elment do something uses ()

// looks inside document for input and clicks it
document.querySelector("input").click();


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

// how select all of the same type of elements (have to specify which one becasue a list is an array)
document.querySelectorAll("li")[2].style.color = "yellow";

// querySelector + querySelectorAll is more specific and get element is more general

//------------------------------------

//js uses camelcasing for selectors (EX fontSize) and must be written as a string
document.querySelector("body").style.backgroundColor = "turquoise";

// you can add/remove/or toggle classes using js

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

// example using css and js to make an element huge!!!
document.querySelector("#title").classList.add("huge");

// innerHTML vs textContent

// innerHTML means you can inclued tags such a <e> etc... textContent just can change the text...Content...lol

// how to manipulate the attributes

// you can 'get' an attribute using (gets google page)
document.querySelectorAll("a").getAttribute("href");

// you can change the attribute too (the second item is what you want to change the attribute to)
document.querySelectorAll("a").setAttribute("href", "Bing");