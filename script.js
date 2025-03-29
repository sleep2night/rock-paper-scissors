let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");

const resultContainer = document.querySelector("#result");

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let choice = prompt("Choose either rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function displayMessage(message){
    document.getElementById("resultText").textContent = message;
}
function playRound(humanChoice, computerChoice){
    // Tie
    if(humanChoice == computerChoice){
        displayMessage("It's a tie! Nobody wins.");
    }
    
    // Player wins
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        displayMessage("You win! Rock beats scissors.");
        ++humanScore;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        displayMessage("You win! Scissors beat paper.");
        ++humanScore;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        displayMessage("You win! Paper beats rock.");
        ++humanScore;
    }

    // Computer wins
    else if(humanChoice == "rock" && computerChoice == "paper"){
        displayMessage("You lose! Paper beats rock.");
        ++computerScore;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        displayMessage("You lose! Rock beats scissors.");
        ++computerScore;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        displayMessage("You lose! Scissors beat paper.");
        ++computerScore;
    }
    endGame();
    updateScores();
}

function updateScores(){
    document.getElementById("humanScore").textContent = `Your Score: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
}

function playerOption(message){
    document.getElementById("playerOption").textContent = message;
}

function computerOption(message){
    document.getElementById("computerOption").textContent = message;
}

rockButton.addEventListener("click", ()=>{
    playerOption("You have selected rock.");
    let computerSelection = getComputerChoice();
    computerOption(`Computer has selected ${computerSelection}.`);
    playRound("rock", computerSelection);
});

scissorsButton.addEventListener("click", ()=>{
    playerOption("You have selected scissors.");
    let computerSelection = getComputerChoice();
    computerOption(`Computer has selected ${computerSelection}.`);
    playRound("scissors", computerSelection);
});

paperButton.addEventListener("click", ()=>{
    playerOption("You have selected paper.");
    let computerSelection = getComputerChoice();
    computerOption(`Computer has selected ${computerSelection}.`);
    playRound("paper", computerSelection);
});

function disableButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button)=>{
        button.disabled = true;
    });
}
function endGame(){
    if(humanScore == 5){
        displayMessage("Congratulations, you won!");
        disableButtons();
    }else if(computerScore == 5){
        displayMessage("Unfortunately, you lost the game.");
        disableButtons();
    }
}