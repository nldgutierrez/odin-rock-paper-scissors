
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
    let round = 0;
    let yourScore = 0;
    let computerScore = 0;
    while (round < 5) {
        let player = prompt("Choose your fighter!");

        if (player === "") {
            console.log("***PLEASE ENTER A VALUE***");
            continue;
        } else {
            player = player.trim();
            player = player.toLowerCase();
            player = player[0].toUpperCase()+player.substring(1);
            
            if (choices.indexOf(player) > -1) {
                round++;
                console.log(round);

                console.log(`You: ${player}`)
                let computer = getComputerChoice();
                console.log(`Computer: ${computer}`);

                let play = playRound(player, computer);
                console.log(play)

                if (play.includes("win")) {
                    yourScore++;
                } else if (play.includes("lose")) {
                    computerScore++;
                }

                console.log(`Score: You - ${yourScore}, Computer - ${computerScore}`)

            } else {
                console.log(`Please input either Rock, Paper, or Scissors only.`)
                continue;
            }
        }
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