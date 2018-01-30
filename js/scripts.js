//get random bird
var birdsSet = ["czajka", "kulczyk","mauzrek", "piegża", "pleszka", "potrzos", "pustułka", "pluszcz"],
    bird = birdsSet[Math.floor(Math.random() * birdsSet.length)];

//layout elements
var buttonContainer = document.getElementById('buttonContainer'),
    riddleContainer = document.getElementById('riddleContainer'),
    birdName = document.getElementById('birdName');
    flexContainer = document.getElementById('flexContainer');

//button
newGameButton = document.getElementById('newGameButton');
newGameButton.addEventListener('click', newGame);


//set game elements

var gameState = 'notStarted' // 'notStarted', 'justFinished'

function setGameElements() {
  switch(gameState) {
    case 'notStarted':
        riddleContainer.style.display = 'none';
        buttonContainer.style.display = 'block';
        break;
    case 'started':
        riddleContainer.style.display = 'block';
        buttonContainer.style.display = 'none';
        break;
    case 'justFinished':
        flexContainer.style.display = 'flex';
        break;
    }
}

//check player's answer

function checkAnswer() {
  var lettersToGuess = bird.length;

  for(var j = 0; j < bird.length; j++) {
    if(bird[j] === playerAnswer) {
      lettersToGuess--;
      // odgadniętą literę wpisać w odpowiedni li JAK???
    }
  }
}



//main function
function newGame () {

  //choose random bird and draw letter boxes 
  for(var i = 0; i < bird.length; i++){
    birdName.append("<li> </li>");
  }

  //Game starts. NewGame Button is hidden, riddle (letter boxes) is visible.
  var gameState = 'started'
  setGameElements();

  
  while (lettersToGuess > 0) {
      //ask player for the letter
      var playerAnswer = prompt("Podaj literę");

      //check player's answer
      if (playerAnswer.length !== 1) {
        alert("Podaj tylko jedną literę")
      } else {
        checkAnswer();
      }
  }
}

// out of the loop - end game
var gameState = 'justFinished';
setGameElements();



   