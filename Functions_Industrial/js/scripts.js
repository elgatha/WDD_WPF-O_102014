/*
Elgatha Lee
WPF 144 - Assignment: Functions_Personal
*/

//code creator

function promptForCode(promptedText, errorInfo){
	//for no errorInfo
	errorInfo = (typeof errorInfo == 'undefined') ? '' : errorInfo;
		//prompt user information
	var suppliedTypestring = prompt(errorInfo+promptedText);
	//check for null
	if(suppliedTypestring == ''){
		//if null prompt again with explanation
		promptForCode(promptedText, 'Please provide correct information, this does not compute.');
	//else not null
	}else{
		//split into an array 
		var relevantType = suppliedTypestring.split(',');
	}
	//if not there are not enough items
	if(relevantType.length < 6){
		//prompt again with explanation
		promptForCode(promptedText, 'Please provide at least 6 letters.  ');
	//else return the array of relevant Type
	}else{
		//return for capture
		return relevantType;
	}
}

function numberPrompt(promptedText, errorInfo){
	//fallback for no error Info
	errorInfo = (typeof errorInfo == 'undefined') ? '' : errorInfo;
