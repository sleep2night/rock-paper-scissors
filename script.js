let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let choice = prompt("Choose either rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    // Tie
    if(humanChoice == computerChoice){
        console.log("It's a tie! Nobody wins.");
    }
    
    // Player wins
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors.");
        ++humanScore;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beat paper.");
        ++humanScore;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock.");
        ++humanScore;
    }

    // Computer wins
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock.");
        ++computerScore;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors.");
        ++computerScore;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beat paper.");
        ++computerScore;
    }
}

function updateScores(){
    document.getElementById("humanScore").textContent = `Your Score: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
}
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");

rockButton.addEventListener("click", ()=>{
    console.log("You have selected rock.");
    let computerSelection = getComputerChoice();
    console.log(`Computer has selected ${computerSelection}.`);
    playRound("rock", computerSelection);
    updateScores();
});
scissorsButton.addEventListener("click", ()=>{
    console.log("You have selected scissors.");
    let computerSelection = getComputerChoice();
    console.log(`Computer has selected ${computerSelection}.`);
    playRound("scissors", computerSelection);
    updateScores();
});
paperButton.addEventListener("click", ()=>{
    console.log("You have selected paper.");
    let computerSelection = getComputerChoice();
    console.log(`Computer has selected ${computerSelection}.`);
    playRound("paper", computerSelection);
    updateScores();
});

// function playGame(){
    // let humanSelection;
    // let computerSelection;
    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);
    // alert(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
// }

function endGame(){

}