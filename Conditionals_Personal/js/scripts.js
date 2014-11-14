/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Personal
11/13/2014
*/

//problem: Have I done enough blogging and promotion for my project...

//prompt validation function
function validatedPrompt(promptText, errorNotice){
	//if the error is undefined make the empty string else use the input
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run the prompt, combine the error text with prompt text if present
	var promptor = parseInt(prompt(errorNotice+promptText));