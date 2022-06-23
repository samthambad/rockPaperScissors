function computerPlay() {
    randNum = Math.floor(Math.random()*3)//gives between 0 and 1 then  *3 gives between 0 and 3 then flooring it gives 0,1,2
    const rpsList = ["rock", "paper", "scissors"]
    let computerChoice = rpsList[randNum]
    console.log("The computer chooses " + computerChoice)
    return computerChoice

}


 function playRound(playerSelection, computerSelection) {//playRound is declared
  if (playerSelection === "rock" && computerSelection === "scissors"){
         console.log("You win")
     }
    else if (playerSelection === "rock" && computerSelection === "paper"){
         console.log("You lose")
     }
     else if (playerSelection === "paper" && computerSelection === "scissors"){
         console.log("You lose")   
     }
     else if (playerSelection === "paper" && computerSelection === "rock"){
         console.log("You win")
     }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
         console.log("You win")
     }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
         console.log("You lose")    
    }
    else if (playerSelection === computerSelection){
     console.log("Tie")  
    }
   
}  

 
function game() {
    for (i = 0; i<5; i++) {//5 rounds
 
    let playerSelection = prompt("Rock, Paper, or Scissors?" , '');
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        console.log("You choose "+ playerSelection)
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);//playRound is called here 
        console.log("Round " + (i+1) + " complete")// i+1 because i starts from 0
        }
    else 
        playerSelection = prompt("Please choose rock, paper, or scissors ", '');// for this if there is some random value for playerSelection the round will skip
        
    }  
    
 }
 
console.log(game());//game is run here
