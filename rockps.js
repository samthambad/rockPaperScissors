function computerChoice(){
  choiceArray = ["Rock", "Paper", "Scissors"]; 
  // generate a random index number as Computer's choice
  choiceIndex = (Math.floor(Math.random() * 3));
  compPlay = choiceArray[choiceIndex];
  return compPlay;
}

function singleRound(playerChoice, compPlay = ""){
  // set the default value of computerChoice  
  // the winner is set to false unless the player wins
  // call the computerChoice function to get compPlay
  compPlay = computerChoice();
  winner = false;
  playerChoice = playerChoice.toLowerCase();
  compPlay = compPlay.toLowerCase();
  // rock vs paper, comp wins
  if (playerChoice == 'rock' && compPlay == 'paper'){
  }
  // rock vs scissors, player wins
  if (playerChoice == 'rock' && compPlay == 'scissors'){
    winner = true;
  }
  
  // paper vs scissors, comp wins
  if (playerChoice == 'paper' && compPlay == 'scissors'){
  }
  // paper vs rock, player wins
  if (playerChoice == 'paper' && compPlay == 'rock'){
    winner = true;
  }

  // scissors vs rock, comp wins
  if (playerChoice == 'scissors' && compPlay == 'rock'){
  }
  // scissors vs paper, player wins
  if (playerChoice == 'scissors' && compPlay == 'paper'){
    winner = true;
  }
  if (winner == true){
    // use backticks for template literals 
    console.log(`Player has won! Computer chose ${compPlay}`);
  }
  else if (winner == false){
    console.log(`Player has lost! Computer chose ${compPlay}`);
  }
  return winner;
}

function game(){
  for(let i=0; i<5; i++){
    user_play = window.prompt("Rock, Paper or Scissors?");
    singleRound(user_play);
    // keep track of the score
  }
}
game();
