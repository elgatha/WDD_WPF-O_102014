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
	//no error Info
	errorInfo = (typeof errorInfo == 'undefined') ? '' : errorInfo;
	//prompt for input
	var favoriteNumber = parseInt(prompt(errorInfo+promptedText));

	//if no there isn't a number available
	if(isNaN(favoriteNumber)){
		//prompt again with explanation
		numberPrompt(promptedText, 'Please provide a favorite number.  ');
	//else return the number
	}else{
		//return for storage
		return favoriteNumber;
	}
}

//create code
var code = {
	//create empty string for storage later
	"Typestring": '',
	//create array of special characters
	"randomSpecialChar": ['!','*','%','$'],
	//function to return simple password
	simple: function(wordArray){
		//if there is an already generated random string
		if(this.Typestring == ''){
			//randomly sort the input array 
			wordArray.sort(function(){return 0.5 - Math.random()});
			//grab 6 pieces
			for(var i = 0; i < 6; i++){
				//use from array so we codes are not duplicated
				var codePiece = wordArray.pop();
				//store in object trimming whitespace
				this.Typestring += codePiece.trim();
			}
		}
		//return a random word string
		return this.Typestring;
	},
	//function to return complex password
	superDuper: function(wordArray, number){
		//if there isn't a generated code use a random string
		if(this.Typestring == ''){
			//sort their input array randomly
			wordArray.sort(function(){return 0.5 - Math.random()});
			//grab 6 pieces
			for(var i = 0; i < 6; i++){
				//pop from array so we don't use the same word twice
				var codePiece = wordArray.pop();
				//store in object trimming whitespace
				this.Typestring += codePiece.trim();
			}
		}
		//randomly sort the object's special characters
		this.randomSpecialChar.sort(function(){return 0.5 - Math.random()});
		//get the first letter to capitalize
		var firstLetter = this['Typestring'].slice(0,1).toUpperCase();
		//return a concatinated string
		return this.randomSpecialChar.pop()+firstLetter+this['Typestring'].slice(1,this['Typestring'].length)+number;
	}
}

//run our word array prompt function
var CodeArray = promptForCode('In a comma separated list, provide a list of things that have relevance to you?  Please provide at least six.');

//run our number prompt function
var favoriteNumber = numberPrompt('What\'s your favorite number?');

//log the simple code by passing the inputs as parameters
console.log('This is a Simple Code: '+code.simple(CodeArray));
//log the complicated code 
console.log('This is a Super Duper code: '+code.superDuper(CodeArray,favoriteNumber));

