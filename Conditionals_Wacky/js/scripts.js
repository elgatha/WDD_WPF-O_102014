/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Wacky
11/13/2014
*/

//problem: find your zenSpace

function validatePreferencePrompt(promptText, type, errorNotice){
	//if error text is undefined make the string enpty
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//if defined type is 'zenPeaceAction'
	if(type == 'zenPeaceAction'){
		//build array for  zen actions
var optionsArray = new Array('breathe', 'silence', 'peace', 'yoga');
	//if defined type is 'zen Belief'
	}else if(type == 'zenBelief'){
		//build array for zen Belief
var optionsArray = new Array('in a buddhists garden', 'a session of hot yoga', 'enjoying the beach');
	//else type is not defined correctly

	}else{
		//show dev error
		alert('The "type" of options are: "zenPeaceAction" and "zenBelief"');
	}
	console.log(optionsArray);
	//run the prompt, combining error text with prompt text if available