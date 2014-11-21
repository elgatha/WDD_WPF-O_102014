/*
Elgatha Lee
WPF 144 - Assignment: Functions_Personal
*/

//my lucky number

//create number prompt validation function
function numberPrompt(promptedText, errorType){
	//error 
	errorType = (typeof errorType == 'undefined') ? '' : errorType;

	//get the correct number
	var theNumber = parseInt(prompt(errorType+promptedText));

	//if there is no number
	if(isNaN(theNumber)){
		//prompt again with an explanation
		numberPrompt(promptedText, 'Please provide numeric input.  ');
	//else 
	}else{
		//return 
		return theNumber;
	}
}

//prompt for birthday
var birthDate = numberPrompt('This is my birthdate?  Don\'tforget to format in DDMMYYYY without the separators.');

//prompt for favorite number
var favoriteNumber = numberPrompt('What\'s my absolute favorite number?');

//prompt for first number that pops up
var firstNumber = numberPrompt('What\'s the first number that jumps into my head?');

//math wonders
var luckyNumber  Math.floor((birthDate*favoriteNumber)/firstNumber);

//log in console
console.log('My special number is:  '+luckyNumber.toString());

(function(){
	$('body').append('<p>My special number is:  '+luckyNumber.toString()+'</p>');
});