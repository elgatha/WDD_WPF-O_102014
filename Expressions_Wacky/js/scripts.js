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

//create three suggestions
for(var i = 0; i < 3; i++){
	//use math.rand and array.length to select the random index
	var randomCuisine = favCuisine[Math.floor(Math.random() * favCuisine.length)];
	var randomBeer = favBeer[Math.floor(Math.random() * favBeer.length)];
	var randomSweetTooth = favSweetTooth[Math.floor(Math.random() * favSweetTooth.length)];
	
    //remove item from array so it doesn't randomly select identical element
	favCuisine.splice(favCuisine.indexOf(randomCuisine), 1);
	favBeer.splice(favBeer.indexOf(randomBeer), 1);
	favSweetTooth.splice(favSweetTooth.indexOf(randomSweetTooth), 1);
	//concatenate and push into an array
	fareSuggestions.push(randomCuisine.trim()+' + '+randomBeer.trim()+' + '+randomSweetTooth.trim());
}


//concatenate
var catString = 'Chef Apple-Elgatha recommends the following pairings: ('+fareSuggestions[0]+'), ('+fareSuggestions[1]+'), ('+fareSuggestions[2]+')';


//log
console.log(catString);