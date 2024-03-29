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
	
	var categoryName = prompt(errorType+promptedText);
	//if empty string
	if(categoryName == ''){
		//call again with explanation
		getCategoryName(promptType, 'Please provide some input.  ');
	//else 
	}else{
		//return 
		return categoryName;
	}
}


//returns a string of file paths added to array
function addedRecipes2String(){
	//prep a string for concatination
	var addedRecipesString = '';
	//for every item in the array
	for(var i = 0; i < addedRecipes.length; i++){
		//trim the file path(s) and add a space at the end to separate
		addedRecipesString += addedRecipes[i].trim()+' ';
	}
	//return for storage
	return addedRecipesString;
}

//run function to pour Recipes into file array
getRecipePathPrompt('Please list the recipe(s) you want to file.  You can add multiple multiple recipes by separating with a space, or you can select to add another after you submit this one.  Entering a "." without quotes will add all recipes to the file.');
//store the remote name
var remoteName = getRemoteName('Do you want to send your recipe to a specific category?  If you don\'t know, reply "base" without quotes.');
//store the Category name
var categoryName = getCategoryName('Do you want to push your recipe to a specific Category?  The default Category is "delicious" without quotes.');
//concatinate command
var command = 'recipe '+addedRecipes2String()+'; recipe file "delish"; recipe file '+remoteName.trim()+' '+categoryName.trim();
//log in console
var command = 'recipe '+addedRecipes2String()+'; recipe category "delicious"; category '+remoteName.trim()+' '+categoryName.trim();
//log in console
console.log('recipe(s) are:  '+command);

(function(){
	$('body').append('<p>the recipe(s) can can be viewed in:  '+command+'</p>');
});