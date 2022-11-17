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
},

]
console.log(questions);


function startGame(){
    console.log("inside startGame");
    console.log(questionsContainer)
    questionsContainer.classList.remove('hide');
    headerSection.classList.add('hide');
    startTimer();
    showQuestion();
}

function startTimer(){
    console.log("inside startTimer");

    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft
    if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
}

var questionCount= 0

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
        secondsLeft-10;
        
        console.log(secondsLeft)
        console.log('False')
     }}

}

function endGame(){
    console.log("inside endGame");
    // Grab the score from the secondsList var
    // We want ot store it into local Storage with the user's initials
    //Once the user clicks submit to submit score, then it can render a highscore page
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


//keep track of correct answers
//remove time from clock when wrong answer is selected
  
// need to add event listener for answer buttons
//CorrectAnswers