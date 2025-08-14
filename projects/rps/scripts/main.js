const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore, computerScore = 0;

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

function playRound(playerChoice, computerChoice) {
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
                break;
            }
            else if (computerChoice === paper) {
                // computer wins
                console.log("COMPUTER WIN");
                break;
            }
            else { // computerChoice === scissors
                // player wins
                console.log("PLAYER WIN");
                break;
            }
        case paper:
            if (computerChoice === rock) {
                // player wins
                console.log("PLAYER WIN");
                break;
            }
            else if (computerChoice === paper) {
                // draw
                console.log("DRAW");
                break;
            }
            else {// computerChoice === scissors
                // computer wins
                console.log("COMPUTER WIN");
                break;
            }
        case scissors:
            if (computerChoice === rock) {
                // computer wins
                console.log("COMPUTER WIN");
                break;
            }
            else if (computerChoice === paper) {
                // player wins
                console.log("PLAYER WIN");
                break;
            }
            else {// computerChoice === scissors
                // draw 
                console.log("DRAW");
                break;
            }

      default:
        console.error("Whoops, something went wrong !");
        break;
    }
}

playRound(getPlayerChoice(), getComputerChoice());