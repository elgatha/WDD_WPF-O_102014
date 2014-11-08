/*
Elgatha Lee
WPF 144 - Assignment: Expressions_Wacky
*/

//problem: give a list of your favourite cuisine, beer, and sweets, to make fabulous fare

var favCuisine = prompt('List three of your favourite types of cuisine, separated by commas');
var favBeer = prompt('List three of your favourite types of beers, separated by commas');
var favSweetTooth = prompt('List three of your favourite types of desserts for your Sweet-Tooth, separated by commas');


//convert strings into arrays
favCuisine = favCuisine.split(',');
favBeer = favBeer.split(',');
favSweetTooth = favSweetTooth.split(',');


//check to see if the user has entered three comma separated items
if(favCuisine.length != 3 || favBeer.length != 3 || favSweetTooth.length != 3){
	alert('Please enter three of each of the items separated by commas');
}


//create variables for fabulous fare
var fareSuggestions = new Array();
