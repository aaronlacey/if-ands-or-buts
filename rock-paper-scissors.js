const prompt = require('prompt-sync')({sigint: true});

let player1 = String(prompt("Pick Rock, Paper, or Scissors: "));

let player2 = String(prompt("Pick Rock, Paper, or Scissors: "));


if(player1 === "rock" && player2 === "scissors")
console.log("Player1 WINS!")

if(player1 === "paper" && player2 === "rock")
console.log("Player1 WINS!")

if(player1 === "scissors" && player2 === "paper")
console.log("Player1 WINS!")

if(player2 === "rock" && player1 === "scissors")
console.log("Player2 WINS!")

if(player2 === "paper" && player1 === "rock")
console.log("Player2 WINS!")

if(player2 === "scissors" && player1 === "paper")
console.log("Player2 WINS!")

if(player1 === "rock" && player2 === "scissors")
console.log("Player1 WINS!")

if(player1 === "paper" && player2 === "rock")
console.log("Player1 WINS!")

if(player1 === "scissors" && player2 === "paper")
console.log("Player1 WINS!")

if(player2 === "rock" && player1 === "rock")
console.log("Draw")

if(player2 === "paper" && player1 === "paper")
console.log("Draw")

if(player2 === "scissors" && player1 === "scissors")
console.log("Draw")

