/* Skipanir til að nota:
confirm('á að gera þetta') notandi verður að samþykkja/hafna
prompt('hvað heitir þú') og skilar null eða string.

for(let i=0; i<10;i++)
  continu í for lykkju þýðir hún byrjar uppá nýtt
  break til að hætta í for lykkju
Math.ceil(Math.random()*10) skilar tölu frá 1 til 10
Math.ceil(Math.random()*9)+1 skilar tölu frá 2 til 10

Ef fall skilar, þá nota return
let, var const breyta er bara til inn í blokkinni.
óskilgreind breyta er til alls staðar

Ef var x= 9.5434;
x.toFixed(2) skilar 9.54

Breytur til að skilgreina.
answersAverage
*/


// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Þú ert að fara hefja stærðfræðileik þar sem þú átt að svara 10 spurningum á sem skemmstum tíma. Leikurinn byrjar þegar þú ýtir á OK");
  play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
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

}

function endGame(){
  gameEnd=new Date();
  const gameDuration = (gameEnd-gameStart)/1000;
  const answersAverage = correctResponses/gameDuration;
  alert("Þú svaraðir "+correctResponses+" af 10 dæmum rétt á " + gameDuration.toFixed(2)+ " sekúndum. Fjöldi réttra svara á sekúndu voru "+answersAverage.toFixed(2));
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
