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
	//if the prompt returns an empty string
	if(promptor == ''){
		//rerun function with error text
		validatedPrompt(promptText, 'Do not forget to add some kind of numeric information!  ');
	//if prompt doesn't return number it should with parseInt
	}else{
		//return for storage
		return promptor;
	}
}

//prompt for how many hours I've blogged
var bloggingHours = validatedPrompt('How many hours have I blogged today?');

//sum up total hours blogging by assigning how many spent blogging on I Am Chef Apple
var totalHoursBlogging = bloggingHours;

//if I spent less than or equal to 3 hours blogging
if(bloggingHours <= 3){
	//alert me to spend more time blogging and record how I do
	researchHours = validatedPrompt('Looks like I\'ve got some new content to add to my blog, how many hours do I have to spare this week to add the new content to my blog?');