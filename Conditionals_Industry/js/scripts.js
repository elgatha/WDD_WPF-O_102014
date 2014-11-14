/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Industry
11/13/2014
*/

//problem: values of ingredients, return calculated percentages

//validation for prompt expecting string
function validateSelectPrompt(promptedText, errorNotice){
	//if error notice is undefined set to empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run prompt, combine error notice with prompted text if available
	var promptor = prompt(errorNotice+promptedText);
