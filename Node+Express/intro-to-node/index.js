// const = constant aka once assigned can't be changed 
// imports files system into project

// built in modules

// lets you access local files
// const fs = require("fs");

// copys file into a new file or replace existing file
// fs.copyFileSync("file1.txt", "file2.txt");


// -----------------

// NPM 

// npm init to make a node package 

//  then install packages for exampl 

// npm install superheroes

var superheroes = require("superheroes");

var mySuperHeroName = superheroes.random();

//  -----------------

const supervillains = require("supervillains");

var mySuperVillainName = supervillains.random();

console.log("Our next contestents are " + mySuperHeroName + " vs. " + mySuperVillainName + "!!!");

// node is screwdriver expresses is power drill