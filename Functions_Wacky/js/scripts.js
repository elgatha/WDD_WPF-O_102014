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
