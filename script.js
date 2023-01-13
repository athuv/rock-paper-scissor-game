let playerChoice;
let computerChoice;
let playedRounds = 0;
let playerScore = 0;
let computerScore = 0;

function computerSelection(){
    const selections = ["rock","paper","scissor"];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}

function playRound() {
    
    playerChoice = prompt("Please Enter Your Choice (Rock, Paper or Scissor").toLowerCase();
    computerChoice = computerSelection();
    
    //Round ties
    if(playerChoice === computerChoice){
       return roundResult = `Tied ${playerChoice} - ${computerChoice}`;

       //Chances of player winning
    }else if(playerChoice === 'rock' && computerChoice === 'scissor' || 
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissor' && computerChoice === 'paper') {

        playerScore ++;
        return `You Won! Your Score: ${playerScore} You Chose: ${playerChoice} - Computer Chose: ${computerChoice} Computer Score: ${computerScore}`;

    }else{

        computerScore ++;
        return `You Lost! Your Score: ${playerScore} You Chose: ${playerChoice} - Computer Chose: ${computerChoice} Computer Score: ${computerScore}`;
    }
}

console.log(playRound());