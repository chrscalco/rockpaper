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

function playRound(buttonId, computerChoice) {

        if (buttonId  === computerChoice.toLowerCase()) {
            scoreLine.textContent = "Its a draw!";
            gameInfo.appendChild(scoreLine);
            scoreLine.textContent = currentScore();
            return;
        } else if ((buttonId == "rock" ) && (computerChoice == "Paper")) {
            scoreLine.textContent = "Computer wins!";
            gameInfo.appendChild(scoreLine);
            computerScore++;
            scoreLine.textContent = currentScore();
            return;
        } else  if ((buttonId == "rock" ) && (computerChoice == "Scissors")) { 
            scoreLine.textContent = "Human wins!";
            gameInfo.appendChild(scoreLine);
            humanScore++;
            scoreLine.textContent = currentScore();
            return;
        } else if ((buttonId == "paper" ) && (computerChoice == "Rock")) {
            scoreLine.textContent = "Human wins!";
            gameInfo.appendChild(scoreLine);
            humanScore++;
            scoreLine.textContent = currentScore();
            return;
        } else if ((buttonId == "paper" ) && (computerChoice == "Scissors")) {
            scoreLine.textContent = "Computer wins!";
            gameInfo.appendChild(scoreLine);
            computerScore++;
            scoreLine.textContent = currentScore();
            return;
        } else if ((buttonId == "scissors" ) && (computerChoice == "Rock")) {
            scoreLine.textContent = "Computer wins!";
            gameInfo.appendChild(scoreLine);
            computerScore++;
            scoreLine.textContent = currentScore();
            return;
        } else if ((buttonId == "scissors" ) && (computerChoice == "Paper")) {
            scoreLine.textContent = "Human wins!";
            gameInfo.appendChild(scoreLine);
            humanScore++;
            scoreLine.textContent = currentScore();
            return;
        } else {
            return;
        }

}

const container = document.querySelector("div");
const content = document.createElement("div");

content.classList.add("content");
container.appendChild(content);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Select Rock";
paper.textContent = "Select Paper";
scissors.textContent = "Select Scissors";

rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors");

content.appendChild(rock);
content.appendChild(paper);
content.appendChild(scissors);

const buttons = document.querySelectorAll("button");

buttons.forEach(function(e) {
    e.addEventListener("click", () => {
        console.log(event.target.id);
        playRound(event.target.id, getComputerChoice());
        if (humanScore > 4 || computerScore > 4) {
            if (humanScore === 5) {
                alert("Human wins!");
            } else {
                alert ("Computer wins!")
            }
        
            humanScore = 0;
            computerScore = 0;
        
        }

    })});

const gameInfo = document.createElement("div");
const scoreLine = document.createElement("p");
 
gameInfo.textContent = "Game Progress";
scoreLine.textContent = "Human: " + humanScore + " Computer: " + computerScore;

gameInfo.appendChild(scoreLine);
container.appendChild(gameInfo);

function currentScore() {
    return "Human: " + humanScore + " Computer: " + computerScore;
}
