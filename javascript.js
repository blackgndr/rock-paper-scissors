// Create getComputerChoice function that chooses between 3 choices
// Create playRound function that ask for player input
// Create conditional inside playRound function that says who wins and who loses
// playRound function returns winner or loser
// Create playGame function and nest playRound inside
// playGame loops playRound 5 times and each time console.logs the winner
// playGame console.logs the winner at the end of the 5 rounds

const rockButton = document.querySelector('.rockButton');

const paperButton = document.querySelector('.paperButton');

const scissorsButton = document.querySelector('.scissorsButton');

const playerScoreDisplay = document.querySelector('.playerScore');

const computerScoreDisplay = document.querySelector('.computerScore');

const result = document.querySelector('#result');

const buttons = [rockButton, paperButton, scissorsButton];

let playerScore = 0;

let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = 'rock';
    } else if (computerChoice === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

let computerChoice = getComputerChoice(); 

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
               playerChoice === 'paper' && computerChoice === 'rock' ||
               playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++;
            return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
};

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let playerChoice;
        if (button === rockButton) {
            playerChoice = 'rock';
        } else if (button === paperButton) {
            playerChoice = 'paper';
        } else {
            playerChoice = 'scissors';
        }
        result.textContent = playRound(playerChoice, getComputerChoice());
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        gameOver();
    })
});

function gameOver() {
    let winner;
    if (playerScore === 5) {
        winner = result.textContent = 'You won motherfucker!'; 
    } else if (computerScore === 5) {
        winner = result.textContent = 'Computer won';
    }
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach(function(button) {
            button.disabled = true;
        });
        
        const newGameButton = document.createElement('button');
        newGameButton.textContent = 'New Game';
        newGameButton.addEventListener('click', resetGame);
        result.appendChild(newGameButton); 
    };
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    result.textContent = '';
    buttons.forEach(function(button) {
        button.disabled = false;
    });
    newGameButton.remove();
};


