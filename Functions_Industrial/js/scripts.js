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
	
	