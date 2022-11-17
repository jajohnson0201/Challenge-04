var timer = document.getElementById('counter');
var startButton = document.getElementById('start-button');
var q1 = document.querySelector('#question-1');
var q2 = document.querySelector('#question-2');
var q3 = document.querySelector('#question-3');
var q4 = document.querySelector('#question-4');
var questionsContainer = document.querySelector("question-cards");
var CorrectAnswers = document.querySelector("right-ans");

console.log(timer);
console.log(startButton);

var questionsList = [q1,q2,q3,q4];
console.log(questions);

 secondsLeft = 90;

var questions = [
    {title:"question 1: Data Attributes can be ___.",
    choices: { a: "data-hidden" , b: "data-shown" , c: "data-true" ,d: "anything you choose to make them."},
    answer: "d: anything you choose to make them."
},{
    title:"question 2: Preventing Defaults helps with ___.",
    choices: {a: "Not letting average people use the function." ,
    b: "Stopping the function from bubbling up through the parent elements."
     , c: "Setting Timer Intervals." , d: "Traversing the DOM.",},
    answer: "b:"
},


]

function startGame(){
    console.log("inside startGame");
    startTimer();
    showQuestions();
}

function startTimer(){
    console.log("inside startTimer");

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft
    if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
}

function showQuestions(){
    console.log("inside showQuestions");
    score = 0;
    for(var i=0; i < questions.length; i++){
        var responce  ;
        console.log(questions[0]);
        console.log(questions[1]);
        if (responce == questions[i].answer) {
            score++;

        } else{
            secondsLeft-10
        }
    }

}

function endGame(){
    console.log("inside endGame");
}

// need to add event listener for the button to start the game
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("start button works");

    startGame();
    
  });


//keep track of correct answers
//remove time from clock when wrong answer is selected
  
// need to add event listener for answer buttons
//CorrectAnswers