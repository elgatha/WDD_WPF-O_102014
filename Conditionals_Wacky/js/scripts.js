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

	var promptor = prompt(errorNotice+promptText);
	//if the user didn't type anything
	if(promptor == ''){
		//call the function again with additional help text
		validatePreferencePrompt(promptText, type, 'Please enter an option.  ');
	//else if the user string wasn't found in the options array
	
	}else if(optionsArray.indexOf(promptor) == -1){
		//call the function again with additional help text
		validatePreferencePrompt(promptText, type, 'Please choose from the options listed.  Check spelling, use lowercase, and don\'t add quotes.  ');
	//else everything is gravy
	
}

}else{
		//return for storage
		return promptor;
	}

//first preference
var opt1 = validatePreferencePrompt('When someone makes me angry, I tend to: "calmly breathe", "release negative chi", or "practice yoga"?', 'zenPeaceAction');

//second preference
var opt2 = validatePreferencePrompt('Would you feel more calmer: "in a garden", "at the beach", "at a yoga session"', 'zenBelief');

//set up variable to pour decision into
var zen = '';

//check value of opt1
switch(opt1)
{
	//if value is breathe
	case 'breathe':
	//check value of opt2
		if(opt2 == 'in a garden'){
			//assign spirit animal
			zenBelief = 'cherry blossoms';
		}else if(opt2 == 'at the beach'){
			zenBelief = 'grains of sand';
		}else if(opt2 == 'expertly hidden'){
			zenBelief = 'chameleon';
		//else we've had a dev error
		}else{
			alert('dev error');
		}
	break;
	case 'relax':
		if(opt2 == 'at the beach'){
			zenBelief = 'dolphin';
		}else if(opt2 == 'in a garden'){
			zenBelief = 'hummingbird';
		}else if(opt2 == 'expertly hidden'){
			zenBelief = 'octopus';
		}else{
			alert('dev error');
		}
		break;
