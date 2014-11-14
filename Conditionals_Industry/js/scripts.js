/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Industry
11/13/2014
*/

//problem: values of ingredients, return calculated percentages in css format for fluidity

//validation for prompt expecting string
function validateSelectPrompt(promptedText, errorNotice){
	//if error notice is undefined set to empty string
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//run prompt, combine error notice with prompt text if available
	var promptor = prompt(errorText+promptedText);