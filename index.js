
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};


function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == computerSelection:
            return "It's a tie.";
            
        case (
            (playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")
            ):
            return `You win! ${playerSelection} beats ${computerSelection}.`;
            
        default:
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
}
        
        
function game() {
    let yourScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt("Choose your fighter!");
        player = player.toLowerCase();
        player = player[0].toUpperCase()+player.substring(1);
        console.log(`You: ${player}`);
        let computer = getComputerChoice();
        console.log(`Computer: ${computer}`);

        let round = playRound(player, computer)
        console.log(round)
        
        if (round.includes("win")) {
            yourScore++;
        }

        else if (round.includes("lose")) {
            computerScore++;
        }

        console.log(`Score: You - ${yourScore}, Computer - ${computerScore}`)

    }

    if (yourScore > computerScore) {
        console.log(`WINNER: You! ⭐️⭐️⭐️\nCongratulations!`)
    } else if (yourScore < computerScore) {
        console.log(`WINNER: Computer 💻\nBetter luck next time.`)
    } else if (yourScore == computerScore) {
        console.log(`It's an unbelievable tie.`)
    }

}

game();