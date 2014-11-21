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
	