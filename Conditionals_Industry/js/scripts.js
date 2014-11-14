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

	//if string is empty
	if(promptor == ''){
		//call function again with extra help
		validateSelectPrompt(promptText, 'Please provide the necessary information needed.  ');
	//else no error
	}else{
		//return for storage
		return promptor;
	}
}

//validation for promptor expecting numeric value
function validateValuePrompt(promptedText, errorNotice){
	//if error notice is not clearly defined set to an empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;

//run promptor, combining error notice with prompt text
	var promptor = parseInt(prompt(errorText+promptText));
	//if measurement is not received
	if(isNaN(promptor)){
		//call the function again with additional help
		validateValuePrompt(promptText, 'Please provide numeric input for recipe measurement.  ');
	//else no error
	}else{
		//return for storage
		return promptor;
	}
}

//validation for promptor expecting a yay or nay
function validateBooleanPrompt(promptText, errorNotice){
//if error text is undefined set to empty string, otherwise use input
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
