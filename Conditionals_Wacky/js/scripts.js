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