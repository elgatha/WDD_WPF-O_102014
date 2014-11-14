/*
Elgatha Lee
WPF 144 - Assignment: 
Conditionals_Personal
11/13/2014
*/

//problem: Have I done enough blogging and promotion for my project...

//prompt validation function
function validatedPrompt(promptText, errorNotice){
	//if the error is undefined make the empty string else use the input
	errorNotice = (typeof errorNotice === 'undefined') ? '' : errorNotice;
	//run the prompt, combine the error text with prompt text if present
	var promptor = parseInt(prompt(errorNotice+promptText));
	//if the prompt returns an empty string
	if(promptor == ''){
		//rerun function with error text
		validatedPrompt(promptText, 'Do not forget to add some kind of numeric information!  ');
	//if prompt doesn't return number it should with parseInt
	}else{
		//return for storage
		return promptor;
	}
}

//prompt for how many hours I've blogged
var bloggingHours = validatedPrompt('How many hours have I blogged today?');

//sum up total hours blogging by assigning how many spent blogging on I Am Chef Apple
var totalHoursBlogging = bloggingHours;

//if I spent less than or equal to 3 hours blogging
if(bloggingHours <= 3){
	//alert me to spend more time blogging and record how I do
	researchHours = validatedPrompt('Looks like I\'ve got some new content to add to my blog, how many hours do I have to spare this week to add the new content to my blog?');

	//add the research time to total hours blogging
	totalHoursBlogging += researchHours;
//if I spent more than 3 hours but less than or equal to 6 hours working
}else if(bloggingHours > 3 && bloggingHours <= 6){
	//congratulate, encourage to keep on going
	researchHours = validatedPrompt('I say - if sleep is an option then success is not, in order to be successful there must be sacrifice!');
	//add the recipe and ingredient research time to total hours blogging
	totalHoursBlogging += researchHours;
	//if I spent more than 5 but less than or equal to 8 hours blogging
}else if(bloggingHours > 5 && bloggingHours <= 8){
	//will I be able to blog after my meeting this after-noon with HuffPost
	bloggingHours = validatedPrompt('I have never met anyone like you before. You have such an incredible work ethic?  How many hours  do you have left until you are done working on your blog and ready to launch?');
	//add the recipe and ingredient research time to total hours blogging
	totalHoursBlogging += researchHours;
//if I spend more than 12 hours working on my blog
researchHours = validatedPrompt('You should do some reading on burning out. How many more hours am I going to work?');
	//add the recipe and ingredient research time to total hours blogging
	totalHoursBlogging += researchHours;
}
//create a variable for advice
var advice = '';
//if total hours blogging is less than 6
if(totalHoursBlogging < 6){
//request more dedication for the next day
	advice = 'I don\'t think I\'ve given all I\'ve got today.  But I need to have a break, then I can wake up tomorrow ready to conquer the world or at least the blog-o-sphere!';
//if total hours blogging is greater than or equal to 4 but less than or equal to 6
}else if(totalHoursBlogging >= 4 && totalHoursBlogging <= 6){
	//congratulate myself with a pat on the back
	advice = 'Continue working hard you will succeed at accomplishing your goals and dreams! You, go girl! Keep it up!';
//if total hours worked is greater than 15
}else{
	//WARNING!!! This is unhealthy and only crazy people spend the entire weekend strapped to a computer
	advice = 'I have to learn to decompress. It is not a healthy lifestyle or sustainable practice in regards to work/life balance. The effort is admirable, but this is not good for my health. So, I am going to enroll in YOGA! ';

//ternary - check to see if the calculated variable is filled
var conclusion = (advice != '') ? advice : 'Boom!!! You\'ve kicked butt and taken names today!';
