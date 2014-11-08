/*
Elgatha Lee
WPF 144 - Assignment: Expressions_Personal
*/

//problem: my car was purchased a few months ago, and the transmission went kaput shortly after, but now I am stuck with what replacing it so - how much is it going to cost me to replace the transmission in my Mini Cooper?

//prompt for tow truck call - Roadside Assistance
var costOfTow = parseInt(prompt('How much did it cost to tow Mini Cooper to Mechanic Shop at Oakland Park Blvd from Boca Raton?'));

//prompt for hours mechanic works on the car - multiply by two so we can drop and replace
var mechanicTime = parseInt(prompt('How long will it take for the Dale-the-Mechanic to drop the transmission and then replace it?'))*2;

//prompt for cost of transmission
var costOfNewTransmission = parseInt(prompt('How much is the transmission going to cost?'));

//labour hours
var labourCostPerHour = 45;

//first calculate number of hours worked
var totalHours = ((mechanicTime*costOfTow)/labourCostPerHour);

//then use number of total hours to calculate cost
var totalPriceForNewTransmission = totalHours*labourCostPerHour;

var catString = 'Given your information it will cost you $'+totalPriceForNewTransmission+' to fix your Mini Cooper.  You should just buy a new car. Sorry :(';

//print to console
console.log(catString);

(function(){
	$('body').append('<p>'+catString+'</p>');
});