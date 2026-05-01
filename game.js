// Roll a dice using the computer

// Assign player names
let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let score = {};

// Function allowing users to change their names
function editNames() {
  player1 = prompt("Change name for Player One");
  player2 = prompt("Change name for Player Two");
  player3 = prompt("Change name for Player Three");

// Assigning the new names
  document.querySelector("p.PlayerOne").innerHTML = player1;
  document.querySelector("p.PlayerTwo").innerHTML = player2;
  document.querySelector("p.PlayerThree").innerHTML = player3;
  score[player1] = 0;
  score[player2] = 0;
  score[player3] = 0;
  updateScoreboard();
}

// Initialise scores for players



const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
btnOne.addEventListener("click", () => rollTheDice(player1));
btnTwo.addEventListener("click", () => rollTheDice(player2));
btnThree.addEventListener("click", () => rollTheDice(player3));

function rollTheDice(playerName) {
  // Function to roll dice
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  score[playerName] += randomNumber;
  updateScoreboard(); // add a function to update scoreboard
  if (score[playerName] >= 30) {
    prompt(`Congrats ${playerName}, you have won!!!`);
    return;
  }
}

// const scoreBoard = document.querySelector("#scoreBoard");
// const scoreCard = document.querySelectorAll("#scoreCard");
// const scoreName = document.querySelectorAll(".scoreName");

function updateScoreboard() {
  document.querySelector("#scoreOne").innerHTML = score[player1];
  document.querySelector("#scoreTwo").innerHTML = score[player2];
  document.querySelector("#scoreThree").innerHTML = score[player3];

  //   document.querySelector("#[playerName").innerText = score[playerName];
}

// Reset the game
function resetGame() {
  score[player1] = 0;
  score[player2] = 0;
  score[player3] = 0;
  updateScoreboard();
}

