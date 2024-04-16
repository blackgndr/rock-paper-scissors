// Create getComputerChoice function that chooses between 3 choices
// Create playRound function that ask for player input
// Create conditional inside playRound function that says who wins and who loses
// playRound function returns winner or loser
// Create playGame function and nest playRound inside
// playGame loops playRound 5 times and each time console.logs the winner
// playGame console.logs the winner at the end of the 5 rounds

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

let playerSelection = prompt('Rock, Paper or Scissors?', '');

function playRound(playerSelection, computerChoice) {
    
    
    playerSelection = playerSelection.toLowerCase();
    if ((computerChoice === 'rock' && playerSelection === 'paper') ||
        (computerChoice === 'paper' && playerSelection === 'scissors') ||
        (computerChoice === 'scissors' && playerSelection === 'rock')) {
            return `You Won! ${playerSelection} beats ${computerChoice}`;
    } else if ((computerChoice === 'paper' && playerSelection === 'rock') ||
               (computerChoice === 'scissors' && playerSelection === 'paper') ||
               (computerChoice === 'rock' && playerSelection === 'scissors')) {
            return `You Lost! ${computerChoice} beats ${playerSelection}`;
    } else if ((computerChoice === 'rock' && playerSelection === 'rock') ||
               (computerChoice === 'paper' && playerSelection === 'paper') ||
               (computerChoice === 'scissors' && playerSelection === 'scissors')) {
            return 'Tied!';
    } else {
            return 'What?'
        }
};

let roundResult = playRound(playerSelection, computerChoice) 

function playGame() {
    let roundResult = [];
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors?');
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection, computerChoice);
        roundResult.push(result);
        console.log(result);
    }
    let youWon = roundResult.filter(result => result.includes('You Won!'));

    let youLost = roundResult.filter(result => result.includes('You Lost!'));

    let tied = roundResult.filter(result => result.includes('Tied!'));

    let invalidGame = roundResult.filter(result => result.includes('What?'));

    if (youWon > youLost) {
        console.log('You Won!');
    } else if (youLost > youWon) {
        console.log('You Lost!');
    } else if (invalidGame > youWon && invalidGame > youLost && invalidGame > tied) {
        console.log('Invalid Game!');
    } else {
        console.log('It\'s a Tie!');
    }

}

playGame();
