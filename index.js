console.log("Hello, world!");

// Prompt to start the game
// if (confirm("Are you ready to play the game?")) {
//     let playerSelection = prompt("Pick your weapon! (Rock, Paper, or Scissors)");
//     console.log(playerSelection);
// }

let player = "rock";
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let x;
    x = choices[Math.floor(Math.random()*choices.length)];
    return x;
};

let computer = getComputerChoice();
console.log(computer);