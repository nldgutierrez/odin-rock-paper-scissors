let player = prompt("Choose your fighter!");
player = player.toLowerCase();
player = player[0].toUpperCase()+player.substring(1);
console.log(player);

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

let computer = getComputerChoice();
console.log(computer);

function playRound(playerSelection, computerSelection) {

    switch (true) {
        case playerSelection == computerSelection:
            return "It's a tie.";

        case (
            (playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")
        ):
            return `You win! ${playerSelection} beats ${computerSelection}.`
    
        default:
            return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

console.log(playRound(player, computer))