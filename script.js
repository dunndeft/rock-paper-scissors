const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
    console.log('Error! Please type: Rock, Paper, or Scissors.');
    }
};
  
// Test the function by calling it with valid and invalid input.
/*
console.log(getUserChoice('Paper'));
console.log(getUserChoice('fork'));
*/
  
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
  
// Should print 'rock', 'paper', or 'scissors'
// console.log(getComputerChoice());
  
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Draw. The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Paper covers rock. The computer won!';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Scissors cut paper. The computer won!';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Rock destroys scissors. The computer won!';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'bomb') {
        return 'Cheaters never prosper... but You won!';
    }
};
  
/*
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
*/
  
const playGame = () => {
    // Type 'rock', 'paper', 'scissors', or 'bomb'
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    // console.log(`You threw: ${userChoice}`);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
  
playGame();
