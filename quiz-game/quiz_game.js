// to protect or isolate our code from other users, we convert it to a self-invoking function
(function() {
    // Create a function constructor called Question

var Question = function(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}


//create a couple of questions using the constructor
var start = new Question
var quest1 = new Question('What is my name?', ['Frances', 'Kingsley', 'Isaiah'], '2');
var quest2 = new Question('What programming language is used to create this Quiz?', ['javascript','C#', 'C++'], '0');
var quest3 = new Question('What is the name of my instructor?', ['Jonas','John', 'Mike'], '0');
var quest4 = new Question('How do you find the course?', ['Bad','Hard', 'Interesting'], '2');
var quest5 = new Question('Why are you studying javascript?', ['to become a driver','to be a software developer', 'to be a singer'], '1');
var quest6 = new Question('Do you need knowledge of HTML?', ['no','maybe', 'yes'], '2');
var quest7 = new Question('Do you need to have knowledge of CSS?', ['maybe','yes', 'no'], '1');
var quest8 = new Question('Javascript is the same as Java?', ['yes','maybe', 'no'], '2');
var quest9 = new Question('Javascript is also known as ECMAScript?', ['yes','no', 'maybe'], '0');
var quest10 = new Question('react is a library of javascript?', ['true','false', 'nil'], '0');


// store the questions in an array
var questArr = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];
var score = 0;

//write a method for the question object to generate a random question and the possible answers on the console
Question.prototype.genQuestion = function() {
    
    rand = Math.ceil(Math.random() * 10);
    
    if (rand) {
        console.log(questArr[(rand - 1)].question);
        for (let i = 0; i < questArr[(rand - 1)].options.length; i++) {
            console.log([i] +':' + ' '+questArr[(rand - 1)].options[i]);
        }
        this.correctAnswer();
    }
}

//use the prompt function to to ask the user for the correct answer
Question.prototype.correctAnswer = function() {
    var q = prompt(questArr[(rand - 1)].question);

    if (q === 'exit') {
        return;

    } else if (q === questArr[(rand - 1)].answer) {

        score += 1;
        console.log('Correct Answer!');
        console.log('Your current score is: '+ score);
        console.log('--------------------------------');

    } else {

        console.log('Wrong Answer!, Try again');
        console.log('Your current score is: '+ score);
        prompt(questArr[(rand - 1)].question);

    }
    this.genQuestion();
}



//question should be generated when page loads
start.genQuestion();
})();

