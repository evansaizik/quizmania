// Create a function constructor called Question

var Question = function(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}

//write a method for the question object
Question.prototype.genQuestion = function() {
    
    rand = Math.floor(Math.random() * 10);

    if (rand) {
        console.log(questArr[rand].question);
        for (let i = 0; i < questArr[rand].options.length; i++) {
            console.log([i] +':' + ' '+questArr[rand].options[i]);
        }
        this.correctAnswer();
    }
}

Question.prototype.correctAnswer = function() {
    // let q = prompt(questArr[rand].question);
    let q = prompt();

    if (q == questArr[rand].answer) {
        console.log('Correct Answer!');
    }else{
        console.log('Wrong Answer!');
    }
    quest0.genQuestion();
}


//create a couple of questions using the constructor

var quest0 = new Question('What is my name?', ['Frances', 'Kingsley', 'Isaiah'], '2');
var quest1 = new Question('What programming language is used to create this Quiz?', ['javascript','C#', 'C++'], '0');
var quest2 = new Question('What is the name of my instructor?', ['Jonas','John', 'Mike'], '0');
var quest3 = new Question('How do you find the course?', ['Bad','Hard', 'Interesting'], '2');
var quest4 = new Question('Why are you studying javascript?', ['to become a driver','to be a software developer', 'to be a singer'], '1');
var quest5 = new Question('Do you need knowledge of HTML?', ['no','maybe', 'yes'], '2');
var quest6 = new Question('Do you need to have knowledge of CSS?', ['maybe','yes', 'no'], '1');
var quest7 = new Question('Javascript is the same as Java?', ['yes','maybe', 'no'], '2');
var quest8 = new Question('Javascript is also known as ECMAScript?', ['yes','no', 'maybe'], '0');
var quest9 = new Question('react is a library of javascript?', ['true','false', 'nil'], '0');


// store the questions in an array
var questArr = [quest0, quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9];

quest0.genQuestion();
