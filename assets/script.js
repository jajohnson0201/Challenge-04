var timer = document.getElementById('counter');

var startButton = document.getElementById('start-button');
var highscoreButton = document.getElementById('hs-button');
var questionCard = document.querySelector("#question-1");
var qheader = document.querySelector('#question-header');
var optA = document.querySelector('#opt-a');
var optB = document.querySelector('#opt-b');
var optC = document.querySelector('#opt-c');
var optD = document.querySelector('#opt-d');
var questionsContainer = document.querySelector(".question-card");
var headerSection = document.querySelector('#header-section')
var timerInterval;
console.log(timer);
console.log(startButton);



secondsLeft = 90;

var questions = [
    {title:"question 1: Data Attributes can be ___.",
    choices: { a: "data-hidden" , b: "data-shown" , c: "data-true" ,d: "anything you choose to make them."},
    answer: "anything you choose to make them."
},{
    title:"question 2: Preventing Defaults helps with ___.",
    choices: {a: "Not letting average people use the function." ,
    b: "Stopping the function from bubbling up through the parent elements."
    , c: "Setting Timer Intervals." , d: "Traversing the DOM.",},
    answer: "Stopping the function from bubbling up through the parent elements."
},{
    title:"question 3: When using JSON.parse with an array what does that do?",
    choices: {a: "unzips locally stored array" ,
    b: "zips array into local storage"
    , c: "stringifies an array" , d: "all of the above",},
    answer: "zips array into local storage"
},{
    title:"question 4: When using JSON.stringify to open arrays where does this take place",
    choices: {a: "the DOM" ,
    b: "the Window"
    , c: "local storage" , d: "HTML",},
    answer: "local storage"
},{
    title:"question 5: Inorder to prevent a function bubbling through the DOM you can ___.",
    choices: {a: "cry about it" ,
    b: "preventDefaults()"
    , c: "create an eventListener()" , d: "setInterval()",},
    answer: "preventDefaults()"
},{
    title:"question 6: setInterval() is a ____.",
    choices: {a: "timer" ,
    b: "option to prevent defaults"
    , c: "slideshow" , d: "all of the above",},
    answer: "timer"
},{
    title:"question 7: Appending is used when ___.",
    choices: {a: "trying to erase something" ,
    b: "the browswer isn't responding"
    , c: "getting local storage" , d: "making element a parent or child",},
    answer: "making element a parent or child"
}

]
console.log(questions);

//starts the games functions and hides certain HTML elements, shows others.
function startGame(){
    console.log("inside startGame");
    console.log(questionsContainer)
    questionsContainer.classList.remove('hide');
    headerSection.classList.add('hide');
    startTimer();
    showQuestion();
}
//sets timer for the game
function startTimer(){
    console.log("inside startTimer");

    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft
    if(secondsLeft <= 0) {
        
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
}

var questionCount= 0
//shows the questions 
function showQuestion(){
    console.log("inside showQuestions");
    console.log(questions[questionCount]) ;
    console.log(questions.length);
        
            qheader.textContent= questions[questionCount].title;
            optA.textContent= questions[questionCount].choices.a;
            optB.textContent= questions[questionCount].choices.b;
            optC.textContent= questions[questionCount].choices.c;
            optD.textContent= questions[questionCount].choices.d;
        console.log(questions[questionCount].choices.a);

        
}
//checks if answer is right or wrong 
function questionRightOrWrong (choosenQuestion){
    console.log(choosenQuestion ,  questions[questionCount].answer)
    if (choosenQuestion.textContent === questions[questionCount].answer){
        questionCount++;
        if(questionCount===questions.length){
            endGame();
            clearInterval(timerInterval);
        }
        else{

        showQuestion();
        }
    } else  {
        if (choosenQuestion.textContent !== questions[questionCount].answer){
        secondsLeft -= 10;
        
        console.log(secondsLeft)
        console.log('False')
     }}

}
var storedScores = JSON.parse(localStorage.getItem("score")) || [];

//ends game, sends user to highscore page with highscore
function endGame(){
    console.log("inside endGame");
    var prompt = window.prompt("Please enter your initials");
    var score = secondsLeft;
    var scoreObj = {
        name: prompt,
        score: score,
    }
    storedScores.push(scoreObj)
    localStorage.setItem("score", JSON.stringify(storedScores));
    
    window.location.href='highscore.html'
}

// need to add event listener for the button to start the game
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("start button works");

    startGame();
    
  });

//event listener for the answer picked.
questionCard.addEventListener("click", function(event){
    var choosenQuestion = event.target
    questionRightOrWrong(choosenQuestion);
});

//event listener for the highscore button
highscoreButton.addEventListener("click", function(){
    window.location.href='highscore.html'
});


