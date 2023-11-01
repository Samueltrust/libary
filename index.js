let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let result = document.querySelector('.result');
let inputs = document.querySelector('.inputs');
let scores = document.querySelector('.scores');
let reset = document.querySelector('.reset');


let wins = 0;
let loss = 0;
let tie = 0;
let computerImage;
let userImage;
const Images = ['rock-emoji.png', 'paper-emoji.png', 'scissors-emoji.png']

rock.addEventListener('click', function() {
    let chosen = 'rock';
    calculation(chosen);   
});


paper.addEventListener('click', function() {
    let chosen = 'paper';
    calculation(chosen);
});


scissors.addEventListener('click', function() {
    let chosen = 'scissors';
    calculation(chosen);
});


reset.addEventListener('click', function(){
    resetScore();
});

window.onload = function () {
    if (localStorage.getItem('wins')) {
        wins = parseInt(localStorage.getItem('wins'));
        loss = parseInt(localStorage.getItem('loss'));
        tie = parseInt(localStorage.getItem('tie'));
        updateScore();
    }
};

function updateScore() {
    scores.textContent = `Wins: ${wins}, Losses: ${loss}, Ties: ${tie}`;
    localStorage.setItem('wins', wins);
    localStorage.setItem('loss', loss);
    localStorage.setItem('tie', tie);
}

function calculation(value) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove;


    if (randomNumber === 1) {
        computerMove = 'rock';
        computerImage = Images[0];
    } else if (randomNumber === 2) {
        computerMove = 'paper';
        computerImage = Images[1];
    } else if (randomNumber === 3) {
        computerMove = 'scissors';
        computerImage = Images [2];
    }
    

    if (value === 'rock') {
        userImage = Images[0];
    }

    if (value === 'paper') {
        userImage = Images[1];
    }

    if (value === 'scissors') {
        userImage = Images[2];
    }

    if (
       (computerMove === 'rock' && value === 'scissors') ||
       (computerMove === 'paper' && value === 'rock') || 
       (computerMove === 'scissors' && value === 'paper')
     ) {
        loss += 1;
        result.textContent = "You Lose.";
    } else if (
       (computerMove === 'rock' && value === 'paper') ||
       (computerMove === 'paper' && value === 'scissors') || 
       (computerMove === 'scissors' && value === 'rock') 
     ) {
        wins += 1;
        result.textContent = "You win.";
    } else {
        tie += 1;
        result.textContent = "Tie.";
        
    }

    inputs.innerHTML = `You <img src="${userImage}" alt="Your choice"> <img src="${computerImage}" alt="Computer choice"> Computer`;
    scores.textContent = `Wins: ${wins}, Losses: ${loss} Ties: ${tie}`;

    updateScore();
}

function resetScore() {
    wins = 0;
    loss = 0;
    tie = 0;

    updateScore();
    localStorage.removeItem('wins');
    localStorage.removeItem('loss');
    localStorage.removeItem('tie');


    result.textContent = "";
    inputs.textContent = "";
    scores.textContent = "";
}
