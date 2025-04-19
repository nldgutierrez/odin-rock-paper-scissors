const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

let humanScore = 0;
let computerScore = 0;

const output = document.querySelector("#gameplay");
const human = document.createElement("p");
const computer = document.createElement("p");
const result = document.createElement("p");
const scores = document.createElement("p");

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice[0].toUpperCase()+humanChoice.substr(1);

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
}