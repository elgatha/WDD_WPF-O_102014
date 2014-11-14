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
	var prompter = prompt(errorNotice+promptedText);


	//if string is empty
	if(prompter == ''){
		//call function again with extra help
		validateSelectPrompt(promptedText, 'Please provide the necessary information needed.  ');
	//else no error
	}else{
		//return for storage
		return prompter;
	}
}

//validation for prompter expecting numeric value
function validateValuePrompt(promptedText, errorNotice){
	//if error notice is not clearly defined set to an empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;


//run prompter, combining error notice with prompt text
	var prompter = parseInt(prompt(errorNotice+promptedText));
	//if measurement is not received


	if(isNaN(prompter)){
		//call the function again with additional help
		validateValuePrompt(promptText, 'Please provide numeric input for recipe measurement.  ');
	//else no error
	
	}else{
		//return for storage
		return prompter;
	}
}


//validation for prompter expecting a yay or nay
function validateBooleanPrompt(promptedText, errorNotice){
//if error text is undefined set to empty string, otherwise use input
	
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run the prompter, combine the error notice with prompt text
	var prompter = prompt(errorNotice+promptedText);
	//if there is an empty string
	if(prompter == ''){
		//call the function again
		validateBooleanPrompt(promptedText, 'Please provide some additional information.  ');
	//else if the user replies yay or true
	}else if(prompter == 'yay' || prompter == 'true'){
		//return for storage
		return true;
	//else if user replies nay or false
	}else if(prompter == 'nay' || prompter == 'false'){
		//return for storage
		return false;
	//else any other value
	}else{
		//call the function again with additional help text
		validateBooleanPrompt(promptedText, 'Please reply "yay", "yes" or "nay", "no", so that we can proceed with the task at hand.  ');
	}
}



//calcVal function prompting ingredient measurement values per - css string return
function targetContextCalcPrompt(attribute, errorNotice){
	//if error notice is undefined set to empty string
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
		//use our measurement validation function to get an accurate value for attribute
	var prompter = validateValuePrompt('What is the ingredient measurement for '+attribute+'?  This is necessary in order to accurately define the ingredient costs.');
	//if attribute is measure
	if(attribute == 'measure'){
		//measurement conversion function is context = result;

		//this is a case of finding the exact numbers
		var attributeMeasurementPercentage = (prompter/parentMeasurement)*100;
		//return css string
		return ' The exact number: '+prompter+'sp '+attributeMeasurementPercentage+'%;';
	//else if attribute is padded to have a viable inventory on hand

	}else if(attribute == 'pad'){
		//in the case of this padded context it is an important element
		var attributeMeasurementPercentage = (prompter/targetExactMeasurements)*100;
		//return css string
		return ' pad: '+prompter+'sp '+attributeMeasurementPercentage+'%;';
	//else there is an internal error
	}else{
		//alert the development team
		alert('oy! - there is an error with the possible attributes of the  "measurement" and "pad"');
	}
}

//ask the user if the ingredients
function attributePrompt(){
	//check if recipes has ingredients
	var ingredientBoolean = validateBooleanPrompt('Does the recipe ingredient have an accurate measurement?');
	//check the measurement of the ingredients
	var measurementBoolean = validateBooleanPrompt('Does the recipe have a measurement for the ingredient?');


	//if ingredient value prompt, store and return if there is no ingredient 
	ingredientValue = (ingredientBoolean) ? targetCalculatePrompt('ingredient') : ' ingredient: none';
	//if measurement value prompt, store and return
	measurementValue = (measurementBoolean) ? targetCalculatePrompt('measurement') : ' measurement: none';

	//return concatenated
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
var targetIngredient = (targetMeasurement/parentMeasurement)*100;


//concatenate 
var calculateRecipe = parentIngredientName+' '+targetIngredientTechnique+'{measurement:'+targetMeasurement+';'+targetIngredient+'}';


//log
console.log(calculateRecipe);

(function(){
	$('body').append('<p>The new recipe is:  '+calculateRecipe+'</p>');
});
