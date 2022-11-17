var scorePlacement = document.getElementById('scores');
var pastScores = JSON.parse(localStorage.getItem("score"));
 
var newLI = document.createElement("li");
newLI.textContent="Name: "+ pastScores[0] +" | " +"Score: "+ pastScores[1];
scorePlacement.appendChild(newLI);
