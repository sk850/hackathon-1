// Roll a dice using the computer 

// Assign player names
let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
// Function allowing users to change their names
function editNames () {
    player1 = prompt("Change name for Player One");
    player2 = prompt("Change name for Player Two");
    player3 = prompt("Change name for Player Three");
// Assigning the new names
    document.querySelector("p.PlayerOne").innerHTML = player1;
    document.querySelector("p.PlayerTwo").innerHTML = player2;
    document.querySelector("p.PlayerThree").innerHTML = player3;
}

// Initialise scores for players
let score = {}
score[player1] = 0
score[player2] = 0
score[player3] = 0

const btnOne = document.querySelector("#btnOne")
const btnTwo = document.querySelector("#btnTwo")
const btnThree = document.querySelector("#btnThree")
btnOne.addEventListener("click", () => rollTheDice(player1))
btnTwo.addEventListener("click", () => rollTheDice(player2))
btnThree.addEventListener("click", () => rollTheDice (player3))

function rollTheDice(playerName){
    // Function to roll dice 
    const randomNumber = Math.floor(Math.random() * 6) + 1; 
    score[playerName] += randomNumber
    updateScoreboard() // add a function to update scoreboard
    if (score[playerName] >= 30){
        console.log(`Congrats ${playerName}, you have won!!!`)
        return;
    }
}

const scoreBoard = document.querySelector("#scoreBoard")
const scoreCard  = document.querySelectorAll("#scoreCard")
const scoreName = document.querySelectorAll(".scoreName")
    
function updateScoreboard() {
    document.querySelector("#[playerName").innerText = score[playerName];
}



// Reset the game
function resetGame () {
score[player1] = 0
score[player2] = 0
score[player3] = 0
    updateScoreboard(); 
};

