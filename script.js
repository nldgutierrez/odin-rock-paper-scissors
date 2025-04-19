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