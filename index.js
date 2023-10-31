let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let result = document.querySelector('.result');
let inputs = document.querySelector('.inputs');
let scores = document.querySelector('.scores');



let randomNumber = Math.floor(Math.random() * 3) + 1;
let computerMove;

if (randomNumber === 1) {
    computerMove = rock;
} else if (randomNumber === 2) {
    computerMove = paper;
} else if (randomNumber === 3) {
    computerMove = scissors
}

function calculation(value) {
    let wins = 0;
    let loss = 0;
    let tie = 0;

    if (computerMove === rock && value === rock || computerMove === paper && value === paper || computerMove === scissors && value === scissors) {
        tie += 1;
        result.textContent = "Tie.";
        inputs.textContent = `You ${value}  ${computerMove} Computer`;
        scores.textContent = `Wins: ${wins}, Losses: ${loss} Ties: ${tie}`;
    } 


    if (computerMove === rock && value === scissors || computerMove === paper && value === rock || computerMove === scissors && value === paper) {
        loss -= 1;
    } 
    
    
    if (computerMove === rock && value === paper || computerMove === paper && value === scissors || computerMove === scissors && value === rock) {
        wins += 1;
    }
}
