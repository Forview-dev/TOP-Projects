const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerChoice, computerChoice = null;

const player = "player";
const computer = "computer";

const playerResults = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

let playerScore = 0;
let computerScore = 0;
let round = 0;


rockBtn.addEventListener("click", () => {
    playRound(rock, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound(paper, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound(scissors, getComputerChoice());
});

function getComputerChoice() {
    let n = Math.random();
    if (n <= 1/3) {
        return rock;
    }
    else if (n <= 2/3) {
        return paper;
    }
    else return scissors;
}

function getPlayerChoice() {
    let choice = prompt("Please enter your choice >");

    // lets make that case insensitive
    return choice.toLowerCase();
}

function updateDOM(playerScore, computerScore, isGameComplete) {
    playerResults.textContent = playerScore;
    computerResult.textContent = computerScore;
}

function computeRound(winner) {
    if(winner === player) {
        playerScore++;
    }
    else if(winner === computer) {
        computerScore++;
    }

    updateDOM(playerScore, computerScore, false)
}

function playRound(playerChoice, computerChoice) {
    let roundWinner = null;

    // logging the choices:
    console.log(`
        Player: ${playerChoice}
        Computer: ${computerChoice}`);

    // figuring out the win conditions
    switch (playerChoice) {
        case rock:
            if (computerChoice === rock) {
                // draw
                console.log("DRAW");
                roundWinner = null;
                break;
            }
            else if (computerChoice === paper) {
                // computer wins
                console.log("COMPUTER WIN");
                roundWinner = computer;
                break;
            }
            else { // computerChoice === scissors
                // player wins
                console.log("PLAYER WIN");
                roundWinner = player;
                break;
            }
        case paper:
            if (computerChoice === rock) {
                // player wins
                console.log("PLAYER WIN");
                roundWinner = player;
                break;
            }
            else if (computerChoice === paper) {
                // draw
                console.log("DRAW");
                roundWinner = null;
                break;
            }
            else {// computerChoice === scissors
                // computer wins
                console.log("COMPUTER WIN");
                roundWinner = computer;
                break;
            }
        case scissors:
            if (computerChoice === rock) {
                // computer wins
                console.log("COMPUTER WIN");
                roundWinner = computer;
                break;
            }
            else if (computerChoice === paper) {
                // player wins
                console.log("PLAYER WIN");
                roundWinner = player;
                break;
            }
            else {// computerChoice === scissors
                // draw 
                console.log("DRAW");
                roundWinner = null;
                break;
            }

        default:
            console.error("Whoops, something went wrong !");
            break;       
    }

    computeRound(roundWinner);
}

updateDOM(playerScore, computerScore, false);