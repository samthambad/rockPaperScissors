    let playerSelection;
    let point;
    let compPoint;
    const rockButton = document.querySelector(".rock")
    rockButton.addEventListener("click",  () => {
        playerSelection = "rock"//can be added in same function
        console.log("You choose " + playerSelection)
        playRound( playerSelection, computerPlay())
        
    })

    const paperButton = document.querySelector(".paper")
    paperButton.addEventListener("click",  () => {
        playerSelection = "paper"//can be added in same function
        console.log("You choose " + playerSelection)
        playRound( playerSelection, computerPlay())
        
    }) 

    const scissorsButton = document.querySelector(".scissors")
    scissorsButton.addEventListener("click",  () => {
        playerSelection = "scissors"//can be added in same function
        console.log("You choose " + playerSelection)
        playRound( playerSelection, computerPlay())
        
        }) 


    function computerPlay() {
        randNum = Math.floor(Math.random()*3)//gives between 0 and 1 then  *3 gives between 0 and 3 then flooring it gives 0,1,2
        const rpsList = ["rock", "paper", "scissors"]
        let computerChoice = rpsList[randNum]
        console.log("The computer chooses " + computerChoice)
        return computerChoice

    }

    const results = document.querySelector(".results")
    const points = document.querySelector(".points")
    const compPoints = document.querySelector(".compPoints")
    function playRound(playerSelection, computerSelection) {//playRound is declared
        
    if (playerSelection === "rock" && computerSelection === "scissors"){
            const a = document.createElement('div')
            a.textContent = "You win"
            points.textContent = "Your points: " + ++point
            results.appendChild(a);
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
            const b = document.createElement('div')
            b.textContent = "You lose"
            compPoints.textContent = "Computer points: "+ ++compPoint
            results.appendChild(b);
        }
        else if (playerSelection === "paper" && computerSelection === "scissors"){
            const c = document.createElement('div')
            c.textContent = "You lose" 
            compPoints.textContent = "Computer points: "+ ++compPoint
            results.appendChild(c); 
        }
        else if (playerSelection === "paper" && computerSelection === "rock"){
            const d = document.createElement('div')
            d.textContent = "You win"
            points.textContent = "Your points: " + ++point
            results.appendChild(d);
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            const e = document.createElement('div')
            e.textContent = "You win"
            points.textContent = "Your points: " + ++point
            results.appendChild(e);
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            const f = document.createElement('div')
            f.textContent = "You lose"
            compPoints.textContent = "Computer points: "+ ++compPoint
            results.appendChild(f);   
        }
        else if (playerSelection === computerSelection){
            const g = document.createElement('div')
            g.textContent = "Tie"
            results.appendChild(g);
        }
    
    }  

   
    
    function game() {
        point = 0;
        compPoint = 0;
        array = [ 1,2,3,4,5]
        for (let num of array) {
            if (compPoint==5 || point ==5){
                break
            }
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                console.log("You choose "+ playerSelection)
                let computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);//playRound is called here 
                console.log("Round " + (i+1) + " complete")// i+1 because i starts from 0
                }
            
        }
        
    }
    
    console.log(game());//game is run here
