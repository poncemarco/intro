//jshint esversion:6

// Import modules 
var superheroes = require("superheroes");
var supervillians = require("supervillains");
var myHeroName = superheroes.random();
var mySuperVillians = supervillians.random();

console.log(myHeroName + " Vs. " + mySuperVillians)