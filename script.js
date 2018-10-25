// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

function start() {
  alert("Þú ert að fara hefja stærðfræðileik þar sem þú átt að svara 10 spurningum á sem skemmstum tíma. Leikurinn byrjar þegar þú ýtir á OK");
  play();
}

function play() {
  gameStart = new Date();
  correctResponses=0;
  gamesPlayed=1;
  gameDuration=0;
  ask();
}

function question(){
  switch(randomNumber(1,4)){
    case 1: //Hér er spurning með + 
      operator = "+"; 
      a = randomNumber(1,100);
      b = randomNumber(1,100);
      correctAnswer = a+b;
      break;
    
    case 2: //Hér er spurning með -
      operator = "-"; 
      a = randomNumber(1,100);
      b = randomNumber(1,100);
      correctAnswer = a-b;
      break;
    
    case 3: //Hér er spurning með *
      operator = "*"; 
      a = randomNumber(1,10);
      b = randomNumber(1,10);
      correctAnswer = a*b;
      break;

    case 4: //Hér er spurning með /
      operator = "/"; 
      b = randomNumber(2,10);
      a = b*randomNumber(2,10);
      correctAnswer = a/b;
      break;
  }
}


function ask() {
  question();
  const input = prompt("Spurning "+gamesPlayed+". Hvað er "+ a + operator + b+ " ?");
  
  if(input===null){
    quitGame();
  }
  else{
    parseInput = parseGuess(input);
    checkAnswer();
  }
}


function checkAnswer(){
  if(Math.abs(parseInput-correctAnswer)<Number.EPSILON){
    correctResponses++;
  }
  gamesPlayed++;
  
  if(gamesPlayed>GAMES_TO_PLAY){
    endGame();
  }
  else{
    ask();
  }
}

function quitGame(){
  alert("Hætt í leik");
  newGame();

}

function endGame(){
  gameEnd=new Date();
  const gameDuration = (gameEnd-gameStart)/1000;
  const answersAverage = correctResponses/gameDuration;
  alert("Þú svaraðir "+correctResponses+" af 10 dæmum rétt á " + gameDuration.toFixed(2)+ " sekúndum. Fjöldi réttra svara á sekúndu voru "+answersAverage.toFixed(2));
  
}

function newGame(){
  if(prompt ("Viltu spila annan leik?")===""){
    start();
  }
}


function parseGuess(input){
  const parsed = parseInt(input,10);

  if(isNaN(parsed)){
    return null;
  }
  return parsed;
}


//Skilar tölu af handahófi á bilinu [min, max]
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
