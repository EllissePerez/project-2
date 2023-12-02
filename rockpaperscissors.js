var userChoice;

rockButton = document.getElementById("Rock");
paperButton = document.getElementById("Paper");
scissorsButton = document.getElementById("Scissors");
tiesHeader = document.getElementById("Ties");
winsHeader = document.getElementById("Wins");
lossesHeader = document.getElementById("Losses");

let wins = 0;
let ties = 0;
let losses = 0;

rockButton.addEventListener('click', function() {
    userChoice = "Rock";
    updateScore();
});

paperButton.addEventListener('click', function() {
    userChoice = "Paper";
    updateScore();
});

scissorsButton.addEventListener('click', function() {
    userChoice = "Scissors";
    updateScore();
});

function updateScore() {
const randomNumber = Math.floor(Math.random() * 3) + 1;
let computerChoice;

if (randomNumber === 1) {
    computerChoice = "Rock";
} else if (randomNumber === 2) {
    computerChoice = "Paper";
} else if (randomNumber === 3) {
    computerChoice = "Scissors";
}

console.log("Computer Choice:", computerChoice);
console.log("User Choice:", userChoice);

if (computerChoice === userChoice) {
    ties++;
    scoreTied();
} else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
) {
    losses++;
    scoreLoss();
} else {
    wins++;
    scoreWin();
}
}

function scoreTied() {
tiesHeader.textContent = "Ties: " + ties;
}

function scoreLoss() {
lossesHeader.textContent = "Losses: " + losses;
}

function scoreWin() {
winsHeader.textContent = "Wins: " + wins;
}