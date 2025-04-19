const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

let humanScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll("button");

const output = document.querySelector("#gameplay");
const human = document.createElement("p");
const computer = document.createElement("p");
const roundCount = document.createElement("p");
const result = document.createElement("p");
const scores = document.createElement("p");

const over = document.createElement("p");
const winner = document.createElement("p");

const buttonsDiv = document.querySelector("#buttons");
const playAgain = document.createElement("button");

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice[0].toUpperCase()+humanChoice.substr(1);

    round++;
    roundCount.textContent = `Round: ${round}`;
    output.appendChild(roundCount);

    switch (true) {
        case (humanChoice == computerChoice):
            human.textContent = `You chose ${humanChoice}.`;
            computer.textContent = `Computer chose ${computerChoice}.`;
            result.textContent = `It's a tie!`;
            scores.textContent = `You -- ${humanScore} | Computer -- ${computerScore}`;
        
            output.appendChild(human);
            output.appendChild(computer);
            output.appendChild(result);
            output.appendChild(scores);
            break;

        case (
            humanChoice == 'Rock' && computerChoice == 'Scissors' ||
            humanChoice == 'Paper' && computerChoice == 'Rock' ||
            humanChoice == 'Scissors' && computerChoice == 'Paper'
        ):
            human.textContent = `You chose ${humanChoice}.`;
            computer.textContent = `Computer chose ${computerChoice}.`;
            result.textContent = `You win!`;

            humanScore++;

            scores.textContent = `You -- ${humanScore} | Computer -- ${computerScore}`;
        
            output.appendChild(human);
            output.appendChild(computer);
            output.appendChild(result);
            output.appendChild(scores);
            break;
        default:
            human.textContent = `You chose ${humanChoice}.`;
            computer.textContent = `Computer chose ${computerChoice}.`;
            result.textContent = `You lose!`;

            computerScore++;

            scores.textContent = `You -- ${humanScore} | Computer -- ${computerScore}`;
        
            output.appendChild(human);
            output.appendChild(computer);
            output.appendChild(result);
            output.appendChild(scores);
    }

    function resetGame() {
        output.innerHTML = '';
        humanScore = 0;
        computerScore = 0;
        round = 0;
        playAgain.remove();
        buttons.forEach((button) => {
            button.disabled = false;
        });
    }

    if (humanScore == 5 || computerScore == 5) {
        over.textContent = `*** GAME OVER ***`;
        output.appendChild(over);

        if (humanScore > computerScore) {
            winner.textContent = `Congratulations! You are the winner!`;
            output.appendChild(winner);
        } else {
            winner.textContent = `Better luck next time!`;
            output.appendChild(winner);
        }

        playAgain.textContent = `Play Again`;
        playAgain.style.cssText = "border-radius: 8px; padding: 16px;";
        output.appendChild(playAgain);

        buttons.forEach((button) => {
            button.disabled = true;
        });

        playAgain.addEventListener("click", resetGame);

    }

}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});