/*eslint-env browser*/

function getUserChoice() {
    "use strict";
    var userChoice = window.prompt("Choose rock, paper, or scissors:");
    switch (userChoice.toLowerCase()) {
    case "rock":
        userChoice = "rock";
        break;
    case "paper":
        userChoice = "paper";
        break;
    case "scissors":
    case "scissor":
        userChoice = "scissors";
        break;
    default:
        userChoice = null;
    }
    return userChoice;
}

do {
    var userChoice;
    var compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
    case 0:
        compChoice = "rock";
        break;
    case 1:
        compChoice = "paper";
        break;
    case 2:
        compChoice = "scissors";
        break;
    default:
        window.alert("ERROR: Computer chose " + compChoice);
    }
    
    while ((userChoice = getUserChoice()) === null) {
        window.alert("Invalid choice. Try again!");
    }
    
    if (userChoice === compChoice) {
        window.alert("Tie! You both chose " + userChoice + ". Try again!");
    }
} while (userChoice === compChoice);

var output = "You chose " + userChoice + ". " +
             "Computer chose " + compChoice + ". ";

if ((userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")) {
    output += "You win!";
} else {
    output += "You lose!";
}

window.alert(output);