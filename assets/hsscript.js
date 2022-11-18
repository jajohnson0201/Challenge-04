var scorePlacement = document.getElementById('scores');
var pastScores = JSON.parse(localStorage.getItem("score"));

console.log(pastScores);
 for (var i = 0; i < pastScores.length; i++ ) {

var newLI = document.createElement("li");

newLI.textContent="Name: "+ pastScores[i].name +
" | " +"Score: "+ pastScores[i].score;

scorePlacement.appendChild(newLI);

 }
