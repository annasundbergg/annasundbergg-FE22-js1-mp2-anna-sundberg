const gamerName = document.querySelector("input");
const startBtn = document.querySelector("#start-btn");
const header = document.querySelector("#header");
const gameContainer = document.querySelector("#game-container");
const playerPointsh3 = document.querySelector("#player-points");
const computerPointsh3 = document.querySelector("#computer-points");
const resultText = document.querySelector("#result-text");
let playerPoints = 0;
let computerPoints = 0;
let winnerDeclared = false;

const array = ["rock", "paper", "scissors"];

document.querySelector("#game-container").style.display = "none";
document.querySelector("#player-wins").style.display = "none";
document.querySelector("#computer-wins").style.display = "none";

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#game-container").style.display = "block";
  document.querySelector("#go").style.display = "block";
  document.querySelector("#go").innerText =
    "Let's go, " + gamerName.value + "!";

  let playerText = document.querySelector("#player-text");
  let computerText = document.querySelector("#computer-text");

  gameContainer.addEventListener("click", function (event) {
    if (winnerDeclared) return; // Do nothing if winner has been declared

    let randomNumber = Math.floor(Math.random() * array.length);
    const userChoice = event.target.id;
    const computerChoice = array[randomNumber];

    if (event.target.tagName === "BUTTON") {
      playerText.innerText = gamerName.value + ": " + userChoice;
      computerText.innerText = "Computer: " + computerChoice;

      if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "scissors" && computerChoice == "paper") ||
        (userChoice == "paper" && computerChoice == "rock")
      ) {
        playerPoints++;
        resultText.innerText = "Du fick poäng!";
      } else if (
        (computerChoice == "paper" && userChoice == "rock") ||
        (computerChoice == "rock" && userChoice == "scissors") ||
        (computerChoice == "scissors" && userChoice == "paper")
      ) {
        computerPoints++;
        resultText.innerText = "Datorn fick poäng!";
      } else if (userChoice == computerChoice) {
        resultText.innerText = "Ingen fick poäng!";
      }
    }

    playerPointsh3.innerText = "Dina poäng:" + playerPoints + "/3";
    computerPointsh3.innerText = "Datorns poäng:" + computerPoints + "/3";

    if (computerPoints == 3) {
      document.querySelector("#computer-wins").style.display = "block";
      winner();
    } else if (playerPoints == 3) {
      document.querySelector("#player-wins").style.display = "block";
      winner();
    }
  });
});

function winner() {
  winnerDeclared = true;

  computerPoints = 0;
  playerPoints = 0;

  const btns = document.querySelectorAll(".game-btns");
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }

  const restartBtn = document.createElement("button");
  gameContainer.appendChild(restartBtn);
  restartBtn.innerText = "PLAY AGAIN";
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}
