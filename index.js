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