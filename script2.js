

const games = [];


function getResults()
{
  var sumAttempts=0;
  for (i=0; i<games.length; i++)
  {
    sumAttempts+=games[i];
    }
  
  const averageAttempts =  sumAttempts / games.length;
  const results = "Þú spilaðir " +games.length+" leiki.\nÞú þurftir " +averageAttempts.toFixed(2)+ " tilraunir að meðaltali"
  alert(results);
  

}

function start(){
  do{
    play();
  } while (confirm("Spila annan?"))
  
  getResults();
}

function play(){

  var random = randomNumber(100);
  let attempts = 0;
  let correct = false;
  do{
    const input = prompt('Giskaðu á tölu milli 0 og 100 ' + random);
    
    if(input===NaN){
      break;
    }
    //debugger;
    const parseInput = parseGuess(input);
    
    correct = parseInput === random;
    attempts++;
    if(!correct){
      alert(getResponse(parseInput,random));
    }
  } while(!correct);
  
  games.push(attempts);
  alert("Rétt í " + attempts + " tilraunum");

  return true;
}

function getResponse(guess,correct){
  const diff = Math.abs(guess-correct);

if(guess <0 || isNaN(guess))
{
  return "Ekki rétt"
}

  if(diff<5){
    return "Mjög nálæegt"
  }
  else if(diff<10){
    return "Nálægt"
  }
  else{
    return "Langt frá"
  }

}


function randomNumber(n){
  return Math.floor(Math.random()*(n+1));
}

function parseGuess(input){
  const parsed = parseInt(input,10);

  if(isNaN(parsed)){
    return null;
  }
  return parsed;

}


start();