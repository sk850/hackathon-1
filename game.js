// Roll a dice using the computer

// Assign player names
let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let score = {};
score[player1] = 0;
score[player2] = 0;
score[player3] = 0;

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

const editNameBtn = document.querySelector("#editName");
editNameBtn.addEventListener("click", editNames);

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

  if (playerName === player1) {
    document.querySelector("#img1").src = `./dice/dice${randomNumber}.png`;
  }
  if (playerName === player2) {
    document.querySelector("#img2").src = `./dice/dice${randomNumber}.png`;
  }
  if (playerName === player3) {
    document.querySelector("#img3").src = `./dice/dice${randomNumber}.png`;
  }

  updateScoreboard(); // Add a function to update scoreboard
  if (score[playerName] >= 30) {
    alert(`Congrats ${playerName}, you have won !!!`);
    return;
  }
}

function updateScoreboard() {
  document.querySelector("#scoreOne").innerHTML = `Score : ${score[player1]}`;
  document.querySelector("#scoreTwo").innerHTML = `Score : ${score[player2]}`;
  document.querySelector("#scoreThree").innerHTML = `Score : ${score[player3]}`;
}

// Reset the game
function resetGame() {
  score[player1] = 0;
  score[player2] = 0;
  score[player3] = 0;
  document.querySelector("#img1").src = `./dice/dice1.png`;
  document.querySelector("#img2").src = `./dice/dice2.png`;
  document.querySelector("#img3").src = `./dice/dice3.png`;
  updateScoreboard();
}
