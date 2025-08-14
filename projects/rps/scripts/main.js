const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const player = "player";
const computer = "computer";

let playerScore, computerScore, round = 0;

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

    return roundWinner;
}

function playGame(rounds = 5) {
    let roundWinner = null;

    while(rounds > 0) {
        roundWinner = playRound(getPlayerChoice(), getComputerChoice());
        if(roundWinner === player) {
            playerScore++;
            rounds--;
        }
        else if(roundWinner === computer) {
            computerScore++;
            rounds--;
        }
        console.warn(rounds);
    }

    if(playerScore = computerScore) {
        console.warn("GAME DRAW");
    }
    else if(playerScore < computerScore) {
        console.warn("COMPUTER WINS !");
    }
    else {// playerScore > computerScore
        console.warn("PLAYER WINS !");
    }
}

playGame();