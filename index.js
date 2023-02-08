console.log("Hello, world!");

// Prompt to start the game
// if (confirm("Are you ready to play the game?")) {
//     let playerSelection = prompt("Pick your weapon! (Rock, Paper, or Scissors)");
//     console.log(playerSelection);
// }

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