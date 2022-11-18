var scorePlacement = document.getElementById('scores');
var pastScores = JSON.parse(localStorage.getItem("score"));

 for (var i = 0; i < pastScores.length; i++ ) {

var newLI = document.createElement("li");
console.log(pastScores);

newLI.textContent="Name: "+ pastScores[i].name +
" | " +"Score: "+ pastScores[i].score;

scorePlacement.appendChild(newLI);

 }
