/*
Elgatha Lee
WPF 144 - Assignment: 
Expressions_Industry
11/06/2014
*/


//Problem: given a job and number of hours worked, how many hours until technically becoming awesome at being a Chef?

//"Awesomeness" inspired by Jack Black in Kung Fu Panda because my youngest niece is 3 years old and loves it and I'm stuck babysitting

//name of job
var skill = prompt('What skill did you practice to be an Amazing Chef  For example - "Knife Skills","Education" or "Training"');

//number of years working body into the ground
var yearsWorked = parseInt(prompt('How many years did I spend actively as a Chef (numeric)?'));

//get number of hours worked per week that you can barely stand
var avgHoursPerWeek = parseInt(prompt('How many hours per week did you work (numeric)?'));

//chinese proverb says - "you become awesome master after 10000 hours at 9999 you are still an idiot"
var requiredHoursForAwesomeness = 10000;

//calculate total hours worked per week by hours worked per year multiplied by number of years
var hoursWorked = (avgHoursPerWeek*52)*yearsWorked;

//get number of hours Awesome Chef status is achieved
var timeRemaining = requiredHoursForAwesomeness - hoursWorked;

//if time remaining then output, else congratulate
var catString = (timeRemaining > 0) ? 'You have '+timeRemaining+' hours left of work until you are considered Awesome at '+skill+'.  Keep working you will get the eventually': 'Not too loud, BUT YOU ARE FRICKIN\' ROCK!!!. BOOYAH!! Not only do you ROCK but you have achieved AWESOME STATUS. Treat yourself to a beer and a damn good foot massage, you deserve it and do that Happy dance all the way there, after that retire, go to Full Sail University Online and begin to learn a new skill!';
 

//log
console.log(catString);

(function(){
	
