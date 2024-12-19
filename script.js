function getComputerChoice () {
    const num = Math.floor(Math.random() * (4 - 1)) + 1;

    if (num === 1) {
        console.log("Computer picks: Rock");
        return "Rock";
    } else if (num === 2) {
        console.log("Computer picks: Paper");
        return "Paper";
    } else {
        console.log("Computer picks: Scissors");
        return "Scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Pick a choice.");

    if ((choice.toLowerCase() != "rock") && (choice.toLowerCase() != "paper") && (choice.toLowerCase() != "scissors")) {

        return "Invalid choice";

    }  else {
        console.log("Human picks: " + choice);
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log("Its a draw!");
        return;
    } else if ((humanChoice.toLowerCase() == "rock" ) && (computerChoice == "Paper")) {
        console.log("Computer wins!");
        computerScore++;
        return;
    } else  if ((humanChoice.toLowerCase() == "rock" ) && (computerChoice == "Scissors")) { 
        console.log("Human wins!");
        humanScore++;
        return;
    } else if ((humanChoice.toLowerCase() == "paper" ) && (computerChoice == "Rock")) {
        console.log("Human wins!");
        humanScore++;
        return;
    } else if ((humanChoice.toLowerCase() == "paper" ) && (computerChoice == "Scissors")) {
        console.log("Computer wins!");
        computerScore++;
        return;
    } else if ((humanChoice.toLowerCase() == "scissors" ) && (computerChoice == "Rock")) {
        console.log("Computer wins!");
        computerScore++;
        return;
    } else if ((humanChoice.toLowerCase() == "scissors" ) && (computerChoice == "Paper")) {
        console.log("Human wins!");
        humanScore++;
        return;
    } else {
        return;
    }
}

function playGame() {
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if (humanScore == computerScore) {
        console.log ("Its a tie! " + humanScore + "-" + computerScore);
        return;
    } else if (humanScore > computerScore) {
        console.log ("Human wins! " + humanScore + "-" + computerScore);
        return;
    } else {
        console.log("Computer wins! " + humanScore + "-" + computerScore);
        return;
    }
}