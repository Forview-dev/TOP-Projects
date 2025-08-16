const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerChoice, computerChoice = null;

const player = "player";
const computer = "computer";

const playerResults = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const roundResult = document.querySelector(".roundResult");

const playerBtns = document.querySelectorAll(".playerBtn");
const computerBtns = document.querySelectorAll(".computerBtn");

let playerScore = 0;
let computerScore = 0;
let round = 0;

playerBtns.forEach(
    (button) => button.addEventListener('click', () => {
        computerChoice = getComputerChoice();
        playerChoice = button.innerText.toLowerCase();

        const roundWinner = playRound(playerChoice, computerChoice);

        updateDOM(roundWinner);

    })
);

function updateDOM(playedRoundResult) {
    console.log("🚀 ~ update DOM ");

    btnAddChoiceClass();
    playerResults.innerText = playerScore;
    computerResult.innerText = computerScore;
    
    if (playedRoundResult === null)
        roundResult.innerText = "DRAW !";
    else if(playedRoundResult === player)
        roundResult.innerText = "PLAYER WINS !";
    else if (playedRoundResult === computer)
        roundResult.innerText = "COMPUTER WINS !";
    else
        roundResult.innerText = "Round result";
}

function btnAddChoiceClass() {
    computerBtns.forEach((button) => {
        button.classList.remove("choice");
        if(button.classList.contains(computerChoice))
            button.classList.add("choice");
    })
}

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

    if(roundWinner === player)
        playerScore++;
    else if(roundWinner === computer)
        computerScore++;


    return roundWinner;

}


updateDOM("init");