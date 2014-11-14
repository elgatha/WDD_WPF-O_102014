/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Industry
11/13/2014
*/

//problem: values of ingredients, return calculated percentages

//validation for prompt expecting string
function validateSelectPrompt(promptedText, errorNotice){
	//if error notice is undefined set to empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run prompt, combine error notice with prompted text if available
	var promptor = prompt(errorNotice+promptedText);


	//if string is empty
	if(promptor == ''){
		//call function again with extra help
		validateSelectPrompt(promptedText, 'Please provide the necessary information needed.  ');
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
	var promptor = parseInt(prompt(errorNotice+promptedText));
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
function validateBooleanPrompt(promptedText, errorNotice){
//if error text is undefined set to empty string, otherwise use input
	
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run the promptor, combine the error notice with prompt text
	var promptor = prompt(errorNotice+promptedText);
	//if there is an empty string
	if(promptor == ''){
		//call the function again
		validateBooleanPrompt(promptedText, 'Please provide some additional information.  ');
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
		validateBooleanPrompt(promptedText, 'Please reply "yay" or "nay", so that we can proceed with the task at hand.  ');
	}
}



//calcVal function prompting ingredient measurement values per - css string return
function targetContextCalcPrompt(attribute, errorNotice){
	//if error notice is undefined set to empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
		//use our measurement validation function to get an accurate value for attribute
	var promptor = validateValuePrompt('What is the ingredient measurement for '+attribute+'?  This is necessary in order to accurately define the ingredient costs.');
	//if attribute is measure
	if(attribute == 'measure'){
		//measurement conversion function is context = result;

		//this is a case of finding the exact numbers
		var attributeMeasurementPercentage = (promptor/parentMeasurement)*100;
		//return css string
		return ' The exact number: '+promptor+'sp '+attributeMeasurementPercentage+'%;';
	//else if attribute is padded to have a viable inventory on hand

	}else if(attribute == 'pad'){
		//in the case of this padded context it is an important element
		var attributeMeasurementPercentage = (promptor/targetExactMeasurements)*100;
		//return css string
		return ' pad: '+promptor+'sp '+attributeMeasurementPercentage+'%;';
	//else there is an internal error
	}else{
		//alert the development team
		alert('oy! - there is an error with the possible attributes of the  "measurement" and "pad"');
	}
}

//ask the user if the ingredients has margin & padding - return the necessary css string
function attributePrompt(){
	//check if recipes has ingredients
	var ingredientBoolean = validateBooleanPrompt('Does the recipe ingredient have an accurate measurement?');
	//check the measurement of the ingredients
	var measureBoolean = validateBooleanPrompt('Does the recipe have a measurement for the ingredient?');


	//if ingredient value prompt, store and return if there is no ingredient 
	ingredientValue = (ingredientBoolean) ? targetCalcPrompt('ingredient') : ' ingredient: none';
	//if measurement value prompt, store and return
	measurementValue = (measurementBoolean) ? targetCalcPrompt('measurement') : ' measurement: none';

	//return concatenated css string 
	return ingredientValue+measurementValue;
}

//get parent ingredient name
var parentIngredientName = validateSelectPrompt('Please include your ingredient name.');

//get target ingredient instruction
var targetIngredientTechnique = validateSelectPrompt('Please include the ingredient technique ');

//get ingredient measurement
var parentMeasurement = validateValuePrompt('What is the measurement for the ingredient?');

//get measurement value
var targetMeasurement = validateValuePrompt('What is the measurement target?');


//get info for measurement
var targetMeasurement = attributePrompt();

//get value for Ingredients
var targetIngredient = (targetMeasurementValue/parentMeasurement)*100;
