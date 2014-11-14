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
	//run the promptor, combine the error notice with prompt text
	var promptor = prompt(errorNotice+promptText);
	//if there is an empty string
	if(promptor == ''){
		//call the function again
		validateBooleanPrompt(promptText, 'Please provide some additional information.  ');
	//else if the user replies yay or true
	}else if(promptor == 'yay' || promptor == 'true'){
		//return for storage
		return true;
	//else if user replies nay or false
	}else if(promptor == 'nay' || promptor == 'false'){
		//return for storage
		return false;
	//else any other value
	}else{
		//call the function again with additional help text
		validateBooleanPrompt(promptText, 'Please reply "yay" or "nay", so that we can proceed with the task at hand.  ');
	}
}


//calcVal function prompting ingredient measurement values per - css string return
function targetContextCalcPrompt(attribute, errorNotice){
	//if error notice is undefined set to empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;

		