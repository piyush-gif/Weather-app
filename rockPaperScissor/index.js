let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loss:0,
  ties:0
};

function pickComputerMove(){
const randomNumber = Math.random();

if (randomNumber >=0 && randomNumber < 1/3){
  return 'rock';
}
else if(randomNumber >=1/3 && randomNumber < 2/3){
  return 'paper';
}
else if(randomNumber >=2/3 && randomNumber <  1){
  return 'scissor';
}
}
function playGame(playerMove){
const computerMove = pickComputerMove();

result = '';
if (playerMove ==='scissor'){
  if (computerMove === 'rock'){
    result  ='You lose!';
  }
  else  if (computerMove ==='paper'){
    result  ='You win!';
  }
  else if (computerMove ==='scissor'){
    result  ='Tie!';
  }  

}
else if (playerMove  ==='paper'){
  if (computerMove === 'rock'){
    result  ='You win!';
  }
  else  if (computerMove ==='paper'){
    result  ='Tie!';
  }
  else if (computerMove==='scissor'){
     result  ='You lose!';
  }
  
}
else if  (playerMove ==='rock'){
  if (computerMove === 'rock'){
    result  ='Tie!';
  }
  else  if (computerMove ==='paper'){
    result  ='You lose!';
  }
  else if (computerMove ==='scissor'){
    result  ='You win!';
  }
}

if(result ==='You win!'){
  score.wins += 1;
  }
else if(result =='You lose!'){
  score.loss +=1;
}
else if (result =='Tie!'){
  score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.picks').innerHTML = `${result}`;
document.querySelector('.result').innerHTML = `You picked ${playerMove} computer picked ${computerMove}`;
document.querySelector('.data').innerHTML=`wins: ${score.wins} , losses: ${score.loss},  ties: ${score.ties}`; 

}