let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let isValid = true;


function computerSelection(){
    const selections = ["rock","paper","scissor"];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}

function compareSelections() {
    
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

function validatePlayerChoice(){

    if(isValid === true){
        playerChoice = prompt("Please Enter Your Choice - Rock, Paper or Scissor").toLowerCase();
    }else{
        playerChoice = prompt("Wrong Choice! Please Select Any of The Three - Rock, Paper or Scissor").toLowerCase();
    }

    if(playerChoice !== 'rock' && playerChoice !== 'scissor' && playerChoice !== 'paper') {
        isValid = false;
        return false;
    }else {    
        isValid = true;
        return true;
    }
}

function playRounds(){
    for (let i = 1; i <= 5; i++) {
        if(validatePlayerChoice()){
            console.log(compareSelections()); 
            if(i == 5){
                console.log(matchWinner());
            }
        }else{
            i--;
        }
    }
}

function matchWinner(){
    if(playerScore > computerScore){
        return `You Won! :), The Match With ${playerScore} Points` ;
    }else if(playerScore == computerScore){
        return `Match Tied! :), You Both Scored ${playerScore} Points` ;
    }else{
        return "You Lost! :( The Overall Match";
    }
}

console.log(playRounds());




