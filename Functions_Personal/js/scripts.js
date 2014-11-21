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
