/*
Elgatha Lee
WPF 144 - Assignment: Functions_Personal
*/


//recipe line creator

/*
Elgatha Lee
WPF 144 - Assignment: Functions_Personal
*/


//recipe line creator

//create empty array to store recipe Recipes
var addedRecipes = [];

//prompts for recipes to be include in the file
function getRecipePathPrompt(promptedText, errorType){
	//if no error Type continue
	errorType = (typeof errorType == 'undefined') ? '' : errorType;
	//check to see if recipes have been added
	addedRecipesString = (addedRecipes.length > 0) ? '\n\n'+addedRecipes.toString() : '';

	//prompt user for file path(s)
	var recipePath = prompt(errorType+promptedText+addedRecipesString);
	//if empty string
	if(recipePath == ''){
		//prompt again with explanation
		getRecipePathPrompt(promptedText, 'Please provide the recipes.  ');
	//else
	}else{
		//push the recipe path(s) to array
		addedRecipes.push(recipePath);
	}
	//ask if to continue adding recipes
	if(continuePrompt('Do you have more recipes to file?')){
		//if so, start the file path prompt over
		getRecipePathPrompt(promptedText);
	}
}

//prompt user if they want to continue
function continuePrompt(promptedText, errorType){
	//fallback for no error Type
	errorType = (typeof errorType == 'undefined') ? '' : errorType;
	//create an array of possible answers
	var possibleAnswers = ['yes','no','true','false'];
	//store user input
	var reply = prompt(errorType+promptedText).trim();

	//if empty string
	if(reply == ''){
		//call prompt again with explaination why
		continuePrompt(promptedText, 'Please provide some input.  ');
	//else if the input is not a possible answer
	}else if(possibleAnswers.indexOf(reply) == -1){
		//call prompt again with explanation why
		continuePrompt(promptedText, 'Please reply "yes" or "no"');
	//else everything is good
	}else{
		//if yes
		if(reply == 'yes' || reply == 'true'){
			//return true
			return true;
		//else
		}else{
			//return false
			return false;
		}
	}
}

//get the remote's name
function getRemoteName(promptedText, errorType){
	//fallback for no error Type
	errorType = (typeof errorType == 'undefined') ? '' : errorType;
	//grab the user input after prompt
	var remoteName = prompt(errorType+promptedText);

	//if empty string
	if(remoteName == ''){
		//call the prompt again with explanation
		getRemoteName(promptedText, 'Please provide some input.  ');
	//else
	}else{
		//return
		return remoteName;
	}
}


//get the category name
function getCategoryName(promptedText, errorType){
	//fallback for no error Type
	errorType = (typeof errorType == 'undefined') ? '' : errorType;
	//grab the user input from prompt
	