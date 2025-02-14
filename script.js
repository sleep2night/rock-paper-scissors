// console.log("Can you see this? Nice");
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
// console.log(getHumanChoice());

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);